import React from 'react';
import { FiCalendar } from 'react-icons/fi';

type TimelineEntryProps = {
  date: string;
  title: string;
  desc: string;
  isRight?: boolean;
};

const TimelineEntry: React.FC<TimelineEntryProps> = ({
  date,
  desc,
  title,
  isRight = false,
}) => {
  return (
    <li>
      <div
        className={`flex-end mt-2 lg:flex ${
          isRight ? 'flex-row-reverse' : 'flex-row-reverse lg:flex-row'
        }`}
      >
        <div
          className={`max-w-md rounded bg-slate-200 p-8 shadow-black transition-all  hover:-translate-y-1 hover:shadow-xl dark:bg-dark ${
            !isRight ? 'ml-6 lg:mr-6' : 'ml-6'
          }`}
        >
          <div className="mb-4 flex justify-between">
            <a
              href="#!"
              className="text-sm font-medium text-green-500 transition duration-300 ease-in-out hover:text-purple-700 focus:text-purple-800"
            >
              {title}
            </a>
            <a
              href="#!"
              className="text-sm font-medium text-green-500 transition duration-300 ease-in-out hover:text-purple-700 focus:text-purple-800"
            >
              {date}
            </a>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-200">{desc}</p>
        </div>
        <div
          className={`z-50 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 ${
            !isRight ? '-ml-3 lg:-mr-3 ' : '-ml-3 '
          }`}
        >
          <FiCalendar />
        </div>
      </div>
    </li>
  );
};
export default TimelineEntry;
