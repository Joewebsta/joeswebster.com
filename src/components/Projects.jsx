import React from "react";
import Project from "./Project";

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
        color="#3c4c6c"
      />
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
        color="#3c4c6c"
      />
    </div>
  );
};

export default Projects;
