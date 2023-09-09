import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'

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
      <body className={josefin_Sans.className}>{children}</body>
    </html>
  )
}
