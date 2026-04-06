'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600',
      alt: 'Gym equipment and weights'
    },
    {
      url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600',
      alt: 'Training area with dumbbells'
    },
    {
      url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600',
      alt: 'Modern gym interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600',
      alt: 'Cardio zone equipment'
    },
    {
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600',
      alt: 'Group training session'
    },
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
      alt: 'Free weights section'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-32 bg-dark-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white tracking-tight mb-4">
            OUR
            <br />
            <span className="text-gold">FACILITY</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Découvrez nos installations de pointe et notre espace d&apos;entraînement premium.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Plus className="text-gold" size={48} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
