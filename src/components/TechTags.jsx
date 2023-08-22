import React from "react";

const TechTags = ({ technologies, textColor, borderColor }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className={`${textColor} ${borderColor} text-clamp-tag rounded border px-2`}
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default TechTags;
