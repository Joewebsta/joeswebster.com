import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
// import { inject } from "@vercel/analytics";

// inject();

import "./styles/reset.css";

function App() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <Projects />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
