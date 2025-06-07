import { Book } from "@/app/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rating } from "@/app/components/ui/rating";
import { ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface BookCardProps {
  book: Book;
  variant?: "default" | "horizontal";
}

export function BookCard({ book, variant = "default" }: BookCardProps) {
  const isHorizontal = variant === "horizontal";
  
  return (
    <Card className={`overflow-hidden h-full transition-all hover:shadow-md ${
      isHorizontal ? "flex flex-row" : "flex flex-col"
    }`}>
      <div className={`relative ${
        isHorizontal ? "w-1/3 md:w-1/4" : "aspect-[3/4]"
      }`}>
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
      
      <div className={`flex flex-col ${isHorizontal ? "flex-1" : ""}`}>
        <CardContent className="flex-1 pt-4">
          {book.category && (
            <Badge variant="outline" className="mb-2">
              {book.category}
            </Badge>
          )}
          
          <Link href={`/books/${book.id}`}>
            <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">
              {book.title}
            </h3>
          </Link>
          
          <p className="text-muted-foreground text-sm mb-2">by {book.author}</p>
          
          <div className="flex items-center gap-2 mb-3">
            <Rating value={book.rating} />
            <span className="text-sm text-muted-foreground">({book.rating})</span>
          </div>
          
          <p className="text-lg font-bold text-primary mb-2">${book.price.toFixed(2)}</p>
          
          {isHorizontal && (
            <p className="text-sm text-muted-foreground line-clamp-3 mt-2">
              {book.description}
            </p>
          )}
        </CardContent>
        
        <CardFooter className="pt-0 pb-4">
          <Button className="w-full gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}