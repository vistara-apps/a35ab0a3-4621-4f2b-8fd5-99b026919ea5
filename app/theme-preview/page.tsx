'use client';

import { useState } from 'react';
import { useTheme } from '../components/ThemeProvider';
import { PosterCard } from '../components/PosterCard';
import { getRandomQuote } from '@/lib/quotes';

const themes = [
  { id: 'default', name: 'Default (Warm Social)', description: 'Dark teal with coral accents' },
  { id: 'celo', name: 'Celo', description: 'Black with yellow accents' },
  { id: 'solana', name: 'Solana', description: 'Dark purple with purple accents' },
  { id: 'base', name: 'Base', description: 'Dark blue with Base blue accents' },
  { id: 'coinbase', name: 'Coinbase', description: 'Dark navy with Coinbase blue accents' },
];

export default function ThemePreview() {
  const { theme, setTheme } = useTheme();
  const [sampleQuote] = useState(() => getRandomQuote());

  return (
    <div className="min-h-screen bg-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Theme Preview
          </h1>
          <p className="text-text-secondary mb-8">
            Preview how Vitalik's Wisdom looks with different blockchain themes
          </p>

          {/* Theme Selector */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Select Theme
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => setTheme(themeOption.id as any)}
                  className={`
                    p-4 rounded-lg text-left transition-all duration-200
                    ${theme === themeOption.id 
                      ? 'bg-accent bg-opacity-20 border-2 border-accent' 
                      : 'bg-surface hover:bg-opacity-80 border border-white border-opacity-10'
                    }
                  `}
                >
                  <h3 className="font-medium text-text-primary mb-1">
                    {themeOption.name}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {themeOption.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Current Theme Display */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Current Theme: {themes.find(t => t.id === theme)?.name}
            </h2>
            <div className="bg-surface bg-opacity-50 rounded-lg p-6">
              <PosterCard quote={sampleQuote} />
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Color Palette
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Background', var: '--color-bg' },
                { name: 'Foreground', var: '--color-fg' },
                { name: 'Accent', var: '--color-accent' },
                { name: 'Primary', var: '--color-primary' },
                { name: 'Surface', var: '--color-surface' },
                { name: 'Text Secondary', var: '--color-text-secondary' },
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div 
                    className="w-full h-16 rounded-lg mb-2 border border-white border-opacity-10"
                    style={{ backgroundColor: `var(${color.var})` }}
                  />
                  <p className="text-sm text-text-primary font-medium">
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Back to App */}
          <div className="text-center">
            <a
              href="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              Back to App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
