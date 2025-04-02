import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate Software Engineer with a knack for crafting robust and scalable applications. With 4 years of hands-on experience, I have honed my skills in front-end technologies like React and Tailwind, as well as back-end technologies like Node.js, MySQL, PostgreSQL, MongoDB, Python-[Django, Flask] and Docker. And additioally can do the IT operations/DevOps, too. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences with efficient backend servers.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software Engineer with a passion for creating efficient and user-friendly web applications and softwares. With 4 years of professional experience, I have worked with a variety of technologies, including React, Tailwind, Node.js, MySQL, PostgreSQL, MongoDB Python-[Django, Flask] and Docker. And additioally can do the IT operations/DevOps, too. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2020 - 2021",
    role: "Junior Full Stack Developer",
    company: "Freelance (volunteer)",
    description: `developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with team to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "mongoDB", "Node.js"],
  },
  {
    year: "2021 - 2023",
    role: "Full Stack Developer",
    company: "OIF Management",
    description: `Assisted in the development of a React-based web apps, contributing to the enhancements of its front-end functionalities. Collaborated with senior developers to implement responsive designs and optimize application performance. Conducted bug fixes and troubleshooting to ensure a smooth user experiance. Participated in sprint planning and stand-up meetings to coordinate tasks and ensure project milestones were met.`,
    technologies: ["Javascript(React, React-Native)", "Tailwind"],
  },
  {
    year: "2023 - February 2025",
    role: "Backend Engineer Intern",
    company: "OIF Management",
    description: `Contributed on building and maintaining web app using Django framework and Python code ensuring application functions efficiently. Designed, managed and optimized databases with PostgreSQL with collaboration with senior developers and integrated front-end with server-side`,
    technologies: ["Python", "Django", "PostgreSQL"],
  },
];

export const PROJECTS = [
  {
    title: "Company Webapp",
    image: project1,
    description:
      "A fully functional company website with many features and great user experiance.",
    technologies: ["HTML", "bootstrap", "React", "Node.js", "ExpressJS", "MongoDB"],
  },
  {
    title: "Inventory Management Webapp",
    image: project2,
    description:
      "An application for managing inventory and items, with features such as inventory and category creation and item assignment.",
    technologies: ["HTML", "CSS", "React", "Django", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind", "React", "Framer-motion"],
  },
  {
    title: "Content generator",
    image: project4,
    description:
      "A platform that generates content using AI models and Twitter API for account functionalities. Lets you choose accounts that you want to follow up with and creates content based on posts from the accounts in whatever timeline its given for post access(weekly, monthly). i,e- still in development",
    technologies: ["HTML", "CSS", "Python", "Tweepy", "pyTorch"],
  },
];

export const CONTACT = {
  address: "5155 W Tropicana avenue ",
  phoneNo: "+1 702-613-9457 ",
  email: "robelambachew9@gmail.com",
};
