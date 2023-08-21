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
    <div className="flex flex-col gap-4 sm:gap-6">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className={`${textColor} text-2xl font-medium sm:text-3xl`}>
          {title}
        </h3>
      </div>
      <img className="" src={imageSrc} alt={`${title} user interface`} />
      <p className="text-clamp-p">{description}</p>
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
