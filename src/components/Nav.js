import React, { useContext } from 'react';

import { store } from '../context/LanguageContext';

import translations from '../translations';

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
    <div className="wrapper nav-bar">
      <nav>
        <span>{translations[globalState.state].test} 1</span>
        <span>{translations[globalState.state].test} 2</span>
        <span>{translations[globalState.state].test} 3</span>
        <span>{translations[globalState.state].test} 4</span>
        <span>{translations[globalState.state].test} 5</span>
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
  )
};

export default Nav;
