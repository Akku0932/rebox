"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Factory, Leaf, Target, Eye, Heart, Calendar, MapPin, Building, CheckCircle } from "lucide-react"
import Link from "next/link"
// Import the ScrollButton component
import { ScrollButton } from "@/components/scroll-button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20 overflow-x-hidden">
      <HeroSection />
      <CompanyOverview />
      <MissionVisionValues />
      <Timeline />
      <TeamSection />
      <AchievementsSection />
      <QualityAssurance />
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
              <Building className="w-4 h-4 mr-2" />
              Established 2020
            </Badge>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Crafting Sustainable
              <span className="text-green-600 block">Packaging Solutions</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Since our founding in 2020, Reboxes India Pvt. Ltd. has been at the forefront of sustainable packaging
              innovation, serving businesses across India with eco-friendly, high-quality packaging solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <ScrollButton size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Partner With Us
                  </ScrollButton>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/products">
                  <ScrollButton
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    View Our Products
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
                src="/box.png?height=500&width=600"
                alt="Reboxes India facility"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">ISO Certified</p>
                    <p className="text-sm text-gray-600">Quality Assured</p>
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

function CompanyOverview() {
  const stats = [
    { icon: Calendar, label: "Founded", value: "July 23, 2020" },
    { icon: MapPin, label: "Location", value: "Reboxes India Pvt. Ltd. K-46 Site 5 Kasna, Greater Noida, Uttar Pradesh, India PIN: 201301" },
    { icon: Building, label: "CIN", value: "U21000UP2020PTC131548" },
    { icon: Factory, label: "Industry", value: "Paper & Packaging" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Company Overview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reboxes India Pvt. Ltd. is a dynamic company in the paper and packaging industry, committed to delivering
            innovative and sustainable packaging solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600">{stat.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded on July 23, 2020, in the bustling city of Noida, Uttar Pradesh, Reboxes India Pvt. Ltd. emerged
                with a clear vision: to revolutionize the packaging industry through sustainable innovation.
              </p>
              <p className="text-gray-600 mb-4">
                Operating under CIN U21000UP2020PTC131548, we specialize in the manufacturing of paper products, custom
                boxes, and cartons, serving the paper & paper-products sector with dedication and expertise.
              </p>
              <p className="text-gray-600">
                Our commitment to sustainability and quality has made us a trusted partner for businesses seeking
                eco-friendly packaging solutions that don't compromise on durability or aesthetics.
              </p>
            </div>
            <div className="relative">
              <img
                src="/story.png?height=400&width=500"
                alt="Our manufacturing process"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MissionVisionValues() {
  const items = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide innovative, sustainable packaging solutions that protect products while preserving our planet for future generations.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become India's leading sustainable packaging company, setting new standards for environmental responsibility and product excellence.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Sustainability, Quality, Innovation, Customer Focus, and Environmental Stewardship guide everything we do.",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mission, Vision & Values</h2>
          <p className="text-xl text-gray-600">The principles that drive our commitment to excellence</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full text-center">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Timeline() {
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Reboxes India Pvt. Ltd. was established on July 23, 2020, in Noida, Uttar Pradesh.",
    },
    {
      year: "2021",
      title: "First Major Contract",
      description: "Secured our first major contract with a leading e-commerce company for custom mailer boxes.",
    },
    {
      year: "2022",
      title: "Sustainability Initiative",
      description: "Launched our comprehensive sustainability program, achieving 100% recyclable packaging.",
    },
    {
      year: "2023",
      title: "Expansion & Growth",
      description: "Expanded our product line to include specialty jars and flexible pouches.",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Established our innovation center focused on developing next-generation packaging solutions.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600">Key milestones in our growth story</p>
        </motion.div>

        {/* Timeline for desktop/tablet */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {milestone.year.slice(-2)}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
            </motion.div>
          ))}
        </div>
        {/* Timeline for mobile */}
        <div className="md:hidden flex flex-col gap-8 relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-green-200 z-0" style={{height: '100%'}}></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex items-start z-10"
            >
              <div className="flex flex-col items-center mr-4">
                <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white flex items-center justify-center text-white font-bold mb-2">
                  {milestone.year.slice(-2)}
                </div>
                {/* vertical line handled by parent */}
              </div>
              <Card className="flex-1 shadow-lg">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const team = [
    {
      name: "Kapil Tyagi",
      position: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      description: "Visionary leader with 15+ years in packaging industry",
    },
    {
      name: "Pinki Tyagi",
      position: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      description: "Operations expert ensuring quality and efficiency",
    },
    {
      name: "Amit Patel",
      position: "Sustainability Director",
      image: "/placeholder.svg?height=300&width=300",
      description: "Environmental advocate driving our green initiatives",
    },
    {
      name: "Sneha Gupta",
      position: "Design Manager",
      image: "/placeholder.svg?height=300&width=300",
      description: "Creative professional bringing brands to life",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">The passionate professionals behind our success</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="text-center overflow-hidden">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description: "Quality management system certification",
    },
    {
      icon: Leaf,
      title: "100% Sustainable Materials",
      description: "All products made from recyclable materials",
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Serving businesses across India",
    },
    {
      icon: Factory,
      title: "50,000+ Boxes Produced",
      description: "Monthly production capacity",
    },
  ]

  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-xl text-green-100">Recognition and milestones that define our excellence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <achievement.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-green-100">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QualityAssurance() {
  const qualityPoints = [
    "Rigorous quality control at every production stage",
    "Advanced testing equipment for material verification",
    "Certified sustainable sourcing practices",
    "Continuous improvement processes",
    "Customer satisfaction guarantee",
    "Environmental compliance monitoring",
  ]

  return (
    <section id="quality" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our commitment to quality is unwavering. We implement comprehensive quality control measures throughout
              our manufacturing process to ensure every product meets the highest standards.
            </p>

            <div className="space-y-4">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/quality.png?height=500&width=600"
              alt="Quality control process"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">ISO</div>
                <div className="text-sm text-gray-600">Certified</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our growing family of satisfied customers and experience the Reboxes India difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <ScrollButton size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Get In Touch
                </ScrollButton>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/products">
                <ScrollButton
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  View Our Products
                </ScrollButton>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
