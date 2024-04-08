"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
        <ul className="list-disc pl-2">
          <li>
            <strong>Web Development:</strong>
            <ul >
              <li>Angular | Angular Material | Symfony | Bootstrap </li>
        
            </ul>
          </li>
          <li>
            <strong>Backend Development:</strong>
            <ul>
              <li>Spring Boot | Flask | Symfony | Node.js | Express </li>
    
            </ul>
          </li>
          
          <li>
            <strong>Database Management:</strong>
            <ul>
              <li>MySQL | MongoDB</li>

            </ul>
          </li>
          <li>
            <strong>artificial intelligence:</strong>
            <ul>
              <li>Machine Learning | Deep Learning </li>
             
            </ul>
          </li>
          <li>
            <strong>Hardware Integration:</strong>
            <ul>
              <li>Arduino | Raspberry Pi</li>
              
            </ul>
          </li>
          <li>
            <strong>Game Development:</strong>
            <ul>
              <li>Java</li>
            </ul>
          </li>
          <li>
            <strong>Graphical User Interface (GUI) Development:</strong>
            <ul>
              <li>Python Tkinter | Java Swing</li>
             
            </ul>
          </li>
          <div className="mt-4">
             After working on numerous projects,
             I have acquired a diverse set of skills.
              However, the most valuable skills I've developed are those of self-learning, 
              rapid adaptation, and flexibility. These abilities enable me to approach any project or technology with openness and readiness.
          </div>
        </ul>
        
      ),
      
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor's in Software Engineering and Intelligent Systems, ongoing
            University Abdelmalek Asaadi, Faculty of Science and Technologies, Tanger</li>
        <li>Diploma of Sciences and Technologies Studies, Faculty of Science and Technologies of Tanger , 2020 - 2022</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Blockchain & Cryptocurrency Fundamentals - Udemy</li>
        <li>TensorFlow 2 QuickStart - Udemy</li>
        <li>Python for Deep Learning & Machine Learning: A to Z - Udemy</li>
      </ul>
    ),
  },
  {
    title: "Awards",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
        <li>Leader of the SOUMAHA team who won the 3rd place at the Potcamp and Netcamp Dayz events.</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" alt="about image" width={300} height={300} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As a Software Engineer specializing in Intelligent Systems, I excel in developing innovative software solutions.
          With experience in designing, deploying, and optimizing intelligent systems, I possess advanced skills in programming
          and software design. I have a keen interest in tackling complex problems and thrive on finding effective solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("awards")}
              active={tab === "awards"}
            >
              {" "}
              Awards{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;