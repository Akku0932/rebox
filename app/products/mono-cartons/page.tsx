import { Card, CardContent } from "@/components/ui/card"

const monoCartons = [
  { name: "Folding Cartons", description: "Versatile folding cartons for various packaging needs. Ideal for retail, food, and consumer goods, offering excellent print quality and structural integrity.", image: "/folding_cartons.jpg" },
  { name: "Litho-Laminated Cartons", description: "High-quality litho-laminated cartons for premium packaging. Perfect for electronics, luxury goods, and products requiring extra strength and visual appeal.", image: "/litho-laminated--corrugated-cartons.jpg" },
  { name: "Plastic Cartons", description: "Durable plastic cartons for specialized packaging. Moisture-resistant and customizable for unique product displays.", image: "/plastic_cartons.jpg" },
  { name: "Rigid Boxes", description: "Premium rigid boxes for luxury packaging and gifting solutions. Adds a touch of elegance and protection for high-value items.", image: "/rigid_boxes.jpg" },
]

export default function MonoCartonsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Mono Cartons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {monoCartons.map((item) => (
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
        <a href="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition">Request Custom Mono Carton</a>
      </div>
    </div>
  )
} 