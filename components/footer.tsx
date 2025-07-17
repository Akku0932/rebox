"use client"

import { motion } from "framer-motion"
import { Leaf, Package, Award, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Noida, Uttar Pradesh, India", "PIN: 201301"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9873666034", "+91 9871521501"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@reboxesindia.com", "sales@reboxesindia.com"],
    },
  ]

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Stickers", href: "/products/stickers" },
        { name: "Labels", href: "/products/labels" },
        { name: "Banners", href: "/products/banners" },
        { name: "Pouches", href: "/products/pouches" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Quality Assurance", href: "/about#quality" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Request Quote", href: "/contact#quote" },
        { name: "Sample Kit", href: "/contact#samples" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/logo.png"
                alt="Reboxes India"
                width={180}
                height={60}
                className="h-10 sm:h-12 w-auto mb-6 brightness-0 invert"
              />

              <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                Reboxes India Pvt. Ltd. is a leading manufacturer of sustainable packaging solutions, committed to
                protecting both your products and our planet through innovative, eco-friendly designs.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3 text-gray-400 text-sm sm:text-base">
                  <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Noida, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-400 text-sm sm:text-base">
                  <Phone className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col sm:flex-row sm:space-x-2">
                    <span>+91 9873666034</span>
                    <span className="hidden sm:inline">,</span>
                    <span>+91 9871521501</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-gray-400 text-sm sm:text-base">
                  <Mail className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="break-all">info@reboxesindia.com</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-4 sm:mb-6">{section.title}</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-green-400 transition-colors text-sm sm:text-base block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Sustainability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-4 sm:p-6 bg-green-600 rounded-lg"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-semibold text-base sm:text-lg">100% Sustainable Packaging</h5>
                <p className="text-green-100 text-sm sm:text-base">Committed to a greener future</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Package className="w-4 h-4" />
                <span>Recyclable Materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              <p>&copy; 2024 Reboxes India Pvt. Ltd. All rights reserved. | CIN: U21000UP2020PTC131548</p>
              <p className="mt-1">Paper & Paper Products | Packaging & Print Solutions | Founded: July 23, 2020</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-green-400 transition-colors text-center">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-green-400 transition-colors text-center">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-green-400 transition-colors text-center">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
