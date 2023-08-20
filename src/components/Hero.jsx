import React from "react";
import Navbar from "./Navbar";
import PersonalLinks from "./PersonalLinks";
import { IconFileCv } from "@tabler/icons-react";
import headshot from "../assets/headshot.png";

const Hero = () => {
  return (
    <div className="hero bg-otto-black pb-8">
      <div className="container mx-auto max-w-5xl px-6">
        <Navbar />
        <PersonalLinks />

        <img
          className="border-tan mx-auto mb-7 max-w-[230px] rounded-[10px] border"
          src={headshot}
          alt="Picture of Joe Webster"
        />
        <p className="text-tan mb-4">
          Full-stack software engineer experienced in JavaScript, Ruby, React,
          Express, Tailwind and PostgreSQL. I enjoy learning new skills,
          designing robust systems and building products with strong UX + UI.
          Based in Boston, MA.
        </p>
        <p className="text-tan mb-7">
          I recently co-created Otto, an open-source and web-based ETL (extract,
          transform, load) tool.
          <a
            href="https://www.otto-etl.com/"
            target="_blank"
            className="underline"
          >
            {" "}
            Learn more.
          </a>
        </p>
        <a
          href="/joe-webster-resume.pdf"
          target="_blank"
          className="bg-tan hover:bg-tan-hover flex w-full items-center justify-center gap-1 rounded-md px-4 py-3 font-medium"
        >
          <IconFileCv size={28} strokeWidth="1.5" />
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
