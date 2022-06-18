import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { slideLeft, slideRight } from '../../util/animation';

export type TimelineEntryProps = {
  date: string;
  title: string;
  desc: string;
  details: string;
  isRight?: boolean;
  margin?: 'mt-8' | 'mt-24' | 'mt-96';
};

const TimelineEntry: React.FC<TimelineEntryProps> = ({
  date,
  desc,
  title,
  details,
  isRight = false,
  margin = 'mt-8',
}) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.li
      variants={!isRight ? slideLeft : slideRight}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.7, once: true }}
    >
      <div
        className={`flex-end ${margin} lg:flex ${
          isRight ? 'flex-row-reverse' : 'flex-row-reverse lg:flex-row'
        }`}
      >
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`max-w-md rounded bg-slate-200 p-8 shadow-black transition-all  hover:-translate-y-1 hover:shadow-xl dark:bg-dark ${
            !isRight ? 'ml-2 lg:mr-6' : 'ml-2 md:ml-6'
          }`}
        >
          <div className="mb-4 flex justify-between">
            <p className="text-sm font-medium text-green-500 transition duration-300 ease-in-out">
              {title}
            </p>
            <p className="text-sm font-medium text-green-500 transition duration-300 ease-in-out">
              {date}
            </p>
          </div>
          {desc.split('.').map(parg => (
            <p className="mb-6 text-gray-700 dark:text-gray-200">{parg}</p>
          ))}
          <div className="flex flex-wrap">
            {details.split(';').map(dt => (
              <span className="m-1 rounded bg-slate-300 p-2 text-sm dark:bg-darker">
                {dt.trim()}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`z-50 flex h-6 w-6 items-center justify-center rounded-full ${
            hover ? 'bg-green-500' : 'bg-slate-200 dark:bg-dark'
          } ${!isRight ? '-ml-3 lg:-mr-3 ' : '-ml-3 '}`}
        >
          <FiCalendar />
        </div>
      </div>
    </motion.li>
  );
};
export default TimelineEntry;
