import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import PROJECTS from '../../constants/PROJECTS';
import Title from '../Title';
import Project from './Project';

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = ({}) => {
  const [expanded, setExpanded] = useState<number>();
  useEffect(() => {
    if (expanded !== undefined) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [expanded]);
  return (
    <section
      id="projects"
      className="flex-center flex w-full flex-wrap bg-slate-300 pb-20 dark:bg-darker"
    >
      <Title>Projects</Title>
      <motion.div
        className={`fixed top-0 bottom-0 right-0 left-0 z-[100] bg-black ${
          expanded != undefined ? 'block opacity-80' : 'hidden opacity-0'
        }`}
        onClick={() => setExpanded(undefined)}
      ></motion.div>
      <div className="flex w-full max-w-7xl flex-wrap justify-center gap-12 pt-20  ">
        {[...PROJECTS].reverse().map((p, i) => (
          <Project
            key={p.title}
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
