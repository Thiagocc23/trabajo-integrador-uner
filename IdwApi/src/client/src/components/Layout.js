// Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Aquí se renderizan las páginas específicas */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
