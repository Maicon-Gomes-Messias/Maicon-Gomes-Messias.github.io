/**
 * Fonte única de conteúdo do site.
 * Edite aqui para atualizar textos, cargos, projetos e certificados.
 */

export const intro = {
  headline: "Maicon Gomes Messias",
  lead: "Bacharel em Engenharia de Computação pela PUC Minas, atuo na área de Tecnologia da Informação desde 2023. Hoje, na PUC Minas, cuido do suporte técnico a usuários, da manutenção de sistemas e equipamentos e da estabilidade da infraestrutura de rede — trabalho em que a diferença costuma estar no diagnóstico rápido e no atendimento que resolve de verdade.",
} as const;

export const facts = [
  { label: "Formação", value: "Engenharia de Computação, PUC Minas" },
  { label: "Área", value: "Suporte técnico e infraestrutura de TI" },
  { label: "Atuação", value: "Na PUC Minas desde 2023" },
  { label: "Localização", value: "Betim, Minas Gerais — Brasil" },
] as const;

export type Experience = {
  company: string;
  companyFull: string;
  role: string;
  startYear: string;
  period: string;
  current?: boolean;
  summary: string;
};

export const experiences: Experience[] = [
  {
    company: "PUC Minas",
    companyFull: "Pontifícia Universidade Católica de Minas Gerais",
    role: "Técnico de TI Nível I",
    startYear: "2023",
    period: "mar. 2023 — atual",
    current: true,
    summary:
      "Presto suporte técnico a usuários e diagnostico falhas de hardware, software e rede. Instalo, configuro e atualizo sistemas operacionais e aplicativos corporativos, faço manutenção preventiva e corretiva de equipamentos e periféricos. Apoio a administração da infraestrutura de TI — disponibilidade, políticas de segurança e controle de acesso — e registro e acompanho os chamados até a resolução.",
  },
  {
    company: "PUC Minas",
    companyFull: "Pontifícia Universidade Católica de Minas Gerais",
    role: "Auxiliar de serviços administrativos",
    startYear: "2019",
    period: "abr. 2019 — mar. 2023",
    summary:
      "Apoiei a secretaria acadêmica na impressão e organização de provas e no atendimento a alunos e professores. Fui responsável pelo gerenciamento das folhas de ponto dos docentes e pelo controle do estoque de materiais administrativos.",
  },
  {
    company: "AeC Contact Center",
    companyFull: "AeC Contact Center",
    role: "Atendente",
    startYear: "2017",
    period: "jan. 2017 — mar. 2019",
    summary:
      "Atendi ligações, identifiquei demandas e resolvi solicitações e dúvidas seguindo roteiros operacionais. Atuei também em ações de captação, recuperação e retenção de clientes.",
  },
];

export type Publication = {
  /** Veículo: revista, evento ou repositório. */
  venue: string;
  /** Volume, número, páginas, data e ISSN. */
  detail: string;
  /** Coautoria, na ordem do artigo. */
  authors: string[];
  /** Repositório público do código. */
  repository: string;
  /** Caminho do PDF para download. */
  pdf: string;
};

export type Project = {
  title: string;
  subtitle: string;
  context: string;
  /** Ano de destaque, quando informado no currículo. */
  year?: string;
  summary: string;
  points: string[];
  stack: string[];
  /** Presente quando o projeto virou publicação. */
  publication?: Publication;
};

export const projects: Project[] = [
  {
    title: "Análise espacial de ocupação em espaços controlados por meio de conexões Wi-Fi",
    subtitle: "Trabalho de Conclusão de Curso — artigo publicado",
    context: "Engenharia de Computação, PUC Minas · Revista Abakós, 2025",
    year: "2025",
    summary:
      "Um sistema de monitoramento de ocupação que parte dos pacotes de Wi-Fi já presentes no ambiente. Um roteador TP-Link Archer C20 em modo monitor, sob OpenWRT, escuta beacon frames, probe requests e probe responses; o RSSI é extraído com PyShark e uma rede neural densa estima a zona ocupada. O resultado é um mapa de calor sobre a planta baixa vetorizada, com anonimização dos dados conforme a LGPD.",
    points: [
      "Coleta passiva de pacotes 802.11 em modo monitor, com roteador de baixo custo",
      "Extração de MAC de origem e RSSI com PyShark, Python, Pandas e NumPy",
      "Rede neural densa (feed-forward) em TensorFlow para classificar a zona de cada registro",
      "Mapas de calor sobre planta baixa vetorizada, com suavização gaussiana e colormap coolwarm",
      "Anonimização e minimização de dados em conformidade com a LGPD",
      "Experimento com 1 e 5 minutos de coleta: a janela maior trouxe mais densidade e precisão",
    ],
    stack: ["OpenWRT", "PyShark", "Python", "Pandas", "TensorFlow", "scikit-learn", "Matplotlib", "OpenCV"],
    publication: {
      venue: "Revista Abakós — PUC Minas",
      detail: "v. 1, n. 1, p. 01-17 · jun. 2025 · ISSN 2316-9451",
      authors: [
        "Ana Maria Ribeiro Rafael",
        "Arthur Silva Carvalho",
        "João Pedro Moura de Assis Filho",
        "Maicon Gomes Messias",
        "Gabriel Barbosa da Fonseca",
        "Marta Dias Moreira Noronha",
      ],
      repository: "https://github.com/ICEI-PUC-Minas-EC-TCC/pmg-ec-2025-1-tcc2-mapa-de-calor",
      pdf: "/artigo-analise-espacial-ocupacao-wifi-abakos-2025.pdf",
    },
  },
  {
    title: "Óculos inteligentes para pessoas com deficiência auditiva",
    subtitle: "Protótipo de acessibilidade",
    context: "Microsoft Imagine Cup 2023",
    year: "2023",
    summary:
      "Protótipo de óculos inteligentes que traduz fala em texto em tempo real. O sistema reúne captação de som, processamento por inteligência artificial e exibição de legendas no visor, para que a conversa não dependa de intermediários.",
    points: [
      "Captação de som integrada ao processamento por IA",
      "Legendas exibidas em tempo real no visor",
      "Reconhecido pela Microsoft Imagine Cup 2023",
      "Finalista nacional no Brasil e finalista mundial das Américas",
    ],
    stack: ["IA", "Processamento de áudio", "Hardware embarcado", "Acessibilidade"],
  },
];

export type Capability = { title: string; body: string; tools?: string[] };

export const capabilities: Capability[] = [
  {
    title: "Infraestrutura e nuvem",
    body: "Administro ambientes Windows, configuro redes e apoio a implementação de políticas de segurança da informação e controle de acesso.",
    tools: ["AWS", "Windows", "Redes", "Segurança da informação"],
  },
  {
    title: "Desenvolvimento, dados e IA",
    body: "Programo em Python para análise de dados e machine learning, incluindo leitura de tráfego de rede, e mantenho os projetos versionados.",
    tools: ["Python", "Pandas", "TensorFlow", "PyShark", "Git"],
  },
  {
    title: "IoT e automação",
    body: "Desenvolvo soluções de Internet das Coisas que integram hardware e software, com prática em microcontroladores e redes sem fio.",
    tools: ["ESP32", "Redes sem fio", "Sensores"],
  },
  {
    title: "Suporte técnico e hardware",
    body: "Faço manutenção de ambientes computacionais e diagnóstico avançado, com reparo de computadores e periféricos para sustentar a disponibilidade dos sistemas.",
    tools: ["Manutenção preventiva", "Diagnóstico", "Periféricos"],
  },
];

export const softSkills = {
  title: "Competências comportamentais",
  body: "Pensamento crítico para resolver problemas complexos e organização para gerenciar demandas técnicas, com foco na eficiência e na qualidade do atendimento a quem depende do sistema funcionando.",
} as const;

export type Education = { institution: string; course: string; period: string; status: string };

export const education: Education[] = [
  {
    institution: "PUC Minas",
    course: "Bacharelado em Engenharia de Computação",
    period: "2020 — 2026",
    status: "Concluído",
  },
  {
    institution: "Colégio Salesiano Minas Gerais",
    course: "Ensino Médio",
    period: "2015",
    status: "Concluído",
  },
];

export type Credential = { issuer: string; title: string; date: string; dateTime: string };

export const certifications: Credential[] = [
  {
    issuer: "Amazon Web Services",
    title: "AWS Academy Graduate — AWS Academy Cloud Foundations",
    date: "out. 2023",
    dateTime: "2023-10",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Cybersecurity Essentials",
    date: "jul. 2023",
    dateTime: "2023-07",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Introduction to Cybersecurity",
    date: "out. 2023",
    dateTime: "2023-10",
  },
  {
    issuer: "Microsoft",
    title: "Imagine Cup — Final Nacional do Brasil",
    date: "fev. 2023",
    dateTime: "2023-02",
  },
  {
    issuer: "Microsoft",
    title: "Imagine Cup — Finalista Mundial das Américas",
    date: "fev. 2023",
    dateTime: "2023-02",
  },
  {
    issuer: "PUC Minas",
    title: "Monitoria em IoT (Internet das Coisas) — Engenharia de Computação",
    date: "out. 2021",
    dateTime: "2021-10",
  },
];

export type Award = { title: string; meta: string };

export const awards: Award[] = [
  {
    title: "Prêmio de Destaque em Inovação — ICEI PUC Minas",
    meta: "2023 e 2024",
  },
  {
    title: "Trabalho Destaque em Projeto Integrado de Software e Hardware",
    meta: "PUC Minas",
  },
];
