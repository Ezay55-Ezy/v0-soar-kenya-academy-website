"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const timelineEvents = [
  {
    year: "2011",
    title: "The Beginning",
    description: "Founded on January 12th with just 1 mud classroom, 25 pupils, and 2 teachers. SOAR-Kenya Organization (USA) generously donated 2 acres of land to establish the school.",
    highlight: "Where it all started",
    image: "/images/img-023.jpg",
  },
  {
    year: "Early Years",
    title: "Humble Beginnings",
    description: "First bush latrine constructed, first morning assembly held under a tree, and a small mud admin office built. The community rallied together to support the growing school.",
    highlight: "Building from nothing",
    image: "/images/img-024.jpg",
  },
  {
    year: "Growth Phase",
    title: "First Permanent Structures",
    description: "First permanent classroom block with a beautiful red roof was donated by Linda Rotary Club of Waunakee & SOAR-Kenya. This marked a turning point for the school.",
    highlight: "A new chapter begins",
    image: "/images/img-025.jpg",
  },
  {
    year: "Expansion",
    title: "Rising Higher",
    description: "Two-storey administration block (pink/purple) was generously donated by Shanna & Mick. The school now had proper administrative facilities to manage growing operations.",
    highlight: "Reaching new heights",
    image: "/images/img-028.jpg",
  },
  {
    year: "Recent",
    title: "Junior Secondary Building",
    description: "A magnificent 3-storey Junior Secondary building is currently under construction. This will enable the school to offer CBC education to Grade 7-9 students.",
    highlight: "Building the future",
    image: "/images/img-029.jpg",
  },
  {
    year: "Present",
    title: "Thriving Community",
    description: "Over 600 students now call SOAR Kenya Academy home. Modern multi-storey buildings, solar panels, and a borehole provide sustainable education for the community.",
    highlight: "A beacon of hope",
    image: "/images/img-031.jpg",
  },
]

export function HistorySection() {
  return (
    <section id="history" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-2">Our Journey</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            From Mud Walls to Multi-Storey Dreams
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of faith, perseverance, and community support that transformed a single mud classroom into a thriving educational institution.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-px" />

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.year} event={event} index={index} />
          ))}
        </div>

        {/* Then vs Now Visual */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/images/img-032.jpg"
                  alt="SOAR Kenya Academy in 2011"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 text-center p-4">
                  <p className="font-serif font-bold text-lg text-white">2011</p>
                  <p className="text-white/80 text-sm">1 Mud Classroom</p>
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">25 Students • 2 Teachers • 2 Acres</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/images/img-033.jpg"
                  alt="SOAR Kenya Academy Today"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 text-center p-4">
                  <p className="font-serif font-bold text-lg text-white">Today</p>
                  <p className="text-white/80 text-sm">Modern Campus</p>
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">600+ Students • 15 Teachers • Multi-Storey Buildings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const isEven = index % 2 === 0

  return (
    <div
      ref={itemRef}
      className={`relative flex items-center mb-8 md:mb-12 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Dot */}
      <div
        className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 transition-transform duration-500 ${
          isVisible ? "scale-100" : "scale-0"
        }`}
      />

      {/* Content */}
      <div
        className={`ml-12 md:ml-0 md:w-1/2 ${
          isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
        }`}
      >
        <Card
          className={`bg-card border-border hover:shadow-lg transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : `opacity-0 ${isEven ? "md:-translate-x-10" : "md:translate-x-10"}`
          }`}
        >
          <CardContent className="p-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              {event.year}
            </span>
            <h3 className="font-serif font-bold text-lg mb-2 text-card-foreground">{event.title}</h3>
            <p className="text-muted-foreground text-sm mb-3">{event.description}</p>
            <p className="text-xs text-secondary font-medium italic">{event.highlight}</p>
          </CardContent>
        </Card>
      </div>

      {/* Empty space for opposite side on desktop */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  )
}
