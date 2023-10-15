import React from "react";

export const EditProductForm = ({ product, i, image, actualIndex }) => {
  const { name, description, price } = product;
  return (
    <>
      <input type="hidden" name="category" value="Picaderas" />
      <input type="hidden" name="sub_category" value="almuerzos" />
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
      <label>
        Descripcion
        <textarea
          name="description"
          autoComplete="off"
          rows={3}
          defaultValue={description}
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
      <label className="number">
        Precio *
        <input
          type="number"
          min={0}
          name="price"
          autoComplete="off"
          required={true}
          defaultValue={price}
        />
      </label>

      <label>
        Foto
        <input type="file" accept="image/*" />
      </label>
      <button>Guardar</button>
    </>
  );
};
