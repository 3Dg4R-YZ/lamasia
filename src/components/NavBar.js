import React from "react";
import { InfucionesLogo } from "../assets/InfucionesLogo";
import { PicaderasLogo } from "../assets/PicaderasLogo";
import { BebidasLogo } from "../assets/BebidasLogo";

export const NavBar = ({ main, setMain }) => {
  const logos = [<InfucionesLogo />, <PicaderasLogo />, <BebidasLogo />, false];
  return (
    <nav className="wrapper">
      <div className="menu">
        {logos.map((logo, i) => (
          <React.Fragment key={i}>
            <div className="menu__separator"></div>
            <div className="menu__separator"></div>
            {logo && (
              <div
                className={main === i ? "menu__option active" : "menu__option"}
                onClick={() => setMain(i)}
              >
                {logo}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};
