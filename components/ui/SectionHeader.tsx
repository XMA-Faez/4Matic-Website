// components/ui/SectionHeader.tsx
import { ReactNode } from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: ReactNode;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ 
  subtitle, 
  title, 
  centered = true, 
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col ${centered ? 'items-center justify-center' : ''} mb-12 ${className}`}>
      {subtitle && (
        <button className="bg-primary-900 text-primary-400 px-6 py-2 rounded text-sm mb-6">
          {subtitle.toUpperCase()}
        </button>
      )}
      <h2 className={`text-white text-4xl font-bold ${centered ? 'text-center' : ''}`}>
        {title}
      </h2>
    </div>
  );
}
