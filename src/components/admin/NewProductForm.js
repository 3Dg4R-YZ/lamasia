import React from "react";

export const NewProductForm = () => {
  return (
    <>
      <input type="hidden" name="category" value="Picaderas" />
      <input type="hidden" name="sub_category" value="almuerzos" />
      <label>
        Nombre
        <input type="text" name="name" />
      </label>
      <label>
        Descripcion
        <textarea name="description" />
      </label>
      <label>
        Indice
        <input type="text" name="local_index" />
      </label>
      <label>
        Precio
        <input type="number" min={0} name="price" />
      </label>

      <label>
        Foto
        <input type="file" />
      </label>
      <button>Guardar</button>
    </>
  );
};
