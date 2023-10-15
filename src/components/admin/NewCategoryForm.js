import React from "react";
import { NewProductForm } from "./NewProductForm";

export const NewCategoryForm = () => {
  return (
    <>
      <label>
        Nombre de la Seccion *
        <input type="text" autoComplete="off" required={true} />
      </label>
      <p>Debe agregar un producto para empezar la nueva seccion</p>
      <NewProductForm actualIndex={1} />
    </>
  );
};
