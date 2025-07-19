import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What products do you offer?",
    answer: "We offer a wide range of sustainable packaging products including mono cartons, labels, stickers, POP solutions, and specialist print effects.",
  },
  {
    question: "How can I request a quote or sample?",
    answer: "You can request a quote or sample kit directly from our Contact page by filling out the form or using the quick actions.",
  },
  {
    question: "Where are you located?",
    answer: "Our facility is located at K-46 Site 5 Kasna, Greater Noida, Uttar Pradesh, India, PIN: 201301.",
  },
  {
    question: "Do you offer custom packaging solutions?",
    answer: "Yes, we specialize in custom packaging tailored to your brand and product requirements.",
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Turnaround time depends on the project scope, but we pride ourselves on fast, reliable delivery. Contact us for a specific estimate.",
  },
  {
    question: "How do you ensure product quality?",
    answer: "We follow strict quality assurance protocols and are ISO certified to ensure every product meets the highest standards.",
  },
  {
    question: "How can I schedule a facility visit?",
    answer: "Use the 'Schedule a Visit' button on our Contact page to request a tour of our facility.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-green-700">Frequently Asked Questions</h1>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={String(idx)}>
                  <AccordionTrigger className="text-lg font-medium text-gray-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 