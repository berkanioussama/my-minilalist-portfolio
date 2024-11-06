'use client'

import { PinContainer } from "@/components/ui/3d-pin";
import { projects } from "@/data/projects";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="lg:text-5xl font-bold text-center">
        A small selection of {""}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap lg:gap-24 gap-16 items-center justify-center p-4 mt-10">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-center sm:w-[570px] w-[80vw] lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem]">
            <PinContainer
              title={project.link}
              href={project.link}
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] lg:h-[40vh] sm:h-[40vh] h-[30vh] mb-10 overflow-hidden">
                <div className="relative w-full h-full lg:rounded-3xl bg-[#13162d] overflow-hidden">
                  <img src="/images/projects/bg.png" alt="bgimg" />
                </div>
                <img
                  className="absolute bottom-0 z-10"
                  src={project.img}
                  alt={project.title}
                />
              </div>

              <h2 className="lg:text-2xl md:text-xl text-base font-bold line-clamp-1">
                {project.title}
              </h2>

              <p className="lg:text-xl text-sm lg:font-normal font-light line-clamp-2">
                {project.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div key={index}
                      className="lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center bg-black border border-white/[0.2] rounded-full"
                      style={{transform:`translate(-${5 * index * 2}px)`}}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>

            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default RecentProjects;