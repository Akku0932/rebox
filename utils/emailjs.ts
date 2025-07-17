import emailjs from "@emailjs/browser"

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = "gr6RcFT6rhhxN-F6x"
const EMAILJS_SERVICE_ID = "service_3w4397d"
const EMAILJS_TEMPLATE_ID = "template_yoc6fdr"

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

export interface EmailFormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
  inquiryType: string
}

export interface EmailResponse {
  success: boolean
  message: string
  error?: string
}

export const sendEmail = async (formData: EmailFormData): Promise<EmailResponse> => {
  try {
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      message: formData.message,
      inquiry_type: formData.inquiryType,
      to_name: "Reboxes India Team",
      reply_to: formData.email,
    }

    // Send email using EmailJS
    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)

    if (response.status === 200) {
      return {
        success: true,
        message: "Your message has been sent successfully! We will get back to you within 24 hours.",
      }
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error: any) {
    console.error("EmailJS Error:", error)

    // Handle specific EmailJS errors
    let errorMessage = "Failed to send message. Please try again or contact us directly."

    if (error.text) {
      errorMessage = `Email service error: ${error.text}`
    } else if (error.message) {
      errorMessage = error.message
    }

    return {
      success: false,
      message: errorMessage,
      error: error.text || error.message || "Unknown error",
    }
  }
}

// Test email connection
export const testEmailConnection = async (): Promise<boolean> => {
  try {
    const testParams = {
      from_name: "Test User",
      from_email: "test@example.com",
      phone: "Test Phone",
      company: "Test Company",
      message: "This is a test message to verify EmailJS connection.",
      inquiry_type: "Test",
      to_name: "Reboxes India Team",
      reply_to: "test@example.com",
    }

    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, testParams)

    return response.status === 200
  } catch (error) {
    console.error("EmailJS connection test failed:", error)
    return false
  }
}
