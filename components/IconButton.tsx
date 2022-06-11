import { motion, useAnimation } from 'framer-motion';
import React, { ReactElement } from 'react';

type IconProps = {
  icon?: ReactElement;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
};

const IconButton: React.FC<IconProps> = ({ children, icon, onClick }) => {
  const controls = useAnimation();
  return (
    <motion.li
      animate={controls}
      onClick={async e => {
        await controls.start({
          translateY: 10,
          scale: 0.5,
          transition: {
            duration: 0.1,
            repeat: 1,
            repeatType: 'mirror',
          },
        });
        onClick?.(e);
      }}
      className={`flex-center cursor-pointer bg-slate-200 text-center  text-green-500 shadow-sm transition-all hover:bg-green-500 hover:text-slate-200  hover:shadow-md dark:bg-stone-900 hover:dark:shadow-darker ${
        !!icon ? 'h-11 w-11 rounded-full' : 'rounded-xl px-4 py-2'
      }`}
    >
      {icon ?? children}
    </motion.li>
  );
};

export default IconButton;
