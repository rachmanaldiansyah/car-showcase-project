import type { Metadata } from 'next'
import './globals.css'

import { Navbar, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover Best Car In The World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/logo.svg'/>
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
