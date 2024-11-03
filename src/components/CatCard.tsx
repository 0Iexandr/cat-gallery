import React, { useRef } from 'react';
import { type Variants, motion, useInView } from 'framer-motion';
import { useMasonryItem } from 'react-layout-masonry';
import { useFavorites } from '../context/FavoritesContext';
import { Cat } from '../types/types';

interface CatCardProps {
  cat: Cat;
}

const variants: Variants = {
  initial: () => ({
    y: 50,
    opacity: 0,
  }),
  animate: (column: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: column * 0.2,
    },
  }),
  exit: (column: number) => ({
    y: -50,
    opacity: 0,
    transition: {
      duration: 1,
      delay: column * 0.2,
    },
  }),
};

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some(favorite => favorite.id === cat.id);
  const { column } = useMasonryItem();

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <motion.div
      variants={variants}
      custom={column}
      initial="initial"
      animate={inView ? 'animate' : false}
      exit="exit"
      className="flex flex-col gap-4"
      ref={ref}
    >
      <img
        className="rounded-md shadow-md max-w-full h-full"
        src={cat.url}
        alt="cat"
      />
      <div className="flex justify-between items-center gap-x-2">
        <div className="flex flex-col !m-0">
          <span className="text-lg">
            {cat.breeds?.[0].name ? cat.breeds[0].name : ''}
          </span>
          <span className="text-sm text-slate-500">
            {cat.breeds?.[0].temperament ? cat.breeds[0].temperament : ''}
          </span>
        </div>
        <button
          onClick={() => toggleFavorite(cat)}
          className="flex justify-center items-center"
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 16 18"
            xmlns="http://www.w3.org/2000/svg"
            className={`stroke-pink-200 transition-fill duration-300 ${isFavorite ? 'fill-pink-200' : 'fill-none lg:hover:fill-pink-200'}`}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" />
            </g>
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default CatCard;
