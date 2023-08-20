import React from "react";
import Navbar from "./Navbar";
import {
  IconFileCv,
  IconBrandGithub,
  IconMail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Hero = () => {
  return (
    <div className="hero bg-black-hero pb-6">
      <div className="container mx-auto max-w-5xl px-6">
        <Navbar />
        <img
          className="mx-auto mb-6 max-w-[230px]"
          src="/headshot.png"
          alt="Picture of Joe Webster"
        />
        <div className="mb-6 flex justify-center gap-5">
          <a
            href="http://google.com/"
            className="bg-tan hover:bg-tan-hover flex h-9 w-9 items-center justify-center rounded-md"
          >
            <IconFileCv size={28} stroke-width="1.5" />
          </a>
          <div className="bg-tan hover:bg-tan-hover flex h-9 w-9 items-center justify-center rounded-md">
            <IconMail size={28} stroke-width="1.5" />
          </div>
          <div className="bg-tan hover:bg-tan-hover flex h-9 w-9 items-center justify-center rounded-md">
            <IconBrandLinkedin size={28} stroke-width="1.5" />
          </div>
          <div className="bg-tan hover:bg-tan-hover flex h-9 w-9 items-center justify-center rounded-md">
            <IconBrandGithub size={28} stroke-width="1.5" />
          </div>
        </div>
        <p className="text-tan mb-4">
          Full-stack software engineer experienced in JavaScript, Ruby, React,
          Express, Tailwind and PostgreSQL. I enjoy learning new skills,
          designing robust systems and building products with strong UX + UI.
          Based in Boston, MA.
        </p>
        <p className="text-tan mb-6">
          I recently co-created Otto, an open-source and web-based ETL (extract,
          transform, load) tool.
        </p>
        <button className="bg-tan hover:bg-tan-hover flex w-full items-center justify-center gap-1 rounded-md px-4 py-3 font-medium">
          <IconFileCv size={28} stroke-width="1.5" />
          View Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
