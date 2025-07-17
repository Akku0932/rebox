"use client"

import { Card, CardContent } from "@/components/ui/card"

const labels = [
  { name: "Printed Labels", description: "Custom printed labels for all branding needs.", image: "/printed_labels.jpg" },
  { name: "Anti Counterfeit Labels", description: "Secure anti-counterfeit labels for product authenticity.", image: "/anticounterfeit_labels.jpg" },
  { name: "Tamper Evident Labels", description: "Tamper evident labels for safety and assurance.", image: "/tamper_evident_labels.jpg" },
  { name: "Barcode Labels", description: "Barcode labels for inventory and tracking.", image: "/barcode_labels.jpg" },
  { name: "Scratch Labels", description: "Scratch labels for promotions and security.", image: "/scratch_labels.jpg" },
  { name: "Serial No. Labels", description: "Serial number labels for unique identification.", image: "/serial_no_labels.jpg" },
  { name: "Thermal Transfer Labels", description: "Durable thermal transfer labels for industrial use.", image: "/thermal_transfer_labels.jpg" },
  { name: "Holographic Labels", description: "Eye-catching holographic labels for premium products.", image: "/holographic_labels.jpg" },
]

export default function LabelsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Self Adhesive / Pressure Sensitive Labels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {labels.map((item) => (
          <Card key={item.name} className="h-full">
                    <div className="relative overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                    </div>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
        ))}
      </div>
    </div>
  )
}
