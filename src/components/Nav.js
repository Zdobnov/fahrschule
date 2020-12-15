import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { store } from '../context/LanguageContext';

import Translate from './Translate';

import flagDE from '../images/icons/flag-de.svg';
import flagUK from '../images/icons/flag-uk.svg';
import flagRU from '../images/icons/flag-ru.svg';

// styles
import './Nav.scss';

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

const Nav = () => {
  // context
  const globalState = useContext(store);
  const { dispatch } = globalState;

  // state
  const [isSticky, setStickyState] = useState(false);

  // ref node
  const stickyBarNode = useRef(null);

  // componentDidMount / componentWillUnmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (stickyBarNode.current) {
      setStickyState(stickyBarNode.current.getBoundingClientRect().top <= 0);
    }
  };

  const handleLanguageClick = language => () => {
    dispatch({ type: 'action description', language });
  };

  return (
    <div className={`sticky-bar ${isSticky ? 'sticky-bar--sticky' : ''}`} ref={stickyBarNode}>
      <div className="nav-bar">
        <div className="wrapper nav-bar__wrapper">
          <nav className="nav-bar__navigation">
            <NavLink exact to="/" className="nav-bar__link" activeClassName="nav-bar__link--active">
              <Translate>navigation.main</Translate>
            </NavLink>
            <NavLink exact to="/license" className="nav-bar__link" activeClassName="nav-bar__link--active">
              <Translate>navigation.license</Translate>
            </NavLink>
            <NavLink exact to="/prices" className="nav-bar__link" activeClassName="nav-bar__link--active">
              <Translate>navigation.prices</Translate>
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
