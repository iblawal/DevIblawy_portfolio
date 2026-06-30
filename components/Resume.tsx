'use client'
import Link from 'next/link'

export default function Resume() {
  const certifications = [
    {
      title: 'Mobile App Development Certification',
      issuer: 'TechCrush',
      date: '2026',
      skills: ['React Native', 'Expo SDK', 'Mobile UI/UX Design'],
      description: 'Completed a comprehensive course in mobile application development, covering React Native framework, mobile UI/UX design principles, and cross-platform app deployment.'
    },
    {
      title: 'Web Design Certification',
      issuer: 'GIZ German',
      date: '2025',
      skills: ['HTML', 'CSS3', 'JavaScript', 'WordPress'],
      description: 'Completed practical training in modern web design, focusing on responsive layouts, custom Web development, and WordPress site development.'
    },
    {
      title: 'Prompt Engineering And Programming with OpenAI Certification (In Progress)',
      issuer: 'Colombia University',
      date: 'Expected 2026',
      skills: ['Prompt Engineering', 'OpenAI API', 'Natural Language Processing'],
      description: 'Ongoing a comprehensive course in prompt engineering and programming with OpenAI, covering advanced techniques for interacting with large language models.'
    },
    {
      title: 'Soft Skills Certification',
      issuer: 'LAG UP Youth Skills',
      skills: ['Communication', 'Mentorship', 'Leadership', 'Teamwork', 'Problem-Solving', 'Time Management'],
      date: '2024',
      description: 'Professional development and workplace skills'
    },
    {
      title: 'Frontend Development',
      issuer: 'LAG UP Youth Skills',
      skills: ['HTML', 'CSS3'],
      date: '2025',
      description: 'Frontend development techniques'
    },
    {
      title: 'Coding & Robotics Certification (In Progress)',
      issuer: 'Inkeeper Academy',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Scratch', 'PictoBlox', 'Tinkercad', 'AI'],
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
      description: 'Design and implement coding curricula for both physical and virtual classes. Facilitate hands-on sessions and guide learners from foundational concepts to building functional web applications. Trained children in foundational coding using Scratch and PictoBlox, helping them build interactive games, animations, and basic robotics projects. Provide mentorship and track learner progress.'
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

        {/* Buttons */}
        <div className="reveal-scale flex flex-row items-center justify-center gap-3 flex-wrap">

          {/* Download Full Resume */}
          <Link
            href="/Ibrahim-cv.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <i className="fas fa-download text-xs group-hover:animate-bounce"></i>
            Download Resume
          </Link>

          {/* Divider dot */}
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 hidden sm:block"></span>

          {/* View Certifications */}
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800 hover:border-primary-500 dark:hover:border-primary-500 px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-primary-500/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            <i className="fas fa-certificate text-xs"></i>
            View Certifications
          </Link>

        </div>

      </div>
    </section>
  )
}