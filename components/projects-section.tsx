"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Droplets,
  Leaf,
  Utensils,
  Heart,
  Sun,
  GraduationCap,
  Building,
  Users,
  Laptop,
  Ribbon,
} from "lucide-react"

const projects = [
  {
    icon: Droplets,
    title: "Borehole & Water Project",
    description: "Drilled borehole in Muricho, Rongai with solar-powered pumping. Defloration/fluoride reduction project funded by Rotary Club of Davis Sunrise, California. Water towers serving school and community.",
    color: "primary",
    image: "/images/img-474.jpg",
  },
  {
    icon: Leaf,
    title: "Greenhouse Farming",
    description: "Growing tomatoes, cabbages, and vegetables. Supports school feeding program and sells surplus to the community for sustainability.",
    color: "secondary",
    image: "/images/img-475.jpg",
  },
  {
    icon: Utensils,
    title: "School Feeding Program",
    description: "Daily meals for 100+ needy pupils who cannot afford food at home. Ensuring no child learns on an empty stomach.",
    color: "primary",
    image: "/images/img-476.jpg",
  },
  {
    icon: Heart,
    title: "Feeding Program for Widows",
    description: "Annual food hampers to 100+ widows in Barut, supported by Rotary Club of Canton Ohio USA and other generous partners.",
    color: "secondary",
    image: "/images/img-477.jpg",
  },
  {
    icon: Ribbon,
    title: "Freedom for Girls",
    description: "Sanitary towels distribution to schools across Nakuru, Baringo, Naivasha, Gilgil, Rongai, and Nyanza — in partnership with Rotary Club of Geneva Lake West, Heart Africa.",
    color: "primary",
    image: "/images/img-479.jpg",
  },
  {
    icon: Sun,
    title: "Solarization Project",
    description: "Solar panels installed by Rotary Club of Davis & Rotary Club of Nakuru, reducing electricity bills by 50% and ensuring sustainable energy.",
    color: "secondary",
    image: "/images/img-558.jpg",
  },
  {
    icon: GraduationCap,
    title: "Sponsorship Program",
    description: "6 needy pupils sponsored yearly by Henny & Niessen family. 12 pupils sent to secondary school in 2022. Teacher Humphrey Otieno sponsored for Diploma in Early Childhood Education.",
    color: "primary",
    image: "/images/img-559.jpg",
  },
  {
    icon: Building,
    title: "Community Dispensary",
    description: "Land donated to Nakuru County Government for community dispensary serving the school and surrounding community with essential healthcare.",
    color: "secondary",
    image: "/images/img-560.jpg",
  },
  {
    icon: Users,
    title: "Upendo Tena Partnership",
    description: "Guidance & counselling for pupils aged 9-14, focusing on spiritual and moral development for holistic growth.",
    color: "primary",
    image: "/images/img-561.jpg",
  },
  {
    icon: Laptop,
    title: "Tech Donations",
    description: "10 laptops donated by Phil Klamm via Matt Harvey visit. Canon camera for school documentation and capturing precious moments.",
    color: "secondary",
    image: "/images/img-562.jpg",
  },
]

export function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-medium uppercase tracking-wider mb-2">Community Impact</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Beyond the Classroom
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment extends beyond education. Through partnerships with Rotary clubs and generous donors, we run impactful projects that transform lives in our community.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Partners Recognition */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Card className="bg-card border-border inline-block max-w-3xl">
            <CardContent className="p-8">
              <h3 className="font-serif font-bold text-lg mb-4 text-card-foreground">Our Generous Partners</h3>
              <p className="text-muted-foreground text-sm">
                Rotary Club of Waunakee • Rotary Club of Davis Sunrise • Rotary Club of Canton Ohio • Rotary Club of Geneva Lake West • Rotary Club of Nakuru • SOAR-Kenya Organization (USA) • Heart Africa • Henny & Niessen Family • Phil Klamm • Shanna & Mick • and many more generous souls
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: typeof projects[0]
  index: number
  isVisible: boolean
}) {
  const Icon = project.icon

  return (
    <Card
      className={`group bg-card border-border hover:shadow-lg transition-all duration-700 hover:-translate-y-1 overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div
          className={`absolute top-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center ${
            project.color === "primary"
              ? "bg-primary/90"
              : "bg-secondary/90"
          }`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="font-serif text-base text-card-foreground leading-tight">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </CardContent>
    </Card>
  )
}
