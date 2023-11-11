import React from "react";

interface TechnologyProps {
  iconName: string | React.ReactNode;
  name: string;
}

const Technology: React.VFC<TechnologyProps> = ({ iconName, name }) => {
  let iconElement;
  // const Icon = typeof iconName === 'string' ? 'i' : iconName; // Component or 'i'
  if (typeof iconName === 'string') {
    // iconName is a string, so use it as a class for an <i> element
    iconElement = <i className={iconName}></i>;
  } else if (React.isValidElement(iconName)) {
    // iconName is a React element
    iconElement = iconName;
  }
  return (
    <li className="flex items-center" key={name}>
      {iconElement}
      <span className="ml-2">{name}</span>
    </li>
  );
};

export default Technology;
