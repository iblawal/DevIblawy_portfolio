"use client"
import Image from "next/image"

interface ProjectShowcaseProps {
  desktop: string
  tablet: string
  mobile: string
}

export default function ProjectShowcase({
  desktop,
  tablet,
  mobile,
}: ProjectShowcaseProps) {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#0a0a0a]">

      {/* Glow Background */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="relative flex justify-center items-end">

          {/* Desktop */}
          <div className="relative z-10 w-[70%] transition-transform duration-700 hover:scale-105">
            <Image
              src={desktop}
              alt="Desktop view"
              width={1400}
              height={900}
              className="rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* Tablet */}
          <div className="absolute left-[8%] bottom-0 z-20 w-[35%] rotate-[-10deg] transition-transform duration-700 hover:rotate-[-6deg] hover:scale-105">
            <Image
              src={tablet}
              alt="Tablet view"
              width={700}
              height={900}
              className="rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* Mobile */}
          <div className="absolute left-0 bottom-0 z-30 w-[18%] rotate-[-18deg] transition-transform duration-700 hover:rotate-[-12deg] hover:scale-105">
            <Image
              src={mobile}
              alt="Mobile view"
              width={400}
              height={800}
              className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
