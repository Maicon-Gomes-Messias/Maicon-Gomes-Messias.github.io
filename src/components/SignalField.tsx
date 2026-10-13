"use client";

import { useEffect, useRef } from "react";

/**
 * Campo de sinal.
 *
 * Desenha um mapa de calor de intensidade de Wi-Fi — a mesma leitura que
 * sustenta o TCC (análise espacial de ocupação por conexões Wi-Fi). Cada
 * ponto do mapa nasce da distância até pontos de acesso virtuais; o cursor
 * entra como uma fonte móvel, então o campo responde a quem visita.
 *
 * O movimento acontece em um único momento: a varredura de abertura.
 * Depois disso o desenho fica parado até que o cursor se mova.
 */

// Paleta espelhada nos tokens de globals.css.
const COOL: readonly [number, number, number] = [18, 160, 138]; // --color-signal-bright
const WARM: readonly [number, number, number] = [232, 135, 58]; // --color-heat-bright
const INK: readonly [number, number, number] = [16, 27, 25]; // --color-ink

type Point = { x: number; y: number; p: number; r: number };

// Posições fixas: o desenho é determinístico e não muda entre visitas.
const ACCESS_POINTS: Point[] = [
  { x: 0.16, y: 0.3, p: 1.0, r: 0.2 },
  { x: 0.6, y: 0.18, p: 0.82, r: 0.17 },
  { x: 0.86, y: 0.66, p: 1.0, r: 0.22 },
  { x: 0.42, y: 0.82, p: 0.72, r: 0.19 },
  { x: 0.05, y: 0.86, p: 0.6, r: 0.16 },
];

const CELL = 7; // resolução do campo, em px de CSS
const SCAN_MS = 1500;

function intensity(x: number, y: number, px: number, py: number, pointerOn: boolean) {
  let v = 0;
  for (const ap of ACCESS_POINTS) {
    const dx = x - ap.x;
    const dy = y - ap.y;
    v += ap.p * Math.exp(-(dx * dx + dy * dy) / (2 * ap.r * ap.r));
  }
  if (pointerOn) {
    const dx = x - px;
    const dy = y - py;
    v += 1.15 * Math.exp(-(dx * dx + dy * dy) / (2 * 0.17 * 0.17));
  }
  return 1 - Math.exp(-v * 1.45);
}

function mix(a: readonly [number, number, number], b: readonly [number, number, number], t: number) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ] as const;
}

const smooth = (t: number) => t * t * (3 - 2 * t);

export function SignalField({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const low = document.createElement("canvas");
    const lowCtx = low.getContext("2d");
    if (!lowCtx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;
    let raf = 0;

    const pointer = { x: 0.5, y: 0.5, on: false };

    function size() {
      const rect = wrap!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));

      cols = Math.max(2, Math.ceil(width / CELL));
      rows = Math.max(2, Math.ceil(height / CELL));

      low.width = cols;
      low.height = rows;

      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function paint(scan: number | null) {
      const image = lowCtx!.createImageData(cols, rows);
      const data = image.data;

      for (let j = 0; j < rows; j++) {
        const y = (j + 0.5) / rows;
        for (let i = 0; i < cols; i++) {
          const x = (i + 0.5) / cols;
          let v = intensity(x, y, pointer.x, pointer.y, pointer.on);

          if (scan !== null) {
            // Bordas suaves: a leitura aparece conforme a varredura avança.
            const edge = (scan - x) / 0.08;
            v *= smooth(Math.max(0, Math.min(1, edge)));
          }

          const alpha = Math.max(0, Math.min(1, (v - 0.07) / 0.42));
          const heat = Math.max(0, Math.min(1, (v - 0.4) / 0.5));
          const [r, g, b] = mix(COOL, WARM, heat);

          const k = (j * cols + i) * 4;
          data[k] = r;
          data[k + 1] = g;
          data[k + 2] = b;
          data[k + 3] = Math.round(alpha * 232);
        }
      }

      lowCtx!.putImageData(image, 0, 0);
      ctx!.clearRect(0, 0, width, height);
      ctx!.imageSmoothingEnabled = true;
      ctx!.imageSmoothingQuality = "high";
      ctx!.drawImage(low, 0, 0, width, height);

      // Marcas dos pontos de acesso: leitura de instrumento, sem ruído.
      ctx!.strokeStyle = `rgba(${INK[0]}, ${INK[1]}, ${INK[2]}, 0.5)`;
      ctx!.lineWidth = 1;
      for (const ap of ACCESS_POINTS) {
        const cx = ap.x * width;
        const cy = ap.y * height;
        ctx!.beginPath();
        ctx!.moveTo(cx - 3.5, cy);
        ctx!.lineTo(cx + 3.5, cy);
        ctx!.moveTo(cx, cy - 3.5);
        ctx!.lineTo(cx, cy + 3.5);
        ctx!.stroke();
      }
    }

    function resize() {
      size();
      paint(null);
    }

    function onPointerMove(event: PointerEvent) {
      const rect = wrap!.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width;
      pointer.y = (event.clientY - rect.top) / rect.height;
      pointer.on = true;
      schedule();
    }

    function onPointerLeave() {
      pointer.on = false;
      schedule();
    }

    function schedule() {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        paint(null);
      });
    }

    size();

    if (reduce) {
      paint(null);
    } else {
      // O único momento de movimento não provocado pelo usuário.
      let start = 0;
      const scan = (now: number) => {
        if (!start) start = now;
        const t = Math.min(1, (now - start) / SCAN_MS);
        paint(smooth(t));
        if (t < 1) raf = window.requestAnimationFrame(scan);
        else {
          raf = 0;
          paint(null);
        }
      };
      raf = window.requestAnimationFrame(scan);
    }

    const observer = new ResizeObserver(() => {
      if (raf) return;
      resize();
    });
    observer.observe(wrap);

    wrap.addEventListener("pointermove", onPointerMove, { passive: true });
    wrap.addEventListener("pointerleave", onPointerLeave);

    return () => {
      observer.disconnect();
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerleave", onPointerLeave);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
