import React from "react";
import Skill from './Skills';
import htmlLogo from "../assets/images/html.png";
import cssLogo from "../assets/images/css.png";
import jsLogo from "../assets/images/js.png";
import mongoLogo from "../assets/images/mongo.png";
import mysqlLogo from "../assets/images/mysql.png";
import reactLogo from "../assets/images/react.png";
import nodeLogo from "../assets/images/node.png";
import expressLogo from "../assets/images/express.png";
import gitLogo from "../assets/images/git.png";

const skillsData = [
  { name: "HTML5", image: htmlLogo },
  { name: "CSS3", image: cssLogo },
  { name: "Javascript", image: jsLogo },
  { name: "MongoDB", image: mongoLogo },
  { name: "MySQL", image: mysqlLogo },
  { name: "ReactJs", image: reactLogo },
  { name: "NodeJs", image: nodeLogo },
  { name: "ExpressJS", image: expressLogo },
  { name: "Git", image: gitLogo },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="p-10 bg-gray-800 relative">
      <div className="mt-4 mb-4 text-gray-100 text-center">
        <h3 className="mb-8 text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill, index) => (
            <Skill key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
