import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/SkillsSection";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
};

export default App;
