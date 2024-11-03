import React, { useState } from 'react';
import { getBreeds, getCats, getCatsByBreed } from '../services/catsAPI';
import { useQuery } from 'react-query';
import { Breed, Cat } from '../types/types';

import Loader from '../components/Loader';
import CatsGallery from '../views/CatsGallery';

const Home: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [page, setPage] = useState<number>(0);

  const {
    data: catsData = [],
    isLoading: loadingCats,
    isError: errorCats,
    isFetching: fetchingCats,
  } = useQuery<Cat[], Error>(
    ['cats', page, selectedBreed],
    () => (selectedBreed ? getCatsByBreed(20, selectedBreed) : getCats(20)),
    {
      keepPreviousData: true,
      onSuccess: newCats => {
        if (Array.isArray(newCats) && newCats.length > 0) {
          setCats(prevCats => [...prevCats, ...newCats]);
        }
      },
    },
  );

  const {
    data: breeds = [],
    isLoading: loadingBreeds,
    isError: errorBreeds,
  } = useQuery<Breed[], Error>('breeds', getBreeds);

  const handleBreedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const breedId = event.target.value;
    setSelectedBreed(breedId);
    setCats([]);
    setPage(0);
  };

  if (loadingCats || loadingBreeds) {
    return <Loader />;
  }

  if (errorCats || errorBreeds) {
    return <h2>Error loading data</h2>;
  }

  return (
    <CatsGallery
      cats={cats}
      isFetching={fetchingCats}
      setPage={setPage}
      breeds={breeds || []}
      onBreedChange={handleBreedChange}
      selectedBreed={selectedBreed}
      catsData={catsData}
    />
  );
};

export default Home;
