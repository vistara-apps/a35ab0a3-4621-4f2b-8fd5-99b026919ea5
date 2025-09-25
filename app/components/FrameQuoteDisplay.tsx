'use client';

import { useState, useEffect } from 'react';
import { Quote } from '@/lib/types';
import { getRandomQuote, getQuotesByTheme, themes } from '@/lib/quotes';

interface FrameQuoteDisplayProps {
  initialQuote?: Quote;
  initialView?: 'quote' | 'themes' | 'theme-quotes';
  initialThemeId?: string;
}

export function FrameQuoteDisplay({
  initialQuote,
  initialView = 'quote',
  initialThemeId
}: FrameQuoteDisplayProps) {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(initialQuote || null);
  const [view, setView] = useState<'quote' | 'themes' | 'theme-quotes'>(initialView);
  const [selectedTheme, setSelectedTheme] = useState<string>(initialThemeId || '');
  const [themeQuotes, setThemeQuotes] = useState<Quote[]>([]);

  // Load initial quote if not provided
  useEffect(() => {
    if (!currentQuote) {
      setCurrentQuote(getRandomQuote());
    }
  }, [currentQuote]);

  const handleNewQuote = () => {
    const quote = getRandomQuote();
    setCurrentQuote(quote);
    setView('quote');
    setSelectedTheme('');
  };

  const handleThemeSelect = (themeId: string) => {
    const quotes = getQuotesByTheme(themeId);
    setThemeQuotes(quotes);
    setSelectedTheme(themeId);
    if (quotes.length > 0) {
      setCurrentQuote(quotes[0]);
      setView('theme-quotes');
    }
  };

  const handleNextThemeQuote = () => {
    if (themeQuotes.length > 0) {
      const currentIndex = themeQuotes.findIndex(q => q.id === currentQuote?.id);
      const nextIndex = (currentIndex + 1) % themeQuotes.length;
      setCurrentQuote(themeQuotes[nextIndex]);
    }
  };

  const handleBackToQuote = () => {
    setView('quote');
    setCurrentQuote(getRandomQuote());
    setSelectedTheme('');
  };

  if (!currentQuote) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
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
        {/* Frame Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Vitalik's Wisdom
          </h1>
          <p className="text-text-secondary text-sm">
            Your dose of Web3 insights, instantly
          </p>
        </div>

        {view === 'quote' && (
          <div className="space-y-8">
            {/* Quote Display */}
            <div className="max-w-lg mx-auto">
              <div className="bg-surface rounded-2xl p-8 shadow-card border border-white border-opacity-10">
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-text-primary mb-4">
                    Random Quote
                  </h2>
                  <blockquote className="text-xl font-medium text-text-primary leading-relaxed mb-6">
                    "{currentQuote.text}"
                  </blockquote>
                  <p className="text-text-secondary text-sm">
                    — {currentQuote.author}
                  </p>
                </div>
              </div>
            </div>

            {/* Frame Action Buttons */}
            <div className="max-w-md mx-auto space-y-4">
              <button
                onClick={handleNewQuote}
                className="w-full btn-primary flex items-center justify-center gap-2 py-3"
              >
                🎲 New Quote
              </button>

              <button
                onClick={() => setView('themes')}
                className="w-full btn-secondary flex items-center justify-center gap-2 py-3"
              >
                📚 Browse Themes
              </button>

              <button
                onClick={() => {
                  const shareUrl = `${window.location.origin}?quoteId=${currentQuote.id}`;
                  navigator.clipboard?.writeText(shareUrl);
                  alert('Quote link copied to clipboard!');
                }}
                className="w-full btn-secondary flex items-center justify-center gap-2 py-3"
              >
                🔗 Share Link
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
                ← Back to Quote
              </button>
              <h2 className="text-xl font-semibold text-text-primary text-center">
                Choose a Theme
              </h2>
            </div>

            <div className="space-y-3">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeSelect(theme.id)}
                  className="w-full p-4 bg-surface rounded-xl border border-white border-opacity-10 hover:bg-surface-hover transition-colors"
                  style={{
                    borderLeftColor: theme.color,
                    borderLeftWidth: '4px'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-text-primary text-left">
                        {theme.name}
                      </h3>
                      <p className="text-sm text-text-secondary text-left">
                        {theme.description}
                      </p>
                    </div>
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.color }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'theme-quotes' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setView('themes')}
                className="btn-secondary flex items-center gap-2"
              >
                ← Back to Themes
              </button>

              <div className="text-text-secondary text-sm">
                {themeQuotes.findIndex(q => q.id === currentQuote.id) + 1} of {themeQuotes.length}
              </div>
            </div>

            {/* Quote Display */}
            <div className="max-w-lg mx-auto">
              <div className="bg-surface rounded-2xl p-8 shadow-card border border-white border-opacity-10">
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-text-primary mb-4">
                    {themes.find(t => t.id === selectedTheme)?.name} Quote
                  </h2>
                  <blockquote className="text-xl font-medium text-text-primary leading-relaxed mb-6">
                    "{currentQuote.text}"
                  </blockquote>
                  <p className="text-text-secondary text-sm">
                    — {currentQuote.author}
                  </p>
                </div>
              </div>
            </div>

            {/* Frame Action Buttons */}
            <div className="max-w-md mx-auto space-y-4">
              <button
                onClick={handleNextThemeQuote}
                className="w-full btn-primary flex items-center justify-center gap-2 py-3"
              >
                ➡️ Next in Theme
              </button>

              <button
                onClick={handleNewQuote}
                className="w-full btn-secondary flex items-center justify-center gap-2 py-3"
              >
                🎲 Random Quote
              </button>

              <button
                onClick={() => {
                  const shareUrl = `${window.location.origin}?quoteId=${currentQuote.id}`;
                  navigator.clipboard?.writeText(shareUrl);
                  alert('Quote link copied to clipboard!');
                }}
                className="w-full btn-secondary flex items-center justify-center gap-2 py-3"
              >
                🔗 Share Link
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

