import Image from 'next/image';
import React from 'react';
import AboutText from './AboutText';
import FloatingCircle from './FloatingCircle';

type AboutProps = {};

const About: React.FC<AboutProps> = ({}) => {
  return (
    <main
      id="about"
      className="flex-center flex min-h-[100vh] w-full flex-wrap sm:py-10 sm:px-20"
    >
      <AboutText />
      <div className="relative w-[888px]">
        <FloatingCircle
          right={150}
          top={50}
          scale={0.5}
          logo="/img/ts-logo.png"
        />
        <FloatingCircle
          right={400}
          top={70}
          scale={0.8}
          logo="/img/ts-logo.png"
        />
        <FloatingCircle right={500} top={200} logo="/img/ts-logo.png" />
        <FloatingCircle
          right={300}
          top={300}
          scale={2}
          logo="/img/ts-logo.png"
        />
        <Image width={888} height={888} src={'/img/Saly-13.png'} />
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
