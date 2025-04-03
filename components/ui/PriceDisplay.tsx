// components/ui/PriceDisplay.tsx
import { useMemo } from 'react';

interface PriceDisplayProps {
  amount: number;
  currency?: string;
  period?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showDecimal?: boolean;
  className?: string;
}

export default function PriceDisplay({
  amount,
  currency = 'USD',
  period,
  size = 'md',
  showDecimal = true,
  className = ''
}: PriceDisplayProps) {
  // Format the price
  const formattedPrice = useMemo(() => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: showDecimal ? 2 : 0,
      maximumFractionDigits: showDecimal ? 2 : 0,
    });
    
    return formatter.format(amount);
  }, [amount, currency, showDecimal]);
  
  // Size variants
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };
  
  return (
    <div className={`font-bold ${sizes[size]} ${className}`}>
      <span className="text-white">{formattedPrice}</span>
      {period && (
        <span className="text-secondary-400 text-sm font-normal ml-1">/{period}</span>
      )}
    </div>
  );
}
