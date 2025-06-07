import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "LibriNet has completely transformed my reading experience. Their curated selections always lead me to my next favorite book.",
    author: "Sarah Thompson",
    role: "Book Club Leader"
  },
  {
    id: "2",
    text: "As an avid reader, I appreciate the thoughtfully organized categories and personalized recommendations. The service is unmatched!",
    author: "Michael Chen",
    role: "Literature Professor"
  },
  {
    id: "3",
    text: "I've been a customer for years and never had a bad experience. The selection is incredible and delivery is always prompt.",
    author: "Jessica Williams",
    role: "Novelist"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">What Our Readers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover why book lovers choose LibriNet for their literary journeys.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 h-full flex flex-col">
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="flex-1 text-lg font-medium leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}