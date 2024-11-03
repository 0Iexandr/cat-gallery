import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-16 bg-layout flex items-center justify-center px-6 lg:px-10">
      <h2>
        Created by{' '}
        <a
          href="https://github.com/0Iexandr"
          target="_blank"
          className="underline"
        >
          github.com/0Iexandr
        </a>
      </h2>
    </footer>
  );
};

export default Footer;
