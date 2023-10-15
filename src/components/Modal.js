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
        {/* <div className="preview"></div> */}
        <div className="newForm">
          <button
            className="closeModal"
            onClick={() => dispatch({ type: "close" })}
          >
            X
          </button>
          <h3 className="newProductForm__title">{isOpen.title}</h3>
          <form action={`${direccion}/products/create`} method="post">
            {isOpen.content}
          </form>
        </div>
      </div>
    </>
  );
};
