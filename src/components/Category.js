import React, { useContext, useMemo } from "react";
import { AuthContext } from "../context/AuthContext";
import { Product } from "./Product";
import { NewProductForm } from "./admin/NewProductForm";
import { PlusLogo } from "../assets/PlusLogo";

export const Category = ({ category, i }) => {
  const { admin, dispatch } = useContext(AuthContext);
  const { section, products } = category;
  const actualIndex = products.length + 1;
  const clase = section === "Agregos" ? "add" : "product";

  const productsMemo = useMemo(
    () =>
      products.map((product, i) => (
        <Product
          product={product}
          clase={clase}
          key={Math.random()}
          i={i}
          actualIndex={actualIndex}
        />
      )),
    [products, actualIndex, clase]
  );
  return (
    <section>
      <h2 className="section__title animate__animated animate__fadeIn">
        {section}
      </h2>
      <ul className={`section__${clase}s animate__animated animate__fadeIn`}>
        {productsMemo}
        {admin && (
          <>
            <span className="newIndex">{i + 1}</span>
            <li
              className={`${clase}s__${clase} newProduct`}
              onClick={() =>
                dispatch({
                  type: "openModal",
                  title: "Nuevo Producto",
                  payload: <NewProductForm actualIndex={actualIndex} />,
                })
              }
            >
              <PlusLogo />
              <h2 className={`newProduct__title`}>Nuevo Producto</h2>
              <span className={`${clase}__price`}>&nbsp;</span>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};
