'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Gun Fu', level: 100, description: 'Master of close-quarters combat with firearms' },
  { name: 'Tactical Combat', level: 98, description: 'Expert in various combat techniques and strategies' },
  { name: 'Weapon Mastery', level: 100, description: 'Proficient with all types of firearms and melee weapons' },
  { name: 'Stealth', level: 95, description: 'Adept at moving undetected and silent takedowns' },
  { name: 'Tactical Driving', level: 90, description: 'Expert in high-speed pursuits and defensive driving' },
  { name: 'Hand-to-Hand Combat', level: 99, description: 'Master of multiple martial arts disciplines' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-20"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-amber-400">SPECIAL</span> SKILLS
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Trained by the deadliest assassins in the world, John Wick is a master of his craft with unparalleled skills that make him the most feared hitman in the criminal underworld.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                <span className="text-amber-400 font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-amber-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
