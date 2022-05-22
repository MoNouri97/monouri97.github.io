import React from 'react';

type AboutProps = {};

const About: React.FC<AboutProps> = ({}) => {
	return (
    <main className="flex-center flex min-h-[80vh] w-full max-w-7xl flex-wrap sm:py-10 sm:px-20">
      <div className="order-2 w-full px-4 sm:order-none sm:w-1/2">
        <h1 className="text-5xl">
          Hello! I’m <br /> Mohamed Nouri.
        </h1>
        <p className="mt-10 max-w-3xl text-gray-500">
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
      <div className="h-96 w-1/2 bg-red-400"></div>
    </main>
  );
};
export default About;
