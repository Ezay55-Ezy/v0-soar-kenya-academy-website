"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#history", label: "Our History" },
  { href: "#academics", label: "Academics" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#support", label: "Support Us" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-purple-100"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo — fixed 40×40px, never oversized */}
          <Link href="#home" className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden border-2 border-yellow-400/60 shadow-sm">
              <Image
                src="/images/img-000.jpg"
                alt="SOAR Kenya Academy Logo"
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-extrabold text-sm tracking-wide transition-colors ${
                  isScrolled ? "text-purple-900" : "text-white"
                }`}
              >
                SOAR KENYA
              </span>
              <span
                className={`text-xs font-medium transition-colors ${
                  isScrolled ? "text-purple-500" : "text-purple-200"
                }`}
              >
                ACADEMY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-purple-700"
                    : "text-white/90 hover:text-yellow-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold shadow-md ml-1"
            >
              <Link href="#support">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled
                ? "text-purple-800 hover:bg-purple-50"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-purple-100">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-colors py-2.5 px-3 rounded-md font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold mt-3 w-full"
              >
                <Link href="#support" onClick={() => setIsOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
