import { useState, useEffect } from 'react';

interface Movie {
  id: string;
  name: string;
  thumbnail: string;
  slug: string;
}

interface LocalStorageState {
  favorites: Movie[];
  following: Movie[];
}

const useLocalStorage = (movieId: string, movieData: Movie) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('movie-preferences');
    if (storedData) {
      const data: LocalStorageState = JSON.parse(storedData);
      setIsLiked(data.favorites.some(movie => movie.id === movieId));
      setIsFollowing(data.following.some(movie => movie.id === movieId));
    }
  }, [movieId]);

  const getStoredData = (): LocalStorageState => {
    const storedData = localStorage.getItem('movie-preferences');
    if (storedData) {
      return JSON.parse(storedData);
    }
    return { favorites: [], following: [] };
  };

  const toggleFavorite = () => {
    const data = getStoredData();
    const isFavorite = data.favorites.some(movie => movie.id === movieId);

    if (isFavorite) {
      data.favorites = data.favorites.filter(movie => movie.id !== movieId);
      setIsLiked(false);
    } else {
      data.favorites.push(movieData);
      setIsLiked(true);
    }

    localStorage.setItem('movie-preferences', JSON.stringify(data));
  };

  const toggleFollow = () => {
    const data = getStoredData();
    const isFollowed = data.following.some(movie => movie.id === movieId);

    if (isFollowed) {
      data.following = data.following.filter(movie => movie.id !== movieId);
      setIsFollowing(false);
    } else {
      data.following.push(movieData);
      setIsFollowing(true);
    }

    localStorage.setItem('movie-preferences', JSON.stringify(data));
  };

  return {
    isLiked,
    isFollowing,
    toggleFavorite,
    toggleFollow,
  };
};

export default useLocalStorage; 