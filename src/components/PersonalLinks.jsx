import React from "react";
import {
  IconFileCv,
  IconBrandGithub,
  IconMail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const PersonalLinks = () => {
  return (
    <div className="mb-7 flex justify-center gap-5">
      <a
        target="_blank"
        href="/joe-webster-resume.pdf"
        className="bg-tan hover:bg-tan-hover flex h-9 w-9 items-center justify-center rounded-md"
      >
        <IconFileCv size={28} strokeWidth="1.5" />
      </a>
      <a
        target="_blank"
        href="mailto:joe.scott.webster@gmail.com"
        className="bg-tan hover:bg-tan-hover flex h-9 w-9 items-center justify-center rounded-md"
      >
        <IconMail size={28} strokeWidth="1.5" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/joeswebster/"
        className="bg-tan hover:bg-tan-hover flex h-9 w-9 items-center justify-center rounded-md"
      >
        <IconBrandLinkedin size={28} strokeWidth="1.5" />
      </a>
      <a
        target="_blank"
        href="https://github.com/Joewebsta"
        className="bg-tan hover:bg-tan-hover flex h-9 w-9 items-center justify-center rounded-md"
      >
        <IconBrandGithub size={28} strokeWidth="1.5" />
      </a>
    </div>
  );
};

export default PersonalLinks;
