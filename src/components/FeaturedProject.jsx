import React from "react";
import ottoLogo from "../assets/otto-logo.svg";

const FeaturedProject = () => {
  return (
    <div className="container mx-auto max-w-5xl px-6">
      <h2 className="mb-12 mt-16 text-xl font-medium uppercase">
        Featured Project
      </h2>
      <img className="mb-7" src="otto-ui.png" alt="Otto user interface" />
      <img src={ottoLogo} alt="" className="mb-4 h-[23px]" />
      <p className="mb-4">
        Otto is an open-source and web-based ETL (extract, transform, load) tool
        that automates the gathering, transforming, and loading of business data
        at scheduled intervals.
      </p>
      <p className="mb-7">
        Otto prioritizes ease of use for JavaScript developers and provides
        observability features that enable users to monitor the execution and
        health of their ETL workflows.
      </p>
      <a
        href="https://www.otto-etl.com/"
        className="flex w-full items-center justify-center gap-1 rounded-md bg-gradient-to-r from-[#3C4BCB] to-[#343799] px-4 py-3 font-medium text-white"
      >
        Read Case Study
      </a>
    </div>
  );
};

export default FeaturedProject;
