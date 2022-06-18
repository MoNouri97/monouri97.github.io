import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import AboutText from './AboutText';

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
      <motion.div
        animate={{ x: 0, y: 0 }}
        transition={{ type: 'spring' }}
        className="relative w-[500px] cursor-grab"
        style={{ x, y }}
        drag
        dragElastic={0.06}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        whileTap={{ cursor: 'grabbing' }}
      >
        <Parallax speed={-10}>
          <img src={'/img/BG.png'} className="pointer-events-none" />
        </Parallax>
        <motion.img
          style={{
            x,
            y,
            rotateX,
            rotateY,
            z: 100000,
          }}
          className="pointer-events-none absolute top-0 -left-10"
          src={'/img/FG.png'}
        />
      </motion.div>
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
