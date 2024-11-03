import { Breed, Cat } from '../types/types';

import React from 'react';
import Loader from '../components/Loader';
import MansoryGallery from '../components/MansoryGallery';

interface CatsGalleryProps {
  cats: Cat[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isFetching: boolean;
  breeds: Breed[];
  onBreedChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedBreed: string;
  catsData: Cat[];
}

const CatsGallery: React.FC<CatsGalleryProps> = ({
  cats,
  setPage,
  isFetching,
  breeds,
  onBreedChange,
  selectedBreed,
  catsData,
}) => {
  return (
    <section className="py-10 flex flex-col items-center gap-y-14 px-6 lg:px-10">
      <select className="px-4 py-3 rounded bg-layout" onChange={onBreedChange}>
        <option value="">All breeds</option>
        {breeds.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      {isFetching && <Loader transparent={true} />}
      {catsData.length === 0 ? (
        <h2>No photos</h2>
      ) : (
        <>
          <MansoryGallery cats={cats} />
          {!selectedBreed && cats.length !== 0 && (
            <button
              onClick={() => setPage(prevPage => prevPage + 1)}
              disabled={isFetching}
              className="px-4 py-2 bg-layout text-white rounded hover:opacity-75 transition-opacity duration-300"
            >
              {isFetching ? 'Loading more...' : 'Load more'}
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default CatsGallery;
