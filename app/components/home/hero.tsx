import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/5" />
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-24 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              Discover Your Next
              <span className="block text-primary">Great Read</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Explore thousands of books from contemporary bestsellers to timeless classics.
              Find your perfect match and start your reading journey today.
            </p>
            
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search for books by title, author, or genre..." 
                className="pl-10 py-6 text-base"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Browse Collection</Button>
              <Button variant="outline" size="lg">View Bestsellers</Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative h-[500px] w-full">
              {/* Book images grid with staggered layout */}
              <div className="absolute top-0 right-0 w-3/4 aspect-[3/4] rounded-lg shadow-2xl overflow-hidden rotate-3 bg-card">
                <img 
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800" 
                  alt="Featured Book" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/4 -left-4 w-2/3 aspect-[3/4] rounded-lg shadow-2xl overflow-hidden -rotate-6 bg-card z-10">
                <img 
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800" 
                  alt="Featured Book" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-1/4 w-2/3 aspect-[3/4] rounded-lg shadow-2xl overflow-hidden rotate-12 bg-card">
                <img 
                  src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=800" 
                  alt="Featured Book" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}