import { Card, CardContent } from "@/components/ui/card"

const specialistCategories = [
  {
    name: "Metallic Printing",
    description: "Our advanced metallic printing delivers a premium, eye-catching finish that elevates your packaging and labels. Perfect for luxury brands and special editions, metallic effects add a touch of sophistication and brilliance.",
    image: "/specialist_metallic-printing.png",
    details: "Choose from a range of metallic foils and inks to create stunning visual impact. Ideal for cosmetics, electronics, and gift packaging."
  },
  {
    name: "Plastic Printing",
    description: "We offer high-quality printing on plastic substrates, ensuring vibrant colors and exceptional durability. Our plastic printing solutions are perfect for products that require moisture resistance and long-lasting appeal.",
    image: "/specialist_plastic-printing.png",
    details: "Applications include retail packaging, promotional items, and specialty labels. Our process ensures crisp graphics and strong adhesion."
  },
  {
    name: "Fresnel Lens Effect",
    description: "Add unique visual depth and security to your packaging with our Fresnel lens effects. These micro-structured surfaces create dynamic light patterns and are difficult to replicate, making them ideal for anti-counterfeit applications.",
    image: "/specialist_fresnel-lens-effect.png",
    details: "Enhance product authenticity and shelf appeal with this innovative technology. Used in high-value packaging and limited editions."
  },
  {
    name: "Anti-Counterfeit Solutions",
    description: "Protect your brand and products with our state-of-the-art anti-counterfeit technologies. We integrate security features such as holograms, serial numbers, and tamper-evident elements into your packaging and labels.",
    image: "/specialist_anti-counterfiet-printing.png",
    details: "Customizable solutions for pharmaceuticals, electronics, and luxury goods. Safeguard your reputation and build customer trust."
  },
  {
    name: "Natural Feel Effect",
    description: "Give your packaging a tactile, natural feel with our special finishes. These effects mimic the texture of paper, wood, or fabric, creating a memorable unboxing experience and reinforcing your brand's eco-friendly values.",
    image: "/specialist_natural-feel-effect-printing.png",
    details: "Perfect for organic, artisanal, and sustainable brands. Stand out with packaging that feels as good as it looks."
  },
]

const specializations = [
  { name: "Mono Cartons", description: "Expertise in folding, litho-laminated, plastic, and rigid cartons." },
  { name: "Self Adhesive/Pressure Sensitive Labels", description: "Printed, anti-counterfeit, barcode, holographic, and more." },
  { name: "Dome/Bubble/3D Stickers", description: "Classic, letter cut, partial, stitchable, heat fusing, dashboard, and decals." },
  { name: "POP's", description: "Commercial print, blister cards, and panel overlays for retail and display." },
]

const awards = [
  { title: "World Label Awards", detail: "10+ international awards for label innovation." },
  { title: "ISO Certifications", detail: "Certified for quality and sustainability standards." },
  { title: "180+ National & International Awards", detail: "Recognized for excellence in packaging and printing." },
]

export default function SpecialistPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Specialist Solutions</h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
        At Reboxes, we combine innovation, technology, and craftsmanship to deliver specialist printing and packaging solutions that set your brand apart. Explore our signature effects and security features designed for impact and protection.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {specialistCategories.map((item) => (
          <Card key={item.name} className="h-full flex flex-col shadow-xl border border-gray-200">
            <div className="w-full h-64 bg-white flex items-center justify-center overflow-hidden">
              <img src={item.image} alt={item.name} className="max-h-60 w-auto object-contain object-center" />
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-green-700">{item.name}</h3>
              <p className="text-gray-700 text-base mb-3 flex-1">{item.description}</p>
              <div className="text-gray-500 text-sm italic mb-2">{item.details}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="my-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 mt-8">Why Choose Our Specialist Services?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 inline-block text-left">
          <li>Cutting-edge print and security technology</li>
          <li>Custom solutions for every industry</li>
          <li>Premium materials and eco-friendly options</li>
          <li>Fast turnaround and consistent quality</li>
          <li>Trusted by leading brands across India</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Other Areas of Specialization</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {specializations.map((item) => (
          <Card key={item.name} className="h-full">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Awards & Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {awards.map((award) => (
          <Card key={award.title} className="h-full">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
              <p className="text-gray-600 text-sm">{award.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Ready to Elevate Your Packaging?</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">Contact our team to discuss how our specialist solutions can help your brand stand out and stay secure in today's competitive market.</p>
        <a href="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition">Get in Touch</a>
      </div>
    </div>
  )
} 