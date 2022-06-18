import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Title from '../Title';

type ContactsProps = {};

const Contacts: React.FC<ContactsProps> = ({}) => {
  return (
    <section id="contact" className="flex-center w-full flex-wrap ">
      <Title>Contact</Title>
      <div className="flex-center mx-auto w-full max-w-7xl flex-col p-10 pb-20 ">
        <h1 className="w-full text-xl opacity-75">Happy to chat 👋😺 </h1>
        <h1 className="flex-center w-full justify-start text-xl hover:text-green-600 dark:hover:text-green-400">
          <FiMail /> :
          <a
            className="px-2"
            href="mailto:mohamed.nouri.1997@gmail.com"
            target="_blank"
          >
            mohamed.nouri.1997@gmail.com
          </a>
        </h1>
        <h1 className="flex-center w-full justify-start text-xl hover:text-green-600 dark:hover:text-green-400">
          <FiLinkedin /> :
          <a
            className="px-2"
            href="https://www.linkedin.com/in/mohamed-nouri-80396515b/"
            target="_blank"
          >
            mohamed nouri
          </a>
        </h1>
        <h1 className="flex-center w-full justify-start text-xl hover:text-green-600 dark:hover:text-green-400">
          <FiGithub /> :
          <a
            className="px-2"
            href="https://github.com/MoNouri97"
            target="_blank"
          >
            MoNouri97
          </a>
        </h1>
      </div>
    </section>
  );
};
export default Contacts;
