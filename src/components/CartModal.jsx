import React, { useImperativeHandle, forwardRef } from "react";
import Cart from "./Cart";
import { useRef } from "react";
import { createPortal } from "react-dom";
const CartModal = forwardRef(function CartModal({ title, actions }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
