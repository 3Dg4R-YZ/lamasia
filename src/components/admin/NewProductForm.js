import React from "react";

export const NewProductForm = ({ actualIndex }) => {
  return (
    <>
      <input type="hidden" name="category" value="Picaderas" />
      <input type="hidden" name="sub_category" value="almuerzos" />
      <label>
        Nombre *
        <input type="text" name="name" autoComplete="off" required={true} />
      </label>
      <label>
        Descripcion
        <textarea name="description" autoComplete="off" rows={3} />
      </label>
      <label className="number">
        Indice *
        <input
          type="number"
          min={1}
          max={actualIndex}
          defaultValue={actualIndex}
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
        />
      </label>

      <label>
        Foto
        <input type="file" accept="image/*" />
      </label>
    </>
  );
};
