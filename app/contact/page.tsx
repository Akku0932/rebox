"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Package,
  Calculator,
  FilterIcon as Samples,
  AlertCircle,
  Loader2,
} from "lucide-react"
import { ScrollButton } from "@/components/scroll-button"
import { sendEmail, type EmailFormData } from "@/utils/emailjs"

interface FormState {
  isSubmitting: boolean
  isSubmitted: boolean
  isError: boolean
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<EmailFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    inquiryType: "general",
  })

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Please fill in all required fields (Name, Email, and Message).",
      })
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Please enter a valid email address.",
      })
      return
    }

    setFormState({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    })

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        setFormState({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: result.message,
        })

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
            inquiryType: "general",
          })
          setFormState({
            isSubmitting: false,
            isSubmitted: false,
            isError: false,
            message: "",
          })
        }, 5000)
      } else {
        setFormState({
          isSubmitting: false,
          isSubmitted: false,
          isError: true,
          message: result.message,
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "An unexpected error occurred. Please try again or contact us directly.",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error state when user starts typing
    if (formState.isError) {
      setFormState((prev) => ({
        ...prev,
        isError: false,
        message: "",
      }))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your packaging? Contact us today for a consultation, quote, or sample kit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <ContactInfoCard />
              <QuickActions />
              <BusinessHours />
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                  {formState.isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600 max-w-md mx-auto">{formState.message}</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Error Message */}
                      {formState.isError && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3"
                        >
                          <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="text-sm font-medium text-red-800">Submission Failed</h4>
                            <p className="text-sm text-red-700 mt-1">{formState.message}</p>
                          </div>
                        </motion.div>
                      )}

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                            disabled={formState.isSubmitting}
                            className={formState.isError && !formData.name.trim() ? "border-red-300" : ""}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your.email@company.com"
                            disabled={formState.isSubmitting}
                            className={formState.isError && !formData.email.trim() ? "border-red-300" : ""}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 XXXXX XXXXX"
                            disabled={formState.isSubmitting}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name"
                            disabled={formState.isSubmitting}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          disabled={formState.isSubmitting}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="quote">Request Quote</option>
                          <option value="samples">Sample Kit Request</option>
                          <option value="partnership">Partnership</option>
                          <option value="support">Technical Support</option>
                          <option value="stickers">Sticker Printing</option>
                          <option value="labels">Label Printing</option>
                          <option value="banners">Banner Printing</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          placeholder="Tell us about your packaging needs, project requirements, or any questions you have..."
                          disabled={formState.isSubmitting}
                          className={formState.isError && !formData.message.trim() ? "border-red-300" : ""}
                        />
                      </div>

                      <motion.div
                        whileHover={{ scale: formState.isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: formState.isSubmitting ? 1 : 0.98 }}
                      >
                        <ScrollButton
                          type="submit"
                          disabled={formState.isSubmitting}
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {formState.isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Sending Message...
                            </div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </div>
                          )}
                        </ScrollButton>
                      </motion.div>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mt-16">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="w-full h-64 lg:h-full bg-white flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.689624002367!2d77.53848277488287!3d28.42862079331242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc10063b6cddb%3A0x613a679aed03f982!2sK-46%20Site%205%20Kasna%2C%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1752837235160!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '256px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Reboxes India Pvt. Ltd. Map"
                ></iframe>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Our Facility</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        Reboxes India Pvt. Ltd.<br />
                        K-46 Site 5 Kasna, Greater Noida,<br />
                        Uttar Pradesh, India<br />
                        PIN: 201301
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Facility Tours</p>
                      <p className="text-gray-600">
                        Schedule a visit to see our manufacturing process and quality standards in action.
                      </p>
                    </div>
                  </div>
                </div>
                <ScrollButton className="mt-6 bg-green-600 hover:bg-green-700 text-white">
                  Schedule a Visit
                </ScrollButton>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

function ContactInfoCard() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Reboxes India Pvt. Ltd.",
        "K-46 Site 5 Kasna, Greater Noida,",
        "Uttar Pradesh, India",
        "PIN: 201301",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9810487993", "+91 9871521501", "1800 8898 842"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@reboxes.in"],
    },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div key={info.title} className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <info.icon className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">{info.title}</p>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function QuickActions() {
  const actions = [
    {
      icon: Calculator,
      title: "Get Quote",
      description: "Request a custom quote for your packaging needs",
      href: "#quote",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Samples,
      title: "Sample Kit",
      description: "Order samples to test our quality",
      href: "#samples",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Package,
      title: "Bulk Orders",
      description: "Special pricing for large quantities",
      href: "/contact",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="space-y-3">
          {actions.map((action, index) => (
            <motion.a
              key={action.title}
              href={action.href}
              className="block p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${action.color} rounded-full flex items-center justify-center`}>
                  <action.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{action.title}</p>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function BusinessHours() {
  const hours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Business Hours
        </h3>
        <div className="space-y-3">
          {hours.map((hour, index) => (
            <div key={hour.day} className="flex justify-between items-center">
              <span className="text-gray-600">{hour.day}</span>
              <span className="font-medium text-gray-900">{hour.time}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Response Time:</strong> We typically respond to inquiries within 2-4 hours during business hours.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
