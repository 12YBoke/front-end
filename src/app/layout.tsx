import { Navigation } from '@/ui/components/navigation/navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import { MobileNavigation } from '@/ui/components/navigation/mobile-navigation'
import { Toaster } from '@/components/ui/toaster'

const josefin_Sans = Josefin_Sans({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    default: 'L2FED',
    template: '%s | L2FED'
  },
  description: 'App pour enregister son billet chez L2FED',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={josefin_Sans.className}>
        <Navigation className='hidden md:block'/>
        <MobileNavigation className='md:hidden'/>
        {children}
        <Toaster/>
      </body>
    </html>
  )
}
