import React from 'react';

export type SkillElementProps = {
  title: string;
  sub: string;
};

const SkillElement: React.FC<SkillElementProps> = ({ title, sub }) => {
  return (
    <li className="my-2 rounded bg-slate-200 p-8 shadow-black transition-all  hover:-translate-y-1 hover:shadow-xl dark:bg-dark ">
      <h3 className="mb-2 text-green-500">{title}</h3>
      <p>{sub}</p>
    </li>
  );
};
export default SkillElement;
