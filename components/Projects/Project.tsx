import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export type ProjectData = {
  title: string;
  description: string;
  tags: string;
};
type ProjectProps = {
  isExpanded: boolean;
  onExpand: () => void;
} & ProjectData;

const Project: React.FC<ProjectProps> = ({
  isExpanded,
  onExpand,
  title,
  description,
  tags,
}) => {
  return (
    <>
      <motion.div
        layout
        className={` flex flex-col justify-between rounded-lg bg-slate-200 p-8 dark:bg-dark ${
          isExpanded
            ? 'fixed top-0 z-[101] h-auto sm:top-64 lg:left-64 lg:right-64 '
            : 'h-70 max-w-sm'
        } `}
      >
        <motion.a onClick={onExpand}>
          <motion.h5
            layout="position"
            className="mb-2 cursor-pointer text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {title}
          </motion.h5>
        </motion.a>

        {!isExpanded ? (
          <p className="mb-3  font-normal text-gray-800 dark:text-gray-400">
            {description.slice(0, 50) + '...'}
          </p>
        ) : (
          <>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <div className="my-10">
              {tags.split(';').map(tag => (
                <span className="m-1 rounded bg-slate-300 p-2 text-sm dark:bg-darker">
                  {tag.trim()}
                </span>
              ))}
            </div>
          </>
        )}
        <motion.button
          onClick={onExpand}
          className="inline-flex max-w-md items-center rounded-lg bg-green-400 py-2 px-3 text-center text-sm font-medium text-white hover:bg-green-800  dark:bg-green-600 dark:hover:bg-green-700"
        >
          {isExpanded ? 'Read Less' : 'Read more'}
          <FiArrowRight className="ml-2 -mr-1 h-4 w-4" />
        </motion.button>
      </motion.div>
      {isExpanded && <div className="h-44 w-96 max-w-sm"></div>}
    </>
  );
};
export default Project;
