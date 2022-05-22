import { FiMoon, FiSun } from 'react-icons/fi';
import { useDarkMode } from '../util/useDarkMode';
import IconButton from './IconButton';
const DarkModeButton = ({}) => {
  const { isDark, setIsDark } = useDarkMode();
  return (
    <IconButton
      icon={isDark ? <FiMoon size={20} /> : <FiSun size={20} />}
      onClick={() => {
        setIsDark(!isDark);
      }}
    />
  );
};

export default DarkModeButton;
