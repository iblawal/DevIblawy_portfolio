'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Software Developer',
    'React & Next.js Developer',
    'UI/UX Designer',
    ' AI Coding Agent',
    'Coding Instructor',
    'Wordpress Developer',
    'Problem Solver',
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[textIndex]

      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-32 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-base font-semibold text-primary-400 uppercase tracking-[3px] mb-3">
              I'M
            </h2>

            <h1 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-primary-500 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                LAWAL IBRAHIM MAYOWA
              </span>
            </h1>

            <div className="text-2xl text-primary-800 dark:text-primary-400 font-semibold mb-8 min-h-[3rem] flex items-center">
              <span>{displayText}</span>
              <span className="w-0.5 h-6 bg-primary-500 ml-1 animate-pulse" />
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
              I build clean, scalable and high-performance websites tailored for businesses, If you're looking to scale your operations and boost your digital presence, let's build something great together.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="#projects"
                className="px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold hover:-translate-y-1 transition-all"
              >
                DISCOVER NOW
              </Link>

              <Link
                href="#contact"
                className="px-10 py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 font-semibold hover:bg-primary-500 hover:text-white transition-all"
              >
                Let's Collaborate
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/my-photo.jpeg"
              alt="Ibrahim Lawal Mayowa"
              width={300}
              height={300}
              className="rounded-[30px] shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
