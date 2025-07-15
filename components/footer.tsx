"use client"

import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-foreground mb-4">Amawasu Duangain</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                A fourth-year Information Technology student passionate about web development and UX/UI design. Experienced with Python, HTML, CSS, and JavaScript. Known for fast learning ability and enthusiasm in exploring practical skills in real working environments.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#languages" className="text-muted-foreground hover:text-foreground transition-colors">
                    Languages
                  </Link>
                </li>
                <li>
                  <Link href="#certificates" className="text-muted-foreground hover:text-foreground transition-colors">
                    Certificates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Cloud Architecture</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground flex items-center gap-2 mb-4 sm:mb-0">
              Made with <Heart className="h-4 w-4 text-red-500" /> by Amawasu Duangain
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={scrollToTop} className="flex items-center gap-2">
                <ArrowUp className="h-4 w-4" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
