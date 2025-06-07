import { Book } from "@/app/types";
import { BookCard } from "@/app/components/books/book-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeaturedBooksProps {
  books: Book[];
}

export function FeaturedBooks({ books }: FeaturedBooksProps) {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-3">Featured Books</h2>
            <p className="text-muted-foreground max-w-2xl">
              Our hand-picked selection of must-read books this season. From bestsellers to hidden gems, there's something for everyone.
            </p>
          </div>
          <Link 
            href="/books" 
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View all books
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/books">Browse All Books</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}