import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import ScrollProgressBar from './ScrollProgressBar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <Head>
        <title>Frontend React Developer Portfolio</title>
        <meta name="description" content="Professional portfolio of a Frontend Developer specializing in React and React Native." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Frontend React Developer" />
        <meta name="keywords" content="React, React Native, Frontend Developer, Portfolio, Next.js, TypeScript, Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <ScrollProgressBar /> */}
       <main className="min-h-screen px-6 md:px-12 font-sans bg-black text-gray-300 transition-colors duration-700">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
