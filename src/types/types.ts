export interface Breed {
  id: string;
  name: string;
  temperament: string;
}

export interface Cat {
  id: string;
  url: string;
  breeds: Breed[];
}
