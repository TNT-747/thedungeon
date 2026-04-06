'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Crown } from 'lucide-react'

export default function Offers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSelectPlan = (planName) => {
    const message = encodeURIComponent(
      `Bonjour The Dungeon Club! 👋\n\nJe suis intéressé(e) par le plan *${planName}*.\n\nVeuillez trouver mes informations ci-dessous:\n\n👤 Nom complet: \n🎂 Age: \n🎯 Objectif fitness: \n📍 Ville: `
    )
    window.open(`https://wa.me/212705957902?text=${message}`, '_blank')
  }

  const plans = [
    {
      name: 'STARTER',
      duration: '1 Month',
      price: '199',
      features: [
        'Full gym access',
        'Locker room',
        'Cardio zone',
        'Free weights area'
      ],
      popular: false
    },
    {
      name: 'WARRIOR',
      duration: '3 Months',
      price: '499',
      features: [
        'All Starter features',
        'Personalized training plan',
        'Progress tracking',
        'Group classes'
      ],
      popular: false
    },
    {
      name: 'ELITE',
      duration: '6 Months',
      price: '899',
      features: [
        'All Warrior features',
        'Nutrition guide',
        'Body composition analysis',
        'Priority equipment access'
      ],
      popular: true
    },
    {
      name: 'CHAMPION',
      duration: '12 Months',
      price: '1499',
      features: [
        'All Elite features',
        '3 Free PT sessions/month',
        'VIP locker',
        'Direct coach messaging',
        'Guest passes'
      ],
      popular: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="offers" ref={ref} className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white tracking-tight mb-4">
            CHOOSE YOUR
            <br />
            <span className="text-gold">PLAN</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Investissez dans votre transformation. Chaque plan est conçu pour vous mener vers vos objectifs.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative bg-dark-3 border rounded-sm p-6 sm:p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-gold shadow-lg shadow-gold/20' 
                  : 'border-gold/20 hover:border-gold/60'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-dark px-4 py-1 rounded-full flex items-center gap-1">
                  <Crown size={16} />
                  <span className="text-xs font-heading font-bold tracking-wider">MOST POPULAR</span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 tracking-wider">
                  {plan.name}
                </h3>
                <p className="text-white/60 text-sm mb-4">{plan.duration}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-heading font-bold text-gold">{plan.price}</span>
                  <span className="text-white/60 text-lg">MAD</span>
                </div>
                {plan.name === 'STARTER' && (
                  <span className="text-white/40 text-sm">/month</span>
                )}
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-white/80 text-sm">
                    <Check className="text-gold flex-shrink-0 mt-0.5" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full py-3 px-6 font-heading text-lg tracking-wider font-bold rounded-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gold text-dark hover:bg-gold/90'
                    : 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-dark'
                }`}
              >
                SELECT PLAN
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
