import React, { useContext } from 'react';

import { store } from '../context/LanguageContext';

import translations from '../translations';

const Translate = props => {
  const globalState = useContext(store);

  const content = translations[globalState.state][props.children];

  return React.createElement(props.type, null, content);
};

Translate.defaultProps = {
  type: React.Fragment,
};

export default Translate;
