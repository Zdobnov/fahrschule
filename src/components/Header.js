import React from 'react';

// Styles
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="wrapper">
      <div className="header__logo" />
      <nav className="nav">
        <span className="nav__item">Home</span>
        <span className="nav__item">Führerschein</span>
        <span className="nav__item">Preise & Infos</span>
        <span className="nav__item">Über uns</span>
        <span className="nav__item">Kontakt</span>
        <span className="nav__item">DE</span>
      </nav>
      <button className="header__cta cta cta--text-white">Einschreiben</button>
    </div>
  </header>
);

export default Header;
