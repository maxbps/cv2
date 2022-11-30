import React from "react";

// Import des Assets
import { default as max } from "../../Assets/max.png";

// Import du CSS
import "./Projet.css";

function Projet(props) {
  // #region [INITIALISATION]
  const { onClickItem, projet } = props;
  // #endregion
  return (
    <div className="col-lg-4 p-3">
      <div className="projet-card text-center shadow" onClick={onClickItem}>
        <img className="card-img" src={projet.picture} alt="title" />
        <div className="fadedbox">
          <h2 className="title projet-card-title projet-card-text">{projet.title}</h2>
          <h3 className="subtitle projet-card-title projet-card-text">
            {projet.subtitle}
          </h3>
        </div>
      </div>
    </div>
  );
}

export { Projet };
