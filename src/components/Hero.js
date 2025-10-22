import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Dein Bike. Dein Flow. <span className="accent">In 24 h fahrbereit.</span></h1>
          <p>Premium-Bikes, Same-Day-Service und individuelle Beratung in Bern. Kostenlose Erstberatung – Probefahrt jederzeit.</p>
          <div className="hero-cta">
            <a href="#kontakt" className="btn">Probefahrt buchen</a>
            <a href="tel:+41310000000" className="btn btn--ghost" aria-label="Jetzt anrufen">Jetzt anrufen</a>
          </div>
          <ul className="hero-badges" aria-label="Vorteile">
            <li>✔ Same-Day-Werkstatt</li>
            <li>✔ 6 Monate Garantie</li>
            <li>✔ Finanzierung möglich</li>
          </ul>
        </div>
        <div className="hero-media" aria-hidden="true">
          <div className="hero-placeholder">Bike-Hero-Bild</div>
        </div>
      </div>
    </section>
  );
}
