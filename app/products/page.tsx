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
    { id: "all", name: "All Products" },
    { id: "mono-cartons", name: "Mono Cartons" },
    { id: "labels", name: "Self Adhesive/Pressure Sensitive Labels" },
    { id: "stickers", name: "Dome/Bubble/3D Stickers" },
    { id: "pops", name: "POP's" },
  ]

  const products = [
    // Mono Cartons
    { id: 1, name: "Folding Cartons", category: "mono-cartons", image: "/folding_cartons.jpg", description: "Versatile folding cartons for various packaging needs.", features: ["Custom Sizes", "Premium Print", "Eco-Friendly"], href: "/products/mono-cartons" },
    { id: 2, name: "Litho-Laminated Cartons", category: "mono-cartons", image: "/litho-laminated--corrugated-cartons.jpg", description: "High-quality litho-laminated cartons for premium packaging.", features: ["Durable", "High Resolution", "Customizable"], href: "/products/mono-cartons" },
    { id: 3, name: "Plastic Cartons", category: "mono-cartons", image: "/plastic_cartons.jpg", description: "Durable plastic cartons for specialized packaging.", features: ["Waterproof", "Custom Shapes", "Vibrant Colors"], href: "/products/mono-cartons" },
    { id: 4, name: "Rigid Boxes", category: "mono-cartons", image: "/rigid_boxes.jpg", description: "Premium rigid boxes for luxury packaging and gifting solutions.", features: ["Luxury Finish", "Sturdy", "Custom Inserts"], href: "/products/mono-cartons" },
    // Labels
    { id: 5, name: "Printed Labels", category: "labels", image: "/printed_labels.jpg", description: "Custom printed labels for all branding needs.", features: ["Full Color", "Adhesive", "Custom Shapes"], href: "/products/labels" },
    { id: 6, name: "Anti Counterfeit Labels", category: "labels", image: "/anticounterfeit_labels.jpg", description: "Secure anti-counterfeit labels for product authenticity.", features: ["Security", "Tamper Evident", "Customizable"], href: "/products/labels" },
    { id: 7, name: "Tamper Evident Labels", category: "labels", image: "/tamper_evident_labels.jpg", description: "Tamper evident labels for safety and assurance.", features: ["Safety", "Peel Proof", "Custom Print"], href: "/products/labels" },
    { id: 8, name: "Barcode Labels", category: "labels", image: "/barcode_labels.jpg", description: "Barcode labels for inventory and tracking.", features: ["Barcode", "Inventory", "Custom Sizes"], href: "/products/labels" },
    { id: 9, name: "Scratch Labels", category: "labels", image: "/scratch_labels.jpg", description: "Scratch labels for promotions and security.", features: ["Scratch Off", "Promo", "Customizable"], href: "/products/labels" },
    { id: 10, name: "Serial No. Labels", category: "labels", image: "/serial_no_labels.jpg", description: "Serial number labels for unique identification.", features: ["Unique ID", "Tracking", "Custom Print"], href: "/products/labels" },
    { id: 11, name: "Thermal Transfer Labels", category: "labels", image: "/thermal_transfer_labels.jpg", description: "Durable thermal transfer labels for industrial use.", features: ["Industrial", "Durable", "Custom Sizes"], href: "/products/labels" },
    { id: 12, name: "Holographic Labels", category: "labels", image: "/holographic_labels.jpg", description: "Eye-catching holographic labels for premium products.", features: ["Holographic", "Premium", "Security"], href: "/products/labels" },
    // Stickers
    { id: 13, name: "Classic", category: "stickers", image: "/clasic_sticker.jpg", description: "Classic dome/bubble/3D stickers for branding.", features: ["3D Effect", "Durable", "Customizable"], href: "/products/stickers" },
    { id: 14, name: "Letter Cut", category: "stickers", image: "/letter_cut_sticker.jpg", description: "Letter cut stickers for custom shapes and designs.", features: ["Custom Cut", "Precision", "Branding"], href: "/products/stickers" },
    { id: 15, name: "Partial", category: "stickers", image: "/part.jpg", description: "Partial stickers for selective application.", features: ["Selective", "Customizable", "Easy Peel"], href: "/products/stickers" },
    { id: 16, name: "Stitchable", category: "stickers", image: "/stch_able_stciker.jpg", description: "Stitchable stickers for fabric and apparel.", features: ["Sewable", "Flexible", "Custom Shapes"], href: "/products/stickers" },
    { id: 17, name: "Heat Fusing", category: "stickers", image: "/heat_fusing_sticker.jpg", description: "Heat fusing stickers for durable adhesion.", features: ["Heat Seal", "Durable", "Customizable"], href: "/products/stickers" },
    { id: 18, name: "Dashboard", category: "stickers", image: "/dashboard_decals.jpg", description: "Dashboard stickers for automotive and industrial use.", features: ["Automotive", "Industrial", "Custom Print"], href: "/products/stickers" },
    { id: 19, name: "Graphics/Decals", category: "stickers", image: "/dashboard_decals.jpg", description: "Custom graphics and decals for versatile applications.", features: ["Graphics", "Decals", "Customizable"], href: "/products/stickers" },
    // POP's
    { id: 20, name: "Commercial Print", category: "pops", image: "/commercial_prints.jpg", description: "High-quality commercial print solutions for all needs.", features: ["High Quality", "Custom Print", "Bulk"], href: "/products/pops" },
    { id: 21, name: "Blister Cards", category: "pops", image: "/blister_cards.jpg", description: "Custom blister cards for secure and attractive product display.", features: ["Secure", "Display", "Customizable"], href: "/products/pops" },
    { id: 22, name: "Panel Overlays", category: "pops", image: "/panel_overlays.jpg", description: "Durable panel overlays for industrial and commercial use.", features: ["Durable", "Custom Print", "Industrial"], href: "/products/pops" },
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
                          {/* Count is not available in the new products array, so we'll keep it empty or remove it if not needed */}
                          {/* For now, let's remove it as it's not directly applicable to the new product structure */}
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
  console.log('ProductCard image:', product.image);
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card className="h-full overflow-hidden group cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={product.image ? product.image : "/placeholder.svg"}
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
              <span className="text-sm text-gray-600 ml-1">{/* Rating is not available in the new products array */}</span>
              <span className="text-sm text-gray-400 ml-1">({/* Reviews are not available in the new products array */})</span>
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
            <span className="text-lg font-bold text-green-600">{/* Price is not available in the new products array */}</span>
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
  console.log('ProductListItem image:', product.image);
  return (
    <motion.div whileHover={{ x: 5 }}>
      <Card className="overflow-hidden group cursor-pointer">
        <CardContent className="p-0">
          <div className="flex">
            <div className="relative w-32 md:w-48 h-24 md:h-32 overflow-hidden">
              <img
                src={product.image ? product.image : "/placeholder.svg"}
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
                    <span className="text-sm text-gray-600 ml-1">{/* Rating is not available in the new products array */}</span>
                    <span className="text-sm text-gray-400 ml-1">({/* Reviews are not available in the new products array */} reviews)</span>
                  </div>
                </div>
                <span className="text-xl font-bold text-green-600">{/* Price is not available in the new products array */}</span>
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
