import { motion, Variants } from 'framer-motion';
import React from 'react';

export type SkillElementProps = {
  title: string;
  sub: string;
};
const item: Variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const SkillElement: React.FC<SkillElementProps> = ({ title, sub }) => {
  return (
    <motion.li variants={item}>
      <div className="my-2 rounded bg-slate-200 p-8 shadow-black transition-all  hover:-translate-y-1 hover:shadow-xl dark:bg-dark ">
        <h3 className="mb-2 text-green-500">{title}</h3>
        <p>{sub}</p>
      </div>
    </motion.li>
  );
};
export default SkillElement;
