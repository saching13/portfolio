import React from "react";

import { StarFilledIcon } from "@radix-ui/react-icons";

import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";

interface ProjectProps {
  name: string;
  description: string;
  stars: number;
}

const Project: React.VFC<ProjectProps> = ({ name, stars, description, org }) => (
  <a target="_blank" href={`https://github.com/${org}${name}`} rel="noreferrer">
    <li className="space-y-2">
      <div className="flex items-center gap-2">
        <Heading type="h3">{name}</Heading>
        {stars && (
          <div className="flex items-center gap-1">
            <StarFilledIcon className="text-yellow-400" />
            <span>{stars.toString()}</span>
          </div>
        )}
      </div>
      <Paragraph weight="light">{description}</Paragraph>
    </li>
  </a>
);

export default Project;
