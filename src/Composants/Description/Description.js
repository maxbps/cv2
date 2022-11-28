import React from "react";

// Import des Assets
import { default as max } from "../../Assets/max.png";

// Import du CSS
import "./Description.css";

function Description() {
  return (
    <section id="description" data-effect="slide-bottom" class="bg-purple text-light">
      <div class="container">
        <div class="row  align-items-center">
          <div class="col-lg-3">
            <div class="mx-auto  mb-lg-0 mb-5 text-end">
              <img
                class="img-fluid rounded-circle description-img"
                src={max}
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-7 mx-auto text-left">
            <h2 class="display-4 mb-4">Qui suis-je ?</h2>
            <p class="lead text">
              Après 4 années dans l'armée de terre, j'ai effectué une
              reconversion professionnelle dans le domaine du développement
              d'application iOS, puis, j’ai mis à profit la période de
              confinement pour me former et apprendre les langages du web avec
              une formation de développeur web.
            </p>
            <p class="lead text">
              Afin d'acquérir une expérience professionnelle, tout en continuant
              à me former, j'ai choisi la voie de l'alternance avec la formation
              MSI - Manager en systèmes d'information - option développement du
              CESI École d'Ingénieurs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Description };
