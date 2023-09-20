import React, { useState, useEffect } from "react";
import Project from "./Project";
import { IconCpu, IconSwords, IconApiApp } from "@tabler/icons-react";

const Projects = () => {
  const [iconSize, setIconSize] = useState(window.innerWidth < 640 ? 24 : 28);
  const projects = [
    {
      imageSrc: "circuit-shop-ui.png",
      title: "Circuit Shop",
      description: "An e-commerce shopping cart for tech and digital products",
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Jest",
        "React Testing Library",
        "Mock Service Worker",
      ],
      textColor: "text-circuit-tan",
      borderColor: "border-circuit-tan",
      icon: <IconCpu size={iconSize} strokeWidth="1.5" color={"#5d534f"} />,
    },
    {
      imageSrc: "questbin-ui.png",
      title: "QuestBin",
      description: "Collect, inspect, and debug HTTP requests and webhooks",
      technologies: [
        "React",
        "Express.js",
        "PostgreSQL",
        "DigitalOcean Droplet",
        "Nginx",
        "PM2",
      ],
      textColor: "text-questbin-blue",
      borderColor: "border-questbin-blue",
      icon: <IconSwords size={iconSize} strokeWidth="1.5" color={"#465b87"} />,
    },
    {
      imageSrc: "astral-ui.png",
      title: "Astral",
      description: "Create and manage software engineering tasks and issues",
      technologies: [
        "Vanilla JavaScript",
        "HTML",
        "CSS",
        "Handlebars.js",
        "MVC",
      ],
      textColor: "text-astral-purple",
      borderColor: "border-astral-purple",
      icon: <IconApiApp size={iconSize} strokeWidth="1.5" color={"#70625e"} />,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth < 640 ? 24 : 28);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sm:gap-15 container mx-auto flex max-w-5xl flex-col gap-12 px-6 pb-10 pt-20 sm:pb-24 sm:pt-32">
      <h2 className="text-clamp-h2 font-medium uppercase sm:text-3xl">
        Other Projects
      </h2>
      <div className="flex flex-col gap-12 sm:gap-24">
        {projects.map((projectProps) => (
          <Project {...projectProps} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
