import React from "react";
import Navbar from "./Navbar";
import { IconFileText } from "@tabler/icons-react";
import headshot from "../assets/headshot.png";

const Hero = () => {
  return (
    <div className="hero bg-otto-black">
      <div className="container mx-auto max-w-5xl px-6 pt-6">
        <Navbar />
        <div className="flex flex-col items-center gap-5 pb-10 pt-6 sm:flex-row-reverse sm:items-start sm:gap-14 sm:py-24">
          <img
            className="max-w-[230px] rounded-[10px] border border-tan sm:mx-0"
            src={headshot}
            alt="Picture of Joe Webster"
          />
          <div className="flex flex-col gap-6 sm:items-start">
            <p className="text-clamp-p text-tan">
              Hi, I'm a Full-stack software engineer with multiple years of
              experience based in Boston, MA. I'm most passionate about the
              JavaScript ecosystem, and also Ruby, React, Express, Tailwind CSS,
              and PostgreSQL. I enjoy learning new skills, designing robust
              systems and building products with strong UX + UI.
            </p>
            <p className="text-clamp-p text-tan">
              I recently created Otto, an open-source, web-based, and automated
              ETL (extract, transform, load) pipeline tool.{" "}
              <a
                href="https://www.otto-etl.com/"
                target="_blank"
                className="underline"
              >
                Learn more
              </a>
              .
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center justify-center gap-1 rounded-md bg-tan px-4 py-[10px] font-medium hover:bg-tan-hover sm:mt-5 sm:px-14 sm:text-lg"
            >
              <IconFileText size={24} strokeWidth="1.5" />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
