import { Cat } from '../types/types';

import React from 'react';
import CatCard from './CatCard';
import Masonry from 'react-layout-masonry';

interface MansoryGalleryProps {
  cats: Cat[];
}

const MansoryGallery: React.FC<MansoryGalleryProps> = ({ cats }) => {
  return (
    <div>
      <Masonry
        columns={{ 640: 1, 768: 2, 1024: 3, 1280: 4, 1536: 5 }}
        className="gap-6"
        columnProps={{
          className: 'gap-y-8',
        }}
      >
        {cats.map(cat => (
          <CatCard cat={cat} key={cat.id} />
        ))}
      </Masonry>
    </div>
  );
};

export default MansoryGallery;
