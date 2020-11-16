import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { store } from '../context/LanguageContext';

import Translate from './Translate';

import flagDE from '../images/icons/flag-de.svg';
import flagUK from '../images/icons/flag-uk.svg';
import flagRU from '../images/icons/flag-ru.svg';

const Nav = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const languages = [{
    iconSrc: flagDE,
    name: 'DE',
  }, {
    iconSrc: flagUK,
    name: 'EN',
  }, {
    iconSrc: flagRU,
    name: 'RU',
  }];

  const handleLanguageClick = language => () => {
    dispatch({ type: 'action description', language });
  };

  return (
    <div className="sticky-bar">
      <div className="nav-bar">
        <div className="wrapper nav-bar__wrapper">
          <nav className="nav-bar__navigation">
            <NavLink exact to="/" className="nav-bar__link" activeClassName="nav-bar__link--active">
              <Translate>navigation.main</Translate>
            </NavLink>
            <NavLink exact to="/about" className="nav-bar__link" activeClassName="nav-bar__link--active">
              <Translate>navigation.about</Translate>
            </NavLink>
          </nav>
          <ul>
            {languages.map((language, index) => (
              <li
                key={index}
                style={{
                  backgroundImage: `url(${language.iconSrc})`,
                  ...(globalState.state === language.name && { opacity: 1 }),
                }}
                onClick={handleLanguageClick(language.name)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Nav;
