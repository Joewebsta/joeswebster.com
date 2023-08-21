import React from "react";
import ottoLogo from "../assets/otto-logo.svg";
import etlDiagram from "../assets/etl.png";
import { IconBook } from "@tabler/icons-react";

const FeaturedProject = () => {
  return (
    <div className="container mx-auto flex max-w-5xl flex-col gap-12 px-6 pt-10 sm:gap-16 sm:pt-24">
      <h2 className="text-clamp-h2 font-medium uppercase sm:text-3xl">
        Featured Project
      </h2>
      <div className="flex flex-col gap-7 sm:items-start sm:gap-10">
        <img
          src={ottoLogo}
          alt="Otto Logo"
          className="h-[25px] self-start sm:h-[34px]"
        />
        <img className="" src="otto-ui.png" alt="Otto user interface" />
        <p className="text-clamp-p">
          Otto is an open-source and web-based ETL (extract, transform, load)
          tool that automates the gathering, transforming, and loading of
          business data at scheduled intervals.
        </p>
        <img src={etlDiagram} alt="ETL Diagram" className="self-start" />
        <p className="text-clamp-p">
          Otto prioritizes ease of use for JavaScript developers and provides
          observability features that enable users to monitor the execution and
          health of their ETL workflows.
        </p>
        <a
          href="https://www.otto-etl.com/"
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#3C4BCB] to-[#343799] px-4 py-3 font-medium text-white hover:from-[#3941bc] hover:to-[#2e327a] sm:px-14"
        >
          <IconBook size={24} strokeWidth="1.5" />
          Read Case Study
        </a>
      </div>
    </div>
  );
};

export default FeaturedProject;
