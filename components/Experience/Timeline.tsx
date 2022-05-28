import React from 'react';
import experiences from '../../constants/experiences';
import TimelineEntry from './TimelineEntry';

type TimelineProps = {};

const Timeline: React.FC<TimelineProps> = ({}) => {
  return (
    <>
      <ol className="border-l-2 border-gray-500 lg:border-0">
        {experiences
          .filter((_, i) => i % 2 == 0)
          .map(ex => (
            <TimelineEntry key={ex.title} {...ex} />
          ))}
      </ol>
      <ol className="border-l-2 border-gray-500 pt-24">
        {experiences
          .filter((_, i) => i % 2 != 0)
          .map(ex => (
            <TimelineEntry key={ex.title} isRight {...ex} />
          ))}
      </ol>
    </>
  );
};
export default Timeline;
