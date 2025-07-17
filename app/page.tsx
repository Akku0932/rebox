"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Leaf, Recycle, Award, Users, Factory, ChevronRight, Play, RotateCcw, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollButton } from "@/components/scroll-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <ProductPreview />
      <SpecialistPreview />
      <InteractiveConfigurator />
      <SustainabilityPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-2 sm:px-4 grid lg:grid-cols-2 gap-4 sm:gap-8 items-center w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <Badge className="mb-4 bg-green-100 text-green-800 text-xs sm:text-sm">
            <Leaf className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
            Sustainable Packaging Solutions
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            From Paper to
            <span className="text-green-600 block">Perfect Packaging</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Reboxes India Pvt. Ltd. transforms sustainable materials into premium packaging solutions. Founded in 2020
            in Noida, we specialize in custom pouches, stickers, labels, and eco-friendly packaging.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/products">
                <ScrollButton size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                  Explore Products
                  <ChevronRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </ScrollButton>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about">
                <ScrollButton
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent w-full sm:w-auto"
                >
                  Our Story
                  <Play className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </ScrollButton>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative order-first lg:order-last">
          <PaperToBoxAnimation step={animationStep} />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-600 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

function PaperToBoxAnimation({ step }: { step: number }) {
  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="paper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="w-48 sm:w-64 h-60 sm:h-80 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex items-center justify-center"
          >
            <div className="text-gray-400 text-center">
              <Package className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4" />
              <p className="text-base sm:text-lg font-medium">Raw Paper</p>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="folding"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            className="w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300 rounded-lg shadow-lg flex items-center justify-center transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="text-green-600 text-center">
              <RotateCcw className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 animate-spin" />
              <p className="text-base sm:text-lg font-medium">Folding</p>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="relative"
          >
            <div className="w-36 sm:w-48 h-36 sm:h-48 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-xl transform rotate-12">
              <div className="absolute inset-3 sm:inset-4 border-2 border-white/30 rounded-lg"></div>
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-white">
                <Package className="w-6 sm:w-8 h-6 sm:h-8" />
              </div>
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-10 sm:w-12 h-10 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Award className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-800" />
            </motion.div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="packed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="text-center"
          >
            <div className="w-44 sm:w-56 h-32 sm:h-40 bg-gradient-to-br from-green-600 to-green-700 rounded-lg shadow-2xl mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 transform -skew-x-12"></div>
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-white">
                <Package className="w-6 sm:w-8 h-6 sm:h-8" />
              </div>
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-white/80 text-xs sm:text-sm font-medium">
                REBOXES
              </div>
            </div>
            <p className="text-base sm:text-lg font-medium text-green-600">Ready to Ship!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function StatsSection() {
  const stats = [
    { icon: Package, label: "Packages Produced", value: 50000, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 500, suffix: "+" },
    { icon: Factory, label: "Custom Projects", value: 1200, suffix: "+" },
    { icon: Recycle, label: "Eco-Friendly", value: 100, suffix: "%" },
  ]

  return (
    <section className="py-8 sm:py-16 bg-green-600">
      <div className="container mx-auto px-2 sm:px-4 w-full max-w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-white/20 rounded-full mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-6 sm:w-8 h-6 sm:h-8" />
              </motion.div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-green-100 mt-2 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="text-2xl sm:text-4xl font-bold">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

function ProductPreview() {
  const products = [
    {
      name: "Mono Cartons",
      description: "High-quality mono cartons for retail and FMCG packaging.",
      image: "/folding_cartons.jpg",
      href: "/products/mono-cartons",
    },
    {
      name: "Labels",
      description: "Custom self-adhesive labels for branding and product identification.",
      image: "/printed_labels.jpg",
      href: "/products/labels",
    },
    {
      name: "Stickers",
      description: "Durable dome stickers for a 3D branding effect.",
      image: "/clasic_sticker.jpg",
      href: "/products/stickers",
    },
    {
      name: "POP's",
      description: "Custom blister cards and panel overlays for secure and attractive product display.",
      image: "/blister_cards.jpg",
      href: "/products/pops",
    },
  ]
  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of sustainable packaging solutions designed to protect your products and enhance your
            brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="w-full"
            >
              <Link href={product.href} className="block w-full">
                <Card className="h-full overflow-hidden group cursor-pointer w-full shadow-lg border border-gray-200 flex flex-col">
                  <div className="w-full h-64 bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="max-h-60 w-auto object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm sm:text-base flex-1">{product.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
          <Link href="/products">
            <ScrollButton
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              View All Products
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
            </ScrollButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function SpecialistPreview() {
  const specialists = [
    {
      name: "Metallic Printing",
      description: "Advanced metallic printing techniques for premium, eye-catching packaging and labels.",
      image: "/specialist_metallic-printing.png",
    },
    {
      name: "Plastic Printing",
      description: "High-quality printing on plastic substrates for durable and vibrant results.",
      image: "/specialist_plastic-printing.png",
    },
    {
      name: "Fresnel Lens Effect",
      description: "Innovative Fresnel lens effects for unique visual depth and security features.",
      image: "/specialist_fresnel-lens-effect.png",
    },
    {
      name: "Anti-Counterfeit Solutions",
      description: "State-of-the-art anti-counterfeit technologies to protect your brand and products.",
      image: "/specialist_anti-counterfiet-printing.png",
    },
    {
      name: "Natural Feel Effect",
      description: "Special finishes that provide a tactile, natural feel to your packaging.",
      image: "/specialist_natural-feel-effect-printing.png",
    },
  ]
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Specialist Solutions</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our advanced specialist solutions that set your brand apart with innovation, security, and premium finishes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-8">
          {specialists.map((item) => (
            <div key={item.name} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col h-full">
              <div className="w-full h-64 bg-white flex items-center justify-center overflow-hidden">
                <img src={item.image} alt={item.name} className="max-h-60 w-auto object-contain object-center" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm flex-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function InteractiveConfigurator() {
  const [selectedColor, setSelectedColor] = useState("green")
  const [selectedSize, setSelectedSize] = useState("medium")

  const colors = [
    { name: "green", value: "bg-green-500", label: "Eco Green" },
    { name: "blue", value: "bg-blue-500", label: "Ocean Blue" },
    { name: "red", value: "bg-red-500", label: "Vibrant Red" },
    { name: "purple", value: "bg-purple-500", label: "Royal Purple" },
  ]

  const sizes = [
    { name: "small", label: "Small", dimensions: "10x10x5 cm" },
    { name: "medium", label: "Medium", dimensions: "20x15x10 cm" },
    { name: "large", label: "Large", dimensions: "30x25x15 cm" },
  ]

  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="container mx-auto px-2 sm:px-4 w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Interactive Package Configurator</h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Customize your packaging in real-time and see instant results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-12 items-center w-full">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 w-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Color</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full">
                {colors.map((color) => (
                  <motion.button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                      selectedColor === color.name
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-6 sm:w-8 h-6 sm:h-8 ${color.value} rounded-full mx-auto mb-2`}></div>
                    <p className="text-xs sm:text-sm font-medium">{color.label}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Size</h3>
              <div className="space-y-2">
                {sizes.map((size) => (
                  <motion.button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`w-full p-3 sm:p-4 rounded-lg border-2 text-left transition-all ${
                      selectedSize === size.name
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm sm:text-base">{size.label}</span>
                      <span className="text-xs sm:text-sm text-gray-500">{size.dimensions}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <ScrollButton className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Get Quote for This Design
                </ScrollButton>
              </Link>
            </motion.div>
          </div>

          <div className="flex items-center justify-center order-1 lg:order-2 w-full">
            <motion.div
              className="relative"
              animate={{
                scale: selectedSize === "small" ? 0.8 : selectedSize === "large" ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`w-48 sm:w-64 h-36 sm:h-48 rounded-lg shadow-2xl transform rotate-12 transition-colors duration-300 ${
                  colors.find((c) => c.name === selectedColor)?.value || "bg-green-500"
                }`}
              >
                <div className="absolute inset-3 sm:inset-4 border-2 border-white/30 rounded-lg"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm sm:text-lg">
                  YOUR LOGO
                </div>
              </div>
              <motion.div
                className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-12 sm:w-16 h-12 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Award className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-800" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SustainabilityPreview() {
  return (
    <section className="py-8 sm:py-16 bg-green-50">
      <div className="container mx-auto px-2 sm:px-4 w-full max-w-full">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 text-xs sm:text-sm">
              <Leaf className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              100% Sustainable
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Committed to a Greener Future</h2>

            <p className="text-base sm:text-lg text-gray-600 mb-8">
              At Reboxes India, sustainability isn't just a buzzword—it's our core mission. We use recycled materials,
              eco-friendly inks, and biodegradable coatings to create packaging that protects both your products and our
              planet.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/sustainability">
                <ScrollButton className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                  Learn More About Our Mission
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </ScrollButton>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Sustainable packaging"
                className="rounded-lg shadow-xl w-full"
              />
              <motion.div
                className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-16 sm:w-20 h-16 sm:h-20 bg-green-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Recycle className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "GreenTech Solutions",
      content:
        "Reboxes India transformed our packaging completely. Their sustainable approach aligns perfectly with our brand values.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Organic Foods Co.",
      content:
        "Outstanding quality and service. The custom packages exceeded our expectations and our customers love them.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "E-commerce Plus",
      content:
        "Fast delivery, excellent quality, and competitive pricing. Reboxes India is our go-to packaging partner.",
      rating: 5,
    },
  ]

  return (
    <section className="py-8 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4 w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg sm:text-xl text-gray-600">Trusted by businesses across India</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 sm:w-5 h-4 sm:h-5 bg-yellow-400 rounded-full mr-1"></div>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-sm sm:text-base">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-12 sm:py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Packaging?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Reboxes India for their packaging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <ScrollButton size="lg" className="bg-white text-green-600 hover:bg-gray-100 w-full sm:w-auto">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </ScrollButton>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/products">
                <ScrollButton
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent w-full sm:w-auto"
                >
                  Browse Products
                </ScrollButton>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
