'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data: any) => {
    // In a real application, you would handle form submission here
    console.log(data);
    alert('Message received. I\'ll get back to you if I\'m not busy.');
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://wallpapercave.com/wp/wp10509781.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-black/80"></div>
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
            <span className="text-amber-400">CONTACT</span> ME
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            For business inquiries or if you need my particular set of skills, leave a message below.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900/70 backdrop-blur-sm rounded-lg border border-gray-800 p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-4 py-3 bg-gray-800 border ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name.message as string}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`w-full px-4 py-3 bg-gray-800 border ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email.message as string}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  className={`w-full px-4 py-3 bg-gray-800 border ${
                    errors.subject ? 'border-red-500' : 'border-gray-700'
                  } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                  placeholder="How can I help you?"
                />
                {errors.subject && (
                  <p className="mt-1 text-red-500 text-sm">{errors.subject.message as string}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-4 py-3 bg-gray-800 border ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                  placeholder="Tell me about your request..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message.message as string}</p>
                )}
              </div>
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-6 rounded-md transition duration-300"
                >
                  SEND MESSAGE
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-6">Or find me at</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-amber-500 hover:text-black rounded-full text-amber-400 transition-colors duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-amber-500 hover:text-black rounded-full text-amber-400 transition-colors duration-300"
                aria-label="The Continental"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-amber-500 hover:text-black rounded-full text-amber-400 transition-colors duration-300"
                aria-label="Gold Coin"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-gray-500 text-sm">
              * Please note: This is a fan-made website. John Wick is a fictional character.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
