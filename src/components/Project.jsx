import React from "react";

const Project = ({
  imageSrc,
  title,
  description,
  technologies,
  textColor,
  borderColor,
  icon,
}) => {
  return (
    <div className="mb-20">
      <div className="mb-4 flex items-center gap-2">
        {icon}
        <h3 className={`${textColor} text-2xl font-medium`}>{title}</h3>
      </div>
      <img className="mb-7" src={imageSrc} alt={`${title} user interface`} />

      <p className="text-clamp-p mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`${textColor} ${borderColor} rounded border px-2`}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
