import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'The Dungeon Club | Salle de Sport Beni-Mellal',
  description: 'The Dungeon Club - La salle de sport premium à Beni-Mellal. Coaching professionnel, équipements modernes. Av. Mohammed VI, Beni-Mellal.',
  keywords: 'gym, fitness, Beni-Mellal, Morocco, salle de sport, musculation, cardio',
  openGraph: {
    title: 'The Dungeon Club | Salle de Sport Beni-Mellal',
    description: 'The Dungeon Club - La salle de sport premium à Beni-Mellal.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
