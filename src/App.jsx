import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import FeaturedProject from "./components/FeaturedProject";
import "./styles/reset.css";

function App() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <Projects />
    </>
  );
}

export default App;
