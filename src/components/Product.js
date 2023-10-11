import React, { useState } from "react";
import { InformacionLogo } from "../assets/InformacionLogo";

export const Product = ({ product, clase }) => {
  const [info, setInfo] = useState(false);
  const { name, description, price } = product;
  const image = "placeholder.jpg";
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
    </li>
  );
};
