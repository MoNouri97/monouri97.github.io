import React from 'react';

const Title: React.FC = ({ children }) => {
  return (
    <h1 className="my-10 mx-auto w-full max-w-7xl border-l-4 border-green-500  p-4 text-3xl opacity-80">
      ~/{children}
    </h1>
  );
};
export default Title;
