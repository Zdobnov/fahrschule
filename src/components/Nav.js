import React, { useContext } from 'react';

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
    <div className="wrapper nav-bar">
      <nav>
        <span><Translate>test</Translate> 1</span>
        <span><Translate>test</Translate> 2</span>
        <span><Translate>test</Translate> 2</span>
        <span><Translate>test</Translate> 3</span>
        <span><Translate>test</Translate> 4</span>
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
