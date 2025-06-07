import { books, categories } from './data/books';
import { Hero } from './components/home/hero';
import { Categories } from './components/home/categories';
import { FeaturedBooks } from './components/home/featured-books';
import { Testimonials } from './components/home/testimonials';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories categories={categories} />
      <FeaturedBooks books={books} />
      <Testimonials />
      
      {/* Newsletter section */}
      <section className="py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground">
              Stay updated with new releases, author interviews, and exclusive promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
              </div>
              <h3 className="font-semibold text-lg">Free Shipping</h3>
              <p className="text-muted-foreground">On all orders over $35</p>
            </div>
            
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="font-semibold text-lg">Fast Delivery</h3>
              <p className="text-muted-foreground">Get your books in 2-3 business days</p>
            </div>
            
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
              </div>
              <h3 className="font-semibold text-lg">Member Rewards</h3>
              <p className="text-muted-foreground">Earn points with every purchase</p>
            </div>
            
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path><path d="M12 13v8"></path><path d="M12 3v3"></path></svg>
              </div>
              <h3 className="font-semibold text-lg">Secure Payments</h3>
              <p className="text-muted-foreground">Multiple payment options available</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-12 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Need Help Finding Your Next Book?</h3>
              <p className="text-muted-foreground">Our team of book experts is here to help with personalized recommendations.</p>
            </div>
            <Button asChild>
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}