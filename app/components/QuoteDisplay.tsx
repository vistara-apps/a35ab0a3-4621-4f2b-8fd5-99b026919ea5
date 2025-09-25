'use client';

import { useState, useEffect } from 'react';
import { Quote } from '@/lib/types';
import { getRandomQuote, getQuotesByTheme } from '@/lib/quotes';
import { PosterCard } from './PosterCard';
import { ShareButton } from './ShareButton';
import { NavigationTabs } from './NavigationTabs';
import { Shuffle, ArrowLeft } from 'lucide-react';

export function QuoteDisplay() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [view, setView] = useState<'quote' | 'themes' | 'theme-quotes'>('quote');
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [themeQuotes, setThemeQuotes] = useState<Quote[]>([]);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  // Load initial random quote
  useEffect(() => {
    setCurrentQuote(getRandomQuote());
  }, []);

  const handleNewQuote = () => {
    setCurrentQuote(getRandomQuote());
  };

  const handleThemeSelect = (themeId: string) => {
    const quotes = getQuotesByTheme(themeId);
    setThemeQuotes(quotes);
    setSelectedTheme(themeId);
    setCurrentThemeIndex(0);
    if (quotes.length > 0) {
      setCurrentQuote(quotes[0]);
      setView('theme-quotes');
    }
  };

  const handleNextThemeQuote = () => {
    if (themeQuotes.length > 0) {
      const nextIndex = (currentThemeIndex + 1) % themeQuotes.length;
      setCurrentThemeIndex(nextIndex);
      setCurrentQuote(themeQuotes[nextIndex]);
    }
  };

  const handleBackToQuote = () => {
    setView('quote');
    setCurrentQuote(getRandomQuote());
  };

  if (!currentQuote) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-surface rounded w-48 mb-4"></div>
          <div className="h-4 bg-surface rounded w-32 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="container mx-auto px-4 py-8">
        {view === 'quote' && (
          <div className="space-y-8">
            <PosterCard quote={currentQuote} />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleNewQuote}
                className="btn-primary flex items-center gap-2"
              >
                <Shuffle className="w-4 h-4" />
                New Quote
              </button>
              
              <ShareButton
                quote={currentQuote.text}
                author={currentQuote.author}
              />
              
              <button
                onClick={() => setView('themes')}
                className="btn-secondary"
              >
                Browse Themes
              </button>
            </div>
          </div>
        )}

        {view === 'themes' && (
          <div className="max-w-lg mx-auto">
            <div className="mb-6">
              <button
                onClick={handleBackToQuote}
                className="btn-secondary flex items-center gap-2 mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Quote
              </button>
            </div>
            
            <NavigationTabs
              variant="themes"
              onThemeSelect={handleThemeSelect}
            />
          </div>
        )}

        {view === 'theme-quotes' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setView('themes')}
                className="btn-secondary flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Themes
              </button>
              
              <div className="text-text-secondary text-sm">
                {currentThemeIndex + 1} of {themeQuotes.length}
              </div>
            </div>

            <PosterCard quote={currentQuote} />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleNextThemeQuote}
                className="btn-primary flex items-center gap-2"
              >
                <Shuffle className="w-4 h-4" />
                Next in Theme
              </button>
              
              <ShareButton
                quote={currentQuote.text}
                author={currentQuote.author}
              />
              
              <button
                onClick={handleBackToQuote}
                className="btn-secondary"
              >
                Random Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
