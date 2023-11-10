import React from "react";
import Link from "next/link";

import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";
import Section from "@/atoms/Section";

const IntroSection: React.VFC = () => (
  <Section>
    <Heading type="h1">Hello, I&apos;m Sachin Guruswamy 👋</Heading>
    <Paragraph weight="light">
      Young Robotics, Perception & Computer Vision engineer currently{" "}
      <Link href="https://luxonis.com">
        @ Luxonis
      </Link>.
    </Paragraph>
  </Section>
);

export default IntroSection;
