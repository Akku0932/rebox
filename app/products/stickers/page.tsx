"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollButton } from "@/components/scroll-button"
import { ContactForm } from "@/components/contact-form"
import { ArrowRight, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function StickersPage() {
  const [selectedSize, setSelectedSize] = useState("medium")
  const [selectedFinish, setSelectedFinish] = useState("glossy")

  const stickers = [
    {
      id: 1,
      name: "Custom Die-Cut Stickers",
      price: "₹10 - ₹30",
      image: "/placeholder.svg?height=300&width=400",
      description: "Custom shaped stickers cut to the outline of your design",
      features: ["Waterproof", "UV Resistant", "Custom Shapes", "Indoor/Outdoor Use"],
    },
    {
      id: 2,
      name: "Circle Stickers",
      price: "₹5 - ₹20",
      image: "/placeholder.svg?height=300&width=400",
      description: "Perfect round stickers ideal for branding and product labeling",
      features: ["Multiple Sizes", "Vibrant Colors", "Durable Adhesive", "Eco-friendly Options"],
    },
    {
      id: 3,
      name: "Vinyl Stickers",
      price: "₹15 - ₹35",
      image: "/placeholder.svg?height=300&width=400",
      description: "Premium vinyl stickers with superior durability for long-term use",
      features: ["Weather Resistant", "Scratch Proof", "3-5 Year Lifespan", "High Definition Printing"],
    },
  ]

  const sizes = [
    { name: "small", label: "Small (1-2 inches)", price: "₹5 - ₹15" },
    { name: "medium", label: "Medium (3-4 inches)", price: "₹10 - ₹25" },
    { name: "large", label: "Large (5-6 inches)", price: "₹20 - ₹35" },
  ]

  const finishes = [
    { name: "glossy", label: "Glossy" },
    { name: "matte", label: "Matte" },
    { name: "holographic", label: "Holographic" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Custom Stickers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality, durable stickers perfect for branding, product labeling, and promotional purposes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Customize Your Stickers</h3>

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
                      <h4 className="font-medium text-gray-900 mb-3">Choose Finish</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {finishes.map((finish) => (
                          <button
                            key={finish.name}
                            onClick={() => setSelectedFinish(finish.name)}
                            className={`p-3 rounded-lg border-2 text-center transition-all ${
                              selectedFinish === finish.name
                                ? "border-green-500 bg-green-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <span className="text-sm font-medium">{finish.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {[
                          "Waterproof & Weather Resistant",
                          "UV Protected - Won't Fade",
                          "Easy Peel Backing",
                          "Eco-Friendly Options Available",
                          "High-Definition Printing",
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

              {/* Quick Contact Form */}
              <ContactForm
                title="Get a Quote"
                subtitle="Tell us about your sticker needs"
                defaultInquiryType="stickers"
                compact={true}
              />
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {stickers.map((sticker, index) => (
                <motion.div
                  key={sticker.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={sticker.image || "/placeholder.svg"}
                        alt={sticker.name}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <Badge className="absolute top-3 left-3 bg-green-600 text-white">Stickers</Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">4.8</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{sticker.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{sticker.description}</p>
                      <div className="space-y-2 mb-4">
                        {sticker.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-gray-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">{sticker.price}</span>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Sticker Design Services</h3>
              <p className="text-gray-600 mb-6">
                Don't have a design ready? Our professional design team can help create the perfect stickers for your
                brand or product. We offer comprehensive design services to bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <ScrollButton className="bg-green-600 hover:bg-green-700 text-white">
                    Request Design Service
                  </ScrollButton>
                </Link>
                <Link href="/products">
                  <ScrollButton variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    View All Products
                  </ScrollButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
