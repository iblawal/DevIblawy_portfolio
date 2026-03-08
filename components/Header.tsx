'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = [
        'home',
        'about',
        'services',
        'stack',
        'projects',
        'resume',
        'contact',
      ]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  //  smooth scroll
  const scrollToSection = (e: any, href: string) => {
    e.preventDefault()
    const target = document.getElementById(href.replace('#', ''))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#stack', label: 'Stack' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-5 relative">
          
          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl font-bold font-montserrat text-primary-800 dark:text-primary-400"
          >
            _Dev Iblawy
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative text-gray-700 dark:text-gray-300 font-medium text-[0.95rem] py-2 transition-colors hover:text-primary-500 ${
                      activeSection === link.href.slice(1)
                        ? 'text-primary-500'
                        : ''
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 ${
                        activeSection === link.href.slice(1)
                          ? 'w-full'
                          : 'w-0'
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links  */}
          <div className="hidden lg:flex gap-4">
            <a
              href="https://github.com/iblawal"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              <i className="fab fa-github text-lg relative z-10" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              <i className="fab fa-linkedin text-lg relative z-10" />
            </a>
          </div>

          {/* Mobile Menu Button*/}
          <button
            onClick={() => {
              setMobileMenuOpen(true)
              document.body.style.overflow = 'hidden'
            }}
            className="lg:hidden p-2 z-50"
            aria-label="Open menu"
          >
            <i className="fas fa-bars text-2xl text-primary-800 dark:text-primary-400" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-white dark:bg-gray-800 shadow-2xl transition-transform duration-500 z-50 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-primary-800 dark:text-primary-400">
            Menu
          </h2>

          {}
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              document.body.style.overflow = 'unset'
            }}
            className="w-11 h-11 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-all hover:rotate-90"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-2xl" />
          </button>
        </div>

        <nav className="p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false)
                document.body.style.overflow = 'unset'
                scrollToSection(e, link.href)
              }}
              className="block py-4 px-6 mb-2 text-gray-700 dark:text-gray-300 font-medium text-lg rounded-xl hover:bg-primary-500/10 hover:text-primary-500 hover:pl-8 transition-all relative overflow-hidden"
            >
              <span className="absolute left-0 top-0 w-1 h-full bg-primary-500 scale-y-0 hover:scale-y-100 transition-transform" />
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

         
      {mobileMenuOpen && (
        <div
          onClick={() => {
            setMobileMenuOpen(false)
            document.body.style.overflow = 'unset'
          }}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
        />
      )}
    </header>
  )
}