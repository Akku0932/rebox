"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollButton } from "@/components/scroll-button"
import { ArrowRight, Star, CheckCircle, Maximize2, ImageIcon } from "lucide-react"
import Link from "next/link"

export default function BannersPage() {
  const [selectedSize, setSelectedSize] = useState("medium")
  const [selectedMaterial, setSelectedMaterial] = useState("vinyl")

  const banners = [
    {
      id: 1,
      name: "Outdoor Vinyl Banners",
      price: "₹500 - ₹2000",
      image: "/placeholder.svg?height=300&width=400",
      description: "Weather-resistant vinyl banners perfect for outdoor events and advertising",
      features: ["UV Resistant", "Waterproof", "Reinforced Edges", "Wind Slits Available"],
    },
    {
      id: 2,
      name: "Indoor Fabric Banners",
      price: "₹400 - ₹1500",
      image: "/placeholder.svg?height=300&width=400",
      description: "Elegant fabric banners for trade shows, retail displays, and indoor events",
      features: ["Wrinkle Resistant", "Vibrant Colors", "Lightweight", "Easy to Install"],
    },
    {
      id: 3,
      name: "Roll-Up Banners",
      price: "₹800 - ₹2500",
      image: "/placeholder.svg?height=300&width=400",
      description: "Portable roll-up banner stands for presentations and exhibitions",
      features: ["Retractable", "Includes Stand", "Carrying Case", "Quick Assembly"],
    },
  ]

  const sizes = [
    { name: "small", label: "Small (2x3 ft)", price: "₹400 - ₹800" },
    { name: "medium", label: "Medium (3x6 ft)", price: "₹800 - ₹1500" },
    { name: "large", label: "Large (4x8 ft)", price: "₹1500 - ₹2500" },
    { name: "custom", label: "Custom Size", price: "Contact for pricing" },
  ]

  const materials = [
    { name: "vinyl", label: "Vinyl", description: "Durable, waterproof, ideal for outdoors" },
    { name: "fabric", label: "Fabric", description: "Elegant finish, perfect for indoor use" },
    { name: "mesh", label: "Mesh", description: "Wind resistant, suitable for windy areas" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Promotional Banners</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-impact banners for events, advertising, and promotions with vibrant colors and durable materials.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Customize Your Banner</h3>

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
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{size.label}</span>
                              <span className="text-sm text-gray-500">{size.price}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Choose Material</h4>
                      <div className="space-y-2">
                        {materials.map((material) => (
                          <button
                            key={material.name}
                            onClick={() => setSelectedMaterial(material.name)}
                            className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                              selectedMaterial === material.name
                                ? "border-green-500 bg-green-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div>
                              <div className="font-medium">{material.label}</div>
                              <div className="text-sm text-gray-500">{material.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-3">Banner Features</h4>
                      <div className="space-y-2">
                        {[
                          "High-Resolution Printing",
                          "Weather Resistant Options",
                          "Reinforced Edges & Grommets",
                          "Wind Slits for Outdoor Use",
                          "Multiple Finishing Options",
                          "Fast Production Turnaround",
                        ].map((feature) => (
                          <div key={feature} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Services</h3>
                  <p className="text-gray-600 mb-4">
                    Need help designing your banner? Our professional design team can create eye-catching graphics for
                    maximum impact.
                  </p>
                  <Link href="/contact">
                    <ScrollButton className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Request Design Help
                    </ScrollButton>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {banners.map((banner, index) => (
                <motion.div
                  key={banner.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={banner.image || "/placeholder.svg"}
                        alt={banner.name}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <Badge className="absolute top-3 left-3 bg-green-600 text-white">Banners</Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">4.9</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{banner.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{banner.description}</p>
                      <div className="space-y-2 mb-4">
                        {banner.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-gray-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">{banner.price}</span>
                        <Link href="/contact">
                          <ScrollButton size="sm" className="bg-green-600 hover:bg-green-700">
                            Get Quote
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </ScrollButton>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 bg-green-50 rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                  <Maximize2 className="w-24 h-24 text-green-600" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Sizes & Installations</h3>
                  <p className="text-gray-600 mb-6">
                    Need a non-standard size or professional installation? We offer custom sizing and installation
                    services for all types of events and locations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <ScrollButton className="bg-green-600 hover:bg-green-700 text-white">
                        Request Custom Quote
                      </ScrollButton>
                    </Link>
                    <Link href="/products">
                      <ScrollButton variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        View All Products
                      </ScrollButton>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 p-6 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <ImageIcon className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Design Guidelines</h3>
              </div>
              <p className="text-gray-600 mb-4">
                For best results, please provide high-resolution images (300 DPI) and vector graphics when possible.
                Allow for a 0.5" bleed area around all edges of your design.
              </p>
              <Link href="/contact">
                <ScrollButton variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                  Download Design Template
                </ScrollButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
