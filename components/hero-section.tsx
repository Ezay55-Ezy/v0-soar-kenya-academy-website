"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo.jpg"
              alt="SOAR Kenya Academy Logo"
              width={180}
              height={180}
              className="rounded-full shadow-2xl border-4 border-primary-foreground/20"
              priority
            />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4 tracking-wide">
            SOAR KENYA ACADEMY
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-2">
            Service Above Self
          </p>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8 text-pretty">
            {"Today's preparation determines tomorrow's achievements"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-card text-primary hover:bg-card/90 font-semibold px-8"
            >
              <Link href="#about">Our Story</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"
            >
              <Link href="#support">Support Us</Link>
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8 bg-card/10 backdrop-blur-sm rounded-full px-6 md:px-10 py-4 border border-primary-foreground/20">
            <StatItem value="2011" label="Founded" />
            <div className="w-px bg-primary-foreground/30 hidden md:block" />
            <StatItem value="600+" label="Students" animate />
            <div className="w-px bg-primary-foreground/30 hidden md:block" />
            <StatItem value="7+" label="Projects" animate />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="h-8 w-8" />
      </Link>
    </section>
  )
}

function StatItem({ value, label, animate = false }: { value: string; label: string; animate?: boolean }) {
  const [displayValue, setDisplayValue] = useState(animate ? "0" : value)

  useEffect(() => {
    if (!animate) return

    const numericValue = parseInt(value.replace(/\D/g, ""))
    const suffix = value.replace(/\d/g, "")
    const duration = 2000
    const steps = 50
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current) + suffix)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [animate, value])

  return (
    <div className="text-center px-2">
      <p className="text-xl md:text-2xl font-bold text-primary-foreground">{displayValue}</p>
      <p className="text-xs md:text-sm text-primary-foreground/70">{label}</p>
    </div>
  )
}
