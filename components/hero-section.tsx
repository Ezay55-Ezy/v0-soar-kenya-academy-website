"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background photo ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/school-building.jpg"
          alt="SOAR Kenya Academy"
          fill
          className="object-cover"
          priority
        />
        {/* Dark purple gradient overlay so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-purple-900/85 to-purple-800/80" />
        {/* Subtle dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute top-24 right-16 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-green-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* ── Hero content ── */}
      <div className="container mx-auto px-4 text-center relative z-10 pt-16">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Logo — hero size (120px), not full-width */}
          <div className="flex justify-center mb-7">
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400/50">
              <Image
                src="/images/logo.jpg"
                alt="SOAR Kenya Academy crest"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 112px, 128px"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-wide drop-shadow-lg">
            SOAR KENYA ACADEMY
          </h1>

          <p className="text-yellow-300 text-base md:text-lg font-bold mb-2 tracking-widest uppercase">
            ✦ Service Above Self ✦
          </p>

          <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-8 italic">
            "Today's preparation determines tomorrow's achievements"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-900 hover:bg-yellow-50 font-bold px-8 shadow-lg"
            >
              <Link href="#about">Our Story</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold px-8 shadow-lg"
            >
              <Link href="#support">Support Us</Link>
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-6 md:gap-10 bg-white/10 backdrop-blur-sm rounded-2xl px-6 md:px-12 py-5 border border-white/20">
            {/* Founded stat with RGB glow effect */}
            <div className="relative">
              {/* Animated RGB glow background */}
              <div 
                className="absolute -inset-3 rounded-xl opacity-75 blur-lg animate-rgb-glow"
                style={{
                  background: "linear-gradient(90deg, #4285f4, #ea4335, #fbbc04, #34a853, #4285f4)",
                  backgroundSize: "300% 100%",
                }}
              />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                <StatItem value="2011" label="Founded" />
              </div>
            </div>
            <div className="w-px bg-white/30 hidden md:block self-stretch" />
            <StatItem value="600+" label="Students" animate />
            <div className="w-px bg-white/30 hidden md:block self-stretch" />
            <StatItem value="10+" label="Projects" animate />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-yellow-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </Link>
    </section>
  )
}

function StatItem({
  value,
  label,
  animate = false,
}: {
  value: string
  label: string
  animate?: boolean
}) {
  const [display, setDisplay] = useState(animate ? "0" : value)

  useEffect(() => {
    if (!animate) return
    const num = parseInt(value.replace(/\D/g, ""))
    const suffix = value.replace(/\d/g, "")
    const steps = 50
    const inc = num / steps
    let cur = 0
    const timer = setInterval(() => {
      cur += inc
      if (cur >= num) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(cur) + suffix)
      }
    }, 2000 / steps)
    return () => clearInterval(timer)
  }, [animate, value])

  return (
    <div className="text-center px-2">
      <p className="text-2xl md:text-3xl font-extrabold text-white">{display}</p>
      <p className="text-xs md:text-sm text-white/65 mt-0.5">{label}</p>
    </div>
  )
}
