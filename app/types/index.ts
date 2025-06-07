export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  rating: number;
  description: string;
  category: string;
  publishDate: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}