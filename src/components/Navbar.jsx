import React from "react";
import PersonalLinks from "./PersonalLinks";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:pt-5">
      <h1 className="text-tan text-clamp-h1 text-center font-medium">
        Joe Webster
      </h1>
      <PersonalLinks />
    </nav>
  );
};

export default Navbar;
