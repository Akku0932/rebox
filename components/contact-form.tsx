"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollButton } from "@/components/scroll-button"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { sendEmail, type EmailFormData } from "@/utils/emailjs"

interface ContactFormProps {
  title?: string
  subtitle?: string
  defaultInquiryType?: string
  compact?: boolean
}

interface FormState {
  isSubmitting: boolean
  isSubmitted: boolean
  isError: boolean
  message: string
}

export function ContactForm({
  title = "Send Us a Message",
  subtitle,
  defaultInquiryType = "general",
  compact = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState<EmailFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    inquiryType: defaultInquiryType,
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
            inquiryType: defaultInquiryType,
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
    <Card className="shadow-lg">
      <CardContent className={compact ? "p-6" : "p-8"}>
        <div className="mb-6">
          <h2 className={`font-bold text-gray-900 mb-2 ${compact ? "text-xl" : "text-2xl"}`}>{title}</h2>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>

        {formState.isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
            <p className="text-gray-600 max-w-md mx-auto">{formState.message}</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className={compact ? "space-y-4" : "grid md:grid-cols-2 gap-4"}>
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

            {!compact && (
              <div className="grid md:grid-cols-2 gap-4">
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
            )}

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
                rows={compact ? 4 : 6}
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
  )
}
