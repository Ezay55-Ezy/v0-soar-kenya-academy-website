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
      { src: "/SOAR KENYA COMMUNITY/Academics/IMG-20260309-WA0022.jpg", alt: "Academic activities at SOAR Kenya" },
    ],
  },
  {
    name: "Co-Curricular activities",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0028.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0029.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0030.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0031.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0032.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0033.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0034.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0035.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0036.jpg", alt: "Co-curricular activities" },
      { src: "/SOAR KENYA COMMUNITY/Co-Curricular activities/IMG-20260309-WA0037.jpg", alt: "Co-curricular activities" },
    ],
  },
  {
    name: "Construction projects",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0055.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0056.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0057.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0058.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0059.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0060.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0061.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0062.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0063.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0064.jpg", alt: "Construction project" },
      { src: "/SOAR KENYA COMMUNITY/Construction projects/IMG-20260309-WA0065.jpg", alt: "Construction project" },
    ],
  },
  {
    name: "Freedom for Girls",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Freedom for Girls/IMG-20260309-WA0066.jpg", alt: "Freedom for Girls program" },
    ],
  },
  {
    name: "Greenhouse and irrigation project",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0067.jpg", alt: "Greenhouse project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0068.jpg", alt: "Greenhouse project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0069.jpg", alt: "Irrigation project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0070.jpg", alt: "Irrigation project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0071.jpg", alt: "Greenhouse project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0072.jpg", alt: "Greenhouse project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0073.jpg", alt: "Irrigation project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0074.jpg", alt: "Irrigation project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0075.jpg", alt: "Greenhouse project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0076.jpg", alt: "Greenhouse project" },
      { src: "/SOAR KENYA COMMUNITY/Greenhouse and irrigation project/IMG-20260309-WA0077.jpg", alt: "Irrigation project" },
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
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/IMG-20260309-WA0038.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/IMG-20260309-WA0039.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/IMG-20260309-WA0040.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/IMG-20260309-WA0041.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/IMG-20260309-WA0042.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/IMG-20260309-WA0043.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/IMG-20260309-WA0044.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/IMG-20260309-WA0045.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/IMG-20260309-WA0046.jpg", alt: "Old SOAR Kenya" },
      { src: "/SOAR KENYA COMMUNITY/OLD SOAR/IMG-20260309-WA0047.jpg", alt: "Old SOAR Kenya" },
    ],
  },
  {
    name: "SOAR Community",
    images: [
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0078.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0079.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0080.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0081.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0082.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0083.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0084.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0085.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0086.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0087.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0088.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0089.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0090.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0091.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0092.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0093.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0094.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0095.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0096.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0097.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0098.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0099.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0100.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0101.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0102.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0103.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0104.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0105.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0106.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0107.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0108.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0109.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0110.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0111.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0112.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0113.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0114.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0115.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0116.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0117.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0118.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0119.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0120.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0121.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0122.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0123.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0124.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0125.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0126.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0127.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0128.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0129.jpg", alt: "SOAR Community" },
      { src: "/SOAR KENYA COMMUNITY/SOAR Community/IMG-20260309-WA0130.jpg", alt: "SOAR Community" },
    ],
  },
  {
    name: "Solarization project",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Solarization project/IMG-20260309-WA0053.jpg", alt: "Solarization project" },
      { src: "/SOAR KENYA COMMUNITY/Solarization project/IMG-20260309-WA0054.jpg", alt: "Solarization project" },
    ],
  },
  {
    name: "Sponsership Program",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Sponsership Program/IMG-20260309-WA0049.jpg", alt: "Sponsorship program" },
      { src: "/SOAR KENYA COMMUNITY/Sponsership Program/IMG-20260309-WA0050.jpg", alt: "Sponsorship program" },
    ],
  },
  {
    name: "Water projects",
    images: [
      { src: "/SOAR KENYA COMMUNITY/Water projects/IMG-20260309-WA0023.jpg", alt: "Water project" },
      { src: "/SOAR KENYA COMMUNITY/Water projects/IMG-20260309-WA0024.jpg", alt: "Water project" },
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

          {/* Regular Gallery Categories */}
          {galleryCategories
            .filter((cat) => activeCategory === "all" || activeCategory === cat.name)
            .map((category, catIndex) => (
              <div key={catIndex} className="mb-10">
                <h3 className="text-xl font-bold text-purple-800 mb-4 border-b border-purple-200 pb-2">
                  {category.name}
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    ({category.images.length} photos)
                  </span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                  {category.images.map((image, index) => (
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
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <div
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage}
                alt="Gallery image enlarged"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
