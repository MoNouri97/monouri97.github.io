import React, { ReactElement } from 'react';

type IconProps = {
  icon?: ReactElement;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
};

const IconButton: React.FC<IconProps> = ({ children, icon, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`flex-center cursor-pointer bg-slate-200 text-center  text-green-500 shadow-sm transition-all  hover:-translate-y-1 hover:shadow-md dark:bg-stone-900  hover:dark:shadow-darker ${
        !!icon ? 'h-11 w-11 rounded-full' : 'rounded-xl px-4 py-2'
      }`}
    >
      {icon ?? children}
    </li>
  );
};

export default IconButton;
