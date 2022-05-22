import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-200 dark:bg-dark dark:text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <About />
    </div>
  );
};

export default Home;
