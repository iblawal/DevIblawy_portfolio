"use client"
import Image from "next/image"
import Link from "next/link"

// ─── CareFlow Data ────────────────────────────────────────────────────────────
const careflow = {
  appName: "CareFlow",
  tagline: "Clinic Operating System",
  description:
    "A full-featured clinic management app built with React Native. Handles doctor workflows, patient records, appointments, lab results, and role-based access — all offline-ready.",
  techStack: ["React Native", "Expo", "TypeScript", "SQLite", "Zustand"],
  screens: {
    welcome: "/projects/careflow-welcome.png",
    login: "/projects/careflow-login.png",
    dashboard: "/projects/careflow-dashboard.png",
  },
  liveLink: "https://expo.dev/accounts/dev_iblawy/projects/CareFlow/builds/cbeb7f44-511d-41df-9152-1d58b59067e9", 
  githubLink: "https://github.com/iblawal/careflow", 
}

// ─── Vandela Data (teaser) ────────────────────────────────────────────────────
const vandela = {
  appName: "Vandela AI",
  tagline: "AI-Powered Mobile Experience",
  description:
    "A next-generation AI assistant app built with React Native. Intelligent conversations, smart recommendations, and a beautifully crafted mobile experience — coming soon.",
  techStack: ["React Native", "Expo", "TypeScript", "AI/ML"],
  placeholderScreen: "/vandela-placeholder.png", // 🔁 swap when ready
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function MobileApps() {
  return (
    <section
      id="mobile-apps"
      className="relative w-full py-28 overflow-hidden bg-gray-50 dark:bg-[#05070f] transition-colors duration-300"
    >
      {/* Ambient glows — visible in dark, subtle in light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-primary-500/10 dark:bg-primary-500/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-violet-500/5 dark:bg-violet-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block text-primary-500 dark:text-primary-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Mobile Development
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 font-montserrat">
            Mobile Applications
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto">
            Cross-platform apps built with React Native — performant, offline-ready, and crafted for real users.
          </p>
        </div>

        {/* ── CareFlow Showcase ── */}
        <div className="mb-24">

          {/* App label row */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary-500/30" />
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-800 dark:text-white font-semibold text-lg">{careflow.appName}</span>
              <span className="text-gray-400 dark:text-gray-500 text-sm">— {careflow.tagline}</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary-500/30" />
          </div>

          {/* 3-Phone showcase */}
          <div className="relative flex justify-center items-end min-h-[500px] mb-14">

            {/* Left — Login */}
            <div
              className="absolute left-[8%] md:left-[16%] bottom-0 z-10 w-[24%] max-w-[190px] transition-all duration-500 cursor-pointer"
              style={{
                transform: "rotate(-12deg) translateY(40px)",
                filter: "brightness(0.7) drop-shadow(-20px 30px 40px rgba(0,0,0,0.4))",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = "rotate(-6deg) translateY(20px) scale(1.05)"
                el.style.filter = "brightness(0.95) drop-shadow(-20px 30px 40px rgba(0,0,0,0.25))"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = "rotate(-12deg) translateY(40px)"
                el.style.filter = "brightness(0.7) drop-shadow(-20px 30px 40px rgba(0,0,0,0.4))"
              }}
            >
              <Image src={careflow.screens.login} alt="CareFlow Login" width={400} height={860} className="w-full h-auto" />
              <p className="text-center text-gray-400 dark:text-gray-600 text-xs mt-3 tracking-wide">Sign In</p>
            </div>

            {/* Center — Welcome (hero) */}
            <div
              className="relative z-20 w-[36%] max-w-[270px] transition-all duration-500 cursor-pointer"
              style={{ filter: "drop-shadow(0 40px 60px rgba(var(--color-primary-500), 0.3))" }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = "translateY(-12px) scale(1.03)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = "translateY(0) scale(1)"
              }}
            >
              {/* Live badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg shadow-primary-500/40 whitespace-nowrap">
                <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                Live App
              </div>
              <Image src={careflow.screens.welcome} alt="CareFlow Welcome" width={400} height={860} className="w-full h-auto" />
              <p className="text-center text-gray-500 dark:text-gray-400 text-xs mt-3 tracking-wide">Welcome</p>
            </div>

            {/* Right — Dashboard */}
            <div
              className="absolute right-[8%] md:right-[16%] bottom-0 z-10 w-[24%] max-w-[190px] transition-all duration-500 cursor-pointer"
              style={{
                transform: "rotate(12deg) translateY(40px)",
                filter: "brightness(0.7) drop-shadow(20px 30px 40px rgba(0,0,0,0.4))",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = "rotate(6deg) translateY(20px) scale(1.05)"
                el.style.filter = "brightness(0.95) drop-shadow(20px 30px 40px rgba(0,0,0,0.25))"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = "rotate(12deg) translateY(40px)"
                el.style.filter = "brightness(0.7) drop-shadow(20px 30px 40px rgba(0,0,0,0.4))"
              }}
            >
              <Image src={careflow.screens.dashboard} alt="CareFlow Dashboard" width={400} height={860} className="w-full h-auto" />
              <p className="text-center text-gray-400 dark:text-gray-600 text-xs mt-3 tracking-wide">Dashboard</p>
            </div>
          </div>

          {/* CareFlow meta + CTAs */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-lg text-center leading-relaxed">
              {careflow.description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {careflow.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {careflow.liveLink && (
                <Link
                  href={careflow.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all"
                >
                  <i className="fas fa-mobile-alt" />
                  Try on Android
                </Link>
              )}
              {careflow.githubLink && (
                <Link
                  href={careflow.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold text-sm hover:border-primary-500 hover:text-primary-500 hover:-translate-y-0.5 transition-all"
                >
                  <i className="fab fa-github" />
                  View Code
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-24">
          <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          <span className="text-gray-400 dark:text-gray-700 text-xs tracking-widest uppercase">Next Up</span>
          <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
        </div>

        {/* ── Vandela AI Teaser ── */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Single blurred phone */}
          <div className="relative flex-shrink-0 w-[200px]">
            {/* Coming Soon overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-[2.5rem] bg-black/50 dark:bg-black/60 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 bg-violet-400 rounded-full animate-pulse mb-3" />
              <span className="text-white font-bold text-sm tracking-wide">Coming Soon</span>
            </div>
            {/* Placeholder phone */}
            <div
              className="w-full aspect-[9/19] rounded-[2.5rem] bg-gradient-to-br from-violet-100 to-gray-200 dark:from-violet-900/60 dark:to-gray-900 border border-violet-300/40 dark:border-violet-500/20"
              style={{ filter: "drop-shadow(0 30px 50px rgba(139,92,246,0.2))" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <i className="fas fa-robot text-violet-400/40 text-5xl" />
              </div>
            </div>
          </div>

          {/* Vandela text content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-500 dark:text-violet-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-violet-500 dark:bg-violet-400 rounded-full animate-pulse" />
              In Development
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3 font-montserrat">
              {vandela.appName}
            </h4>
            <p className="text-gray-400 dark:text-gray-500 text-sm mb-2 italic">{vandela.tagline}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              {vandela.description}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              {vandela.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full border border-violet-400/20 bg-violet-500/10 text-violet-500 dark:text-violet-400 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              disabled
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-600 px-6 py-3 rounded-xl text-sm font-semibold cursor-not-allowed"
            >
              <i className="fas fa-bell" />
              Notify Me on Launch
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}