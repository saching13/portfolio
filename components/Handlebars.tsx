import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faInstagram,
  faTwitter,
  IconDefinition,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

interface HandlebarsProps {
  email: string;
}

interface HandlebarLinkProps {
  icon: IconDefinition;
  link: string;
}

const HandlebarLink: React.VFC<HandlebarLinkProps> = ({ icon, link }) => (
  <li className="after:last:hidden after:block after:mx-auto after:my-4 after:w-[1px] after:scale-x-75 after:h-12 after:dark:bg-neutral-50 after:bg-neutral-900">
    <Link href={link} passHref>
      <a className="after:bg-transparent" target="social">
        <FontAwesomeIcon icon={icon} />
      </a>
    </Link>
  </li>
);

const Handlebars: React.VFC<HandlebarsProps> = ({ email }) => {
  return (
    <div className="hidden sm:block">
      <div className="fixed right-0 grid w-[6rem] h-screen my-auto place-items-center">
        <div className="font-thin rotate-90">
          <Link href={`mailto:${email}`}>
            <a className="font-thin tracking-wide">{email}</a>
          </Link>
        </div>
      </div>
      <div className="fixed left-0 grid place-items-center h-screen my-auto w-[6rem]">
        <ul>
          <HandlebarLink
            icon={faGithubAlt}
            link="https://github.com/saching13"
          />
          <HandlebarLink
            icon={faInstagram}
            link="https://instagram.com/sags.42"
          />
          <HandlebarLink icon={faTwitter} link="https://twitter.com/GuruswamySachin" />
          <HandlebarLink
            icon={faLinkedinIn}
            link="https://www.linkedin.com/in/sachin-guruswamy"
          />
        </ul>
      </div>
    </div>
  );
};

export default Handlebars;
