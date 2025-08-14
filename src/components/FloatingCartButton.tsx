'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

interface FloatingCartButtonProps {
  onClick: () => void;
}

const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({ onClick }) => {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
      </svg>
      <span className="font-medium">Ver Carrito</span>
      <span className="bg-white/20 text-white text-sm px-2 py-1 rounded-full min-w-[24px] text-center">
        {totalItems}
      </span>
    </button>
  );
};

export default FloatingCartButton;