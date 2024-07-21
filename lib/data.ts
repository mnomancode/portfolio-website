import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import enjoytelevisionImg from "@/public/enjoytelevision.png";
import digitalcashImg from "@/public/digitalcash.png";
import handymanImg from "@/public/handyman.png";
import lightspeedliftImg from "@/public/lightspeedlift.png";
import yokuImg from "@/public/yoku.png";
import fezaappImg from "@/public/fezaapp.png";
import { FiverIcon, UpworkIcon, XgridIcon } from "@/components/icons";
// import fezaappImg from "@/public/fezaapp.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering ",
    location: "UET Taxila",
    description:
      "I graduated with a degree in Software Engineering. I learned the basics of programming, algorithms, data structures, databases, and software engineering principles.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Fiver Freelancer",
    location: "Islamabad, Pakistan",
    description:
      "I started my career as a freelancer on Fiverr. I worked on various projects, including web development, mobile app development, and automation scripts.",
    icon: React.createElement(FiverIcon),
    date: "2020 - 2021",
  },
  {
    title: "Software Engineer",
    location: "Xgrid Inc. Islamabad, Pakistan",
    description:
      "I worked as a software engineer at Xgrid Inc. I developed mobile applications using Flutter and React Native. I also worked on backend development using Node.js, AWS, CI/CD, lambda functions, and serverless architecture.",
    icon: React.createElement(XgridIcon),
    date: "2021 - 2023",
  },  {
    title: "Experienced Software Engineer",
    location: "Upwork ",
    description:
      "I am working as a software engineer at Upwork. I developed mobile applications using Flutter and React Native. I am offering my services to clients all over the world and providing them with high-quality software solutions.",
    icon: React.createElement ( UpworkIcon),
    date: "2024 - Present",
  },

] as const;

export const projectsData = [
  
  {
    title: "Digital Cash by Neosurf",
    description:
      "Seamless Transactions for Gamers | Effortlessly manage and convert your cash into digital currencies for all your gaming needs.",
    tags: ["Flutter", "REST APIs", "Payment Integration", "AWS"],
    imageUrl: digitalcashImg,
  },{
    title: "Enjoy Television",
    description:
      "A Movie and TV show tracker. It has features like searching, filtering, sorting and pagination for movies and TV shows.",
      
      
    tags: ["Flutter", "Wordpress", "FluidStream", "Firebase", "Firebase Notification"],
    imageUrl: enjoytelevisionImg,
  },
  {
    title: "Chamo’s Handyman app",
    description:
      "A versatile platform designed to streamline the process of booking and managing home maintenance and repair services. Built using the Flutter framework, this app offers a seamless experience for users across iOS and Android devices.",
    tags: ["Flutter", "Firebase", ,"Google Maps", "Wordpress","Stripe" ,"FCM"],
    imageUrl: handymanImg,
  },{
    title: "YOKU - Quit Vaping Tracker",
    description:
      "An app designed to assist individuals in quitting smoking and managing nicotine consumption. The app offers a range of features, including tracking daily nicotine intake, setting goals, and monitoring progress.",
    tags: ["Hybrid mobile app", "SQL", "Local Storage", "NOtifications", "Graphs"],
    imageUrl: yokuImg,
  },{
    title: "Ventigo - Salon Management",
    description:
      "A comprehensive salon management app designed to streamline the process of managing appointments, tracking customer data, and monitoring sales. The app offers a range of features, including appointment scheduling, customer profiles, and sales reports.",
    tags: ["Flutter", "Local Storage","auth", "Drift","SQLite"],
    imageUrl: yokuImg,
  },{
    title: "FEZA - Online Shopping",
    description:
      "The perfect online marketplace to buy and sell. Here you’ll find a wide selection of new and used products, including vintage clothes, antique furniture, used books, retro games, electronics, pre-owned cars, and studios for rent. Also, an extensive listing of services and jobs. It’s safe and easy.",
    tags: ["Flutter", "Local Storage","auth", "Drift","SQLite"],
    imageUrl: fezaappImg,
  },{
    title: "LightSpeed Lift encounter your body weight",
    description:
      "LightSpeed Lift is a fitness app that helps users track their body weight and monitor their progress over time. The app offers a range of features, including tracking daily weight, setting goals, and monitoring progress.",
    tags: ["Flutter",  "Google Fit","SQLite","Calculus"],
    imageUrl: lightspeedliftImg,
  },
] as const;

export const skillsData = [
"Flutter",
  "Dart",
  "Firebase",
  "RESTful APIs",
  "GraphQL",
  "Provider",
  "Riverpod",
  "BLoC",
  "SQLite",
  "Hive",
  "Realm",
  "Firebase Cloud Functions",
  "Node.js",
  "Express",
  "GraphQL APIs",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "OAuth",
  "JWT",
  "CI/CD",
  "Docker",
  "AWS",
  "Azure",
  "Firebase Authentication",
  "Firebase Firestore",
  "Firebase Realtime Database",
  "Firebase Cloud Messaging",
  "Firebase Analytics",
  "Redux",
  "RESTful API Integration",
  "Serverless Architecture",
  "Backend as a Service (BaaS)",
  "Payment Gateways Integration",
  "WebSockets",
] as const;
