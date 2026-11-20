import { Button } from "@/components/ui/button";
import ProjectData from "@/src/constants/projects";
import Image from "next/image"

const Projects = () => {
  return (
    <div className="w-full border-b border-dashed border-[#484848]">
      <div className="border-b border-dashed border-[#484848]">
        <div className="border-x border-dashed border-[#484848] md:w-[80%] lg:w-[40%] mx-auto px-2 flex items-center justify-between">
          <div className="text-2xl py-1 px-2 font-serif">Projects</div>
          <Button variant={"link"} className="text-white cursor-pointer">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className="border-x border-dashed border-[#484848] md:w-[80%] lg:w-[40%] mx-auto px-2 flex items-center justify-between">
        <div
          className={
            "flex flex-col gap-6 w-full text-white *:text-white! *:leading-6 "
          }
        >
          <div className="border-x border-dashed border-[#484848] w-full flex items-center justify-between">
            <div className={"grid grid-cols-2 gap-3  items-center w-full"}>
              {ProjectData.map((project, index) => (
                <div className="w-full flex flex-col border-x border-dashed border-[#484848]" key={index}>
                    <div className="w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                    <a href="https://ytracker-ten.vercel.app/">
                    </a>
                    <Image 
                    src={project.image}
                    height={1000}
                    width={1000}
                    alt={project.label}
                    className="object-cover object-center w-full h-35"
                    >
                     </Image>
                    </div>
                     <div className="flex flex-col my-2 px-2">
                        <div className="font-bold">{project.name}</div>
                        <div className="text-sm">{project.label}</div>
                     </div>
                     <div className="flex justify-between items-center">
                     <div className="flex flex-wrap my-3 gap-2 px-2">
                        {project.technologies.map((tech,index)=>(
                            <div 
                            key={index} 
                            className="rounded-lg py-1 px-2 text-sm bg-[#191919] shadow-xs border border-[#606060]/30">
                              {tech}
                              </div>
                        ))}
                     </div>
                     <div className="px-2">
                      
                      {project.github && <a href={project.github} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>
                     
                        </a>}
                      {project.link && <a href={project.link} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>

                        </a>}
                     </div>
                     </div>

                     
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
