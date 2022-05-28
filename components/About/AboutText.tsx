import React from 'react';

type AboutTextProps = {};

const AboutText: React.FC<AboutTextProps> = ({}) => {
  return (
    <div className="order-2 w-full px-4 sm:order-none sm:w-1/2">
      <h1 className="text-5xl">
        Hello! I’m <br /> Mohamed Nouri.
      </h1>
      <p className="my-10 max-w-3xl text-gray-500">
        I've always loved computers and that's what eventually lead me to
        programming,
        <br />
        <br />
        I enjoy solving problems and writing algorithms.
        <br />
        <br />I am also very interested in web development especially the
        amazing and ever expanding world of{' '}
        <span className="text-black dark:text-white"> JavaScript </span>
      </p>
    </div>
  );
};
export default AboutText;
