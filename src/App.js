// src/App.js
import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main">
        <Hero />
        <CategoryGrid />
        <Services />
        <Highlights />
        <Reviews />
        <Fitting />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  );
}

/* ----- UI: Daten ----- */
const CATEGORIES = [
  { title: "City & Urban", desc: "Robust, komfortabel, wartungsarm.", icon: "🚲" },
  { title: "E-Bikes", desc: "Reichweite bis 120 km, leise Motoren.", icon: "⚡" },
  { title: "Gravel & Road", desc: "Leicht, schnell, für lange Touren.", icon: "🏁" },
];

const HIGHLIGHTS = [
  {
    name: "Urban One 8-Gang",
    desc: "Riemenantrieb • Nabendynamo • Scheibenbremsen",
    price: "CHF 1’290.–",
  },
  {
    name: "E-Commuter Pro",
    desc: "Bosch Performance • 625 Wh • Schutzbleche & Gepäckträger",
    price: "CHF 3’690.–",
  },
  {
    name: "Gravel Carbon GX",
    desc: "Carbonrahmen • 1x12 • Tubeless-Ready",
    price: "CHF 2’990.–",
  },
];

const REVIEWS = [
  { name: "Lea", text: "Super Beratung! Mein E-Bike war am selben Tag abholbereit." },
  { name: "Matteo", text: "Werkstatt top – Schaltung perfekt eingestellt, fairer Preis." },
  { name: "Sofia", text: "Bike-Fitting brachte spürbar mehr Komfort auf langen Rides." },
];

/* ----- Komponenten ----- */

function SkipLink() {
  return (
    <a className="skiplink" href="#main">
      Direkt zum Inhalt springen
    </a>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#hero" className="brand" aria-label="Velomanufaktur Home">
          <Logo /> <span>Velomanufaktur Bern</span>
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

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Dein Bike. Dein Flow. <span className="accent">In 24 h fahrbereit.</span></h1>
          <p>
            Premium-Bikes, Same-Day-Service und individuelle Beratung in Bern.
            Kostenlose Erstberatung – Probefahrt jederzeit.
          </p>
          <div className="hero-cta">
            <a href="#kontakt" className="btn">Probefahrt buchen</a>
            <a href="tel:+41310000000" className="btn btn--ghost" aria-label="Jetzt anrufen">
              Jetzt anrufen
            </a>
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

function CategoryGrid() {
  return (
    <section id="kategorien" className="section">
      <div className="container">
        <Header title="Top-Kategorien" subtitle="Finde dein perfektes Setup" />
        <div className="grid grid--3">
          {CATEGORIES.map((c) => (
            <article key={c.title} className="card card--lift">
              <div className="card-icon" aria-hidden="true">{c.icon}</div>
              <h3 className="card-title">{c.title}</h3>
              <p className="muted">{c.desc}</p>
              <a href="#kontakt" className="link">Beratung anfragen →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <Header title="Werkstatt & Service" subtitle="Schnell. Transparent. Verlässlich." />
        <div className="grid grid--3">
          <ServiceCard
            title="Inspektion"
            price="ab CHF 59.–"
            points={["Sicherheitscheck", "Bremsen/Schaltung", "Schraubensicherung"]}
          />
          <ServiceCard
            title="Express-Service"
            price="am selben Tag"
            points={["Reifen & Schläuche", "Kette/Antrieb", "Bremsbeläge"]}
          />
          <ServiceCard
            title="E-Bike-Diagnose"
            price="CHF 39.–"
            points={["Software-Update", "Fehlercodes", "Akkutest"]}
          />
        </div>
        <div className="center mt">
          <a href="#kontakt" className="btn">Werkstatt-Termin sichern</a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, price, points }) {
  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
      <p className="price">{price}</p>
      <ul className="checklist">
        {points.map((p) => <li key={p}> {p}</li>)}
      </ul>
    </article>
  );
}

function Highlights() {
  return (
    <section id="highlights" className="section">
      <div className="container">
        <Header title="Bestseller" subtitle="Direkt verfügbar" />
        <div className="grid grid--3">
          {HIGHLIGHTS.map((h) => (
            <article key={h.name} className="card product">
              <div className="product-image" aria-hidden="true">Bild</div>
              <h3 className="card-title">{h.name}</h3>
              <p className="muted">{h.desc}</p>
              <div className="product-cta">
                <span className="price">{h.price}</span>
                <a href="#kontakt" className="btn btn--small">Probefahrt</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Header title="Kundenstimmen" subtitle="4.9 ★ Google-Bewertungen" />
        <div className="grid grid--3">
          {REVIEWS.map((r) => (
            <blockquote key={r.name} className="card quote">
              <p>“{r.text}”</p>
              <footer>— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fitting() {
  return (
    <section id="fitting" className="section">
      <div className="container grid grid--2">
        <div>
          <Header title="Bike-Fitting" subtitle="Mehr Komfort. Mehr Watt. Weniger Schmerzen." />
          <ul className="bullets">
            <li>Video-Analyse der Sitzposition (45 Min.)</li>
            <li>Feinjustage: Sattelhöhe, Vorbau, Cleats</li>
            <li>Report mit Einstellungen für zuhause</li>
          </ul>
          <a href="#kontakt" className="btn">Fitting anfragen</a>
        </div>
        <div aria-hidden="true">
          <div className="media-box">Fitting-Foto/Diagramm</div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="section section--alt">
      <div className="container">
        <Header title="Kontakt & Termin" subtitle="Wir melden uns innerhalb von 24 Stunden" />
        <div className="grid grid--2">
          <form className="form card" onSubmit={(e) => e.preventDefault()} aria-label="Kontaktformular">
            <div className="form-row">
              <label htmlFor="name">Name*</label>
              <input id="name" name="name" type="text" required placeholder="Vor- und Nachname" />
            </div>
            <div className="form-row">
              <label htmlFor="email">E-Mail*</label>
              <input id="email" name="email" type="email" required placeholder="beispiel@mail.ch" />
            </div>
            <div className="form-row">
              <label htmlFor="phone">Telefon</label>
              <input id="phone" name="phone" type="tel" placeholder="+41 31 000 00 00" />
            </div>
            <div className="form-row">
              <label htmlFor="type">Anliegen*</label>
              <select id="type" name="type" required defaultValue="">
                <option value="" disabled>Bitte wählen …</option>
                <option>Probefahrt</option>
                <option>Werkstatt-Termin</option>
                <option>Beratung</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="msg">Nachricht</label>
              <textarea id="msg" name="msg" rows="4" placeholder="Kurze Beschreibung"></textarea>
            </div>
            <div className="form-row checkbox">
              <input id="privacy" type="checkbox" required />
              <label htmlFor="privacy">Ich akzeptiere die Datenschutzerklärung.</label>
            </div>
            <button className="btn" type="submit">Anfrage senden</button>
            <p className="muted small">* Pflichtfelder</p>
          </form>
          <div className="card contact-box">
            <h3>Direkter Kontakt</h3>
            <p>
              <strong>Velomanufaktur Bern</strong><br />
              Länggassstrasse 12, 3012 Bern
            </p>
            <p>
              Tel. <a href="tel:+41310000000">+41 31 000 00 00</a><br />
              Mail <a href="mailto:hallo@velomanufaktur.ch">hallo@velomanufaktur.ch</a>
            </p>
            <p>
              Öffnungszeiten:<br />
              Mo–Fr 09:00–18:30, Sa 10:00–16:00
            </p>
            <a className="btn btn--ghost" href="#location">Route & Karte</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="section">
      <div className="container">
        <Header title="Standort" subtitle="3 Minuten von Uni/Mensa – Tram/Bus in der Nähe" />
        <div className="map-wrap card" role="img" aria-label="Kartenplatzhalter – Standort Velomanufaktur Bern">
          {/* Ersetze das durch ein echtes <iframe> mit Google Maps, falls gewünscht */}
          <div className="map-placeholder">Karte / Map-Embed</div>
        </div>
        <div className="center mt">
          <a
            className="btn"
            href="https://maps.google.com/?q=L%C3%A4nggassstrasse+12,+3012+Bern"
            target="_blank"
            rel="noreferrer"
          >
            Route in Google Maps öffnen
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#hero" className="brand">
          <Logo /> <span>Velomanufaktur Bern</span>
        </a>
        <nav aria-label="Footernavigation">
          <ul className="footer-links">
            <li><a href="#kategorien">Bikes</a></li>
            <li><a href="#services">Werkstatt</a></li>
            <li><a href="#fitting">Fitting</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </nav>
        <p className="muted small">© {new Date().getFullYear()} Velomanufaktur Bern — Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

function Header({ title, subtitle }) {
  return (
    <header className="section-head">
      <h2>{title}</h2>
      {subtitle && <p className="muted">{subtitle}</p>}
    </header>
  );
}

function Logo() {
  return (
    <svg className="logo" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="7" cy="17" r="4" />
      <circle cx="17" cy="17" r="4" />
      <path d="M7 17 L12 8 L17 17" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
