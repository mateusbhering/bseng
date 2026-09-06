import {
  Building2,
  DraftingCompass,
  Layers,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";

export const contact = {
  phoneDisplay: "(31) 3225-8276",
  phoneHref: "tel:+553132258276",
  email: "beltraosantoseng@gmail.com",
  emailHref: "mailto:beltraosantoseng@gmail.com",
  city: "Belo Horizonte, MG",
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Empresa", href: "#empresa" },
  { label: "Serviços", href: "#servicos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export type Principle = {
  number: string;
  title: string;
  description: string;
};

export const principles: Principle[] = [
  {
    number: "01",
    title: "Segurança",
    description:
      "Projetos desenvolvidos com análises rigorosas e atenção às normas técnicas aplicáveis.",
  },
  {
    number: "02",
    title: "Eficiência",
    description:
      "Soluções estruturais pensadas para equilibrar desempenho técnico e racionalização de recursos.",
  },
  {
    number: "03",
    title: "Experiência",
    description:
      "Mais de três décadas de atuação em diferentes tipologias e desafios estruturais.",
  },
  {
    number: "04",
    title: "Parceria",
    description:
      "Trabalho integrado com arquitetos, construtores e demais profissionais envolvidos no projeto.",
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Projetos estruturais",
    description:
      "Desenvolvemos projetos de estruturas em concreto armado para obras residenciais, comerciais, institucionais e industriais, buscando segurança, eficiência e economia.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Projetos de fundação e contenção",
    description:
      "Elaboramos projetos para fundações rasas e profundas, além de soluções de contenção em concreto armado.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Laudos técnicos e reforços estruturais",
    description:
      "Realizamos avaliações detalhadas de estruturas existentes, elaboramos laudos técnicos e desenvolvemos soluções de reforço estrutural quando necessário.",
    icon: ScanSearch,
  },
  {
    number: "04",
    title: "Consultoria em engenharia estrutural",
    description:
      "Oferecemos suporte técnico especializado para projetos complexos e desafios estruturais, auxiliando também profissionais de arquitetura durante o desenvolvimento de seus projetos.",
    icon: DraftingCompass,
  },
];

export type ProjectType = {
  title: string;
  image: string;
  alt: string;
};

export const projectTypes: ProjectType[] = [
  {
    title: "Residencial",
    image: "/images/concrete-building.svg",
    alt: "Ilustração de edifício residencial em concreto",
  },
  {
    title: "Comercial",
    image: "/images/architecture-01.svg",
    alt: "Ilustração de edifício comercial contemporâneo",
  },
  {
    title: "Institucional",
    image: "/images/architecture-02.svg",
    alt: "Ilustração de edificação institucional com grandes vãos",
  },
  {
    title: "Industrial",
    image: "/images/structure-detail.svg",
    alt: "Ilustração de estrutura industrial em concreto armado",
  },
  {
    title: "Arquitetura complexa",
    image: "/images/span-structure.svg",
    alt: "Ilustração de estrutura de geometria complexa",
  },
  {
    title: "Reforço de estruturas existentes",
    image: "/images/grid-structure.svg",
    alt: "Ilustração de malha estrutural de edificação existente",
  },
];

export type GalleryItem = {
  image: string;
  alt: string;
  label: string;
};

export const galleryItems: GalleryItem[] = [
  {
    image: "/images/architecture-01.svg",
    alt: "Estrutura de edifício em concreto aparente",
    label: "ESTRUTURAS",
  },
  {
    image: "/images/structure-detail.svg",
    alt: "Detalhe de pilar e viga em concreto armado",
    label: "CONCRETO ARMADO",
  },
  {
    image: "/images/grid-structure.svg",
    alt: "Malha de fundações de uma edificação",
    label: "FUNDAÇÕES",
  },
  {
    image: "/images/span-structure.svg",
    alt: "Estrutura de grande vão em concreto",
    label: "ENGENHARIA",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Entendimento",
    description:
      "Analisamos as características do projeto, arquitetura e necessidades da obra.",
  },
  {
    number: "02",
    title: "Concepção estrutural",
    description:
      "Definimos o sistema estrutural mais adequado considerando desempenho, execução e economia.",
  },
  {
    number: "03",
    title: "Dimensionamento",
    description:
      "Realizamos análises e dimensionamentos seguindo critérios técnicos e normas aplicáveis.",
  },
  {
    number: "04",
    title: "Detalhamento",
    description:
      "Entregamos documentação técnica clara para orientar a execução da estrutura.",
  },
];
