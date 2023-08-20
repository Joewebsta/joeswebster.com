import React from "react";
import Project from "./Project";
import { IconSwords, IconApiApp } from "@tabler/icons-react";

const Projects = () => {
  return (
    <div className="container mx-auto max-w-5xl px-6">
      <h2 className="mb-12 mt-20 text-xl font-medium uppercase">
        Other Projects
      </h2>
      <Project
        imageSrc="questbin-ui.png"
        title="Questbin"
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
        icon={<IconSwords size={24} strokeWidth="1.5" color={"#465b87"} />}
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
        icon={<IconApiApp size={24} strokeWidth="1.5" color={"#8B559B"} />}
      />
    </div>
  );
};

export default Projects;
