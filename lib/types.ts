export interface Quote {
  id: string;
  text: string;
  author: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  fid: string;
  username: string;
  displayName: string;
  pfpUrl?: string;
}

export interface UserFavoriteQuote {
  userId: string;
  quoteId: string;
  favoritedAt: string;
}

export interface QuoteTheme {
  id: string;
  name: string;
  description: string;
  color: string;
}
