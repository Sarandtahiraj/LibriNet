import { Category } from "@/app/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoriesProps {
  categories: Category[];
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-3">Browse Categories</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our carefully curated collection of books organized by category to help you find exactly what you're looking for.
            </p>
          </div>
          <Link 
            href="/categories" 
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              href={`/categories/${category.id}`} 
              key={category.id}
              className="group relative overflow-hidden rounded-lg aspect-video"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/90 max-w-xs">{category.description}</p>
                  <div className="mt-3 inline-flex items-center text-sm font-medium text-white group-hover:text-primary transition-colors">
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}