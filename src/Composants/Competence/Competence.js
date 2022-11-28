import React from "react";

// Import des Assets
import { default as phone } from "../../Assets/phone.png";

// Import du CSS
import "./Competence.css";

function Competence() {
  return (
    <section id="competence" data-effect="slide-bottom" className="bg-white shadow">
      <div className="container-fluid">
        <div className="row align-items-center card-container">
          <div className="competence-card col-lg-4">
            <div className="card-body p-5">
              <h3 className="title text-center">Développeur Web</h3>
              <h4 className="subtitle text-center">Openclassrooms</h4>
              <h4 className="subsubtitle text-center mb-4">RNCP1154</h4>
              <p className="card-text lead">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <ul>
                <li>Créer des sites Web en React.js.</li>
                <li>
                  Découper, assembler et intégrer tous les éléments d’une
                  maquette graphique.
                </li>
                <li>
                  Appliquer les standards du web et les normes en vigueur.
                </li>
                <li>
                  Construire un site web fluide s’adaptant à tout type d’écran.
                </li>
                <li>Gérer et sécuriser les comptes utilisateurs.</li>
                <li>
                  Conception et réalisation du back-end de solutions en Node.js,
                  Delphi et SQL.
                </li>
              </ul>
            </div>
          </div>
          <div className="competence-card col-lg-4">
            <div className="card-body p-5">
              <h3 className="title text-center">
                Développeur d'application mobile
              </h3>
              <h4 className="subtitle text-center">Openclassrooms</h4>
              <h4 className="subsubtitle text-center mb-4">RNCP27099</h4>
              <p className="card-text lead">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <ul>
                <li>Créer des applications hybrides en React Native.</li>
                <li>Créer des applications natives en Swift.</li>
                <li>
                  Développer une application en utilisant les bonnes pratiques
                  et le bon design pattern.
                </li>
                <li>
                  Mettre en oeuvre des tests unitaires, d'intégrations et
                  fonctionnels.
                </li>
                <li>
                  Produire une documentation technique et fonctionnelle de
                  l'application.
                </li>
              </ul>
            </div>
          </div>
          <div className="competence-card col-lg-4">
            <div className="card-body p-5">
              <h3 className="title text-center">
                Manager en Système d'information
              </h3>
              <h4 className="subtitle text-center">CESI École d'Ingénieurs</h4>
              <h4 className="subsubtitle text-center mb-4">RNCP11554</h4>
              <p className="card-text lead">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <ul>
                <li>
                  Participer au choix technologique et à la mise en place d'une
                  solution.
                </li>
                <li>
                  Analyser un cahier des charges et choisir une solution
                  technique adaptée.
                </li>
                <li>
                  Concevoir l’architecture technique d’une application à l’aide
                  de diagrammes UML.
                </li>
                <li>Piloter un projet informatique</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Competence };
