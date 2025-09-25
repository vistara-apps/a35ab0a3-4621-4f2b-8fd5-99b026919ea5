'use client';

import { QuoteTheme } from '@/lib/types';

interface ThemeTagProps {
  theme: QuoteTheme;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function ThemeTag({ theme, variant = 'primary', className = '' }: ThemeTagProps) {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium transition-all duration-200';
  
  const variantClasses = {
    primary: 'theme-tag',
    secondary: 'bg-surface text-text-secondary hover:bg-opacity-80'
  };

  return (
    <span 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={variant === 'primary' ? { 
        backgroundColor: `${theme.color}20`,
        color: theme.color 
      } : undefined}
    >
      {theme.name}
    </span>
  );
}
