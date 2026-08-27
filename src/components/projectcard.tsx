"use client";

import { buttonVariants , Card, Link, Separator } from "@heroui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ChipBasic } from "@/components/chip";
import { routeUrl } from "@/config/site";
import type { Project } from "@/types";


type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="
            border
            border-foreground/10
           
            w-auto h-auto min-h-50
            items-stretch 
            mx-20 my-10
            md:flex-row p-8 
            rounded-3xl shadow-md
            bg-background">
      <div className="relative size-40 min-h-40 shrink-0 aspect-square overflow-hidde md:h-auto md:w-1/2 md:aspect-auto md:self-stretch">
        {project.format === "application/lottie" ? (
          <DotLottieReact
            className="pointer-events-none relative inset-0 h-full w-full object-cover select-none"
            src={project.img}
            autoplay
            loop
          />
        ) : project.format.startsWith("video/") ? (
          <video
            className="pointer-events-none relative inset-0 h-full w-full scale-100 object-cover select-none"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={project.img} type={project.format} />
          </video>
        ) : (
          <img
            alt={project.title}
            className="pointer-events-none relative inset-0 h-full w-full scale-100 object-cover select-none"
            loading="lazy"
            src={project.img}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-0">
        <Card.Header className="gap-1">
          <Card.Title className="font-bold text-[40px]/10 max-w-100 ">{project.title}</Card.Title>
          <p className="text-wrap italic pt-4 text-[20px]/8  text-muted">{project.where}</p>
          <Card.Description className="text-wrap pt-4 text-[20px]/8 ">
            {project.description}
          </Card.Description>
        </Card.Header>
        <div className="mt-7.5 flex items-end justify-between gap-3">
          <div className="flex flex-col gap-2">
            <ChipBasic project={project} />
          </div>
          <Link
            href={routeUrl(project.href)}
            className={buttonVariants({
              variant: "primary",
              size: "sm",
              className: "rounded-none",
            })}
          >
            Read More
          </Link>
            
        </div>
        <Separator className="mt-4"/>
      </div>
    </Card>
  );
};
