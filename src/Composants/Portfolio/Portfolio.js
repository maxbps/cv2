import React from "react";

// Import des composants
import { Projet } from "./Projet";

// Import des Assets
import { default as phone } from "../../Assets/phone.png";

// Import du CSS
import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio" className="mt-5">
      <h2 className="text-center display-4">Quelques projets....</h2>
      <div className="container">
        <div className="row">
          <Projet />
          <Projet />
          <Projet />
          <Projet />
          <Projet />
          <Projet />
        </div>
      </div>
    </section>
  );
}

export { Portfolio };
