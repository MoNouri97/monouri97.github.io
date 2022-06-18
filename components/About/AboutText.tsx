import React from 'react';

type AboutTextProps = {};

const AboutText: React.FC<AboutTextProps> = ({}) => {
  return (
    <div className="order-2 w-full flex-grow px-4 sm:order-none sm:w-1/3 2xl:flex-grow-0">
      <span className="my-2 inline-block rounded-lg bg-green-500 px-4 py-1 text-white">
        Web Developer
      </span>
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
        <h1 className="my-8 border-l-4 border-green-500 px-4  text-xl text-green-500">
          LET'S CHAT
        </h1>
      </p>
    </div>
  );
};
export default AboutText;
