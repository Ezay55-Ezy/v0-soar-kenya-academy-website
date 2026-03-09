"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const galleryImages = [
  { src: "/images/img-566.jpg", alt: "SOAR Kenya Academy campus" },
  { src: "/images/img-1033.jpg", alt: "Students in classroom" },
  { src: "/images/img-1062.jpg", alt: "School activities" },
  { src: "/images/img-1063.jpg", alt: "Learning environment" },
  { src: "/images/img-1064.jpg", alt: "Students at play" },
  { src: "/images/img-1065.jpg", alt: "Community gathering" },
  { src: "/images/img-1066.jpg", alt: "School facilities" },
  { src: "/images/img-1067.jpg", alt: "Teachers and students" },
  { src: "/images/img-1068.jpg", alt: "Educational activities" },
  { src: "/images/img-1069.jpg", alt: "School grounds" },
  { src: "/images/img-1072.jpg", alt: "Student achievements" },
  { src: "/images/img-1073.jpg", alt: "School event" },
  { src: "/images/img-1074.jpg", alt: "Learning together" },
  { src: "/images/img-1079.jpg", alt: "SOAR Kenya community" },
]

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
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
    <section id="gallery" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-medium uppercase tracking-wider mb-2">Photo Gallery</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Moments That Matter
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into daily life at SOAR Kenya Academy — from classroom learning to community celebrations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <VisuallyHidden>
            <DialogTitle>Gallery Image</DialogTitle>
          </VisuallyHidden>
          {selectedImage && (
            <div className="relative aspect-video w-full">
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
