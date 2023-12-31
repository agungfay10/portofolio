import React from "react";
import project1 from "../assets/images/warung.jpg";
import project2 from "../assets/images/karyawan.jpg";
import project3 from "../assets/images/berita.png";
import project4 from "../assets/images/mini.png";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiBootstrap, SiHtml5 } from "react-icons/si";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Warung Karepe",
      description:
        " E-Commerce for food ordering with Midtrans payment gateway",
      tools: [
        { name: "React Js", icon: <FaReact /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Express Js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
      github_link: "https://gitlab.com/agungfay10/eduwork-server",
    },
    {
      img: project2,
      name: "Employee Management System",
      description: "System to add, edit, update and delete employee data",
      tools: [
        { name: "React", icon: <FaReact /> },
        { name: "Express Js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
      github_link: "https://gitlab.com/agungfay10/employee-management-system",
    },
    {
      img: project3,
      name: "News App",
      description: "A system that displays news updates from the NEWS API",
      tools: [
        { name: "React Js", icon: <FaReact /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
      github_link: "https://gitlab.com/agungfay10/portal-berita-react-js-hook",
    },
    {
      img: project4,
      name: "Mini E-Commerce",
      description: "E-Commerce mini user interface display",
      tools: [
        { name: "Html5", icon: <SiHtml5 /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
      github_link:
        "https://gitlab.com/agungfay10/im-sanbercode-laravel-web-dev/-/tree/main/3.%20Bootstrap?ref_type=heads",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center mt-7">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      <div className="lg:w-2/3 w-full mx-auto">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {projects.map((project_info, i) => (
            <div key={i} className="bg-slate-700 rounded-xl p-6 text-center">
              <img src={project_info.img} alt="" className="rounded-lg" />
              <h3 className="text-sm text-left my-3">{project_info.name}</h3>
              <p className="text-sm text-left my-3">
                {project_info.description}
              </p>
              <div className="text-sm text-left my-3">
                <p>
                  <strong>Tools:</strong>
                </p>
                <div className="p-2 flex items-center">
                  {project_info.tools.map((tool, index) => (
                    <div key={index} className="flex items-center mr-4">
                      {tool.icon} <span className="ml-2">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={project_info.github_link}
                  target="_blank"
                  className="text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out flex items-center justify-center text-sm sm:text-base"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
