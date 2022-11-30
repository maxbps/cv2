import React from "react";

// Import du CSS
import "./ProjetModale.css";

function ProjetModale(props) {
  // #region [INITIALISATION]
  const { projet, onClose } = props;
  // #endregion

  // #region [INTERFACE]
  return (
    <div id="projetModale" className="bg-light p-5" onClick={onClose}>
      <div className="text-center">
        <h2 className="mb-3 display-4">{projet.title}</h2>
        <h3 className="projet-subtitle">{projet.subtitle}</h3>
      </div>
      <img
        className="img-fluid projet-img"
        src={projet.picture1}
        alt={projet.title + ", " + projet.subtitle}
      />
        <p className="projet-text1">{projet.text1}</p>
        <p className="projet-text2">{projet.text2}</p>
        <a className="projet-link" target="blank" href={projet.link}>
          Vous pouvez accéder à ce projet sur github
        </a>
      <img
        className="img-fluid projet-img"
        src={projet.picture2}
        alt={projet.title + ", " + projet.subtitle + ", detail"}
      />

      <p className="projet-quote">{projet.quote}</p>
      <p className="projet-quote-author">{projet.mentor}</p>
    </div>
  );
  // #endregion
}

export { ProjetModale };
