'use client'
import Link from 'next/link'

export default function Resume() {
  const certifications = [
    {
      title: 'Web Design Certification',
      issuer: 'GIZ German',
      date: '2025',
      skills: ['HTML', 'CSS3', 'JavaScript', 'WordPress'],
      description: 'Completed practical training in modern web design, focusing on responsive layouts, custom Web development, and WordPress site development.'
    },
    
    {
      title: 'Soft Skills Certification',
      issuer: 'LAG UP Youth Skills',
      skills: ['Communication','Mentorship', 'Leadership', 'Teamwork', 'Problem-Solving', 'Time Management'],
      date: '2024',
      description: 'Professional development and workplace skills'
    },
    {
      title: 'Frontend Development ',
      issuer: 'LAG UP Youth Skills',
      skills: ['HTML', 'CSS3', ],
      date: '2025',
      description: 'Frontend development techniques'
    },
    
    {
      title: 'Coding & Robotics Certification (In Progress)',
      issuer: 'Inkeeper Academy',
      skills: 'HTML, CSS, JavaScript, Python, Scratch, PictoBlox Tinkercard, AI',
      date: 'Expected 2026',
      description: 'Focused on robotics fundamentals, Web development, STEM education, and teaching kids coding using Scratch and PictoBlox.'
    },
    
    {
      title: 'BSc Sociology',
      issuer: 'Federal University Oye Ekiti',
      date: '2018 – 2022',
      description: 'Bachelor of Science degree'
    },
  ]

  const experiences = [
    {
      role: 'Lead Web Developer',
      company: 'EB Behavioral Health',
      period: '2025 - Present',
      type: 'Remote/Contract',
      current: true,
      description: 'Oversee the digital infrastructure and data flow systems for a U.S.-based healthcare provider. Manage website architecture, referral systems, and secure form integrations. Develop and maintain responsive pages using WordPress, custom HTML, and CSS, while monitoring site performance and search visibility. Ensure structured content presentation aligned with healthcare compliance standards.'
    },
    {
      role: 'Coding Facilitator',
      company: 'ByteTech Network Academy',
      period: '2025 - Present',
      current: true,
      description: 'Delivered structured coding bootcamps covering web development fundamentals. Developed curriculum materials, practical exercises, and project-based learning modules. Mentored students through real-world projects and collaborative coding practices.'
    },
    {
      role: 'Coding Facilitator',
      company: 'Haven Edu Services',
      period: '2024 - Present',
      current: true,
      description: 'Design and implement coding curricula for both physical and virtual classes. Facilitate hands-on sessions and guide learners from foundational concepts to building functional web applications.  Trained children in foundational coding using Scratch and PictoBlox, helping them build interactive games, animations, and basic robotics projects. Provide mentorship and track learner progress.'
    },
    {
      role: 'Frontend Developer (Intern)',
      company: '8Gear Ventures',
      period: '2023 - 2024',
      current: false,
      description: 'Supported the development team in building responsive user interfaces and implementing design specifications. Collaborated using version control systems and contributed to feature enhancements.'
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2022 - Present',
      current: true,
      description: 'Designed and developed custom websites and UI improvements for clients, focusing on responsive design, usability, and performance optimization.'
    },
  ]

  return (
    <section id="resume" className="py-24 bg-gradient-to-br from-primary-50 to-white dark:from-gray-600 dark:to-gray-500 section-reveal">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-600 dark:text-white mb-4 font-montserrat">
            My Resume
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6 relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full shadow-lg shadow-primary-500/50"></span>
          </div>
          <p className="text-gray-400 dark:text-gray-200 text-lg max-w-1xl mx-auto">
            My professional journey, education, and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Experience Card */}
          <div className="bg-white dark:bg-gray-500 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-500 reveal-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <i className="fas fa-briefcase text-white text-xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                Experience
              </h4>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pb-6 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-4 top-2 w-2 h-2 rounded-full bg-primary-500"></div>
                  
                  <div className="flex items-start justify-between mb-2 gap-4">
                    <div>
                      <strong className="text-lg text-primary-800 dark:text-primary-400 block">
                        {exp.role}
                      </strong>
                      <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                        {exp.company}
                        {exp.type && <span className="ml-2 text-xs">({exp.type})</span>}
                      </div>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-primary-500 text-white text-xs rounded-full font-semibold whitespace-nowrap">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="text-gray-500 dark:text-gray-500 text-xs mb-3 flex items-center gap-2">
                    <i className="fas fa-calendar-alt"></i>
                    {exp.period}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 reveal-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <i className="fas fa-certificate text-white text-xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-primary-800 dark:text-primary-400">
                Education & Certifications
              </h4>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="relative pb-6 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-4 top-2 w-2 h-2 rounded-full bg-primary-500"></div>
                  
                  <strong className="text-lg text-primary-800 dark:text-primary-400 block mb-1">
                    {cert.title}
                  </strong>
                  
                  <div className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
                    {cert.issuer}
                  </div>
                  
                  <div className="text-gray-500 dark:text-gray-500 text-xs mb-2 flex items-center gap-2">
                    <i className="fas fa-calendar-alt"></i>
                    {cert.date}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

  
        {/* Download Button */}
        <div className="text-center reveal-scale">
          <Link
            href="/Ibrahim-cv.pdf"
            download
            className="inline-flex items-center gap-4  text-primary px-12 py-5 font-semibold text-lg shadow-1xl hover:shadow-primary-500/50 hover:-translate-y-2 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <i className="fas fa-download text-xl"></i>
            </div>
            <div className="text-left">
              <div className="font-bold">Download Full Resume</div>
              <div className="text-sm text-white/90">Get the complete PDF version</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}