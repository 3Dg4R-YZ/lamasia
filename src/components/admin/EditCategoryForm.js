import React from "react";

export const EditProductForm = ({ product, i, actualIndex }) => {
  const { name } = product;
  return (
    <>
      <input type="hidden" name="category" value="Picaderas" />
      <label>
        Nombre *
        <input
          type="text"
          name="name"
          autoComplete="off"
          required={true}
          defaultValue={name}
        />
      </label>
      <label className="number">
        Indice *
        <input
          type="number"
          min={1}
          max={actualIndex}
          defaultValue={i + 1}
          name="local_index"
          autoComplete="off"
          required={true}
        />
      </label>
    </>
  );
};
