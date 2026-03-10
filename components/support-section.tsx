"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Heart,
  BookOpen,
  Building,
  Bus,
  Laptop,
  Music,
  DollarSign,
  Calendar,
  Infinity,
} from "lucide-react"
import Image from "next/image"

const currentNeeds = [
  { icon: DollarSign, text: "Operational funds shortage" },
  { icon: BookOpen, text: "Textbooks (current ratio 3 pupils : 1 book)" },
  { icon: Building, text: "Latrines for ECDE section and Junior Secondary" },
  { icon: Building, text: "Furniture and staff chairs" },
  { icon: Building, text: "Completing Junior Secondary building" },
  { icon: Bus, text: "School bus for safe student transport" },
]

const expansionPlans = [
  { icon: Building, text: "Administration block" },
  { icon: Building, text: "Dining hall" },
  { icon: Building, text: "Tiled kitchen" },
  { icon: Building, text: "More classrooms" },
  { icon: Music, text: "Music instruments for CBC" },
  { icon: Laptop, text: "Computer lab equipment" },
]

const donationTiers = [
  {
    icon: Calendar,
    title: "1 Month",
    description: "Help us cover essential expenses for a full month",
    highlight: "Immediate impact",
  },
  {
    icon: Calendar,
    title: "2 Months",
    description: "Extended support for ongoing programs and needs",
    highlight: "Sustained support",
  },
  {
    icon: Infinity,
    title: "Ongoing",
    description: "Become a regular supporter and change lives continuously",
    highlight: "Long-term partner",
  },
]

export function SupportSection() {
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
    <section id="support" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-medium uppercase tracking-wider mb-2">Support Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Be Part of Our Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From a single mud classroom in 2011 to over 600 students today — your support has made this transformation possible. Help us continue building dreams for Kenya&apos;s future leaders.
          </p>
        </div>

        {/* Emotional Appeal Card */}
        <Card className={`mb-12 bg-primary/5 border-primary/20 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Director Photo */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shrink-0">
                <Image
                  src="/SOAR KENYA COMMUNITY/The Director/IMG-20260309-WA0074.jpg"
                  alt="Mr. James Kiprop Yegon - Founder & Director"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
              {/* Quote */}
              <div className="text-center md:text-left">
                <p className="text-foreground text-lg font-medium mb-4 max-w-3xl text-pretty">
                  {'"Every child deserves a chance to learn, grow, and dream. At SOAR Kenya Academy, we don\'t just educate — we transform lives and build futures. With your help, we can reach even more children in need."'}
                </p>
                <p className="text-muted-foreground italic">— Mr. James Kiprop Yegon, Founder & Director</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Needs Grid */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="font-serif text-card-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-4 w-4 text-primary" />
                </span>
                Current Needs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {currentNeeds.map((need) => (
                  <li key={need.text} className="flex items-start gap-3 text-muted-foreground">
                    <need.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{need.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="font-serif text-card-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Building className="h-4 w-4 text-secondary" />
                </span>
                Expansion Plans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {expansionPlans.map((plan) => (
                  <li key={plan.text} className="flex items-start gap-3 text-muted-foreground">
                    <plan.icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">{plan.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Donation Options */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="font-serif font-bold text-xl text-center mb-8 text-foreground">Ways to Give</h3>
          
          {/* PayPal Donation Box */}
          <Card className="mb-8 max-w-lg mx-auto bg-card border-border overflow-hidden">
            <div className="bg-primary p-6 text-center">
              <p className="text-primary-foreground text-sm uppercase tracking-wider mb-2">Donate via PayPal</p>
              <p className="text-primary-foreground font-serif font-bold text-xl">yegon1984@gmail.com</p>
            </div>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Send your donation directly through PayPal. Every contribution, no matter the size, makes a difference.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="https://www.paypal.com/paypalme/yegon1984" target="_blank" rel="noopener noreferrer">
                  Donate Now
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Sponsorship Card */}
          <Card className="mb-8 max-w-lg mx-auto bg-secondary/5 border-secondary/20">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Heart className="h-7 w-7 text-secondary" />
              </div>
              <h4 className="font-serif font-bold text-lg mb-2 text-card-foreground">Sponsor a Child</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Change a child&apos;s life by sponsoring their education for a year. Cover school fees, meals, books, and uniform.
              </p>
              <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Link href="#contact">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Donation Tiers */}
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {donationTiers.map((tier) => (
              <Card key={tier.title} className="bg-card border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <tier.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h5 className="font-serif font-bold text-card-foreground mb-1">{tier.title}</h5>
                  <p className="text-muted-foreground text-xs mb-2">{tier.description}</p>
                  <span className="text-xs text-secondary font-medium">{tier.highlight}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
