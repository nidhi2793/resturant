import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cartProvider";
import OrderDone from "./components/OrderDone";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderModal, setOrderModal] = useState(false);

  const showOrderModal = () => {
    setOrderModal(true);
    setCartIsShown(false);
  };

  const showCart = () => {
    setCartIsShown(true);
  };

  const hideCart = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCart} onOrder={showOrderModal} />}
      {orderModal && <OrderDone />}
      <Header onShowCart={showCart}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
