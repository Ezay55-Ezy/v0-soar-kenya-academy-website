"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Users, BookOpen, School } from "lucide-react"

const programs = [
  {
    id: "pre-primary",
    title: "Pre-Primary",
    icon: School,
    grades: "PP1 & PP2",
    ages: "Ages 4-5",
    description: "Foundation years focusing on early childhood development, play-based learning, and preparation for primary education.",
    subjects: ["Numeracy", "Literacy", "Environmental Activities", "Creative Arts", "Music & Movement"],
    color: "primary",
    image: "/images/img-042.jpg",
  },
  {
    id: "lower-primary",
    title: "Lower Primary",
    icon: BookOpen,
    grades: "Grade 1-2",
    ages: "Ages 6-8",
    description: "Introduction to Competency-Based Curriculum (CBC) with focus on foundational literacy and numeracy skills.",
    subjects: ["Mathematics", "English", "Kiswahili", "Environmental Activities", "Creative Arts", "Music"],
    color: "secondary",
    image: "/images/img-043.jpg",
  },
  {
    id: "upper-primary",
    title: "Upper Primary",
    icon: GraduationCap,
    grades: "Grade 3-6 (CBC) & Class 7-8 (8-4-4)",
    ages: "Ages 9-14",
    description: "Advanced primary education covering both CBC curriculum with KEPSEA examination and traditional 8-4-4 system with KCPE.",
    subjects: ["Mathematics", "English", "Kiswahili", "Science", "Social Studies", "Religious Education", "Agriculture"],
    color: "primary",
    image: "/images/img-044.jpg",
  },
  {
    id: "junior-secondary",
    title: "Junior Secondary",
    icon: Users,
    grades: "Grade 7-9",
    ages: "Ages 12-14",
    description: "The new 2-6-3-3-3 education system with 12 compulsory subjects preparing students for Senior Secondary education.",
    subjects: ["Mathematics", "English", "Kiswahili", "Integrated Science", "Health Education", "Social Studies", "Agriculture", "Business Studies", "Life Skills", "Religious Education", "Computer Science", "Creative Arts"],
    color: "secondary",
    image: "/images/img-473.jpg",
  },
]

export function AcademicsSection() {
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
    <section id="academics" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-medium uppercase tracking-wider mb-2">Academic Programs</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Nurturing Young Minds
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From early childhood to junior secondary, we provide comprehensive education following both the Competency-Based Curriculum (CBC) and traditional systems.
          </p>
        </div>

        {/* Academic Programs Tabs */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Tabs defaultValue="pre-primary" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-muted/50 p-2">
              {programs.map((program) => (
                <TabsTrigger
                  key={program.id}
                  value={program.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
                >
                  <span className="text-xs md:text-sm">{program.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {programs.map((program) => (
              <TabsContent key={program.id} value={program.id} className="mt-8">
                <Card className="bg-card border-border overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-48 md:h-auto">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center ${program.color === "primary" ? "bg-primary/10" : "bg-secondary/10"}`}>
                            <program.icon className={`h-7 w-7 ${program.color === "primary" ? "text-primary" : "text-secondary"}`} />
                          </div>
                          <div>
                            <CardTitle className="font-serif text-card-foreground">{program.title}</CardTitle>
                            <p className="text-muted-foreground text-sm">
                              {program.grades} • {program.ages}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6">{program.description}</p>
                        <div>
                          <h4 className="font-semibold text-sm text-card-foreground mb-3">Key Subjects:</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.subjects.map((subject) => (
                              <span
                                key={subject}
                                className={`px-3 py-1 rounded-full text-xs ${
                                  program.color === "primary"
                                    ? "bg-primary/10 text-primary"
                                    : "bg-secondary/10 text-secondary"
                                }`}
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Staff & Admission Info */}
        <div className={`grid md:grid-cols-2 gap-6 mt-16 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="font-serif font-bold text-lg mb-4 text-card-foreground flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Our Staff
              </h3>
              <div className="space-y-3 text-muted-foreground text-sm">
                <p><span className="font-medium text-card-foreground">15 trained teachers</span> dedicated to excellence</p>
                <p><span className="font-medium text-card-foreground">12 support staff</span> including:</p>
                <ul className="ml-4 space-y-1">
                  <li>• 3 Farm Managers</li>
                  <li>• 3 Cooks</li>
                  <li>• 2 Security Personnel</li>
                  <li>• 3 Water Officers</li>
                  <li>• 1 Plumber</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="font-serif font-bold text-lg mb-4 text-card-foreground flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-secondary" />
                Admission Information
              </h3>
              <div className="space-y-3 text-muted-foreground text-sm">
                <p><span className="font-medium text-card-foreground">Age Range:</span> 4-13 years</p>
                <p><span className="font-medium text-card-foreground">Enrollment:</span> Beginning of every school year</p>
                <p><span className="font-medium text-card-foreground">School Type:</span> Day and Boarding</p>
                <p className="pt-2 border-t border-border">
                  <span className="font-medium text-card-foreground">Management:</span> Director Mr. James Yegon, Head Teacher, Deputy Head Teacher, and Board of Management (BOM) Committee
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
