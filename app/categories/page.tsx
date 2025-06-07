import { categories } from '@/app/data/books';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CategoriesPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-muted/40 py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Book Categories</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore our extensive collection organized by genres to help you find your next literary adventure.
            </p>
          </div>
        </div>
      </div>
      
      {/* Categories grid */}
      <div className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                href={`/categories/${category.id}`} 
                key={category.id}
                className="group block relative rounded-lg overflow-hidden"
              >
                <div className="relative aspect-video transition-transform duration-500 transform group-hover:scale-105">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex items-end p-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
                      <p className="text-white/80 mb-3 max-w-xs">{category.description}</p>
                      <Button 
                        variant="outline" 
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors"
                      >
                        Explore Category
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Popular genres section */}
      <div className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Popular Genres</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Mystery & Thriller",
              "Romance",
              "Science Fiction",
              "Fantasy",
              "Biography",
              "History",
              "Self-Help",
              "Business",
              "Art & Photography",
              "Cookbooks",
              "Children's Books",
              "Poetry"
            ].map((genre) => (
              <Button 
                key={genre} 
                variant="outline" 
                className="justify-start h-auto py-3"
                asChild
              >
                <Link href={`/search?genre=${encodeURIComponent(genre)}`}>
                  {genre}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Special collections */}
      <div className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Special Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "New Releases",
                description: "Be the first to discover the latest books hot off the press.",
                image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=800",
                link: "/collections/new-releases"
              },
              {
                title: "Award Winners",
                description: "Explore books that have won prestigious literary awards.",
                image: "https://images.unsplash.com/photo-1456513080666-abb252a76b36?q=80&w=800",
                link: "/collections/award-winners"
              },
              {
                title: "Staff Picks",
                description: "Handpicked favorites from our team of book lovers.",
                image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800",
                link: "/collections/staff-picks"
              }
            ].map((collection, index) => (
              <Link 
                href={collection.link} 
                key={index}
                className="group block relative rounded-lg overflow-hidden"
              >
                <div className="relative aspect-square">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{collection.title}</h3>
                    <p className="text-white/80 mb-4">{collection.description}</p>
                    <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                      Browse Collection →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Stay updated with new releases and recommendations in your favorite categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}