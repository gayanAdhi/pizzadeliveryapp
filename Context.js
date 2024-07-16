import React, { createContext, useState } from "react";

export const CartItems = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartItems.Provider value={{ cart, setCart }}>
      {children}
    </CartItems.Provider>
  );
};

// If you need BasketContext, define it similarly
// export const BasketContext = createContext();
//
// export const BasketProvider = ({ children }) => {
//   const [basket, setBasket] = useState([]);
//
//   return (
//     <BasketContext.Provider value={{ basket, setBasket }}>
//       {children}
//     </BasketContext.Provider>
//   );
// };
