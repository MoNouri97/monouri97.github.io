import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FiGithub, FiMenu, FiX } from 'react-icons/fi';
import { useOnScreen } from '../util/useOnScreen';
import { useScrollPosition } from '../util/useScrollPosition';
import DarkModeButton from './DarkModeButton';
import IconButton from './IconButton';

type NavbarProps = {};

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};
const Navbar: React.FC<NavbarProps> = ({}) => {
  const [links, setLinks] = useState([
    { label: 'About', link: '#about', current: true },
    { label: 'Skills', link: '#skills' },
    { label: 'Experience', link: '#experience' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' },
  ]);

  const [rightLinks, setRightLinks] = useState([
    {
      link: 'https://drive.google.com/file/d/1r0tZ1QITfDBF-7DsbyusX5dcod5WaaXv/view',
      name: 'Get CV',
    },
    {
      link: 'https://github.com/MoNouri97',
      name: 'Github',
      icon: <FiGithub size={20} />,
    },
  ]);

  const isTop = useScrollPosition();
  const isIntersecting = useOnScreen(links.map(l => l.link.slice(1)));
  useEffect(() => {
    setLinks(
      links.map(l => ({ ...l, current: l.link === `#${isIntersecting}` }))
    );
  }, [isIntersecting]);
  // improvements
  return (
    <Disclosure
      as="nav"
      className={`sticky top-0 z-[99] w-full duration-200 ${
        isTop
          ? ''
          : 'bg-slate-300 shadow backdrop-blur-md dark:bg-darker sm:bg-slate-300/50 sm:dark:bg-darker/50'
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[90rem] px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="dar:text-gray-400 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="font-cursive text-xl sm:ml-0">
                    Nouri <span className="hidden sm:inline"> Mohamed </span>
                  </h1>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex flex-wrap space-x-4">
                    {links.map(item => (
                      <motion.a
                        key={item.label}
                        href={item.link}
                        className={classNames(
                          item.current
                            ? 'active'
                            : 'hover:bg-gray-700 hover:text-white dark:text-gray-300',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <ul className="flex  items-center justify-end gap-2">
                  <span className="hidden items-center gap-2 sm:flex">
                    {rightLinks.map(({ link, icon, name }, i) => (
                      <IconButton
                        key={name}
                        icon={icon}
                        onClick={() => window.open(link, '_blank')}
                      >
                        {name}
                      </IconButton>
                    ))}
                  </span>
                  <DarkModeButton />
                </ul>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {links.map(item => (
                <Disclosure.Button
                  key={item.label}
                  as="a"
                  href={item.link}
                  className={classNames(
                    'hover:bg-gray-700 hover:text-white dark:text-gray-300',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.label}
                </Disclosure.Button>
              ))}
              {rightLinks.map(item => (
                <Disclosure.Button
                  as="a"
                  key={item.name}
                  href={item.link}
                  className={
                    'block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white dark:text-gray-300'
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
