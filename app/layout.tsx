import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MicroHabit Stacker - Build Lasting Habits in 2 Minutes',
  description: 'Scientifically-backed micro-habits delivered at your optimal moments. Build consistency with AI-powered habit stacking for busy professionals.',
  keywords: 'habits, productivity, micro-habits, habit building, busy professionals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
