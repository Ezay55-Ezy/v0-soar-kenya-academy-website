"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Globe, Building } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-medium uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            {"Let's Connect"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our programs, want to visit, or ready to make a difference? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <div className={`grid md:grid-cols-2 gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Director Card */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-md shrink-0">
                    <Image
                      src="/SOAR KENYA COMMUNITY/The Director/IMG-20260309-WA0074.jpg"
                      alt="Mr. James Kiprop Yegon"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-card-foreground">James Kiprop Yegon</h3>
                    <p className="text-muted-foreground text-sm">Founder & Director</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a href="tel:+254726735377" className="text-muted-foreground hover:text-primary transition-colors">
                      +254 726 735 377
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <a href="mailto:yegon1984@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                        yegon1984@gmail.com
                      </a>
                      <a href="mailto:soarkenyaacademy09@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                        soarkenyaacademy09@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-lg text-card-foreground mb-6 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  Our Location
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div className="text-muted-foreground text-sm">
                      <p className="font-medium text-card-foreground">SOAR Kenya Academy</p>
                      <p>P.O. Box 18431</p>
                      <p>Nakuru, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">
                      Southern side of Nakuru town, 12km from town center, bordering the beautiful Lake Nakuru National Park
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Registration:</span> PE/9720/13
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Button asChild variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/5">
              <Link href="https://www.facebook.com/soarkenyaacademy" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-secondary/30 hover:border-secondary hover:bg-secondary/5">
              <Link href="https://soarkenyaacademy.wixsite.com/soarkenyaacademy" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 mr-2" />
                Website
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/5">
              <Link href="mailto:soarkenyaacademy09@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
