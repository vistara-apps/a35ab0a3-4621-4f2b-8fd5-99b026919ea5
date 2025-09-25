'use client';

import { Quote, QuoteTheme } from '@/lib/types';
import { getThemeById } from '@/lib/quotes';
import { Quote as QuoteIcon } from 'lucide-react';

interface PosterCardProps {
  quote: Quote;
  variant?: 'default';
  className?: string;
}

export function PosterCard({ quote, variant = 'default', className = '' }: PosterCardProps) {
  const theme = getThemeById(quote.theme);
  
  return (
    <div className={`poster-card max-w-lg mx-auto ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-primary text-lg font-semibold mb-2">
          Vitalik's Wisdom
        </h1>
        <div className="w-16 h-0.5 bg-accent mx-auto"></div>
      </div>

      {/* Quote Icon */}
      <div className="flex justify-center mb-6">
        <QuoteIcon className="w-12 h-12 text-accent opacity-60" />
      </div>

      {/* Quote Text */}
      <blockquote className="quote-text text-xl md:text-2xl font-medium text-center mb-8 leading-relaxed">
        "{quote.text}"
      </blockquote>

      {/* Attribution */}
      <div className="text-center mb-6">
        <p className="text-text-secondary text-sm mb-1">
          A randomly selected insight
        </p>
        <p className="text-text-primary font-medium">
          ~ {quote.author}
        </p>
      </div>

      {/* Theme Tag */}
      {theme && (
        <div className="flex justify-center mb-6">
          <span 
            className="theme-tag"
            style={{ 
              backgroundColor: `${theme.color}20`,
              color: theme.color 
            }}
          >
            {theme.name}
          </span>
        </div>
      )}

      {/* Decorative Element */}
      <div className="flex justify-center">
        <div className="w-8 h-1 bg-accent opacity-40 rounded-full"></div>
      </div>
    </div>
  );
}
