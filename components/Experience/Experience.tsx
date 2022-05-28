import React from 'react';
import Title from '../Title';
import Timeline from './Timeline';

type ExperienceProps = {};

const Experience: React.FC<ExperienceProps> = ({}) => {
  return (
    <section
      id="experience"
      className="flex w-full flex-wrap bg-slate-300 pt-8 dark:bg-darker"
    >
      <Title>Experience</Title>
      <div className="mx-auto flex w-full max-w-7xl flex-wrap justify-center sm:py-10 sm:px-20">
        <Timeline />
      </div>
    </section>
  );
};
export default Experience;
