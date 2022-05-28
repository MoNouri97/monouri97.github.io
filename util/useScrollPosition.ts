import { useEffect, useState } from 'react';

const getTop = (doc: HTMLElement) => {
  const top = (window.pageYOffset ?? doc.scrollTop) - (doc.clientTop ?? 0);
  return top;
};
export const useScrollPosition = () => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    setIsTop(getTop(document.documentElement) < 100);
    window.addEventListener('scroll', () => {
      // const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      const top = getTop(document.documentElement);
      return setIsTop(top < 100);
    });
  }, []);

  return isTop;
};
