'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const certifications = [
  {
    title: 'Mobile App Development Certification',
    issuer: 'TechCrush',
    date: '2026',
    status: 'completed',
    skills: ['React Native', 'Expo SDK', 'Mobile UI/UX Design'],
    description:
      'Completed a comprehensive course in mobile application development, covering React Native framework, mobile UI/UX design principles, and cross-platform app deployment.',
    icon: '📱',
    color: '#61DAFB',
    image: '/certifications/techcrush-compressed.jpg',
  },
  {
    title: 'Web Design Certification',
    issuer: 'GIZ German',
    date: '2025',
    status: 'completed',
    skills: ['HTML', 'CSS3', 'JavaScript', 'WordPress'],
    description:
      'Completed practical training in modern web design, focusing on responsive layouts, custom web development, and WordPress site development.',
    icon: '🌐',
    color: '#10b981',
    image: '/certifications/giz-webdesign.jpg',
  },
  {
    title: 'Prompt Engineering & Programming with OpenAI - Module 1',
    issuer: 'Columbia University',
    date: 'Expected 2026',
    status: 'in-progress',
    skills: ['Prompt Engineering', 'OpenAI API', 'Natural Language Processing'],
    description:
      'Ongoing comprehensive course in prompt engineering and programming with OpenAI, covering advanced techniques for interacting with large language models.',
    icon: '🤖',
    color: '#8B5CF6',
    image: '/certifications/columbia-module1.png',
  },
  {
    title: 'Soft Skills Certification',
    issuer: 'LAG UP Youth Skills',
    date: '2024',
    status: 'completed',
    skills: ['Communication', 'Mentorship', 'Leadership', 'Teamwork', 'Problem-Solving', 'Time Management'],
    description:
      'Professional development and workplace skills training covering leadership, communication, and team collaboration.',
    icon: '🌟',
    color: '#F59E0B',
    image: '/certifications/lagup-softskills.png',
  },
  {
    title: 'Frontend Development',
    issuer: 'LAG UP Youth Skills',
    date: '2025',
    status: 'completed',
    skills: ['HTML', 'CSS3'],
    description: 'Frontend development techniques covering foundational web technologies and modern layout strategies.',
    icon: '💻',
    color: '#3178C6',
    image: null,
  },
  {
    title: 'Coding & Robotics Certification',
    issuer: 'Inkeeper Academy',
    date: 'Expected 2026',
    status: 'in-progress',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Scratch', 'PictoBlox', 'Tinkercad', 'AI'],
    description:
      'Focused on robotics fundamentals, web development, STEM education, and teaching kids coding using Scratch and PictoBlox.',
    icon: '🦾',
    color: '#EC4899',
    image: null,
  },
  {
    title: 'BSc Sociology',
    issuer: 'Federal University Oye Ekiti',
    date: '2018 – 2022',
    status: 'completed',
    skills: [],
    description: 'Bachelor of Science degree with focus on social systems, research methodology, and human behaviour.',
    icon: '🎓',
    color: '#F05032',
    image: null,
  },
]

const filters = ['All', 'Completed', 'In Progress']

type Cert = typeof certifications[0]

export default function Certifications() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState<Cert | null>(null)

  const filtered = certifications.filter((c) => {
    if (active === 'All') return true
    if (active === 'Completed') return c.status === 'completed'
    if (active === 'In Progress') return c.status === 'in-progress'
    return true
  })

  return (
    <section className="min-h-screen py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Back link */}
        <div className="mb-10">
          <Link
            href="/#resume"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-3 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resume
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
            Certifications & Education
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6 relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full shadow-lg shadow-primary-500/50"></span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A full record of my learning journey — courses, credentials, and degrees.
          </p>
        </div>

        {/* Summary pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl px-5 py-3 shadow-sm">
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {certifications.filter(c => c.status === 'completed').length}
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">Completed</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl px-5 py-3 shadow-sm">
            <span className="text-2xl font-bold text-amber-500">
              {certifications.filter(c => c.status === 'in-progress').length}
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">In Progress</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl px-5 py-3 shadow-sm">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {certifications.length}
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">Total</span>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => cert.image && setSelected(cert)}
              className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-all duration-300 ${cert.image ? 'cursor-pointer' : ''}`}
            >
              {/* Certificate image or placeholder */}
              {cert.image ? (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {/* Click to view hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/60 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Certificate
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="w-full h-20 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${cert.color}12` }}
                >
                  {cert.icon}
                </div>
              )}

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    {!cert.image && (
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{ backgroundColor: `${cert.color}18` }}
                      >
                        {cert.icon}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: cert.color }}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {cert.status === 'in-progress' ? (
                    <span className="flex-shrink-0 px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold rounded-full whitespace-nowrap">
                      In Progress
                    </span>
                  ) : (
                    <span className="flex-shrink-0 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full whitespace-nowrap">
                      ✓ Completed
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs mb-3">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {cert.date}
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium"
                        style={{
                          backgroundColor: `${cert.color}15`,
                          color: cert.color,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/#resume"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-md hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resume
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base">
                  {selected.title}
                </h3>
                <p className="text-sm font-medium mt-0.5" style={{ color: selected.color }}>
                  {selected.issuer} · {selected.date}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Certificate image */}
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <Image
                src={selected.image!}
                alt={selected.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}