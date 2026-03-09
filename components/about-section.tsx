"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Quote, Building2 } from "lucide-react"

const values = [
  "Integrity",
  "Transparency", 
  "Quality Service Delivery",
  "Commitment to Duty",
  "Professionalism",
  "Teamwork",
]

const facilities = [
  "10 permanent classrooms",
  "Borehole with treatment plant",
  "6 latrine blocks",
  "Water kiosk",
  "Store & kitchen",
  "Powerhouse",
  "Underground tank",
  "Stand tank",
  "Three dormitories (2 girls, 1 boys)",
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-medium uppercase tracking-wider mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Building Futures, Changing Lives
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            SOAR Kenya Academy started on January 12, 2011, with help from the SOAR-Kenya Organization (USA) who generously donated 2 acres of land. We began with just 1 mud classroom, 25 pupils, and 2 teachers. Today, we are a thriving community of over 600 students.
          </p>
        </div>

        {/* Image Gallery */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="/images/img-036.jpg" alt="Students at SOAR Kenya Academy" fill className="object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="/images/img-039.jpg" alt="School activities" fill className="object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="/images/img-040.jpg" alt="Learning environment" fill className="object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="/images/img-041.jpg" alt="School community" fill className="object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* Mission, Vision, Motto Cards */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 bg-card">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-card-foreground">Mission</h3>
              <p className="text-muted-foreground text-sm">
                To provide knowledge and skills to children in need and the community at large
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 bg-card">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Eye className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-card-foreground">Vision</h3>
              <p className="text-muted-foreground text-sm">
                To have a happy self-sustaining community
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 bg-card">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-card-foreground">Motto</h3>
              <p className="text-muted-foreground text-sm">
                Service Above Self
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 bg-card">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Quote className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-card-foreground">Slogan</h3>
              <p className="text-muted-foreground text-sm">
                {"Today's preparation determines tomorrow's achievements"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values & Facilities */}
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Core Values */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="font-serif font-bold text-xl mb-6 text-card-foreground flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                Our Core Values
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div
                    key={value}
                    className="flex items-center gap-2 text-muted-foreground"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Physical Facilities */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="font-serif font-bold text-xl mb-6 text-card-foreground flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-secondary" />
                </div>
                Physical Facilities
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {facilities.map((facility, index) => (
                  <div
                    key={facility}
                    className="flex items-center gap-2 text-muted-foreground"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Naming Recognition */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Card className="bg-primary/5 border-primary/20 inline-block">
            <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground text-sm md:text-base italic max-w-2xl">
                {"\"The school was named after SOAR-Kenya Organization (USA) in recognition of their generous contributions to the establishment and growth of our institution.\""}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
