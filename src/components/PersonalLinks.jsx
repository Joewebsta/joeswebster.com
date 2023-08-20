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
        href="http://google.com/"
        className="bg-tan hover:bg-tan-hover flex h-9 w-9 items-center justify-center rounded-md"
      >
        <IconFileCv size={28} strokeWidth="1.5" />
      </a>
      <div className="bg-tan hover:bg-tan-hover flex h-9 w-9 items-center justify-center rounded-md">
        <IconMail size={28} strokeWidth="1.5" />
      </div>
      <div className="bg-tan hover:bg-tan-hover flex h-9 w-9 items-center justify-center rounded-md">
        <IconBrandLinkedin size={28} strokeWidth="1.5" />
      </div>
      <div className="bg-tan hover:bg-tan-hover flex h-9 w-9 items-center justify-center rounded-md">
        <IconBrandGithub size={28} strokeWidth="1.5" />
      </div>
    </div>
  );
};

export default PersonalLinks;
