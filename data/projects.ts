// data/projects.ts

import { Project } from "@/types/project.type"

export const projects: Project[] = [
  {
    id: "1",
    slug: "learn-connect",
    title: "Learn & Connect",
    description:
      "A full-stack e-learning platform designed to help students learn and connect globally. Built with Next.js, TypeScript, and React, with a RESTful backend powered by Node.js, Express, and MongoDB.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    images: {
      desktop: "/projects/learn-connect-desktop.png",
      tablet: "/projects/learn-connect-tablet.png",
      mobile: "/projects/learn-connect-mobile.png",
    },
    liveUrl: "https://my-app-rose-six.vercel.app",
    githubUrl: "https://github.com/iblawal/Learn-Connect-App",
    status: "ongoing",
  },
  {
    id: "2",
    title: "ML Luxury",
    slug: "ml-luxury",
    description:
      "A modern e-commerce landing page for a luxury fashion brand featuring product categories, testimonials, cart functionality, and a streamlined checkout experience.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    images: {
      desktop: "/projects/ml-luxury-desktop.png",
      tablet: "/projects/ml-luxury-tablet.png",
      mobile: "/projects/ml-luxury-mobile.png",
    },
    liveUrl: "https://ml-luxury-l967.vercel.app",
    githubUrl: "https://github.com/iblawal/ML-Luxury",
    status: "completed",
  },
  {
    id: "3",
    slug: "eb-behavioral-health",
    title: "EB Behavioral Health",
    description:
      "Custom WordPress implementation including structured referral forms for adult and minor clients. Designed and developed tailored Review and Provider pages using custom HTML, CSS, and JavaScript.",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
    images: {
      desktop: "/projects/ebbehavioral-desktop.png",
      tablet: "/projects/ebbehavioral-tablet.png",
      mobile: "/projects/ebbehavioral-mobile.png",
    },
    liveUrl: "https://www.ebbehavioralhealth.com/",
    githubUrl:"#",
    status: "completed",
  },
  {
    id: "4",
    slug: "elegant-bee",
    title: "Elegant by Bee",
    description:
      "A full stack modern business website built with React, Typescript, Python and Django featuring services, testimonials, and payment integration.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Python", "Django", "Postgre SQL"],
    images: {
      desktop: "/projects/elegant-bee-desktop.png",
      tablet: "/projects/elegant-bee-tablet.png",
      mobile: "/projects/elegant-bee-mobile.png",
    },
    liveUrl: "https://elegantebybee-81.vercel.app",
    githubUrl: "https://github.com/iblawal/E-COMMERCE",
    status: "completed",
  },
  
  {
    id: "5",
    slug: "haven-adoption-center",
    title: "Haven Adoption Center",
    description:
    "Landing page built during a coding bootcamp where I guided students through designing and developing an animal adoption website, focusing on clean UI, accessibility, and real-world frontend practices.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: {
      desktop: "/projects/haven-adoption-desktop.png",
      tablet: "/projects/haven-adoption-tablet.png",
      mobile: "/projects/haven-adoption-mobile.png",
    },
    liveUrl: "https://heavenadoptioncenter.netlify.app/",
    githubUrl: "https://github.com/iblawal/Havenadoptionenter",
    status: "wip",
  },
]
