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

export type Project = {
  title: string;
  subtitle: string;
  context: string;
  /** Ano de destaque, quando informado no currículo. */
  year?: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Análise espacial de ocupação em espaços controlados por meio de conexões Wi-Fi",
    subtitle: "Trabalho de Conclusão de Curso",
    context: "Engenharia de Computação, PUC Minas",
    summary:
      "Um sistema de monitoramento de ocupação que parte da análise dos pacotes de Wi-Fi já presentes no ambiente, capturados por roteadores com OpenWRT. Com aprendizado de máquina, o sistema estima a presença de pessoas e, com visualização geográfica, transforma esse número em mapas de calor legíveis.",
    points: [
      "Captura e análise de tráfego de rede com PyShark",
      "Aprendizado de máquina aplicado à estimativa de ocupação",
      "Mapas de calor para leitura espacial do ambiente",
      "Baixo custo de implantação e conformidade com a LGPD",
      "Aplicação viável em contextos corporativos e acadêmicos",
    ],
    stack: ["OpenWRT", "PyShark", "Python", "Machine Learning", "LGPD"],
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
