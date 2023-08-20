import React from "react";
import Navbar from "./Navbar";
import { IconFileCv } from "@tabler/icons-react";
import headshot from "../assets/headshot.png";

const Hero = () => {
  return (
    <div className="hero bg-otto-black">
      <div className="container mx-auto max-w-5xl px-6 pt-6">
        <Navbar />
        <div className="flex flex-col items-center gap-6 py-6 sm:flex-row sm:flex-row-reverse sm:items-start sm:gap-14 sm:py-20">
          <img
            className="border-tan max-w-[230px] rounded-[10px] border sm:mx-0"
            src={headshot}
            alt="Picture of Joe Webster"
          />
          <div className="flex flex-col gap-6 sm:items-start ">
            <p className="text-tan text-clamp-p">
              Full-stack software engineer experienced in JavaScript, Ruby,
              React, Express, Tailwind and PostgreSQL. I enjoy learning new
              skills, designing robust systems and building products with strong
              UX + UI. Based in Boston, MA.
            </p>
            <p className="text-tan text-clamp-p">
              I recently co-created Otto, an open-source and web-based ETL
              (extract, transform, load) tool.{" "}
              <a
                href="https://www.otto-etl.com/"
                target="_blank"
                className="underline"
              >
                Learn more.
              </a>
            </p>
            <a
              href="/joe-webster-resume.pdf"
              target="_blank"
              className="bg-tan hover:bg-tan-hover flex items-center justify-center gap-1 rounded-md px-4 py-3 font-medium sm:px-14 md:mt-5"
            >
              <IconFileCv size={28} strokeWidth="1.5" />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
