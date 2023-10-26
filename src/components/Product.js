import React, { useContext, useState } from "react";
import { InformacionLogo } from "../assets/InformacionLogo";
import { AuthContext } from "../context/AuthContext";
import { EditarLogo } from "../assets/EditarLogo";
import { EliminarLogo } from "../assets/EliminarLogo";
import { EditProductForm } from "./admin/EditProductForm";
import { DeleteProductForm } from "./admin/DeleteProductForm";

export const Product = ({ product, clase, i, actualIndex }) => {
  const [info, setInfo] = useState(false);
  const { name, description, price } = product;
  const image = i < 7 ? `${i + 1}.jpg` : `placeholder.jpg`;
  const { admin, dispatch } = useContext(AuthContext);

  const editModal = {
    type: "openModal",
    title: "Editar Producto",
    payload: (
      <EditProductForm
        product={product}
        i={i}
        image={image}
        actualIndex={actualIndex}
      />
    ),
  };

  return (
    <li className={`${clase}s__${clase}`}>
      <img
        className={`${clase}__img`}
        src={`./assets/${image}`}
        alt={name}
        loading="lazy"
      />
      {!info ? (
        <h3 className={`${clase}__title fadeIn`}>{name}</h3>
      ) : (
        <p className={`${clase}__body fadeIn`}>{description}</p>
      )}
      <span className={`${clase}__price`}>${price}</span>
      {description && (
        <button className="product__btn" onClick={() => setInfo(!info)}>
          <InformacionLogo />
        </button>
      )}
      {admin && (
        <>
          <span className="product__index">{i + 1}</span>
          <div className={`${clase}__btns`}>
            <button className="edit__btn" onClick={() => dispatch(editModal)}>
              <EditarLogo />
            </button>
            <button
              className="delete__btn"
              onClick={() =>
                dispatch({
                  type: "openModal",
                  title: "Eliminar Producto",

                  payload: (
                    <DeleteProductForm product={product} i={i} image={image} />
                  ),
                })
              }
            >
              <EliminarLogo />
            </button>
          </div>
        </>
      )}
    </li>
  );
};
