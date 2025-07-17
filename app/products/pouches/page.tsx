"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollButton } from "@/components/scroll-button"
import { ContactForm } from "@/components/contact-form"
import { ArrowRight, Star, CheckCircle, Package } from "lucide-react"
import Link from "next/link"

export default function PouchesPage() {
  const [selectedSize, setSelectedSize] = useState("medium")
  const [selectedType, setSelectedType] = useState("stand-up")

  const pouches = [
    {
      id: 1,
      name: "Stand-Up Pouches",
      price: "₹12 - ₹45",
      image: "/placeholder.svg?height=300&width=400",
      description: "Flexible stand-up pouches with excellent shelf appeal and storage efficiency",
      features: ["Stand-up Design", "Zip Lock Closure", "Custom Printing", "Food Safe"],
    },
    {
      id: 2,
      name: "Flat Bottom Pouches",
      price: "₹15 - ₹50",
      image: "/placeholder.svg?height=300&width=400",
      description: "Premium flat bottom pouches for enhanced stability and premium presentation",
      features: ["Stable Base", "Large Print Area", "Barrier Protection", "Resealable"],
    },
    {
      id: 3,
      name: "Spout Pouches",
      price: "₹20 - ₹60",
      image: "/placeholder.svg?height=300&width=400",
      description: "Convenient spout pouches ideal for liquid and semi-liquid products",
      features: ["Easy Pour Spout", "Leak Proof", "Child Safe Cap", "Lightweight"],
    },
    {
      id: 4,
      name: "Three-Side Seal Pouches",
      price: "₹8 - ₹35",
      image: "/placeholder.svg?height=300&width=400",
      description: "Cost-effective three-side seal pouches for various packaging needs",
      features: ["Cost Effective", "Versatile", "Custom Sizes", "Quick Production"],
    },
  ]

  const sizes = [
    { name: "small", label: "Small (50-200ml)", price: "₹8 - ₹25" },
    { name: "medium", label: "Medium (250-500ml)", price: "₹15 - ₹40" },
    { name: "large", label: "Large (750ml-1L)", price: "₹25 - ₹60" },
  ]

  const types = [
    { name: "stand-up", label: "Stand-Up" },
    { name: "flat-bottom", label: "Flat Bottom" },
    { name: "spout", label: "Spout Pouch" },
    { name: "three-side", label: "Three-Side Seal" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Flexible Pouches</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Versatile and sustainable flexible pouches perfect for food, beverages, and various consumer products.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Customize Your Pouches</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Select Size</h4>
                      <div className="space-y-2">
                        {sizes.map((size) => (
                          <button
                            key={size.name}
                            onClick={() => setSelectedSize(size.name)}
                            className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                              selectedSize === size.name
                                ? "border-green-500 bg-green-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                              <span className="font-medium text-sm sm:text-base">{size.label}</span>
                              <span className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">{size.price}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Choose Type</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {types.map((type) => (
                          <button
                            key={type.name}
                            onClick={() => setSelectedType(type.name)}
                            className={`p-2 sm:p-3 rounded-lg border-2 text-center transition-all ${
                              selectedType === type.name
                                ? "border-green-500 bg-green-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <span className="text-xs sm:text-sm font-medium">{type.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {[
                          "Food Grade Materials",
                          "Barrier Protection",
                          "Resealable Options",
                          "Custom Printing Available",
                          "Eco-Friendly Options",
                        ].map((feature) => (
                          <div key={feature} className="flex items-center">
                            <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 mr-2 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Form - Hidden on mobile, shown on tablet+ */}
              <div className="hidden md:block">
                <ContactForm
                  title="Get a Quote"
                  subtitle="Tell us about your pouch needs"
                  defaultInquiryType="quote"
                  compact={true}
                />
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {pouches.map((pouch, index) => (
                <motion.div
                  key={pouch.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={pouch.image || "/placeholder.svg"}
                        alt={pouch.name}
                        className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <Badge className="absolute top-3 left-3 bg-green-600 text-white text-xs">Pouches</Badge>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">4.7</span>
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{pouch.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pouch.description}</p>
                      <div className="space-y-2 mb-4">
                        {pouch.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-center text-xs sm:text-sm text-gray-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-base sm:text-lg font-bold text-green-600">{pouch.price}</span>
                        <Link href="/contact">
                          <ScrollButton size="sm" className="bg-green-600 hover:bg-green-700 text-xs sm:text-sm">
                            View Details
                            <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-1" />
                          </ScrollButton>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Mobile Contact Form */}
            <div className="md:hidden mt-8">
              <ContactForm
                title="Get a Quote"
                subtitle="Tell us about your pouch needs"
                defaultInquiryType="quote"
                compact={true}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-8 sm:mt-12 bg-green-50 rounded-lg p-4 sm:p-6"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                  <Package className="w-16 sm:w-24 h-16 sm:h-24 text-green-600" />
                </div>
                <div className="md:w-3/4 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Complete Packaging Solutions</h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Looking for a complete packaging solution? We offer custom pouches, labels, and stickers that work
                    together to create a cohesive brand experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link href="/products">
                      <ScrollButton className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                        Explore All Products
                      </ScrollButton>
                    </Link>
                    <Link href="/contact">
                      <ScrollButton
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto"
                      >
                        Contact Sales Team
                      </ScrollButton>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
