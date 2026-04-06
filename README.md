# The Dungeon Club - Gym Website

A modern, production-ready gym website built with Next.js 14 for The Dungeon Club in Beni-Mellal, Morocco.

## 🚀 Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Lucide React** icons
- Fully responsive design (mobile-first)
- Smooth scroll behavior
- WhatsApp integration for membership inquiries
- 4 membership tiers (Starter, Warrior, Elite, Champion)
- 4 coaching services (Personal Training, Online, Group, Nutrition)
- Google Maps integration
- SEO optimized
- Dark premium aesthetic
- Circular logo integration throughout

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation

1. Navigate to the project directory:
```bash
cd c:\Users\akassimi\Documents\THEDUNGEON
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
THEDUNGEON/
├── app/
│   ├── layout.js          # Root layout with fonts and metadata
│   ├── page.js            # Main page assembling all sections
│   └── globals.css        # Global styles and Tailwind
├── components/
│   ├── Navbar.jsx         # Sticky navigation with mobile menu
│   ├── Hero.jsx           # Hero section with CTAs
│   ├── About.jsx          # About section with stats
│   ├── Offers.jsx         # Pricing plans with WhatsApp integration
│   ├── Gallery.jsx        # Image gallery
│   ├── Testimonials.jsx   # Customer reviews
│   ├── Contact.jsx        # Contact info and Google Maps
│   └── Footer.jsx         # Footer with links and social
├── tailwind.config.js     # Tailwind customization
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

## 🎨 Design System

### Colors
- **Dark Background**: `#0a0a0a`, `#111111`, `#1a1a1a`
- **Gold Accent**: `#c8a96e`
- **Text**: `#ffffff` with opacity variants

### Typography
- **Headings**: Bebas Neue (Google Fonts)
- **Body**: Inter (Google Fonts)

## 📱 Contact Information

- **Location**: Av. Mohammed VI, Beni-Mellal 23000, Morocco
- **Phone**: 0705957902
- **WhatsApp**: https://wa.me/212705957902
- **Instagram**: @the.dungeon.club
- **Owner**: El Michawi

## 🔧 Customization

### Update Business Info
Contact details are in `components/Contact.jsx` and `components/Footer.jsx`.

### Modify Pricing Plans
Edit the `plans` array in `components/Offers.jsx`.

### Change Images
Update the `images` array in `components/Gallery.jsx` with new Unsplash URLs.

### Update WhatsApp Template
Modify the `handleSelectPlan` function in `components/Offers.jsx`.

## 📄 License

© 2026 The Dungeon Club. All rights reserved.

## 👤 Owner

El Michawi
