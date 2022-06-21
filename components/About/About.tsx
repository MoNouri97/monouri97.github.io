import { useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import AboutText from './AboutText';
import Model from './Three/Model';

type AboutProps = {};

const About: React.FC<AboutProps> = ({}) => {
  const x = useMotionValue(Math.random() * 200 - 100);
  const y = useMotionValue(Math.random() * 200 - 100);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <main
      id="about"
      className="flex-center flex min-h-[100vh] w-full flex-wrap sm:py-10 sm:px-20"
    >
      <AboutText />
      <div>
        <Model />
      </div>
    </main>
  );
};
export default About;
// LOGO
// font-size: 44px;
// top: 34%;
// left: 24%;
// width: 100px;
// height: 100px;
// text-align: center;
