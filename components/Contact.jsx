'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Av. Mohammed VI, Beni-Mellal 23000, Morocco',
      link: null
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '0705957902',
      link: 'tel:+212705957902'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@the.dungeon.club',
      link: 'https://www.instagram.com/the.dungeon.club'
    }
  ]

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-dark-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white tracking-tight mb-4">
            FIND
            <br />
            <span className="text-gold">US</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Visitez-nous aujourd&apos;hui et commencez votre parcours de transformation.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Items */}
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-dark-3 border border-gold/20 rounded-sm p-6 hover:border-gold/60 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-sm">
                      <Icon className="text-gold" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-heading text-xl mb-2 tracking-wide">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-gold transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-white/80">{item.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/212705957902"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gold text-dark font-heading text-xl tracking-wider font-bold py-4 px-6 rounded-sm hover:bg-gold/90 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={24} />
              CONTACT US ON WHATSAPP
            </a>
          </motion.div>

          {/* Right Column - Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-full min-h-[400px] rounded-sm overflow-hidden border border-gold/20"
          >
            <iframe
              src="https://maps.google.com/maps?q=Av.+Mohammed+VI,+Beni-Mellal,+Morocco&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Dungeon Club Location"
              className="absolute inset-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
