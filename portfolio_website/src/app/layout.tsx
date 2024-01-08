import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import BottomNav from './components/bottomnav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Casper Van Damme',
  description: 'portfolio van Casper Van Damme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Header/>
        {children}
        <BottomNav/>
        </body>
    </html>
  )
}
