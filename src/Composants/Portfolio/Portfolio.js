import React, { useState } from "react";

// Import des composants
import { Projet } from "./Projet";
import { ProjetModale } from "./ProjetModale";

// Import des datas
import { dataProjets } from "./Data";

// Import des Assets
import { default as phone } from "../../Assets/phone.png";

// Import du CSS
import "./Portfolio.css";

function Portfolio() {
  // #region [INITIALISATION]
  const [visibleProjetModale, setVisibleProjetModale] = useState(false);
  const [selectedProjet, setSelectedProjet] = useState(null);
  // endregion

  // #region [EVENT]
  const handleClickItem = (projet) => {
    setSelectedProjet(projet);
  };
  // #endregion


  // #region [INTERFACE]
  return (
    <section id="portfolio" className="mt-5">
      <h2 className="text-center display-4">Quelques projets....</h2>
      {dataProjets.length && dataProjets ? (
        <div className="container">
          <div className="row">
            {dataProjets.map((projet) => {
              return (
                <Projet
                  key={projet.id}
                  onClickItem={() => handleClickItem(projet)}
                  projet={projet}
                />
              );
            })}
          </div>
        </div>
      ) : null}
      {selectedProjet ? (
        <ProjetModale
          projet={selectedProjet}
          onClose={() => setSelectedProjet(null)}
        />
      ) : null}
    </section>
  );
  // #endregion
}

export { Portfolio };
