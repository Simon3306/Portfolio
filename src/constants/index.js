import {
  machine,
  entrep,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  docker,

  carrent,
  jobit,
  tripguide,
  threejs,
  PowerPlatform,
  brain,
  vs,
  WebDev,
  CPA,
  C,
  Python,
  VBA,
  Fleur,
  Basket,
  Ville,
  powerpages,
  powerapps,
  powerautomate,
  dataverse,
  BI,
  FPQ,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Travail",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Exploitation Power Platform",
    icon: PowerPlatform,
  },
  {
    title: "Développement web et application",
    icon: WebDev,
  },
  {
    title: "Autonomne, curieux et créatif",
    icon: brain,
  },
  {
    title: "À l'aise avec plusieurs logiciels",
    icon: vs,
  },
];

const technologies = [
  {
    name: "C++",
    icon: C,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "VBA",
    icon: VBA,
  },
  
  {
    name: "Power Automate",
    icon: powerautomate,
  },
  {
    name: "Dataverse",
    icon: dataverse,
  },
  {
    name: "BI",
    icon: BI,
  },
  {
    name: "Power Apps",
    icon: powerapps,
  },
  {
    name: "Power Pages",
    icon: powerpages,
  },
  
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Stagiaire en génie informatique",
    company_name: "Centre de Production Automatisé",
    icon: CPA,
    iconBg: "#E6DEDD",
    date: "Mai 2024 - Actuel",
    points: [
      "Création d’applications et sites Web.",
      "Traitement de données et travaux sur les bases de données.",
      "Migration de logiciels tels que ControlLogix.",
      "Exploitation de Microsoft Power Platform.",
    ],
  },
  {
    title: "Employé général",
    company_name: "CIUSS du Saguenay-Lac-Saint-Jean",
    icon: Fleur,
    iconBg: "#1b6a79",
    date: "Janvier 2021 - Octobre 2024",
    points: [
      "Préposé(e) au service alimentaire.",
      "Surveillance en CHSLD et Centre hospitalier.",
      "Préposé(e) à l'hygiène et salubrité.",
      "Préposé(e) à l’accueil .",
      "Préposé(e) à la buanderie.",
      "Aide de service à l’urgence.",
    ],
  },
  {
    title: "Coach Sportif",
    company_name: "Club de Basketball de Chicoutimi",
    icon: Basket,
    iconBg: "#000000",
    date: "Octobre 2022 - Mai 2024",
    points: [
      "Encadrement des jeunes d’une équipe de basketball.",
      "Gestion des tournois à l’externe et à l’interne.",
    ],
  },
  {
    title: "Animateur de camp de jour",
    company_name: "Ville de Saguenay",
    icon: Ville,
    iconBg: "#fafafa",
    date: "Juillet 2020 - Août 202",
    points: [
      "Élaboration d’un programme d’activités adaptées à l’âge et aux besoins des enfants en collaboration avec l’équipe danimation.",
      "Prise en charge d'un groupe de 10 à 20 enfants âgés de 7 et 8 ans.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Machine 2024",
    description:
      "Développement et programmation de la machine des jeux de génie 2024 lors de ma première année d'étude",
    tags: [
      {
        name: "machine",
        color: "blue-text-gradient",
      },
      {
        name: "esp32",
        color: "green-text-gradient",
      },
      {
        name: "arduino",
        color: "pink-text-gradient",
      },
    ],
    image: machine,
  },
  {
    name: "Application Scanner",
    description:
      "Développement d'une application scanner adaptée aux besoins de l'équipe d'entreprenariat desjeux de génie 2025 ",
    tags: [
      {
        name: "Développement",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
  
    ],
    image: entrep,
  },
  {
    name: "Site Web",
    description:
      "Création d'un site web pour répondre aux demandes d'un client. Création du backend et front-end.",
    tags: [
      {
        name: "full-stack",
        color: "blue-text-gradient",
      },
      {
        name: "power pages",
        color: "green-text-gradient",
      },
    ],
    image: FPQ,
  },
];

export { services, technologies, experiences, testimonials, projects };
