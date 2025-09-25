// Simple in-memory cache for quotes and themes
// In production, consider using Redis or similar

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

class SimpleCache {
  private cache = new Map<string, CacheEntry<any>>();
  private defaultTTL = 5 * 60 * 1000; // 5 minutes

  set<T>(key: string, data: T, ttl: number = this.defaultTTL): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}

export const quoteCache = new SimpleCache();

// Cache key generators
export const getQuoteCacheKey = (id: string) => `quote:${id}`;
export const getThemeCacheKey = (id: string) => `theme:${id}`;
export const getRandomQuoteCacheKey = () => 'random-quote';
export const getThemeQuotesCacheKey = (themeId: string) => `theme-quotes:${themeId}`;

