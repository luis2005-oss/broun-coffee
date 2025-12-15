import { useState } from "react";
import { FiCheckCircle, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { Title } from "../../atoms/titles";
import { Button } from "../../atoms/buttons";
import { CartTitle } from "../../molecules/modals/modalCartTitle";
import { useCart } from "../../../context/CartContext";

function CartShop({ setCartShopOpen }) {
  const [isClose, setIsClose] = useState(false);
  const [ordered, setOrdered] = useState(false);

  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
  } = useCart();

  const CloseModal = () => {
    setIsClose(true);
    setTimeout(() => {
      setCartShopOpen(false);
    }, 400);
  };

  const handleBgClick = (e) => {
    if (e.target === e.currentTarget) {
      CloseModal();
    }
  };

  const handleOrder = () => {
    if (cartItems.length === 0) return;

    setOrdered(true);

    setTimeout(() => {
      clearCart();
      setTimeout(() => {
        CloseModal();
      }, 1500);
    }, 2000);
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-998 transition-opacity duration-400 
        ${isClose ? "opacity-0" : "opacity-100"}`}
      onClick={handleBgClick}
    >
      <section
        className="absolute z-999 p-3 rounded top-20 right-6 bg-white w-200 max-h-[80vh] flex flex-col gap-5 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <CartTitle CloseModal={CloseModal} />

        {/* CONTENIDO */}
        <div className="w-full flex-1 overflow-y-auto px-2">
          {ordered ? (
            <div className="h-40 w-full flex flex-col items-center justify-center gap-3 border rounded">
              <FiCheckCircle size={55} className="text-green-500 animate-check" />
              <Title level="h5" text="Pedido realizado con éxito" />
            </div>
          ) : cartItems.length === 0 ? (
            <div className="h-40 flex items-center justify-center border rounded">
              <Title level="h5" text="No hay productos en carrito" />
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.idProduct}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.idProduct, item.quantity - 1)
                      }
                    >
                      <FiMinus size={16} />
                    </button>
                    <span className="w-8 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.idProduct, item.quantity + 1)
                      }
                    >
                      <FiPlus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.idProduct)}
                    className="text-red-500"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {!ordered && cartItems.length > 0 && (
          <div className="w-full border-t pt-3">
            <div className="flex justify-between px-2 mb-3">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-lg">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <Button
              text="Realizar Pedido"
              className="w-full cursor-pointer"
              onClick={handleOrder}
            />
          </div>
        )}
      </section>
    </div>
  );
}

export { CartShop };
