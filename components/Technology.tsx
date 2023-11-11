import React from "react";

interface TechnologyProps {
  iconName: string | React.ReactNode;
  name: string;
}

const Technology: React.VFC<TechnologyProps> = ({ iconName, name }) => {
  const Icon = typeof iconName === 'string' ? 'i' : iconName; // Component or 'i'
  return (
    <li className="flex items-center" key={name}>
      <Icon className={typeof iconName === 'string' ? iconName : undefined}>
        {typeof iconName === 'string' ? null : iconName}
      </Icon>

      {/* {typeof iconName === 'string' ?
        <i className={iconName}></i> :
        <iconName />
      } */}
      <span className="ml-2">{name}</span>
    </li>
  );
};

export default Technology;
