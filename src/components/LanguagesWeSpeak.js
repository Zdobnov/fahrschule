import React from 'react';

// styles
import './LanguagesWeSpeak.scss';

// icons
import de from '../images/icons/flag-de.svg';
import en from '../images/icons/flag-uk.svg';
import ru from '../images/icons/flag-ru.svg';
import tr from '../images/icons/flag-tr.svg';

const languageList = {
  de,
  en,
  ru,
  tr,
};

const LanguagesWeSpeak = ({ languages }) => {
  return (
    <div className="languages-we-speak">
      {languages.map(language => (
        <img src={languageList[language]} alt="language icon" />
      ))}
    </div>
  );
};

LanguagesWeSpeak.defaultProps = {
  languages: [],
};

export default LanguagesWeSpeak;
