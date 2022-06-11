import { motion } from 'framer-motion';
import React from 'react';

type ProjectProps = {
  isExpanded: boolean;
  onExpand: () => void;
};

const Project: React.FC<ProjectProps> = ({ isExpanded, onExpand }) => {
  // const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <motion.div
        layout
        className={` rounded-lg border bg-slate-200 p-8 dark:bg-dark ${
          isExpanded ? 'absolute z-[101]' : 'h-44 max-w-sm'
        } `}
      >
        <motion.a href="#">
          <motion.h5
            layout="position"
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Noteworthy technology acquisitions 2021
          </motion.h5>
        </motion.a>
        {isExpanded && (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        )}
        <motion.button
          onClick={onExpand}
          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </motion.button>
      </motion.div>
      {isExpanded && <div className="h-44 w-96 max-w-sm"></div>}
    </>
  );
};
export default Project;
