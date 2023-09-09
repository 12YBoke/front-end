import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '100'
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
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
