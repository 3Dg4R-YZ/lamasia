import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Product } from "./Product";
import { NewProductForm } from "./admin/NewProductForm";
import { PlusLogo } from "../assets/PlusLogo";

export const Category = ({ category, i }) => {
  const { admin, dispatch } = useContext(AuthContext);
  const { section, products } = category;
  const clase = section === "Agregos" ? "add" : "product";
  return (
    <section>
      <h2 className="section__title animate__animated animate__fadeIn">
        {section}
      </h2>
      <ul className={`section__${clase}s animate__animated animate__fadeIn`}>
        {products.map((product) => (
          <Product product={product} clase={clase} key={Math.random()} />
        ))}
        {admin && (
          <>
            <span className="newIndex">{i + 1}</span>
            <li
              className={`${clase}s__${clase} newProduct`}
              onClick={() =>
                dispatch({
                  type: "openForm",
                  payload: <NewProductForm clase={clase} />,
                })
              }
            >
              <PlusLogo />
              <h3 className={`newProduct__title`}>Nuevo Producto</h3>
              <span className={`${clase}__price`}>&nbsp;</span>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};
