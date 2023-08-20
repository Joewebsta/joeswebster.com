import React from "react";

const Project = ({ imageSrc, title, description, technologies, color }) => {
  return (
    <div className="mb-20">
      <img className="mb-7" src={imageSrc} alt={`${title} user interface`} />
      <h3 className={`mb-4 text-2xl font-medium text-[${color}]`}>{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`rounded border border-[${color}] px-2 text-[${color}]`}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
