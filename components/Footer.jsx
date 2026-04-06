import { Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Offers', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/the.dungeon.club',
      icon: Instagram
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/212705957902',
      icon: MessageCircle
    }
  ]

  return (
    <footer className="bg-dark border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="The Dungeon Club"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain rounded-full bg-black p-2 border-2 border-gold/30"
                />
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="text-xl font-heading text-white font-bold tracking-wider">
                    THE DUNGEON
                  </span>
                  <span className="text-xl font-heading text-gold font-bold tracking-wider">
                    CLUB
                  </span>
                </div>
                <p className="text-gold font-heading text-sm tracking-wide">
                  Forge Your Limits
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Beni-Mellal&apos;s premier fitness destination. Transform your body, elevate your mind, and join our elite community.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-heading text-xl tracking-wider mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact & Follow */}
          <div>
            <h3 className="text-white font-heading text-xl tracking-wider mb-4">
              CONTACT
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="text-gold flex-shrink-0 mt-0.5" size={18} />
                <span>Av. Mohammed VI, Beni-Mellal 23000</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Phone className="text-gold flex-shrink-0 mt-0.5" size={18} />
                <a href="tel:+212705957902" className="hover:text-gold transition-colors">
                  0705957902
                </a>
              </li>
            </ul>

            <h3 className="text-white font-heading text-xl tracking-wider mb-4">
              FOLLOW US
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold/10 p-3 rounded-sm hover:bg-gold hover:scale-110 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="text-gold group-hover:text-dark transition-colors" size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>
              © {currentYear} The Dungeon Club. All rights reserved.
            </p>
            <p>
              Owner: <span className="text-gold">El Michawi</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
