import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HistorySection } from "@/components/history-section"
import { AcademicsSection } from "@/components/academics-section"
import { ProjectsSection } from "@/components/projects-section"
import { GallerySection } from "@/components/gallery-section"
import { SupportSection } from "@/components/support-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <AcademicsSection />
      <ProjectsSection />
      <GallerySection />
      <SupportSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
