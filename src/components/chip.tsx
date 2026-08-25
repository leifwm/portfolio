import { Chip } from "@heroui/react";
import type { Project } from "@/types";

type ChipBasicProps = {
  project: Project;
};

export function ChipBasic({ project }: ChipBasicProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag, index) => (
        <Chip
          color="accent"
          key={`${tag}-${index}`}
          size="sm"
          variant="soft"
          className="rounded-none border border-black dark:border-white bg-transparent text-black dark:text-white"
        >
          {tag}
        </Chip>
      ))}
    </div>
  );
}