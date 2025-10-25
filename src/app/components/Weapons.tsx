'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const weapons = [
  {
    name: 'Benelli M4 Super 90',
    type: 'Shotgun',
    caliber: '12 gauge',
    description: 'A semi-automatic shotgun used in close-quarters combat situations.',
    image: '/images/Benelli.jpeg',
    featured: false
  },
  {
    name: 'Glock 19',
    type: 'Pistol',
    caliber: '9×19mm Parabellum',
    description: 'A compact and reliable handgun used as a backup weapon.',
    image: '/images/XDS 9m vs P80 Glock 19.jpeg',
    featured: false
  },
  {
    name: 'Heckler & Koch Mark 23',
    type: 'Pistol',
    caliber: '.45 ACP',
    description: 'A high-precision handgun known for its accuracy and reliability.',
    image: '/images/Heckler & Koch Mark 23 and P7.jpeg',
    featured: true
  },
  {
    name: 'Microtech Halo V',
    type: 'Knife',
    caliber: 'N/A',
    description: 'A tactical OTF (out-the-front) automatic knife used in close combat.',
    image: '/images/MicroTech Halo.jpeg',
    featured: false
  },
  {
    name: 'Taran Tactical Combat Master',
    type: 'Pistol',
    caliber: '9×19mm Parabellum',
    description: 'A custom 2011 pistol built by Taran Tactical Innovations.',
    image: '/images/Taran Tactical pistol.jpeg',
    featured: true
  },
  {
    name: 'Taran Tactical TR-1 Ultralight',
    type: 'Rifle',
    caliber: '5.56×45mm NATO',
    description: 'A lightweight AR-15 style rifle used in Chapter 3.',
    image: '/images/Taran Tactical rifle.jpeg',
    featured: false
  }
];

export default function Weapons() {
  return (
    <section id="weapons" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/90">
          <Image
            src="/images/hero-bg.jpeg"
            alt="Background"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
        </div>
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
            <span className="text-amber-400">WEAPONS</span> & GEAR
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            John Wick is known for his impeccable taste in firearms and his exceptional skill in using them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weapons.map((weapon, index) => (
            <motion.div
              key={weapon.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gray-800/70 backdrop-blur-sm rounded-lg overflow-hidden border ${
                weapon.featured ? 'border-amber-500/50' : 'border-gray-700/50'
              } hover:border-amber-500/70 transition-all duration-300`}
            >
              <div className="h-64 relative overflow-hidden bg-black/30">
                <Image
                  src={weapon.image}
                  alt={weapon.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectPosition: weapon.name.includes('Taran Tactical') ? 'center 30%' : 
                                 weapon.name.includes('Microtech') ? 'center 25%' :
                                 weapon.name.includes('Heckler') ? 'center 35%' : 'center center'
                  }}
                  priority
                />
                {weapon.featured && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">
                    FAVORITE
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{weapon.name}</h3>
                  <span className="text-amber-400 text-sm font-mono bg-gray-900/50 px-2 py-1 rounded">
                    {weapon.type}
                  </span>
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <span className="mr-2">Caliber:</span>
                  <span className="text-white font-medium">{weapon.caliber}</span>
                </div>
                <p className="text-gray-300 text-sm">{weapon.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">* All weapons are used by John Wick in the movies</p>
          <p className="text-gray-500 text-xs">DISCLAIMER: This is a fan-made website. All weapons shown are for educational purposes only.</p>
        </motion.div>
      </div>
    </section>
  );
}
