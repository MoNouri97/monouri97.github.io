import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowLeft, FiArrowRight, FiCode, FiEye } from 'react-icons/fi';
import Tags from './Tags';

export type ProjectData = {
  title: string;
  description: string;
  tags: string;
  links?: {
    path: string;
    name?: 'CODE' | 'DEMO' | Omit<string, 'CODE' | 'DEMO'>;
  }[];
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
  links = [],
}) => {
  return (
    <>
      <motion.div
        onClick={!isExpanded ? onExpand : undefined}
        layout
        transition={{ type: 'spring', duration: 0.6 }}
        className={` flex flex-col justify-between overflow-hidden rounded-lg bg-slate-200 p-8 dark:bg-dark ${
          isExpanded
            ? 'fixed top-0 bottom-0 z-[101] h-auto overflow-auto sm:bottom-[10vw] sm:top-[10vw]  lg:left-64 lg:right-64 '
            : 'h-70 group max-w-sm cursor-pointer'
        } `}
      >
        <motion.a>
          <motion.h5
            layout="position"
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-green-500 dark:text-white"
          >
            {title}
          </motion.h5>
        </motion.a>
        {!isExpanded ? (
          <>
            <Tags data={tags} limit={3} />
            <motion.p
              layout="position"
              className="mb-3  font-normal capitalize text-gray-800 dark:text-gray-400"
            >
              {description.slice(0, 50) + '...'}
            </motion.p>
          </>
        ) : (
          <>
            <p className="mb-3 font-normal capitalize text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <div className="my-10 flex flex-col flex-wrap">
              <Tags data={tags} />
              <div className="flex-centermt-5 flex-wrap justify-evenly">
                {links.map(link => (
                  <div className="flex-center m-2 rounded bg-slate-300 p-2 text-indigo-500 dark:bg-darker">
                    {link.name?.includes('CODE') ? <FiCode /> : <FiEye />}

                    <a className="px-2" href={link.path} target="_blank">
                      {link.name} : {link.path.slice(0, 40)}...
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        <motion.button
          onClick={onExpand}
          className="inline-flex max-w-md items-center rounded-lg bg-green-200 py-2 px-3 text-center text-sm font-medium text-dark  dark:bg-green-600  dark:text-white "
        >
          {isExpanded ? 'Read Less' : 'Read more'}
          {isExpanded ? (
            <FiArrowLeft className="ml-2 -mr-1 h-4 w-4" />
          ) : (
            <FiArrowRight className="ml-2 -mr-1 h-4 w-4" />
          )}
        </motion.button>
      </motion.div>
      {isExpanded && <div className="h-44 w-96 max-w-sm"></div>}
    </>
  );
};
export default Project;
