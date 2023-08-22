import React from "react";
import TechTags from "./TechTags";

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
      <img
        className="box-shadow rounded-[10px]"
        src={imageSrc}
        alt={`${title} user interface`}
      />
      <p className="text-clamp-p">{description}</p>
      <TechTags
        technologies={technologies}
        textColor={textColor}
        borderColor={borderColor}
      />
    </div>
  );
};

export default Project;
