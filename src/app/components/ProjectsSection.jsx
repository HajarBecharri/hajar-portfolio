"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsDataa = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "Created an e-commerce website using Symfony for the backend, Bootstrap for the frontend, and MySQL for database management, enabling users to browse and purchase products online.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    
  },
  {
    id: 2,
    title: "Site Web Freelance",
    description: "Built a freelance website using Angular, Angular Material, Node.js, Express, and MongoDB, providing a platform for freelancers and clients to connect and collaborate.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HajarBecharri/Angular-Freelance-site",
   
  },
  {
    id: 3,
    title: "Java Application for Domineering Game",
    description: "Developed a Java application for playing the Domineering game, providing a user-friendly interface and robust gameplay functionalities.",
    image: "/images/projects/8.png",
    tag: ["All", "AI"],
    gitUrl: "/",
    
  },
  {
    id: 4,
    title: "Automated Parking Management",
    description: "Designed and implemented an automated parking management system using Arduino and Raspberry Pi for hardware integration, Flask for the backend, and MySQL for data storage.",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
   
  },
  {
    id: 5,
    title: "Oracle SQL Query Optimization Application",
    description: "Developed an application to optimize SQL queries specifically for Oracle databases, utilizing machine learning algorithms to save resources and time during database operations.",
    image: "/images/projects/4.jpg",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/HajarBecharri/query-optimizer",
    
  },
  {
    id: 6,
    title: "Backend Development for Online Education Management Project",
    description: "Developed backend functionalities for an online education management project, leveraging microservices architecture and Spring frameworks.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HajarBecharri/E-Learning_springwebSite",
    
  },
  {
    id: 7,
    title: "Système de Recommandation d'Assurance",
    description: "Developed a recommendation system for insurance products using Angular for the frontend, Spring Boot for the backend, and Blockchain technology for secure data management.",
    image: "/images/projects/3.jpg",
    tag: ["All", "AI"],
    gitUrl: "/",
    
  },
];

const projectsData = projectsDataa.reverse();
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
             
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;