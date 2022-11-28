import React from "react";

// Import du CSS
import "./Banniere.css";

function Banniere() {
  // #region [INTERFACE]
  return (
    <section className="banniere d-flex pt-5">
      <div className="container px-4 px-lg-5 text-center">
        <h1 className="mb-1 sacramento display-4 text-light banniere-title">Maxime Bontemps</h1>
        <h2 className="mb-5 sacramento display-1 text-grey banniere-subtitle">
          Développeur Web et Mobile
        </h2>
      </div>
    </section>
  );
  // #endregion
}

export { Banniere };
