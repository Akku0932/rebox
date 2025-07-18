import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-green-700">Terms of Service</h1>
            <p className="mb-4 text-gray-700">Welcome to Reboxes India Pvt. Ltd. By accessing or using our website and services, you agree to the following terms and conditions. Please read them carefully.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of Our Website</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>You must be at least 18 years old or have parental consent to use our services.</li>
              <li>You agree not to misuse our website or services for unlawful purposes.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">2. Intellectual Property</h2>
            <p className="mb-4 text-gray-700">All content, trademarks, and materials on this site are the property of Reboxes India Pvt. Ltd. or its licensors. You may not use, reproduce, or distribute any content without permission.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">3. Orders & Payments</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>All orders are subject to acceptance and availability.</li>
              <li>Prices and product details may change without notice.</li>
              <li>Payment terms will be specified in your invoice or agreement.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">4. Limitation of Liability</h2>
            <p className="mb-4 text-gray-700">Reboxes India Pvt. Ltd. is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">5. User Content</h2>
            <p className="mb-4 text-gray-700">By submitting content (such as reviews or feedback), you grant us the right to use, display, and share it for business purposes.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes to Terms</h2>
            <p className="mb-4 text-gray-700">We may update these Terms of Service at any time. The latest version will always be available on our website.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">7. Governing Law</h2>
            <p className="mb-4 text-gray-700">These terms are governed by the laws of India. Any disputes will be resolved in the courts of Uttar Pradesh, India.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact Us</h2>
            <p className="mb-2 text-gray-700">If you have any questions about these Terms, please contact us at:</p>
            <p className="text-gray-700">info@reboxesindia.com</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 