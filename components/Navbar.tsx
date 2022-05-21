import { Disclosure } from '@headlessui/react'
import React from 'react'
import { FiMail, FiMenu, FiX } from 'react-icons/fi'

type NavbarProps = {}

const links = [
  { label: 'About', link: '#', current: true },
  { label: 'Skills', link: '#' },
  { label: 'Experience', link: '#' },
  { label: 'Projects', link: '#' },
  { label: 'Contact', link: '#' },
]
const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}
const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl bg-dark px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    Nouri Mohamed
                  </h1>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex flex-wrap space-x-4">
                    {links.map(item => (
                      <a
                        key={item.label}
                        href={item.link}
                        className={classNames(
                          item.current
                            ? 'active'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <ul className="flex  items-center justify-end gap-2">
                  <li className="rounded-xl bg-stone-900 py-2 px-4 text-green-500">
                    Get CV
                  </li>
                  <li className="flex-center h-11 w-11 rounded-full bg-stone-900 text-center text-green-500">
                    <FiMail size={20} />
                  </li>
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
                    item.current
                      ? 'active bg-gray-900'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
  )
}
// const Navbar: React.FC<NavbarProps> = ({}) => {
//   return (
//     <nav className="flex w-4/5 flex-wrap items-center justify-start py-4 ">
//       <div className="flex w-1/2 justify-between">
//         <h1 className="font-cursive text-xl">Nouri Mohamed</h1>
//         <ul className="flex flex-wrap gap-6 ">
//           {links.map(l => (
//             <li className={l.label == 'About' ? 'active' : ''}>{l.label}</li>
//           ))}
//         </ul>
//       </div>
//       <ul className="flex w-1/2 items-center justify-end gap-2">
//         <li className="rounded-xl bg-stone-900 py-2 px-4 text-green-500">
//           Get CV
//         </li>
//         <li className="flex-center h-11 w-11 rounded-full bg-stone-900 text-center text-green-500">
//           <FiMail size={20} />
//         </li>
//       </ul>
//     </nav>
//   )
// }
export default Navbar
