import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Experience from '../components/Experience';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-200 dark:bg-dark dark:text-white">
      <Head>
        <title>Mohamed Nouri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
