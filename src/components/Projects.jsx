import React, { useState, useEffect } from "react";
import Project from "./Project";
import { IconSwords, IconApiApp } from "@tabler/icons-react";

const Projects = () => {
  const [iconSize, setIconSize] = useState(window.innerWidth < 640 ? 24 : 28);

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
    <div className="sm:gap-15 container mx-auto flex max-w-5xl flex-col gap-12 px-6 pt-20 sm:pt-32">
      <h2 className="text-clamp-h2 font-medium uppercase sm:text-3xl">
        Other Projects
      </h2>
      <div className="flex flex-col gap-12 sm:gap-24">
        <Project
          imageSrc="questbin-ui.png"
          title="QuestBin"
          description="Collect, inspect, and debug HTTP requests and webhooks"
          technologies={[
            "React",
            "Express.js",
            "PostgreSQL",
            "DigitalOcean Droplet",
            "Nginx",
            "PM2",
          ]}
          textColor="text-questbin-blue"
          borderColor="border-questbin-blue"
          icon={
            <IconSwords size={iconSize} strokeWidth="1.5" color={"#465b87"} />
          }
        />
        <Project
          imageSrc="astral-ui.png"
          title="Astral"
          description="Create and manage software engineering tasks and issues"
          technologies={[
            "Vanilla JavaScript",
            "HTML",
            "CSS",
            "Handlebars.js",
            "MVC",
          ]}
          textColor="text-astral-purple"
          borderColor="border-astral-purple"
          icon={
            <IconApiApp size={iconSize} strokeWidth="1.5" color={"#8B559B"} />
          }
        />
      </div>
    </div>
  );
};

export default Projects;
