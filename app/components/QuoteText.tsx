'use client';

interface QuoteTextProps {
  children: React.ReactNode;
  variant?: 'display' | 'body';
  className?: string;
}

export function QuoteText({ children, variant = 'body', className = '' }: QuoteTextProps) {
  const baseClasses = 'quote-text leading-relaxed';
  
  const variantClasses = {
    display: 'text-2xl md:text-3xl font-bold',
    body: 'text-lg md:text-xl font-medium'
  };

  return (
    <p className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </p>
  );
}
