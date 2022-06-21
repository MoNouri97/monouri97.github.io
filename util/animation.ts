import { Variants } from 'framer-motion';

export const slideLeft: Variants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};
export const slideRight: Variants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
};
export const popOutRight: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    originX: 0,
    originY: 0,
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
    originX: 0,
    originY: 0,
  },
};
export const popOutLeft: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    originX: 1,
    originY: 0,
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
    originX: 1,
    originY: 0,
  },
};
export const list: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};
