'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary-800 to-primary-500 transition-opacity duration-600">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4 mx-auto" />
        <p className="text-white text-lg font-semibold animate-pulse">Loading Portfolio...</p>
      </div>
    </div>
  )
}