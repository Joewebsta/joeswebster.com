import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import { inject } from "@vercel/analytics";

inject();

import "./styles/reset.css";

function App() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
