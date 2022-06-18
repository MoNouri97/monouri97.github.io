import React from 'react';

type TagsProps = {
  data: string;
  limit?: number;
};

const Tags: React.FC<TagsProps> = ({ data, limit }) => {
  return (
    <div className="flex flex-wrap">
      {data
        .split(';')
        .slice(0, limit)
        .map(tag => (
          <span
            key={tag}
            className="m-1 rounded bg-slate-300 p-2 text-sm capitalize dark:bg-darker"
          >
            {tag.trim()}
          </span>
        ))}
    </div>
  );
};
export default Tags;
