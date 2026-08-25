import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Project = {
  id: number;
  title: string;
  img: string;
  format: string;
  description: string;
  tags: string[];
  href: string;
};
