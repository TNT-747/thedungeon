'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-dark-2 to-dark-3"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Image
          src="/logo.png"
          alt=""
          width={600}
          height={600}
          className="w-[500px] h-[500px] object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1 
            {...fadeInUp}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-white tracking-tight leading-none"
          >
            FORGE YOUR
            <br />
            <span className="text-gold">LIMITS</span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-heading text-white/90 tracking-wide"
          >
            The Dungeon Club — Beni-Mellal
          </motion.h2>

          {/* Description */}
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-body leading-relaxed"
          >
            Transform your body. Elevate your mind. Join Beni-Mellal&apos;s most elite training facility.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8"
          >
            <a
              href="#offers"
              className="w-full sm:w-auto px-10 py-4 bg-gold text-dark font-heading text-xl tracking-wider font-bold rounded-sm hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              JOIN NOW
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white text-white font-heading text-xl tracking-wider font-bold rounded-sm hover:bg-white hover:text-dark transition-all duration-300 hover:scale-105"
            >
              DISCOVER MORE
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="text-gold" size={40} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
