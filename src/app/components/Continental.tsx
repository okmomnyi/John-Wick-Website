'use client';

/**
 * Continental Component - Information about The Continental hotel
 * @author Ok Momanyi
 */

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Continental() {
  return (
    <section id="continental" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src="/images/Continental Hotel.jpeg"
            alt="The Continental Hotel"
            fill
            className="object-cover opacity-20"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            THE <span className="text-amber-400">CONTINENTAL</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A neutral territory for members of the assassin underworld. No business may be conducted on Continental grounds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 overflow-hidden rounded-lg border border-amber-500/20"
          >
            <Image
              src="/images/Continental Hotel.jpeg"
              alt="The Continental Hotel"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-bebas tracking-wider">THE CONTINENTAL HOTEL</h3>
              <p className="text-amber-100">A sanctuary for those who live by the code</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-amber-400 mb-3">Rules of the Continental</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-300">No business may be conducted on Continental grounds.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-300">Every service provided by the Continental carries a price.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-300">Honor the marker, a blood oath that cannot be undone.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-300">Violation of these rules results in excommunicado.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-amber-400 mb-3">Services</h3>
              <p className="text-gray-300 mb-4">The Continental provides various services to its members, including:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-300">Weapons</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-300">Medical</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-300">Cleanup</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-300">Intel</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-300">Safe Haven</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-gray-300">Discretion</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
