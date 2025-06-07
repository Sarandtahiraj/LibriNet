import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Card, 
  CardContent
} from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div>
      {/* Hero section */}
      <div className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000"
            alt="LibriNet Library"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80"></div>
        </div>
        
        <div className="container relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">About LibriNet</h1>
            <p className="text-xl mb-8">
              Founded with a passion for literature, LibriNet has become a sanctuary for book lovers since 2024.
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mission section */}
      <div className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                We believe that books have the power to transform lives, spark imagination, and foster understanding. 
                Our mission is to make the joy of reading accessible to everyone by providing a carefully curated selection 
                of books across all genres.
              </p>
              <ul className="space-y-3">
                {[
                  "Carefully curated selection of books across all genres",
                  "Competitive prices and regular promotions",
                  "Expert recommendations and personalized service",
                  "Fast and reliable delivery worldwide"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000"
                alt="Books arranged on a shelf"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Our story section */}
      <div className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1000"
                alt="LibriNet Store"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                LibriNet began with a simple idea: make great books accessible to everyone. 
                What started as a small online bookstore has grown into a community of passionate readers, 
                writers, and book lovers from all walks of life.
              </p>
              <p className="text-lg">
                Today, we pride ourselves on offering an exceptional book-buying experience, 
                from the moment you browse our carefully curated collection to the delivery 
                of your next favorite read right to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team section */}
      <div className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Our team of passionate book lovers is dedicated to helping you discover your next great read.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
                bio: 'Book enthusiast with a vision to create the ultimate bookstore experience.'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Curation',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
                bio: 'Literary expert with a knack for finding hidden gems across all genres.'
              },
              {
                name: 'Alicia Rodriguez',
                role: 'Customer Experience',
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400',
                bio: 'Dedicated to ensuring every customer finds their perfect book match.'
              },
              {
                name: 'James Wilson',
                role: 'Operations Manager',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
                bio: 'Logistics wizard making sure your books arrive quickly and safely.'
              }
            ].map((member) => (
              <Card key={member.name} className="overflow-hidden bg-background">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="py-16 border-t">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with fellow book lovers and be the first to know about new releases, events, and promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}