"use client";

import React, { useCallback } from "react";
import { useCart } from "@/context/CartContext";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const generateWhatsAppMessage = useCallback(() => {
    const productList = items.map(item => 
      `- ${item.name} (${item.selectedSize}, ${item.selectedColor}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const message = `¡Hola! Quiero realizar la siguiente compra:\n\n${productList}\n\nTotal: $${totalPrice.toFixed(2)}`;
    
    return encodeURIComponent(message);
  }, [items, totalPrice]);

  const handleCheckout = () => {
    const phoneNumber = '3764101469'; // Reemplaza con el número de teléfono deseado
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}&send`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  const getItemKey = (item: any) =>
    `${item.id}-${item.selectedSize}-${item.selectedColor}`;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-amber-50 to-orange-50">
          <h2 className="text-2xl font-bold text-gray-900">
            Carrito de Compras
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 hover:bg-white/50 rounded-full transition-all duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-96">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9"
                />
              </svg>
              <p className="text-gray-500">Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={getItemKey(item)}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200"
                >
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Talla: {item.selectedSize} | Color: {item.selectedColor}
                    </p>
                    <p className="font-medium">${item.price}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(getItemKey(item), item.quantity - 1)
                      }
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-amber-100 flex items-center justify-center transition-colors duration-200 font-medium"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(getItemKey(item), item.quantity + 1)
                      }
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-amber-100 flex items-center justify-center transition-colors duration-200 font-medium"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(getItemKey(item))}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">
                Total: ${totalPrice.toFixed(2)}
              </span>
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Vaciar carrito
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 border border-gray-300 py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Seguir Comprando
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.101-.473-.148-.673.15-.197.295-.771.961-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.174-.297-.018-.458.129-.606.136-.135.298-.354.446-.472.149-.118.199-.202.298-.337.1-.136.05-.255-.025-.354-.075-.1-.672-1.613-.922-2.207-.24-.579-.487-.5-.672-.508-.172-.007-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.104 3.195 5.1 4.485.714.3 1.27.489 1.704.625.714.227 1.365.195 1.878.121.574-.091 1.771-.721 2.02-1.425.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016a9.27 9.27 0 01-5.031-1.466l-.36-.214-3.741.982.998-3.648-.235-.375a9.1 9.1 0 01-1.45-4.85c.008-5.1 4.18-9.267 9.28-9.267a9.25 9.25 0 016.627 2.74 9.21 9.21 0 012.7 6.53c-.013 5.1-4.172 9.26-9.28 9.26M20.52 3.449A11.8 11.8 0 0011.5 0C5.159.002-.003 5.17 0 11.5c0 2.13.66 4.17 1.876 5.9L0 24l6.73-1.767a11.7 11.7 0 004.75 1.01h.005c6.348 0 11.519-5.17 11.52-11.5 0-3.17-1.29-6.165-3.596-8.41"/>
                </svg>
                Finalizar por WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
