// components/ui/StarRating.tsx
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showRating?: boolean;
  className?: string;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  showRating = false,
  className = ''
}: StarRatingProps) {
  const sizeMap = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const iconSize = sizeMap[size];
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">
        {[...Array(maxRating)].map((_, i) => (
          <Star
            key={i}
            className={`${iconSize} ${
              i < Math.floor(rating) 
                ? "text-yellow-400 fill-yellow-400" 
                : i < rating 
                  ? "text-yellow-400 fill-yellow-400 opacity-50" 
                  : "text-secondary-400"
            } mr-0.5`}
          />
        ))}
      </div>
      
      {showRating && (
        <span className="ml-1 text-sm font-medium text-white">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
