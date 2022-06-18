import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FiMail, FiMenu, FiX } from 'react-icons/fi';
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
  const isTop = useScrollPosition();
  const isIntersecting = useOnScreen(links.map(l => l.link.slice(1)));
  useEffect(() => {
    setLinks(
      links.map(l => ({ ...l, current: l.link === `#${isIntersecting}` }))
    );
  }, [isIntersecting]);

  return (
    <Disclosure
      as="nav"
      className={`sticky top-0 z-[99] w-full duration-200 ${
        isTop ? '' : 'bg-slate-300 shadow dark:bg-darker'
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[90rem] px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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
                  <h1 className="-ml-16 font-cursive text-xl sm:ml-0">
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <ul className="flex  items-center justify-end gap-2">
                  <IconButton
                    onClick={() =>
                      window.open(
                        'https://drive.google.com/file/d/1r0tZ1QITfDBF-7DsbyusX5dcod5WaaXv/view',
                        '_blank'
                      )
                    }
                  >
                    Get CV
                  </IconButton>
                  <IconButton
                    icon={<FiMail size={20} />}
                    onClick={() =>
                      window.open(
                        'mailto:mohamed.nouri.1997@gmail.com',
                        '_blank'
                      )
                    }
                  />
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
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
