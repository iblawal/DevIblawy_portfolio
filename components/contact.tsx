'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
    console.log('Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
    console.log('Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    
    setIsLoading(true)
    setStatus('idle')

    try {
      const emailjs = await import('@emailjs/browser')

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: process.env.NEXT_PUBLIC_OWNER_EMAIL,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

    } catch (error) {
      console.error('Email error:', error)
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
            Get In Touch
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6 relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full shadow-lg shadow-primary-500/50"></span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together and build something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h4>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a
                      href="mailto:ibrahimlawal060@gmail.com"
                      className="text-gray-900 dark:text-white font-medium hover:text-primary-500 transition-colors"
                    >
                      ibrahimlawal060@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Response Time</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      Within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-briefcase text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Availability</p>
                    <p className="text-primary-500 font-semibold">
                      Available for hire
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Find me on</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/iblawal"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl bg-gray-900 dark:bg-gray-700 text-white flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/ibrahim-lawal"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href="mailto:ibrahimlawal060@gmail.com"
                    className="w-12 h-12 rounded-xl bg-red-500 text-white flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                    <i className="fas fa-envelope text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h4>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl flex items-center gap-3">
                <i className="fas fa-check-circle text-xl"></i>
                <p className="font-medium">Message sent! I will reply within 24 hours.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl flex items-center gap-3">
                <i className="fas fa-exclamation-circle text-xl"></i>
                <p className="font-medium">Something went wrong. Email me directly!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !formData.name || !formData.email || !formData.message}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}