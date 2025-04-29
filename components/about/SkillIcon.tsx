import React from 'react';

interface SkillIconProps {
  IconComponent: React.ElementType;
  name: string;
  colorClassName?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ IconComponent, name, colorClassName = 'text-gray-700 dark:text-gray-300' }) => {
  return (
    <li className="flex flex-col items-center justify-center">
      <IconComponent width={30} height={30} className={`mb-2 ${colorClassName}`} />
      <span className="text-center text-sm text-gray-500 dark:text-gray-400">{name}</span>
    </li>
  );
};

export default SkillIcon;
