'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';

// Import other components we'll create
import Skills from './components/Skills';
import Continental from './components/Continental';
import Weapons from './components/Weapons';
import Contact from './components/Contact';

// Fonts
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
        <motion.div
          className="text-amber-400 text-6xl font-bold mb-4 tracking-wider"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          JOHN WICK
        </motion.div>
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-amber-400"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-black to-gray-900 text-white ${bebasNeue.variable} font-sans`}>
      <Head>
        <title>John Wick | Baba Yaga</title>
        <meta name="description" content="John Wick - The Baba Yaga, The Boogeyman, The Man, The Myth, The Legend" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* The Continental Section */}
      <Continental />

      {/* Weapons Section */}
      <Weapons />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
