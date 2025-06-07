'use client';

import { useState } from 'react';
import { books } from '@/app/data/books';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BookCard } from '@/app/components/books/book-card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Search, Filter } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";

export default function BooksPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('rating');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = Array.from(new Set(books.map(book => book.category)));

  const filteredBooks = books
    .filter(book => 
      (selectedCategory === 'all' || book.category === selectedCategory) &&
      (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       book.author.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => sortBy === 'price' ? a.price - b.price : b.rating - a.rating);

  return (
    <div className="py-12">
      <div className="container">
        {/* Page header */}
        <div className="flex flex-col space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Books Collection</h1>
          <p className="text-muted-foreground">
            Browse our vast selection of books across different genres and authors.
          </p>
        </div>

        {/* Search and filters - Desktop */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="w-full relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search books by title, author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          
          <div className="flex gap-3">
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as 'price' | 'rating')}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Rating (High to Low)</SelectItem>
                <SelectItem value="price">Price (Low to High)</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="hidden md:flex gap-2">
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'outline'} 
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
                <span className="sr-only">Grid view</span>
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'outline'} 
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                <span className="sr-only">List view</span>
              </Button>
            </div>
            
            {/* Mobile filter button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filters</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Narrow down your book search
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6">
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="all-categories-mobile"
                        name="category-mobile"
                        checked={selectedCategory === 'all'}
                        onChange={() => setSelectedCategory('all')}
                      />
                      <label htmlFor="all-categories-mobile">All Categories</label>
                    </div>
                    {categories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={`category-${category}-mobile`}
                          name="category-mobile"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                        />
                        <label htmlFor={`category-${category}-mobile`}>{category}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button>Apply Filters</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden md:block space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                  className="w-full justify-start h-auto py-2 px-3 font-normal"
                  onClick={() => setSelectedCategory('all')}
                >
                  All Categories
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'ghost'}
                    className="w-full justify-start h-auto py-2 px-3 font-normal"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <Accordion type="single" collapsible defaultValue="price">
                <AccordionItem value="price">
                  <AccordionTrigger className="py-2">Price Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Input type="number" placeholder="Min" />
                        </div>
                        <div>
                          <Input type="number" placeholder="Max" />
                        </div>
                      </div>
                      <Button size="sm" className="w-full">Apply</Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="rating">
                  <AccordionTrigger className="py-2">Rating</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pt-2">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center">
                          <input type="checkbox" id={`rating-${star}`} className="mr-2" />
                          <label htmlFor={`rating-${star}`} className="text-sm flex items-center">
                            {Array(star).fill(0).map((_, i) => (
                              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400 mr-0.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                            ))}
                            & Up
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          {/* Books grid/list */}
          <div className="md:col-span-3">
            {filteredBooks.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold mb-2">No books found</h3>
                <p className="text-muted-foreground">Try changing your search criteria</p>
              </div>
            ) : (
              <div className={
                viewMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                  : "space-y-6"
              }>
                {filteredBooks.map((book) => (
                  <BookCard 
                    key={book.id} 
                    book={book} 
                    variant={viewMode === 'list' ? 'horizontal' : 'default'} 
                  />
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}