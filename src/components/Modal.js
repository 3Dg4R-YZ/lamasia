import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Modal = () => {
  const { isOpen, dispatch, direccion } = useContext(AuthContext);
  if (!isOpen) return null;
  return (
    <>
      <button
        className="bckModal"
        onClick={() => dispatch({ type: "close" })}
      ></button>
      <div className="modal fadeInDown">
        <button
          className="closeModal"
          onClick={() => dispatch({ type: "close" })}
        >
          X
        </button>
        <div className="preview"></div>
        <div className="newForm">
          <h2 className="newProductForm__title">Nuevo Producto</h2>
          <form action={`${direccion}/products/create`} method="post">
            {isOpen}
          </form>
        </div>
      </div>
    </>
  );
};
