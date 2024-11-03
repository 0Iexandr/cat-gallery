import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-calc-h-screen-minus-h-32">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
