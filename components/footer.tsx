import Link from "next/link"
import { Heart } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#history", label: "Our History" },
  { href: "#academics", label: "Academics" },
  { href: "#projects", label: "Community Projects" },
  { href: "#support", label: "Support Us" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-primary font-serif font-bold text-lg">
                S
              </div>
              <span className="font-serif font-bold text-lg">SOAR Kenya Academy</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              School, Orphans and Relief — Building futures and transforming lives since 2011.
            </p>
            <p className="text-primary-foreground/60 text-xs italic">
              {"\"Today's preparation determines tomorrow's achievements\""}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Mr. James Kiprop Yegon</p>
              <p>P.O. Box 18431, Nakuru, Kenya</p>
              <p>
                <a href="tel:+254726735377" className="hover:text-primary-foreground transition-colors">
                  +254 726 735 377
                </a>
              </p>
              <p>
                <a href="mailto:soarkenyaacademy09@gmail.com" className="hover:text-primary-foreground transition-colors">
                  soarkenyaacademy09@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-400 fill-red-400" /> for the children of SOAR Kenya Academy
          </p>
          <p className="text-primary-foreground/40 text-xs mt-2">
            Registration: PE/9720/13 • Service Above Self
          </p>
        </div>
      </div>
    </footer>
  )
}
