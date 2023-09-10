"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "GifApp",
    description: "Esta aplicación te permite buscar y mostrar GIFs utilizando la API de Giphy. Puedes buscar cualquier GIF que desees y obtener resultados al instante.",
    image: "/images/projects/gifapp.png",
    tag: ["All", "Web", "Todos"],
    gitUrl: "https://github.com/Anesius18/Gif-App",
    previewUrl: "https://gif-app-anneuri.netlify.app/",
  },
  {
    id: 2,
    title: "HeroesApp",
    description: "HeroesApp te sumerge en el emocionante mundo de los héroes de Marvel y DC Comics. En esta aplicación, puedes elegir entre los universos de Marvel y DC y explorar una amplia gama de personajes legendarios. ",
    image: "/images/projects/heroesapp.png",
    tag: ["All", "Web", "Todos"],
    gitUrl: "https://github.com/Anesius18/HeroesApp",
    previewUrl: "https://heroesappanneuri.netlify.app/",
  }

];

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
        Mis Projectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobil"
          isSelected={tag === "Mobile"}
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
