"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Package, Search, Filter, Grid, List, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

// Import the ScrollButton component
import { ScrollButton } from "@/components/scroll-button"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "all", name: "All Products", count: 10 },
    { id: "stickers", name: "Stickers", count: 3 },
    { id: "labels", name: "Labels", count: 2 },
    { id: "banners", name: "Banners", count: 1 },
    { id: "pouches", name: "Pouches", count: 4 },
  ]

  const products = [
    {
      id: 3,
      name: "Food Grade Pouches",
      category: "pouches",
      price: "₹8 - ₹45",
      image: "/placeholder.svg?height=300&width=400",
      description: "Safe and hygienic pouches for food products",
      features: ["Food Safe", "Resealable", "Barrier Protection"],
      rating: 4.7,
      reviews: 156,
      href: "/products/pouches",
    },
    {
      id: 6,
      name: "Stand-up Pouches",
      category: "pouches",
      price: "₹10 - ₹55",
      image: "/placeholder.svg?height=300&width=400",
      description: "Flexible stand-up pouches with excellent shelf appeal",
      features: ["Stand-up Design", "Zip Lock", "Custom Printing"],
      rating: 4.8,
      reviews: 91,
      href: "/products/pouches",
    },
    {
      id: 7,
      name: "Custom Stickers",
      category: "stickers",
      price: "₹5 - ₹30",
      image: "/placeholder.svg?height=300&width=400",
      description: "High-quality custom stickers for branding and product labeling",
      features: ["Waterproof", "UV Resistant", "Custom Shapes"],
      rating: 4.7,
      reviews: 78,
      href: "/products/stickers",
    },
    {
      id: 8,
      name: "Product Labels",
      category: "labels",
      price: "₹8 - ₹40",
      image: "/placeholder.svg?height=300&width=400",
      description: "Professional product labels with premium printing and finishes",
      features: ["Glossy/Matte Finish", "Barcode Compatible", "Food Safe"],
      rating: 4.8,
      reviews: 56,
      href: "/products/labels",
    },
    {
      id: 9,
      name: "Promotional Banners",
      category: "banners",
      price: "₹200 - ₹1500",
      image: "/placeholder.svg?height=300&width=400",
      description: "Eye-catching banners for events, promotions, and advertising",
      features: ["Weather Resistant", "High Resolution", "Multiple Sizes"],
      rating: 4.6,
      reviews: 42,
      href: "/products/banners",
    },
    {
      id: 10,
      name: "Sample Pouch",
      category: "pouches",
      price: "₹5 - ₹15",
      image: "/placeholder.svg?height=300&width=400",
      description: "Small sample pouch for product testing",
      features: ["Sample Size", "Resealable", "Durable"],
      rating: 4.9,
      reviews: 30,
      href: "/products/pouches",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 pt-10 md:pt-20">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Our Products</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of sustainable packaging solutions designed to meet all your business
            needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4 md:space-y-6"
            >
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-1 md:space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-2 md:p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? "bg-green-50 text-green-600 border border-green-200"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3 md:mb-4">Key Features</h3>
                <div className="space-y-2 md:space-y-3">
                  {["100% Recyclable", "Custom Branding", "Food Safe", "Premium Quality", "Fast Delivery"].map(
                    (feature) => (
                      <div key={feature} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center mb-6 md:mb-8"
            >
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm md:text-base">
                  Showing {filteredProducts.length} of {products.length} products
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {/* Replace Button with ScrollButton in the controls section */}
                <ScrollButton
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  <Grid className="w-4 h-4" />
                </ScrollButton>
                <ScrollButton
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  <List className="w-4 h-4" />
                </ScrollButton>
              </div>
            </motion.div>

            {/* Products Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={viewMode}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
                    : "space-y-4 md:space-y-6"
                }
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {viewMode === "grid" ? <ProductCard product={product} /> : <ProductListItem product={product} />}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8 md:py-12">
                <Package className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card className="h-full overflow-hidden group cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Badge className="absolute top-3 left-3 bg-green-600 text-white">{product.category}</Badge>
        </div>
        <CardContent className="p-4 md:p-6">
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
              <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          <div className="space-y-2 mb-4">
            {product.features.slice(0, 2).map((feature: string) => (
              <div key={feature} className="flex items-center text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-600">{product.price}</span>
            {/* Replace Button with ScrollButton in the ProductCard component */}
            <Link href="/contact">
              <ScrollButton size="sm" className="bg-green-600 hover:bg-green-700">
                View Details
                <ArrowRight className="w-4 h-4 ml-1" />
              </ScrollButton>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function ProductListItem({ product }: { product: any }) {
  return (
    <motion.div whileHover={{ x: 5 }}>
      <Card className="overflow-hidden group cursor-pointer">
        <CardContent className="p-0">
          <div className="flex">
            <div className="relative w-32 md:w-48 h-24 md:h-32 overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <Badge className="absolute top-2 left-2 bg-green-600 text-white text-xs">{product.category}</Badge>
            </div>
            <div className="flex-1 p-3 md:p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    <span className="text-sm text-gray-400 ml-1">({product.reviews} reviews)</span>
                  </div>
                </div>
                <span className="text-xl font-bold text-green-600">{product.price}</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm md:text-base">{product.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.features.map((feature: string) => (
                  <Badge key={feature} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
              {/* Replace Button with ScrollButton in the ProductListItem component */}
              <Link href="/contact">
                <ScrollButton className="bg-green-600 hover:bg-green-700">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </ScrollButton>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
