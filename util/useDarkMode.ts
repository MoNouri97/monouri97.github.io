import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [enabledState, setEnabledState] = useState(true);
  useEffect(() => {
    // On page load or when changing themes
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setEnabledState(true);
    } else {
      document.documentElement.classList.remove('dark');
      setEnabledState(false);
    }
  }, []);

  // Use our useLocalStorage hook to persist state through a page refresh.
  // Fire off effect that add/removes dark mode class
  useEffect(() => {
    const className = 'dark';
    const element = window.document.documentElement;
    if (enabledState) {
      element.classList.add(className);
      localStorage.theme = 'dark';
    } else {
      element.classList.remove(className);
      localStorage.theme = 'light';
    }
  }, [enabledState]);

  return { isDark: enabledState, setIsDark: setEnabledState };
};
