'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Award, Clock, Dumbbell } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Users, number: '500+', label: 'Members' },
    { icon: Dumbbell, number: '10+', label: 'Coaches' },
    { icon: Award, number: '5', label: 'Years' },
    { icon: Clock, number: '24/7', label: 'Access' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-dark-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white tracking-tight">
              MORE THAN
              <br />
              <span className="text-gold">A GYM</span>
            </h2>
            <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
              <p>
                Welcome to <span className="text-gold font-semibold">The Dungeon Club</span>, where champions are forged and limits are shattered. We&apos;re not just a gym—we&apos;re a movement.
              </p>
              <p>
                Our state-of-the-art facility in the heart of Beni-Mellal combines cutting-edge equipment, expert coaching, and an unmatched community atmosphere. Whether you&apos;re a beginner or a seasoned athlete, we provide the tools and environment for total transformation.
              </p>
              <p>
                Join the elite. Train with purpose. <span className="text-gold font-semibold">Forge your limits</span>.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-dark-3 border border-gold/20 p-6 sm:p-8 rounded-sm hover:border-gold/60 transition-all duration-300 hover:scale-105 group"
                >
                  <Icon className="text-gold mb-4 group-hover:scale-110 transition-transform" size={36} />
                  <h3 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base font-medium tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
