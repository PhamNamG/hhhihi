import { create } from 'zustand';

interface Movie {
  id: string;
  name: string;
  thumbnail: string;
  slug: string;
}

interface SavedState {
  favorites: Movie[];
  isLiked: (id: string) => boolean;
  toggleFavorite: (movie: Movie) => void;
  initializeFromStorage: () => void;
  handleRemoveFavorite: (id: string) => void;
}

const loadFromStorage = () => {
  if (typeof window === 'undefined') return { favorites: [] };
  
  const stored = localStorage.getItem('movie-preferences');
  if (!stored) return { favorites: [] };
  
  return JSON.parse(stored);
};

const saveToStorage = (favorites: Movie[]) => {
  localStorage.setItem('movie-preferences', JSON.stringify({ favorites }));
};

export const useSavedStore = create<SavedState>((set, get) => ({
  favorites: [],

  isLiked: (id: string) => {
    return get().favorites.some(movie => movie.id === id);
  },

  initializeFromStorage: () => {
    const stored = loadFromStorage();
    set({ favorites: stored.favorites });
  },

  toggleFavorite: (movie: Movie) => {
    set(state => {
      const isFavorite = state.favorites.some(m => m.id === movie.id);
      const newFavorites = isFavorite
        ? state.favorites.filter(m => m.id !== movie.id)
        : [...state.favorites, movie];

      saveToStorage(newFavorites);
      return { ...state, favorites: newFavorites };
    });
  },

  handleRemoveFavorite: (id: string) => {
    set(state => {
      const newFavorites = state.favorites.filter(movie => movie.id !== id);
      saveToStorage(newFavorites);
      return { ...state, favorites: newFavorites };
    });
  },


}));