import axios from 'axios';
import { Breed, Cat } from '../types/types';

const BASE_URL = 'https://api.thecatapi.com';

const apiData = axios.create({
  baseURL: BASE_URL,
});

export const getCats = async (limit = 20): Promise<Cat[]> => {
  const { data } = await apiData.get<Cat[]>(
    `/v1/images/search?limit=${limit}&has_breeds=1&api_key=live_zJherVRZmN9pJaeQVhyzJNDZx2htEy0k9te4vmbyKVlf7ypxn2YbnNwdz1OGgCzb`,
  );
  return data;
};

export const getBreeds = async (): Promise<Breed[]> => {
  const { data } = await apiData.get<Breed[]>('/v1/breeds');
  return data;
};

export const getCatsByBreed = async (
  limit = 30,
  id: string,
): Promise<Cat[]> => {
  const { data } = await apiData.get<Cat[]>(
    `/v1/images/search?limit=${limit}&has_breeds=1&breed_ids=${id}&api_key=live_zJherVRZmN9pJaeQVhyzJNDZx2htEy0k9te4vmbyKVlf7ypxn2YbnNwdz1OGgCzb`,
  );
  return data;
};
