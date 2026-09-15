import {
  ShoppingCart,
  Globe2,
  Ship,
  Package,
  Wallet,
  ChartNoAxesCombined,
  Building2,
  CalendarDays,
  FileChartColumn,
  Cable,
  Layers3,
  Network,
} from "lucide-react";
export const solutions = [
  {
    id: "compras",
    name: "HiAtlas Compras",
    area: "Compras nacionais",
    icon: ShoppingCart,
    summary:
      "Da necessidade ao pedido. Mais contexto para comprar, mais controle para aprovar.",
    features: [
      "Solicitações e pedidos",
      "Fornecedores e cotações",
      "Mapa comparativo de propostas",
      "Aprovações e sugestão de compra",
      "Acompanhamento e histórico",
      "Indicadores de compras",
    ],
  },
  {
    id: "comex",
    name: "HiAtlas COMEX",
    area: "Compras internacionais",
    icon: Globe2,
    summary:
      "Conecte a negociação internacional aos próximos passos da operação.",
    features: [
      "Processos e fornecedores internacionais",
      "Proformas e pedidos internacionais",
      "Moedas e câmbio",
      "Acompanhamento de embarques",
      "Histórico e indicadores",
    ],
  },
  {
    id: "importacao",
    name: "HiAtlas Import",
    area: "Importações",
    icon: Ship,
    summary: "Visibilidade em cada etapa, do booking ao retorno do container.",
    features: [
      "Processos, containers, portos e navios",
      "Booking e transit time",
      "Previsão de chegada e chegada real",
      "Liberação aduaneira e acompanhamento de canal",
      "Inspeções, transporte e entrega",
      "Retorno de container e acompanhamento de custos",
    ],
  },
  {
    id: "estoque",
    name: "HiAtlas Stock",
    area: "Estoque",
    icon: Package,
    summary:
      "Entenda o que está disponível, o que está em excesso e o que precisa de atenção.",
    features: [
      "Produtos, famílias e categorias",
      "Depósitos, centros de distribuição e lojas",
      "Movimentações e histórico",
      "Saldo disponível e reservado",
      "Cobertura, excesso e ruptura",
    ],
  },
  {
    id: "unidades",
    name: "Lojas e centros de distribuição",
    area: "Unidades conectadas",
    icon: Building2,
    summary: "Uma visão consolidada, respeitando a realidade de cada unidade.",
    features: [
      "Estrutura por empresa",
      "Lojas Curitiba, São Paulo e Joinville",
      "Centros de distribuição Curitiba e São Paulo",
      "Consolidação de dados entre unidades",
    ],
  },
  {
    id: "financeiro",
    name: "HiAtlas Finance",
    area: "Financeiro operacional",
    icon: Wallet,
    summary:
      "Os valores ganham contexto quando estão conectados aos processos.",
    features: [
      "Adiantamentos, saldos e numerário",
      "Câmbio",
      "Valores previstos e realizados",
      "Custos e despesas vinculados aos processos",
    ],
  },
  {
    id: "analytics",
    name: "HiAtlas Analytics",
    area: "Inteligência e indicadores",
    icon: ChartNoAxesCombined,
    summary:
      "Transforme os movimentos da operação em indicadores que orientam decisões.",
    features: [
      "Dashboards de compras, estoque e COMEX",
      "Indicadores financeiros e logísticos",
      "Visões para gestão e diretoria",
      "Filtros por empresa, unidade e período",
      "Produto, família, comprador e fornecedor",
      "Processo e status",
    ],
  },
  {
    id: "executivo",
    name: "Dashboard executivo",
    area: "Direção para decidir",
    icon: Network,
    summary: "Entenda a situação da operação em poucos minutos.",
    features: [
      "Principais indicadores e tendências",
      "Riscos, oportunidades e desvios",
      "Custos, estoque e compras",
      "Importações e performance",
    ],
  },
  {
    id: "agenda",
    name: "Agenda operacional",
    area: "Prioridades no tempo certo",
    icon: CalendarDays,
    summary: "Centralize os eventos que fazem a operação avançar.",
    features: [
      "Chegada de navios e containers",
      "Vencimentos e pagamentos",
      "Inspeções e devoluções",
      "Entregas e reuniões",
      "Aprovações e tarefas",
    ],
  },
  {
    id: "relatorios",
    name: "Relatórios",
    area: "Análises sob perspectiva",
    icon: FileChartColumn,
    summary: "Do detalhe operacional à comparação gerencial.",
    features: [
      "Filtros e exportação",
      "Comparação de períodos",
      "Análise por unidade e comprador",
      "Análise por fornecedor e produto",
    ],
  },
  {
    id: "integracoes",
    name: "Integrações",
    area: "Informação sem fronteiras",
    icon: Cable,
    summary:
      "Aproveite as fontes que sua empresa já utiliza, inclusive durante a transição.",
    features: [
      "Excel e CSV",
      "APIs e ERPs",
      "Sistemas internos e bancos de dados",
      "Plataformas externas",
      "Planilhas como fonte de dados na implantação",
    ],
  },
  {
    id: "core",
    name: "HiAtlas Core",
    area: "Uma fundação compartilhada",
    icon: Layers3,
    summary: "A estrutura que conecta todos os módulos à mesma operação.",
    features: [
      "Empresas, usuários e autenticação",
      "Permissões, módulos e unidades",
      "Produtos e fornecedores",
      "Configurações e auditoria",
      "Integrações",
    ],
  },
];
export const homeModules = [
  {
    title: "Compras",
    text: "Planejamento, solicitações, fornecedores, cotações, pedidos e aprovações.",
    icon: ShoppingCart,
    id: "compras",
  },
  {
    title: "Supply Chain",
    text: "Visão integrada da cadeia de suprimentos e das necessidades da operação.",
    icon: Network,
    id: "analytics",
  },
  {
    title: "COMEX",
    text: "Compras internacionais e importação conectadas em uma mesma visão.",
    icon: Globe2,
    id: "comex",
  },
  {
    title: "Estoque",
    text: "Produtos, depósitos, lojas e centros de distribuição sob uma visão consolidada.",
    icon: Package,
    id: "estoque",
  },
  {
    title: "Financeiro",
    text: "Câmbio, adiantamentos e saldos com o contexto da operação.",
    icon: Wallet,
    id: "financeiro",
  },
  {
    title: "Analytics",
    text: "Indicadores objetivos para encontrar prioridades e tomar melhores decisões.",
    icon: ChartNoAxesCombined,
    id: "analytics",
  },
];
export const profiles = [
  ["Compradores", "Processos, atividades e decisões de compra da sua área."],
  ["Supply Chain", "Demanda, estoque e abastecimento em perspectiva."],
  ["COMEX", "Compras internacionais e importações acompanhadas por etapa."],
  ["Supervisores", "Equipes, pendências e prioridades no mesmo lugar."],
  ["Coordenadores", "Uma visão consolidada da operação."],
  ["Financeiro", "Informações financeiras conectadas aos processos."],
  ["Logística", "Movimentações, entregas e operações em acompanhamento."],
  ["Diretoria", "Dashboards executivos com informações estratégicas."],
];
export const integrations = [
  "Excel",
  "Planilhas",
  "APIs",
  "ERPs",
  "Bancos de dados",
  "Marketplaces",
  "Sistemas internos",
  "Fornecedores",
  "Transportadoras",
  "Serviços externos",
];
export const metadata: Record<string, { title: string; description: string }> =
  {
    "/": {
      title: "HiAtlas — Um novo horizonte para o seu negócio",
      description:
        "Organize a operação, conecte seus dados e transforme informação em decisão com a plataforma empresarial modular HiAtlas by HiGamer.",
    },
    "/hiatlas": {
      title: "O HiAtlas — Operação, pessoas e dados conectados",
      description:
        "Conheça a visão do HiAtlas: gestão de compras, Supply Chain, COMEX e controle de estoque em uma plataforma modular voltada à decisão.",
    },
    "/solucoes": {
      title: "Soluções HiAtlas — Compras, COMEX, Estoque e Analytics",
      description:
        "Explore o ecossistema HiAtlas para compras nacionais e internacionais, gestão de importação, financeiro operacional e dashboard executivo.",
    },
    "/contato": {
      title: "Contato — Conheça o HiAtlas by HiGamer",
      description:
        "Conte sobre sua operação e conheça as possibilidades do HiAtlas Plataforma e do HiAtlas Serviço Gerenciado.",
    },
  };
