import React from "react";
import CartModal from "./CartModal";
import { useRef } from "react";
import Logo from "../assets/logo.png";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
function Header() {
  const { items, addItemToCart, handleUpdateCartItemQuantity } =
    useContext(CartContext);
  const modal = useRef();
  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }
  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src={Logo} alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}

export default Header;
