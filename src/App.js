import React, { useState } from "react";

import Header from './Component/Layout/Header';
import Medicine from './Component/Medicine/Medicine';
import Cart from './Component/Cart/Cart';
import CartProvider from "./Store/CartProvider";

function App() {

  const [cartIsShown, setCartVisible] = useState(false);


  const showCart = () => {
    setCartVisible(true);
  }

  const hideCart = () => {
    setCartVisible(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} />
      <main>
        <Medicine />
      </main>
    </CartProvider>
  );
}

export default App;