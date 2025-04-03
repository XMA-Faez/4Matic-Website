// components/ui/SectionContainer.tsx
import { ReactNode } from 'react';

type BgColor = 'black' | 'white' | 'gray' | 'dark';
type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';

interface SectionContainerProps {
  children: ReactNode;
  bgColor?: BgColor;
  className?: string;
  maxWidth?: MaxWidth;
}

export default function SectionContainer({ 
  children, 
  bgColor = "black", 
  className = "", 
  maxWidth = "6xl"
}: SectionContainerProps) {
  const bgColors: Record<BgColor, string> = {
    secondary-950: "bg-secondary-950",
    white: "bg-white",
    secondary: "bg-secondary-100",
    dark: "bg-secondary-900"
  };

  const maxWidths: Record<MaxWidth, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full"
  };

  return (
    <div className={`w-full ${bgColors[bgColor]} py-16 ${className}`}>
      <div className={`${maxWidths[maxWidth]} mx-auto px-4`}>
        {children}
      </div>
    </div>
  );
}
