'use client'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary-800 to-primary-600 dark:from-gray-900 dark:to-gray-800 text-white py-16">
      <div className="container">

        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* About */}
          <div>
            <h5 className="text-2xl font-bold mb-4">_Dev Iblawy</h5>
            <p className="text-white/80 leading-relaxed mb-4">
              A passionate Frontend Developer crafting modern user interfaces focused on accessibility and performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Resume', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Contact</h5>

            <div className="space-y-3 mb-6">
              <p className="text-white/80">ibrahimlawal060@gmail.com</p>
              <p className="text-white/80">Lagos, Nigeria</p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/iblawal"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-primary-500 flex items-center justify-center transition-all"
              >
                <i className="fab fa-github" />
              </a>

              <a
                href="https://wa.me/2349061700017"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-primary-500 flex items-center justify-center transition-all"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/70">
            © {currentYear} Dev Iblawy. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
