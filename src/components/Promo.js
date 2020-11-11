import React from 'react';

import Translate from './Translate';

import promo from '../images/promo.webp';

const Promo = () => {
  return (
    <div className="promo" style={{ backgroundImage: `url(${promo})` }}>
      <div className="wrapper">
        <div className="promo__content">
          <div className="promo__titles">
            <Translate type="h1">promo.title</Translate>
            <Translate type="h2">promo.subtitle</Translate>
          </div>
          <ol>
            <Translate type="li">promo.list.item.1</Translate>
            <Translate type="li">promo.list.item.2</Translate>
            <Translate type="li">promo.list.item.3</Translate>
            <Translate type="li">promo.list.item.4</Translate>
            <Translate type="li">promo.list.item.5</Translate>
            <Translate type="li">promo.list.item.6</Translate>
          </ol>
          <a href="tel:+49302942923" className="button">
            Rufen uns
          </a>
        </div>
      </div>
    </div>
  )
};

export default Promo;
