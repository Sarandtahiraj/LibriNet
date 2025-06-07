'use client';

import { useState } from 'react';
import { books, categories } from '@/app/data/books';
import { BookCard } from '@/app/components/books/book-card';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function CategoryPage({ params }: { params: { id: string } }) {
  const [sortOption, setSortOption] = useState<string>('featured');
  
  const category = categories.find(c => c.id === params.id);
  if (!category) {
    notFound();
  }

  const categoryBooks = books.filter(book => book.category === category.name);
  
  // Sort books based on selected option
  const sortedBooks = [...categoryBooks].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0; // featured - keep original order
    }
  });

  return (
    <div>
      {/* Hero banner */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        </div>
        
        <div className="container relative">
          <Link 
            href="/categories" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Categories
          </Link>
          
          <h1 className="text-4xl font-bold tracking-tight mb-4">{category.name}</h1>
          <p className="text-xl max-w-2xl">{category.description}</p>
        </div>
      </div>
      
      {/* Books section */}
      <div className="py-16">
        <div className="container">
          {/* Filters and sorting */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <p className="text-muted-foreground">
              Showing <span className="font-medium text-foreground">{sortedBooks.length}</span> books
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Books grid */}
          {sortedBooks.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-2">No books found</h3>
              <p className="text-muted-foreground mb-6">There are currently no books in this category.</p>
              <Button asChild>
                <Link href="/books">Browse All Books</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Recommendation section */}
      <div className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books
              .filter(book => book.category !== category.name)
              .slice(0, 4)
              .map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/books">Browse All Books</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Related categories */}
      <div className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Related Categories</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories
              .filter(cat => cat.id !== params.id)
              .map((relatedCategory) => (
                <Link 
                  href={`/categories/${relatedCategory.id}`} 
                  key={relatedCategory.id}
                  className="group block relative rounded-lg overflow-hidden"
                >
                  <div className="relative aspect-video">
                    <img
                      src={relatedCategory.image}
                      alt={relatedCategory.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h3 className="text-xl font-bold text-white">{relatedCategory.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}