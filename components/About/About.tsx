import React from 'react';
import AboutText from './AboutText';

type AboutProps = {};

const About: React.FC<AboutProps> = ({}) => {
  return (
    <main
      id="about"
      className="flex-center flex min-h-[100vh] w-full max-w-7xl flex-wrap sm:py-10 sm:px-20"
    >
      <AboutText />
      <div className="h-96 w-1/2 bg-red-400"></div>
    </main>
  );
};
export default About;
