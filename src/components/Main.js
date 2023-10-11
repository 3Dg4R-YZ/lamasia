import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { products } from "../data/products";
import { Category } from "./Category";
import { NewCategoryForm } from "./admin/NewCategoryForm";
import { PlusLogo } from "../assets/PlusLogo";

export const Main = ({ main }) => {
  const { admin, dispatch } = useContext(AuthContext);
  const categories = products[main];

  return (
    <>
      {categories.map((category, i) => (
        <Category category={category} i={i} key={Math.random()} />
      ))}
      {admin && (
        <section
          className="newSection"
          onClick={() => {
            dispatch({
              type: "openForm",
              payload: <NewCategoryForm />,
            });
          }}
        >
          <h2 className="newSection__title">Nueva Seccion</h2>
          <div className="newSection__body">
            <PlusLogo />
          </div>
        </section>
      )}
    </>
  );
};
