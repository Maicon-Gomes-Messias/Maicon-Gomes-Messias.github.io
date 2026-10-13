import { ImageResponse } from "next/og";
import { ogImage, site } from "@/lib/site";

export const ogContentType = "image/png";

const COOL = [18, 160, 138] as const;
const WARM = [232, 135, 58] as const;

const POINTS = [
  { x: 0.16, y: 0.3, p: 1.0, r: 0.2 },
  { x: 0.6, y: 0.18, p: 0.82, r: 0.17 },
  { x: 0.86, y: 0.66, p: 1.0, r: 0.22 },
  { x: 0.42, y: 0.82, p: 0.72, r: 0.19 },
  { x: 0.05, y: 0.86, p: 0.6, r: 0.16 },
];

/** Mesmo campo de sinal do hero, reduzido a uma grade de quadrados. */
function cells(cols: number, rows: number) {
  const out: { key: string; color: string; opacity: number }[] = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const x = (i + 0.5) / cols;
      const y = (j + 0.5) / rows;
      let v = 0;
      for (const ap of POINTS) {
        const dx = x - ap.x;
        const dy = y - ap.y;
        v += ap.p * Math.exp(-(dx * dx + dy * dy) / (2 * ap.r * ap.r));
      }
      v = 1 - Math.exp(-v * 1.45);
      const opacity = Math.max(0, Math.min(1, (v - 0.07) / 0.42));
      const heat = Math.max(0, Math.min(1, (v - 0.4) / 0.5));
      const rgb = COOL.map((c, index) => Math.round(c + ((WARM[index] ?? 0) - c) * heat));
      out.push({
        key: `${i}-${j}`,
        color: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
        opacity: Number(opacity.toFixed(3)),
      });
    }
  }
  return out;
}

export function renderOgImage() {
  const grid = cells(14, 7);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f1f2ed",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          color: "#101b19",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 46, height: 3, backgroundColor: "#12a08a" }} />
          <div style={{ fontSize: 26, color: "#46534f" }}>
            Suporte técnico e infraestrutura de TI
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 620 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 86,
                lineHeight: 1.02,
                letterSpacing: -3,
                fontWeight: 700,
              }}
            >
              <div>Maicon Gomes</div>
              <div>Messias</div>
            </div>
            <div style={{ fontSize: 27, color: "#46534f" }}>
              Infraestrutura, redes e suporte técnico na PUC Minas
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {Array.from({ length: 7 }).map((_, row) => (
              <div key={row} style={{ display: "flex", gap: 6 }}>
                {grid.slice(row * 14, row * 14 + 14).map((cell) => (
                  <div
                    key={cell.key}
                    style={{
                      width: 26,
                      height: 26,
                      backgroundColor: cell.color,
                      opacity: cell.opacity,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#78837b" }}>
          <div>{site.email}</div>
          <div>{`${site.location.locality}, ${site.location.regionName}`}</div>
        </div>
      </div>
    ),
    {
      width: ogImage.width,
      height: ogImage.height,
    },
  );
}