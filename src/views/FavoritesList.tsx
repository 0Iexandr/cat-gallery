import { useFavorites } from '../context/FavoritesContext';
import MansoryGallery from '../components/MansoryGallery';
import React from 'react';

const FavoritesList: React.FC = () => {
  const { favorites, getTotalPictures } = useFavorites();
  return (
    <section className="py-10 px-6 lg:px-10">
      {getTotalPictures() < 1 && (
        <h2 className="text-center">The list is empty</h2>
      )}
      <MansoryGallery cats={favorites} />
    </section>
  );
};

export default FavoritesList;
