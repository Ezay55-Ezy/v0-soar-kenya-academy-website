"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Gallery images from public/images folder
const galleryImages = [
  { src: "/images/img-000.jpg", alt: "SOAR Kenya Academy moment" },
  { src: "/images/img-023.jpg", alt: "Students at SOAR Kenya" },
  { src: "/images/img-024.jpg", alt: "Campus life" },
  { src: "/images/img-025.jpg", alt: "Learning activities" },
  { src: "/images/img-028.jpg", alt: "School event" },
  { src: "/images/img-029.jpg", alt: "Community gathering" },
  { src: "/images/img-031.jpg", alt: "Student activities" },
  { src: "/images/img-032.jpg", alt: "Classroom scene" },
  { src: "/images/img-033.jpg", alt: "School grounds" },
  { src: "/images/img-036.jpg", alt: "Special moment" },
  { src: "/images/img-039.jpg", alt: "Students learning" },
  { src: "/images/img-040.jpg", alt: "School celebration" },
  { src: "/images/img-041.jpg", alt: "Campus view" },
  { src: "/images/img-042.jpg", alt: "Student achievement" },
  { src: "/images/img-043.jpg", alt: "Group activity" },
  { src: "/images/img-044.jpg", alt: "School life" },
  { src: "/images/img-473.jpg", alt: "Community event" },
  { src: "/images/img-474.jpg", alt: "Students together" },
  { src: "/images/img-475.jpg", alt: "Learning moment" },
  { src: "/images/img-476.jpg", alt: "School activity" },
  { src: "/images/img-477.jpg", alt: "Campus scene" },
  { src: "/images/img-479.jpg", alt: "Special event" },
  { src: "/images/img-558.jpg", alt: "Student life" },
  { src: "/images/img-559.jpg", alt: "Classroom activity" },
  { src: "/images/img-560.jpg", alt: "School moment" },
  { src: "/images/img-561.jpg", alt: "Learning together" },
  { src: "/images/img-562.jpg", alt: "Campus activity" },
  { src: "/images/img-563.jpg", alt: "Student gathering" },
  { src: "/images/img-564.jpg", alt: "School event" },
  { src: "/images/img-565.jpg", alt: "Community moment" },
  { src: "/images/img-566.jpg", alt: "SOAR Kenya life" },
  { src: "/images/img-1017.jpg", alt: "Special occasion" },
  { src: "/images/img-1033.jpg", alt: "School celebration" },
  { src: "/images/img-1062.jpg", alt: "Student achievement" },
  { src: "/images/img-1063.jpg", alt: "Campus view" },
  { src: "/images/img-1064.jpg", alt: "Learning activities" },
  { src: "/images/img-1065.jpg", alt: "School grounds" },
  { src: "/images/img-1066.jpg", alt: "Community event" },
  { src: "/images/img-1067.jpg", alt: "Student moment" },
  { src: "/images/img-1068.jpg", alt: "Classroom scene" },
  { src: "/images/img-1069.jpg", alt: "School activity" },
  { src: "/images/img-1072.jpg", alt: "Campus life" },
  { src: "/images/img-1073.jpg", alt: "Special moment" },
  { src: "/images/img-1074.jpg", alt: "Student gathering" },
  { src: "/images/img-1079.jpg", alt: "SOAR Kenya Academy" },
]

export function GallerySection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Listen for custom event to auto-expand gallery when navigating from navbar
  useEffect(() => {
    const handleExpandGallery = () => {
      setIsExpanded(true)
    }

    window.addEventListener("expandGallery", handleExpandGallery)
    return () => window.removeEventListener("expandGallery", handleExpandGallery)
  }, [])

  // Handle hash change to auto-expand when navigating to #gallery
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#gallery") {
        setIsExpanded(true)
      }
    }

    // Check on mount
    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Our Memories
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore moments from our journey - from humble beginnings to the thriving community we are today.
          </p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            size="lg"
            className="gap-2 border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-5 w-5" />
                Hide Gallery
              </>
            ) : (
              <>
                <ChevronDown className="h-5 w-5" />
                View Gallery ({galleryImages.length} Photos)
              </>
            )}
          </Button>
        </div>

        {/* Collapsible Gallery Grid */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group bg-muted"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full max-w-4xl max-h-[85vh] aspect-auto">
              <Image
                src={selectedImage}
                alt="Gallery image enlarged"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
