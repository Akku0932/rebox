"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Leaf, Recycle, TreePine, Droplets, Wind, Award, Target, CheckCircle, ArrowRight, Globe } from "lucide-react"
import Link from "next/link"
// Import the ScrollButton component
import { ScrollButton } from "@/components/scroll-button"

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white pt-20 overflow-x-hidden">
      <HeroSection />
      <CommitmentSection />
      <InitiativesSection />
      <ImpactMetrics />
      <CertificationsSection />
      <ProcessSection />
      <FutureGoals />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-4 bg-green-100 text-green-800">
              <Globe className="w-4 h-4 mr-2" />
              Environmental Responsibility
            </Badge>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Packaging for a<span className="text-green-600 block">Sustainable Future</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At Reboxes India, sustainability isn't just a commitment—it's the foundation of everything we do. We're
              pioneering eco-friendly packaging solutions that protect both your products and our planet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#initiatives">
                  <ScrollButton size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Our Initiatives
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </ScrollButton>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <ScrollButton
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    Partner With Us
                  </ScrollButton>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/sustain.png?height=500&width=600"
                alt="Sustainable packaging"
                className="rounded-lg shadow-2xl"
              />
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Recycle className="w-12 h-12 text-white" />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">100% Recyclable</p>
                    <p className="text-sm text-gray-600">All Materials</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CommitmentSection() {
  const commitments = [
    {
      icon: Recycle,
      title: "100% Recyclable Materials",
      description:
        "All our packaging products are made from fully recyclable materials, contributing to a circular economy.",
    },
    {
      icon: TreePine,
      title: "Sustainable Sourcing",
      description: "We source our raw materials from certified sustainable forests and responsible suppliers.",
    },
    {
      icon: Droplets,
      title: "Water-Based Inks",
      description: "Our printing processes use eco-friendly, water-based inks that are safe for the environment.",
    },
    {
      icon: Wind,
      title: "Carbon Neutral Operations",
      description: "We offset our carbon footprint through renewable energy and environmental projects.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Environmental Commitment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've integrated sustainability into every aspect of our operations, from material selection to
            manufacturing processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <commitment.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{commitment.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{commitment.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function InitiativesSection() {
  const initiatives = [
    {
      title: "Zero Waste Manufacturing",
      description: "Our production process generates zero waste through comprehensive recycling and reuse programs.",
      image: "/ZERO.png?height=300&width=400",
      impact: "95% waste reduction achieved",
    },
    {
      title: "Renewable Energy Transition",
      description: "Transitioning our facilities to 100% renewable energy sources by 2025.",
      image: "/eco.png?height=300&width=400",
      impact: "60% renewable energy currently",
    },
    {
      title: "Biodegradable Coatings",
      description: "Developing innovative biodegradable coatings that break down naturally in the environment.",
      image: "/comp.png?height=300&width=400",
      impact: "3 months biodegradation time",
    },
  ]

  return (
    <section id="initiatives" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sustainability Initiatives</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the innovative programs and technologies we're implementing to minimize our environmental impact.
          </p>
        </motion.div>

        <div className="space-y-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Badge className="mb-4 bg-green-100 text-green-800">Initiative {index + 1}</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{initiative.description}</p>
                  <div className="flex items-center space-x-3 mb-6">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-medium text-green-600">{initiative.impact}</span>
                  </div>
                  <ScrollButton className="bg-green-600 hover:bg-green-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </ScrollButton>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative">
                    <img
                      src={initiative.image || "/placeholder.svg"}
                      alt={initiative.title}
                      className="rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-green-600 text-white p-3 rounded-lg shadow-lg">
                      <Target className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ImpactMetrics() {
  const metrics = [
    { label: "CO₂ Emissions Reduced", value: 75, unit: "%" },
    { label: "Water Usage Decreased", value: 60, unit: "%" },
    { label: "Renewable Energy Usage", value: 85, unit: "%" },
    { label: "Waste Diverted from Landfills", value: 95, unit: "%" },
  ]

  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Environmental Impact</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Measurable progress toward our sustainability goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <div className="text-4xl font-bold mb-2">
                  {metric.value}
                  {metric.unit}
                </div>
                <Progress value={metric.value} className="w-full h-2 bg-green-500" />
              </div>
              <p className="text-green-100">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificationsSection() {
  const certifications = [
    {
      name: "ISO 14001",
      description: "Environmental Management System",
      icon: Award,
    },
    {
      name: "FSC Certified",
      description: "Forest Stewardship Council",
      icon: TreePine,
    },
    {
      name: "PEFC Certified",
      description: "Programme for Endorsement of Forest Certification",
      icon: Leaf,
    },
    {
      name: "Carbon Neutral",
      description: "Verified Carbon Offset Program",
      icon: Globe,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to sustainability is validated by internationally recognized certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const processSteps = [
    {
      step: 1,
      title: "Sustainable Material Selection",
      description: "We carefully select materials from certified sustainable sources.",
    },
    {
      step: 2,
      title: "Eco-Friendly Manufacturing",
      description: "Our production process minimizes waste and energy consumption.",
    },
    {
      step: 3,
      title: "Quality Assurance",
      description: "Rigorous testing ensures both quality and environmental compliance.",
    },
    {
      step: 4,
      title: "Responsible Distribution",
      description: "Optimized logistics reduce transportation emissions.",
    },
    {
      step: 5,
      title: "End-of-Life Management",
      description: "Products are designed for easy recycling and biodegradation.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sustainable Manufacturing Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every step of our process is designed with environmental responsibility in mind.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200 hidden lg:block"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}
            >
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white hidden lg:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FutureGoals() {
  const goals = [
    {
      year: "2025",
      title: "100% Renewable Energy",
      description: "Complete transition to renewable energy sources across all facilities.",
      progress: 85,
    },
    {
      year: "2026",
      title: "Zero Waste to Landfill",
      description: "Achieve zero waste to landfill through comprehensive recycling programs.",
      progress: 70,
    },
    {
      year: "2027",
      title: "Carbon Negative Operations",
      description: "Become carbon negative by removing more CO₂ than we produce.",
      progress: 45,
    },
    {
      year: "2030",
      title: "Circular Economy Leadership",
      description: "Lead the industry in circular economy practices and innovation.",
      progress: 30,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Future Sustainability Goals</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our roadmap to becoming the most sustainable packaging company in India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">{goal.year}</Badge>
                    <span className="text-sm text-gray-500">{goal.progress}% Progress</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h3>
                  <p className="text-gray-600 mb-4">{goal.description}</p>
                  <Progress value={goal.progress} className="w-full h-2" />
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
    <section className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-4xl font-bold mb-6">Join Our Sustainability Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Partner with us to create a more sustainable future through responsible packaging solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <ScrollButton size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Partner With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </ScrollButton>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/products">
                <ScrollButton
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                >
                  View Eco Products
                </ScrollButton>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
