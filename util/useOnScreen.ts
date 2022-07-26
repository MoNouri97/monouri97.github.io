import { useEffect, useRef, useState } from 'react';

export const useOnScreen = (ids: string[], rootMargin: string = '0px') => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<string>();
  const prev = useRef<string>();
  const updateState = (entry: IntersectionObserverEntry) => {
    // console.log({
    //   is: entry.isIntersecting,
    //   id: entry.target.id,
    //   prev: prev.current,
    // });

    if (entry.isIntersecting) {
      setIntersecting(isIntersecting => {
        prev.current = isIntersecting;
        return entry.target.id;
      });
    } else if (isIntersecting === entry.target.id) {
      setIntersecting(prev.current);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        updateState(entry);
      },
      {
        rootMargin,
        threshold: 0.5,
      }
    );
    ids.forEach(id => {
      observer.observe(document.getElementById(id)!);
    });

    return () => {
      ids.forEach(id => {
        observer.unobserve(document.getElementById(id)!);
      });
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
};
