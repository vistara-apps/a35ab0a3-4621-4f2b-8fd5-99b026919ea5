'use client';

import { useState } from 'react';
import { themes } from '@/lib/quotes';
import { Heart } from 'lucide-react';

interface NavigationTabsProps {
  variant?: 'themes' | 'favorites';
  onThemeSelect?: (themeId: string) => void;
  onFavoritesClick?: () => void;
  className?: string;
}

export function NavigationTabs({ 
  variant = 'themes', 
  onThemeSelect,
  onFavoritesClick,
  className = '' 
}: NavigationTabsProps) {
  const [activeTab, setActiveTab] = useState<string>('');

  if (variant === 'themes') {
    return (
      <div className={`space-y-4 ${className}`}>
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          Browse by Theme
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => {
                setActiveTab(theme.id);
                onThemeSelect?.(theme.id);
              }}
              className={`
                p-4 rounded-lg text-left transition-all duration-200
                ${activeTab === theme.id 
                  ? 'bg-accent bg-opacity-20 border border-accent border-opacity-30' 
                  : 'bg-surface hover:bg-opacity-80 border border-white border-opacity-10'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-text-primary">
                    {theme.name}
                  </h4>
                  <p className="text-sm text-text-secondary mt-1">
                    {theme.description}
                  </p>
                </div>
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: theme.color }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'favorites') {
    return (
      <div className={`text-center ${className}`}>
        <button
          onClick={onFavoritesClick}
          className="btn-secondary flex items-center gap-2 mx-auto"
        >
          <Heart className="w-4 h-4" />
          View Favorites
        </button>
        <p className="text-text-secondary text-sm mt-2">
          Coming soon - save your favorite quotes
        </p>
      </div>
    );
  }

  return null;
}
