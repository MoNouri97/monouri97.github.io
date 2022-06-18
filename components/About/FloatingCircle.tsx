import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type FloatingCircleProps = {
  top: number;
  right: number;
  logo: string;
  scale?: number;
};

const FloatingCircle: React.FC<FloatingCircleProps> = ({
  top,
  right,
  logo,
  scale = 1,
}) => {
  return (
    <motion.div
      transition={{
        repeatType: 'reverse',
        repeat: Infinity,
        duration: 1,
      }}
      // animate={{
      //   translateY: Math.random() * 100,
      // }}
      style={{
        top,
        right,
      }}
      className="flex-center absolute h-20 w-20 overflow-hidden rounded-full bg-slate-900 text-3xl text-white shadow-xl"
    >
      <Image width={40} height={40} src={logo} />
    </motion.div>
  );
};
export default FloatingCircle;
