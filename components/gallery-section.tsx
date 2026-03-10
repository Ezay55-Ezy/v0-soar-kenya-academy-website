"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Gallery categories with images from SOAR KENYA COMMUNITY folder
const galleryCategories = [
  {
    name: "Academics",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Academics/IMG-20260309-WA0081.jpg", alt: "Academic activities at SOAR Kenya" },
    ],
  },
  {
    name: "Co-Curricular activities",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0026.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0053.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0054.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0055.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0056.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0057.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0058.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0060.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0061.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0080.jpg", alt: "Co-curricular activities" },
    ],
  },
  {
    name: "Construction projects",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0046.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0047.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0049.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/img-025.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/img-029.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/img-033.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/img-036.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/img-039.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/img-041.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/multi storey building.jpg", alt: "Multi storey building" },
    ],
  },
  {
    name: "Freedom for Girls",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Freedom for Girls/img-475.jpg", alt: "Freedom for Girls program" },
    ],
  },
  {
    name: "Greenhouse and irrigation project",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0041.jpg", alt: "Greenhouse project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0042.jpg", alt: "Greenhouse project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0067.jpg", alt: "Greenhouse project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0068.jpg", alt: "Greenhouse project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0070.jpg", alt: "Irrigation project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0071.jpg", alt: "Irrigation project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0072.jpg", alt: "Greenhouse project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0073.jpg", alt: "Greenhouse project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/img-558.jpg", alt: "Irrigation project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/img-559.jpg", alt: "Irrigation project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/img-560.jpg", alt: "Greenhouse project" },
    ],
  },
  {
    name: "Leaders Visit",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Leaders Visit/IMG-20260309-WA0051.jpg", alt: "Leaders visiting SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/Leaders Visit/IMG-20260309-WA0052.jpg", alt: "Leaders visiting SOAR Kenya" },
    ],
  },
  {
    name: "OLD SOAR",
    images: [
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/IMG-20260309-WA0079.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/img-023.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/img-024.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/img-028.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/img-031.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/img-1069.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/img-476.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/img-477.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/img-563.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/mud classroom.jpg", alt: "Mud classroom" },
    ],
  },
  {
    name: "SOAR Community",
    images: [
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0027.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0028.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0029.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0030.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0031.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0032.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0033.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0034.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0035.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0036.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0037.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0038.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0039.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0040.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0043.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0045.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0048.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0050.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0059.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0062.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0063.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0064.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0065.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0066.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0069.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0082.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0083.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0084.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0085.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0086.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0087.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0088.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0089.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0090.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-000.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-032.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-040.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-042.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-043.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-044.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-1017.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-1063.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-1066.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-1067.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-1068.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-1079.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-473.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-474.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-561.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-562.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-564.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-565.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/img-566.jpg", alt: "SOAR Community" },
    ],
  },
  {
    name: "Solarization project",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Solarization project/img-1064.jpg", alt: "Solarization project" },
      { src: "/SOAR KENYA COMMUNITY/Solarization project/img-1065.jpg", alt: "Solarization project" },
    ],
  },
  {
    name: "Sponsership Program",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Sponsership Program/img-1033.jpg", alt: "Sponsorship program" },
      { src: "/SOAR KENYA COMMUNITY/Sponsership Program/img-1062.jpg", alt: "Sponsorship program" },
    ],
  },
  {
    name: "Water projects",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Water projects/IMG-20260309-WA0040.jpg", alt: "Water project" },
      { src: "/SOAR KENYA COMMUNITY/Water projects/img-479.jpg", alt: "Water project" },
    ],
  },
]

// Before/After comparisons from Old VS New folder
const beforeAfterComparisons = [
  {
    category: "Classrooms",
    pairs: [
      {
        before: { src: "/SOAR KENYA COMMUNITY/Old VS New/Classrooms/Old Classroom.jpg", alt: "Old classroom" },
        after: { src: "/SOAR KENYA COMMUNITY/Old VS New/Classrooms/Modern School.jpg", alt: "Modern school building" },
      },
    ],
  },
  {
    category: "Toilets & Kitchen",
    pairs: [
      {
        before: { src: "/SOAR KENYA COMMUNITY/Old VS New/Toilets/Old PIt Latrine.jpg", alt: "Old pit latrine" },
        after: { src: "/SOAR KENYA COMMUNITY/Old VS New/Toilets/Modern toilets.jpg", alt: "Modern toilets" },
      },
      {
        before: { src: "/SOAR KENYA COMMUNITY/Old VS New/Toilets/Old KItchen.jpg", alt: "Old kitchen" },
        after: { src: "/SOAR KENYA COMMUNITY/Old VS New/Toilets/Modern Kitchen.jpg", alt: "Modern kitchen" },
      },
    ],
  },
  {
    category: "Water Projects",
    pairs: [
      {
        before: { src: "/SOAR KENYA COMMUNITY/Old VS New/Water Projects/Before.jpg", alt: "Water project before" },
        after: { src: "/SOAR KENYA COMMUNITY/Old VS New/Water Projects/Current.jpg", alt: "Water project current" },
      },
      {
        before: { src: "/SOAR KENYA COMMUNITY/Old VS New/Water Projects/Previously.jpg", alt: "Water project previously" },
        after: { src: "/SOAR KENYA COMMUNITY/Old VS New/Water Projects/Now.jpg", alt: "Water project now" },
      },
    ],
  },
]

// Calculate total images
const totalImages = galleryCategories.reduce((sum, cat) => sum + cat.images.length, 0) +
  beforeAfterComparisons.reduce((sum, cat) => sum + cat.pairs.length * 2, 0)

export function GallerySection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")

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

  const allCategories = ["all", "Old VS New", ...galleryCategories.map((cat) => cat.name)]

  return (
    <section id="gallery" className="bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="text-center mb-6">
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
        <div className="flex justify-center">
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
                View Gallery ({totalImages} Photos)
              </>
            )}
          </Button>
        </div>

        {/* Collapsible Gallery */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isExpanded ? "opacity-100 mt-8" : "max-h-0 opacity-0 mt-0 overflow-hidden"
          }`}
        >
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200"
                }`}
              >
                {category === "all" ? "All Photos" : category}
              </button>
            ))}
          </div>

          {/* Before/After Comparison Section */}
          {(activeCategory === "all" || activeCategory === "Old VS New") && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-6 text-purple-800">
                Old VS New - Our Transformation Journey
              </h3>
              {beforeAfterComparisons.map((comparison, catIndex) => (
                <div key={catIndex} className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                    {comparison.category}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {comparison.pairs.map((pair, pairIndex) => (
                      <div
                        key={pairIndex}
                        className="bg-white rounded-xl shadow-lg overflow-hidden p-4"
                      >
                        <div className="flex items-center gap-3">
                          {/* Before Image */}
                          <div className="flex-1">
                            <p className="text-sm font-medium text-red-600 mb-2 text-center">Before</p>
                            <div
                              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                              onClick={() => setSelectedImage(pair.before.src)}
                            >
                              <Image
                                src={pair.before.src}
                                alt={pair.before.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 45vw, 20vw"
                                loading="lazy"
                              />
                            </div>
                          </div>

                          {/* Arrow */}
                          <div className="flex-shrink-0">
                            <ArrowRight className="h-6 w-6 text-purple-500" />
                          </div>

                          {/* After Image */}
                          <div className="flex-1">
                            <p className="text-sm font-medium text-green-600 mb-2 text-center">After</p>
                            <div
                              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                              onClick={() => setSelectedImage(pair.after.src)}
                            >
                              <Image
                                src={pair.after.src}
                                alt={pair.after.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 45vw, 20vw"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Category Sections */}
          {galleryCategories
            .filter((cat) => activeCategory === "all" || activeCategory === cat.name)
            .map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  {category.name}
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    ({category.images.length} photos)
                  </span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}
