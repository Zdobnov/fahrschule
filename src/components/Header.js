import React, { useContext } from 'react';

// Components
import Translate from '../utils/Translate';
import { store } from '../context/LanguageContext';

// Styles
import './Header.scss';

const Header = () => {
  // context
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const handleLanguageClick = language => () => {
    dispatch({ type: 'action description', language });
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__logo" />
        <nav className="nav">
        <span className="nav__item">
          <Translate>header.navigation.main</Translate>
        </span>
          <span className="nav__item">Führerschein</span>
          <span className="nav__item">Preise & Infos</span>
          <span className="nav__item">Über uns</span>
          <span className="nav__item">Kontakt</span>
          <span className="nav__item" onClick={handleLanguageClick('DE')}>DE</span>
          <span className="nav__item" onClick={handleLanguageClick('EN')}>EN</span>
          <span className="nav__item" onClick={handleLanguageClick('RU')}>RU</span>
        </nav>
        <button className="header__cta cta">Einschreiben</button>
      </div>
    </header>
  );
}

export default Header;
