"use client"

import { motion } from "framer-motion"
import { ScrollButton } from "@/components/scroll-button"
import { Package, Home, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Package className="w-24 h-24 text-green-600 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-gray-600 max-w-lg mx-auto mb-8"
        >
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <ScrollButton size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </ScrollButton>
          </Link>
          <Link href="/products">
            <ScrollButton
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <Search className="w-5 h-5 mr-2" />
              Browse Products
            </ScrollButton>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
