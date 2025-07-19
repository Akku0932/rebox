import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-green-700">Privacy Policy</h1>
            <p className="mb-4 text-gray-700">At Reboxes India Pvt. Ltd., we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and services.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Personal information you provide (name, email, phone, company, etc.) when you fill out forms or contact us.</li>
              <li>Technical data such as IP address, browser type, and device information collected automatically.</li>
              <li>Usage data about how you interact with our website.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To process orders, quotes, and sample requests.</li>
              <li>To improve our website, products, and services.</li>
              <li>To send you updates, newsletters, or marketing communications (you can opt out at any time).</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Security</h2>
            <p className="mb-4 text-gray-700">We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">4. Sharing Your Information</h2>
            <p className="mb-4 text-gray-700">We do not sell or rent your personal information. We may share your data with trusted partners or service providers who assist us in operating our business, as required by law, or to protect our rights.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">5. Cookies & Tracking</h2>
            <p className="mb-4 text-gray-700">Our website may use cookies and similar technologies to enhance your experience and analyze site usage. You can control cookies through your browser settings.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>You can request access to, correction, or deletion of your personal data.</li>
              <li>You can opt out of marketing communications at any time.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to This Policy</h2>
            <p className="mb-4 text-gray-700">We may update this Privacy Policy from time to time. The latest version will always be available on our website.</p>
            <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact Us</h2>
            <p className="mb-2 text-gray-700">If you have any questions or concerns about our Privacy Policy, please contact us at:</p>
            <p className="text-gray-700">info@reboxes.in</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 