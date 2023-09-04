import React from "react";
import {
  IconFileText,
  IconBrandGithub,
  IconMail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const PersonalLinks = () => {
  return (
    <div className="flex justify-center gap-5">
      <a
        target="_blank"
        href="/resume.pdf"
        className="flex h-9 w-9 items-center justify-center rounded-md bg-tan hover:bg-tan-hover"
      >
        <IconFileText size={28} strokeWidth="1.5" />
      </a>
      <a
        target="_blank"
        href="mailto:joe.scott.webster@gmail.com"
        className="flex h-9 w-9 items-center justify-center rounded-md bg-tan hover:bg-tan-hover"
      >
        <IconMail size={28} strokeWidth="1.5" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/joeswebster/"
        className="flex h-9 w-9 items-center justify-center rounded-md bg-tan hover:bg-tan-hover"
      >
        <IconBrandLinkedin size={28} strokeWidth="1.5" />
      </a>
      <a
        target="_blank"
        href="https://github.com/Joewebsta"
        className="flex h-9 w-9 items-center justify-center rounded-md bg-tan hover:bg-tan-hover"
      >
        <IconBrandGithub size={28} strokeWidth="1.5" />
      </a>
    </div>
  );
};

export default PersonalLinks;
