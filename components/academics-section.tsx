"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Users, BookOpen, School, Trophy, Download, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
                <Card className="bg-card border-border">
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

        {/* KPSEA 2025 Results */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-secondary/10">
                  <Trophy className="h-7 w-7 text-secondary" />
                </div>
                <div>
                  <CardTitle className="font-serif text-card-foreground">KPSEA 2025 Results Analysis</CardTitle>
                  <p className="text-muted-foreground text-sm">Kenya Primary School Education Assessment</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Our students have demonstrated excellent performance in the 2025 KPSEA examinations. Below is a detailed breakdown of results across all subjects.
              </p>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary/5 hover:bg-primary/5">
                      <TableHead className="font-bold text-primary">Subject</TableHead>
                      <TableHead className="text-center font-bold text-secondary">EE</TableHead>
                      <TableHead className="text-center font-bold text-primary">ME</TableHead>
                      <TableHead className="text-center font-bold text-muted-foreground">AE</TableHead>
                      <TableHead className="text-center font-bold text-destructive">BE</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { subject: "English", ee: 23, me: 14, ae: 6, be: 2 },
                      { subject: "Mathematics", ee: 16, me: 16, ae: 13, be: 0 },
                      { subject: "Integrated Science", ee: 7, me: 17, ae: 20, be: 1 },
                      { subject: "Agriculture", ee: 4, me: 20, ae: 20, be: 2 },
                      { subject: "Home Science", ee: 8, me: 18, ae: 22, be: 0 },
                      { subject: "Art & Craft", ee: 12, me: 16, ae: 18, be: 0 },
                      { subject: "Music", ee: 4, me: 24, ae: 18, be: 0 },
                      { subject: "Physical Education", ee: 9, me: 20, ae: 16, be: 1 },
                      { subject: "Social Studies", ee: 0, me: 15, ae: 27, be: 4 },
                      { subject: "CRE", ee: 19, me: 15, ae: 12, be: 0 },
                    ].map((row, index) => (
                      <TableRow key={row.subject} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                        <TableCell className="font-medium text-card-foreground">{row.subject}</TableCell>
                        <TableCell className="text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                            {row.ee}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                            {row.me}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground font-semibold text-sm">
                            {row.ae}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm ${row.be > 0 ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"}`}>
                            {row.be}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-secondary">EE</span> = Exceeds Expectation | 
                  <span className="font-semibold text-primary ml-2">ME</span> = Meets Expectation | 
                  <span className="font-semibold ml-2">AE</span> = Approaches Expectation | 
                  <span className="font-semibold text-destructive ml-2">BE</span> = Below Expectation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fee Structure 2026 */}
        <div className={`mt-16 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/10">
                    <CreditCard className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-serif text-card-foreground">Fee Structure 2026</CardTitle>
                    <p className="text-muted-foreground text-sm">School Fees for Academic Year 2025-2026</p>
                  </div>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="https://blobs.vusercontent.net/blob/SCHOOL%20FEE%202025-2026-JMdeHVonGYktTkXJE6rKVMbyU9MSjx.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Download Full Document
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Regular Fee Structure */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Regular Day School Fees (KSH)
                  </h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-primary/5 hover:bg-primary/5">
                          <TableHead className="font-bold text-primary">Grade</TableHead>
                          <TableHead className="text-center font-bold">Term 1</TableHead>
                          <TableHead className="text-center font-bold">Term 2</TableHead>
                          <TableHead className="text-center font-bold">Term 3</TableHead>
                          <TableHead className="text-center font-bold text-secondary">Annual</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { grade: "Pre-School (PP1 & PP2)", t1: "5,600", t2: "5,600", t3: "5,600", annual: "16,800" },
                          { grade: "Grade 1", t1: "6,100", t2: "6,100", t3: "6,100", annual: "18,300" },
                          { grade: "Grade 2", t1: "6,100", t2: "6,100", t3: "6,100", annual: "18,300" },
                          { grade: "Grade 3", t1: "6,100", t2: "6,100", t3: "6,100", annual: "18,300" },
                          { grade: "Grade 4", t1: "6,600", t2: "6,600", t3: "6,600", annual: "19,800" },
                          { grade: "Grade 5", t1: "6,600", t2: "6,600", t3: "6,600", annual: "19,800" },
                          { grade: "Grade 6", t1: "6,600", t2: "6,600", t3: "6,600", annual: "19,800" },
                          { grade: "Junior Secondary (7-9)", t1: "8,500", t2: "8,500", t3: "8,500", annual: "25,500" },
                        ].map((row, index) => (
                          <TableRow key={row.grade} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                            <TableCell className="font-medium text-card-foreground">{row.grade}</TableCell>
                            <TableCell className="text-center text-muted-foreground">{row.t1}</TableCell>
                            <TableCell className="text-center text-muted-foreground">{row.t2}</TableCell>
                            <TableCell className="text-center text-muted-foreground">{row.t3}</TableCell>
                            <TableCell className="text-center font-semibold text-secondary">{row.annual}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Boarding Fee */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Boarding Fee (KSH)
                  </h4>
                  <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-muted-foreground text-sm">Term 1</p>
                        <p className="font-semibold text-card-foreground">15,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Term 2</p>
                        <p className="font-semibold text-card-foreground">15,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Term 3</p>
                        <p className="font-semibold text-card-foreground">15,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Annual Total</p>
                        <p className="font-bold text-secondary">45,000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Admission Fees */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    New Admission Fees (One-time)
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-muted-foreground text-sm">Admission Fee</p>
                      <p className="font-semibold text-card-foreground">KSH 1,500</p>
                      <p className="text-xs text-muted-foreground mt-1">Payable once on admission day</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-muted-foreground text-sm">Interview Fee</p>
                      <p className="font-semibold text-card-foreground">KSH 1,000</p>
                      <p className="text-xs text-muted-foreground mt-1">Payable once on interview day</p>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-card-foreground mb-3">Payment Methods</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-card-foreground">M-Pesa:</span> Lipa na M-Pesa {'>'} Pay Bill {'>'} Business No: <span className="font-mono bg-muted px-1 rounded">247247</span> {'>'} Account: <span className="font-mono bg-muted px-1 rounded">733337#nameandgrade</span>
                    </p>
                    <p>
                      <span className="font-medium text-card-foreground">Bank:</span> Equity Bank | Account Name: SOAR KENYA ACADEMY | Account No: <span className="font-mono bg-muted px-1 rounded">0310260929590</span>
                    </p>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="p-4 border border-secondary/30 rounded-lg bg-secondary/5">
                  <h4 className="font-semibold text-secondary mb-2">Important Notes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 50% of the school fee is due on the first day of opening and 100% by mid-term</li>
                    <li>• No cash transactions allowed - please deposit and submit receipt</li>
                    <li>• Grade 6 to Junior Secondary requires fresh admission</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
