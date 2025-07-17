import { Card, CardContent } from "@/components/ui/card"

const pops = [
  { name: "Commercial Print", description: "High-quality commercial print solutions for all your marketing and retail needs. Vibrant colors, sharp details, and a variety of finishes available.", image: "/commercial_prints.jpg" },
  { name: "Blister Cards", description: "Custom blister cards for secure and attractive product display. Perfect for retail packaging, electronics, and consumer goods.", image: "/blister_cards.jpg" },
  { name: "Panel Overlays", description: "Durable panel overlays for industrial and commercial use. Designed for control panels, displays, and equipment branding.", image: "/panel_overlays.jpg" },
]

export default function PopsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">POP's</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pops.map((item) => (
          <Card key={item.name} className="h-full flex flex-col shadow-lg border border-gray-200">
            <div className="w-full h-64 bg-white flex items-center justify-center overflow-hidden">
              <img src={item.image} alt={item.name} className="max-h-60 w-auto object-contain object-center" />
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold mb-2 text-green-700">{item.name}</h2>
              <p className="text-gray-700 text-base flex-1">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition">Request POP Solution</a>
      </div>
    </div>
  )
} 