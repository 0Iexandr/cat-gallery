import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

import heart from '../assets/svg/heart.svg';
import cat from '../assets/svg/cat.svg';
import React from 'react';

const Header: React.FC = () => {
  const { getTotalPictures } = useFavorites();

  return (
    <header className="w-full h-16 bg-layout flex items-center justify-between px-6 lg:px-10">
      <Link
        to="/"
        className="flex gap-x-3 relative hover:opacity-75 transition-opacity duration-300"
      >
        <img src={cat} alt="logo" className="w-16 h-16" />
      </Link>
      <Link
        to="/favorite"
        className="flex gap-x-3 relative hover:opacity-75 transition-opacity duration-300"
      >
        My faves
        <img src={heart} alt="favorite" className="w-6 h-6" />
        {getTotalPictures() > 0 && (
          <span className="absolute -right-2 -bottom-2 bg-white rounded-full h-5 w-5 text-black flex justify-center items-center text-xs">
            {getTotalPictures()}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;
