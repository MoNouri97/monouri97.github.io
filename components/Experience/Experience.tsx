import React from 'react';
import Timeline from './Timeline';

type ExperienceProps = {};

const Experience: React.FC<ExperienceProps> = ({}) => {
  return (
    <section
      id="skills"
      className="flex-center flex min-h-[100vh] w-full bg-slate-300 dark:bg-darker"
    >
      <div className="flex w-full max-w-7xl flex-wrap justify-center sm:py-10 sm:px-20">
        <h1 className="w-full p-8">hello from Experience</h1>
        <Timeline />
      </div>
    </section>
  );
};
export default Experience;
