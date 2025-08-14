'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { totalItems } = useCart();

  return (
    <>
      {/* Botón del carrito fijo */}
      {totalItems > 0 && (
        <button
          onClick={onCartClick}
          className="fixed top-4 left-4 z-50 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
          </svg>
          Ver Productos ({totalItems})
        </button>
      )}

      {/* Imagen superior */}
      <div className="h-80 bg-gradient-to-br from-amber-100 via-orange-50 to-pink-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        {/* Simulando una imagen de fondo con patrones */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/30 rounded-full blur-xl"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-pink-200/40 rounded-full blur-lg"></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-orange-200/30 rounded-full blur-2xl"></div>
        </div>
      </div>
    </>
  );
};

export default Header;