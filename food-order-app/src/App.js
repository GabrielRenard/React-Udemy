import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartModal, setCartModal] = useState(false);

  const openCartHandler = () => {
    setCartModal(true);
  };

  const closeCartHandler = () => {
    setCartModal(false);
  };

  return (
    <>
      {cartModal && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
