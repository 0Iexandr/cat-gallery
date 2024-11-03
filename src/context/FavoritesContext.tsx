import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Cat } from '../types/types';

interface FavoritesContextType {
  favorites: Cat[];
  toggleFavorite: (cat: Cat) => void;
  getTotalPictures: () => number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Cat[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const toggleFavorite = (cat: Cat) => {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.some(favorite => favorite.id === cat.id);
      let updatedFavorites;
      if (isFavorite) {
        updatedFavorites = prevFavorites.filter(
          favorite => favorite.id !== cat.id,
        );
      } else {
        updatedFavorites = [...prevFavorites, cat];
      }
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const getTotalPictures = () => {
    return favorites.length;
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, getTotalPictures }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
