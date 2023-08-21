import React from "react";
import { IconCopyright } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="hero bg-otto-black">
      <div className="container mx-auto flex max-w-5xl items-center justify-center gap-2 px-6 py-4">
        <IconCopyright size={20} color="#FFF" strokeWidth={1.5} />
        <p className="text-tan">2023 Joe Webster</p>
      </div>
    </div>
  );
};

export default Footer;
