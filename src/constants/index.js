import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Rajalakshmi Institute of Technology",
    company_name: "BE CSE",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2020 - April 2024",
    points: [
      "CGPA : 8.4",
    ],
  },
  {
    title: "Prince Matric Higher Secondary School",
    company_name: "HSC",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2018 - Apr 2020",
    points: [
     "Percentage : 76",
    ],
  },
  {
    title: "Himayam Matric Higher Secondary School",
    company_name: "SSLC",
    icon: meta,
    iconBg: "#383E56",
    date: "mar 2017 - Jan 2019",
    points: [
      "Percentage : 88.25",
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
    name: "3D Portfolio",
    description:
      "Software Developer Portfolio Template built with Three.js and tailwindcss that helps you showcase your work and skills as a software developer.",
    tags: [
      {
        name: "Three js",
        color: "blue-text-gradient",
      },
      
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  
  },

  {
    name: "UI/UX Design for Mobile APP",
    description:
      "A frontend design for Daily tasks app using figma.",
    tags:[
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://www.figma.com/file/bEIOdQSrh5oFj1mZxvuBu8/Taskify?type=design&node-id=0%3A1&mode=design&t=PVpFtBLU2z7qi6ih-1",
  },
  
  {
    name: "Hari Store (Ecommerce) ",
    description:
      'Now your reach to all your favorite entertainment and luxury items is just one touch apart.',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     
    ],
    image: jobit,
    source_code_link: "https://hariecom.vercel.app/",
  },

  
  
];








export { services, technologies, experiences, testimonials, projects };
