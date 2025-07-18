import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const sitemapLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Mono Cartons", href: "/products/mono-cartons" },
  { name: "Labels", href: "/products/labels" },
  { name: "Stickers", href: "/products/stickers" },
  { name: "POP's", href: "/products/pops" },
  { name: "Specialist", href: "/specialist" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "FAQ", href: "/faq" },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-green-700">Sitemap</h1>
            <ul className="space-y-3">
              {sitemapLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-green-700 hover:underline text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 