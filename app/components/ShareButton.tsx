'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  quote: string;
  author: string;
  variant?: 'default';
  className?: string;
  onClick?: () => void;
}

export function ShareButton({ 
  quote, 
  author, 
  variant = 'default', 
  className = '',
  onClick 
}: ShareButtonProps) {
  const handleShare = async () => {
    const shareText = `"${quote}" - ${author}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Vitalik's Wisdom",
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(shareText);
        alert('Quote copied to clipboard!');
      } catch (error) {
        console.log('Error copying to clipboard:', error);
      }
    }
    
    onClick?.();
  };

  return (
    <button
      onClick={handleShare}
      className={`btn-secondary flex items-center gap-2 ${className}`}
    >
      <Share2 className="w-4 h-4" />
      Share Quote
    </button>
  );
}
