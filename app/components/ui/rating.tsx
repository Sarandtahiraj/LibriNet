'use client';

import { Star, StarHalf } from "lucide-react";

interface RatingProps {
  value: number;
  className?: string;
}

export function Rating({ value, className = "" }: RatingProps) {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
      {[...Array(5 - Math.ceil(value))].map((_, i) => (
        <Star key={`empty-star-${i}`} className="w-4 h-4 text-gray-300" />
      ))}
    </div>
  );
}