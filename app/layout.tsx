import type { Metadata } from 'next'
import { Inter, Comic_Neue, Poppins, Roboto, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const comicNeue = Comic_Neue({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-comic' })
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })
const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['latin'], variable: '--font-roboto' })
const playfair = Playfair_Display({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'AI/ML Engineer Portfolio',
  description: 'Advanced AI/ML Engineer Portfolio showcasing projects, skills, and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${comicNeue.variable} ${poppins.variable} ${roboto.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}

