import { motion } from 'framer-motion';
import React, { useState } from 'react';
import PROJECTS from '../../constants/PROJECTS';
import Title from '../Title';
import Project from './Project';

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = ({}) => {
  const [expanded, setExpanded] = useState<number>();
  return (
    <section
      id="projects"
      className="flex-center flex w-full flex-wrap bg-slate-300 dark:bg-darker"
    >
      <Title>Projects</Title>
      <motion.div
        className={`fixed top-0 bottom-0 right-0 left-0 z-[100] bg-black  ${
          expanded != undefined ? 'block opacity-80' : 'hidden opacity-0'
        }`}
        onClick={() => setExpanded(undefined)}
      ></motion.div>
      <div className="flex w-full max-w-7xl flex-wrap gap-8">
        {PROJECTS.reverse().map((p, i) => (
          <Project
            {...p}
            isExpanded={i == expanded}
            onExpand={() => {
              i == expanded ? setExpanded(undefined) : setExpanded(i);
            }}
          />
        ))}
      </div>
    </section>
  );
};
export default Projects;
