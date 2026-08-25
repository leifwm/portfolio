
import DefaultLayout from "@/layouts/default";
import { ProjectCard } from "@/components/projectcard";
import { Separator } from '@heroui/react';
import { projectPreviews } from "@/config/projects-preview";
import { assetUrl } from "@/config/site";
import { motion } from "motion/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-0 md:py-10 h-200
      dark:bg-[#050d0f]
      bg-[#F0EDED]
      bg-top
      bg-fixed
      bg-blend-overlay
      relative
      "
      style={{ backgroundImage: `url(${assetUrl("/assets/img/fundo3.png")})` }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-white to-transparent
        dark:from-black
        " />
        <motion.div 
          initial={{ transform: "translateX(-1000px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ ease: "easeInOut", duration: 2 }}
          className="relative  inline-block max-auto text-left justify-center  text-base/16"
          >
          <span className="text-[80px] font-bold">Designer&nbsp;</span>
          <br />
          <span className="text-[80px] font-bold text-[#39DD91]">generating value&nbsp;</span>
          <br />
          <span className="text-[80px] font-bold">with</span>
          <span className="text-[80px] font-bold text-[#11D1C6]"> user-centric</span>
          <br />
          <span className="text-[80px] font-bold"> solutions</span>
        </motion.div>
      </section>
            <div className="mx-4 flex flex-row items-center bg-background py-4">
             <h1 id="projects" className="text-foreground font-thin mx-10 text-[90px]">projects</h1>
              <Separator className="my-3.5 flex-1 bg-foreground/50"/>
           </div>
      <div>
        {projectPreviews.projects.slice(0, 4).map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>    
     
    
    </DefaultLayout>
  );
}
