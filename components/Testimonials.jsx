'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: 'Youssef B.',
      review: 'The best gym in Beni-Mellal, the coaches are professional and the equipment is top quality!',
      rating: 5
    },
    {
      name: 'Fatima Z.',
      review: 'I lost 15kg in 4 months thanks to The Dungeon Club. The atmosphere motivates you every day.',
      rating: 5
    },
    {
      name: 'Karim M.',
      review: 'Champion plan is worth every dirham. The personal training sessions changed everything for me.',
      rating: 5
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white tracking-tight mb-4">
            WHAT OUR
            <br />
            <span className="text-gold">MEMBERS SAY</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Rejoignez des centaines de membres satisfaits qui transforment leur vie au Dungeon Club.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-dark-3 border border-gold/20 rounded-sm p-8 hover:border-gold/60 transition-all duration-300 hover:scale-105 relative"
            >
              {/* Quote Icon */}
              <Quote className="text-gold/30 absolute top-6 right-6" size={48} />

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-gold fill-gold"
                    size={20}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/80 text-base leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Author Name */}
              <p className="text-gold font-heading text-xl tracking-wide font-bold relative z-10">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
