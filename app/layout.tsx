import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avimora | Portfolio',
  description: 'Développeur Full Stack passionné par la création d\'expériences web modernes et innovantes.',
  keywords: ['développeur', 'full stack', 'react', 'next.js', 'portfolio'],
  authors: [{ name: 'Avimora' }],
  openGraph: {
    title: 'Avimora | Portfolio',
    description: 'Développeur Full Stack passionné par la création d\'expériences web modernes et innovantes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1f2937',
              color: '#fff',
              border: '1px solid #374151',
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}