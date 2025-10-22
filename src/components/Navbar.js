import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#hero" className="brand" aria-label="Velomanufaktur Home">
          <span>Velomanufaktur Bern</span>
        </a>
        <nav aria-label="Hauptnavigation">
          <ul className="nav-links">
            <li><a href="#kategorien">Bikes</a></li>
            <li><a href="#services">Werkstatt</a></li>
            <li><a href="#highlights">Highlights</a></li>
            <li><a href="#fitting">Bike-Fitting</a></li>
            <li><a href="#kontakt" className="btn btn--small">Termin</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
