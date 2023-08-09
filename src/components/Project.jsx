import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/warung.jpg";
import project2 from "../assets/images/karyawan.jpg";
import project3 from "../assets/images/berita.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Warung Karepe",
      github_link: "https://gitlab.com/agungfay10/eduwork-server",
    },
    {
      img: project2,
      name: "Employee Management System",
      github_link: "https://gitlab.com/agungfay10/employee-management-system",
    },
    {
      img: project3,
      name: "News App",
      github_link: "https://gitlab.com/agungfay10/portal-berita-react-js-hook",
    },
  ];
  return (
    <section id="projects" className="py-8 text-white">
      <div className="text-center mt-7">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      <div className="flex items-center justify-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-6 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-5">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Link Project
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
