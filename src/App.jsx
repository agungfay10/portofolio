import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/SkillsSection";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
