"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollButton } from "@/components/scroll-button"
import { ArrowRight, Star, CheckCircle, Package } from "lucide-react"
import Link from "next/link"

export default function LabelsPage() {
  const [selectedMaterial, setSelectedMaterial] = useState("paper")
  const [selectedApplication, setSelectedApplication] = useState("product")

  const labels = [
    {
      id: 1,
      name: "Product Labels",
      price: "₹8 - ₹25",
      image: "/placeholder.svg?height=300&width=400",
      description: "High-quality product labels for packaging and branding",
      features: ["Barcode Compatible", "Food Safe", "Water Resistant", "Custom Shapes"],
    },
    {
      id: 2,
      name: "Shipping Labels",
      price: "₹5 - ₹15",
      image: "/placeholder.svg?height=300&width=400",
      description: "Durable shipping labels for packages and envelopes",
      features: ["Address Printing", "Barcode Compatible", "Strong Adhesive", "Weather Resistant"],
    },
    {
      id: 3,
      name: "Warning & Safety Labels",
      price: "₹10 - ₹30",
      image: "/placeholder.svg?height=300&width=400",
      description: "High-visibility labels for safety warnings and instructions",
      features: ["UV Resistant", "Industrial Grade", "Regulatory Compliant", "Tamper Evident"],
    },
    {
      id: 4,
      name: "Promotional Labels",
      price: "₹7 - ₹20",
      image: "/placeholder.svg?height=300&width=400",
      description: "Eye-catching promotional labels for special offers and events",
      features: ["Vibrant Colors", "Removable Options", "Custom Shapes", "Quick Turnaround"],
    },
  ]

  const materials = [
    { name: "paper", label: "Paper", description: "Eco-friendly, ideal for indoor use" },
    { name: "vinyl", label: "Vinyl", description: "Durable, waterproof, for indoor/outdoor" },
    { name: "polyester", label: "Polyester", description: "Premium, resistant to chemicals" },
  ]

  const applications = [
    { name: "product", label: "Product Packaging" },
    { name: "shipping", label: "Shipping & Logistics" },
    { name: "safety", label: "Safety & Warning" },
    { name: "promotional", label: "Promotional" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Custom Labels</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional labels for product packaging, shipping, safety, and promotional purposes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Customize Your Labels</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Select Material</h4>
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

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Application Type</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {applications.map((application) => (
                          <button
                            key={application.name}
                            onClick={() => setSelectedApplication(application.name)}
                            className={`p-3 rounded-lg border-2 text-center transition-all ${
                              selectedApplication === application.name
                                ? "border-green-500 bg-green-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <span className="text-sm font-medium">{application.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-3">Label Features</h4>
                      <div className="space-y-2">
                        {[
                          "Custom Shapes & Sizes",
                          "High-Definition Printing",
                          "Barcode & QR Code Compatible",
                          "Food-Safe Options Available",
                          "Eco-Friendly Materials",
                          "Weather & Chemical Resistant Options",
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Bulk Ordering</h3>
                  <p className="text-gray-600 mb-4">
                    Special pricing available for bulk orders. Contact us for a custom quote.
                  </p>
                  <Link href="/contact">
                    <ScrollButton className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Request Bulk Quote
                    </ScrollButton>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {labels.map((label, index) => (
                <motion.div
                  key={label.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={label.image || "/placeholder.svg"}
                        alt={label.name}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <Badge className="absolute top-3 left-3 bg-green-600 text-white">Labels</Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">4.7</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{label.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{label.description}</p>
                      <div className="space-y-2 mb-4">
                        {label.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-gray-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">{label.price}</span>
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
                  <Package className="w-24 h-24 text-green-600" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Packaging Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Looking for a complete packaging solution? We offer custom boxes, pouches, and labels that work
                    together to create a cohesive brand experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/products">
                      <ScrollButton className="bg-green-600 hover:bg-green-700 text-white">
                        Explore Packaging Solutions
                      </ScrollButton>
                    </Link>
                    <Link href="/contact">
                      <ScrollButton variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
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
