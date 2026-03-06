'use client'
import { useTheme } from '@/context/ThemeContext'

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-primary-400 to-primary-500 text-white shadow-1xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-primary-500/50"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <i className="fas fa-sun text-xl animate-[spin_2s_linear_infinite]" />
      ) : (
        <i className="fas fa-moon text-xl" />
      )}
    </button>
  )
}