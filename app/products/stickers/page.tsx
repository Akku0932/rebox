"use client"

import { Card, CardContent } from "@/components/ui/card"

const stickers = [
  { name: "Classic", description: "Classic dome/bubble/3D stickers for branding.", image: "/clasic_sticker.jpg" },
  { name: "Letter Cut", description: "Letter cut stickers for custom shapes and designs.", image: "/letter_cut_sticker.jpg" },
  { name: "Partial", description: "Partial stickers for selective application.", image: "/part.jpg" },
  { name: "Stitchable", description: "Stitchable stickers for fabric and apparel.", image: "/stch_able_stciker.jpg" },
  { name: "Heat Fusing", description: "Heat fusing stickers for durable adhesion.", image: "/heat_fusing_sticker.jpg" },
  { name: "Dashboard", description: "Dashboard stickers for automotive and industrial use.", image: "/dashboard_decals.jpg" },
  { name: "Graphics/Decals", description: "Custom graphics and decals for versatile applications.", image: "/dashboard_decals.jpg" },
]

export default function StickersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Dome / Bubble / 3D Stickers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stickers.map((item) => (
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
