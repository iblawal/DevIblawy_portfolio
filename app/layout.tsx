import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({ 
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ibrahim Lawal - Frontend Developer | React & Next.js Expert',
  description: 'Frontend Developer with 2+ years experience building scalable, responsive web applications. Specializing in React, Next.js, TypeScript, and modern web technologies.',
  keywords: ['Frontend Developer', 'React Developer', 'Next.js', 'TypeScript', 'JavaScript', 'Web Developer', 'Lagos Nigeria'],
  authors: [{ name: 'Ibrahim Lawal Mayowa' }],
  openGraph: {
    title: 'Ibrahim Lawal - Frontend Developer',
    description: 'Building modern, scalable web applications with React & Next.js',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibrahim Lawal - Frontend Developer',
    description: 'Frontend Developer | React & Next.js Expert',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          defer
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          defer
        />
      </head>
      <body className={`${poppins.variable} ${montserrat.variable} font-poppins bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}