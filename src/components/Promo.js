import React from 'react';

// Styles
import './Promo.scss';

// Images
import IconBenefit1 from '../images/icons/benefit-1.svg';
import IconBenefit2 from '../images/icons/benefit-2.svg';
import IconBenefit3 from '../images/icons/benefit-3.svg';
import IconBenefit4 from '../images/icons/benefit-4.svg';

import IconDE from '../images/icons/flag-germany.svg';
import IconEN from '../images/icons/flag-united-kingdom.svg';
import IconTU from '../images/icons/flag-turkey.svg';
import IconRU from '../images/icons/flag-russia.svg';

const Promo = () => (
  <section className="promo overlay">
    <div className="wrapper">
      <h1 className="promo__title">
        Подготовка водителей<br/>
        на категорию “B” в Берлине
      </h1>
      <p className="promo__subtitle">
        Ваш лучший способ получить водительские права.<br/>
        * К нам приходят на переобучение после других автошкол
      </p>
      <div className="promo__description">
        <button className="cta">Начать сейчас</button>
        <div className="promo__price">200 €</div>
        <p>
          Запись в автошколу<br/>
          и теоретические занятия
        </p>
      </div>
      <div className="grid grid--4 benefit">
        <div className="benefit__item">
          <img src={IconBenefit1} alt="benefit" className="benefit__image" />
          <p className="benefit__description">Мультиязычные инструкторы</p>
          <div className="benefit__languages">
            <img src={IconDE} alt="german" />
            <img src={IconEN} alt="english" />
            <img src={IconTU} alt="turkish" />
            <img src={IconRU} alt="russian" />
          </div>
        </div>
        <div className="benefit__item">
          <img src={IconBenefit2} alt="benefit" className="benefit__image" />
          <p className="benefit__description">Индивидуальные уроки вождения</p>
        </div>
        <div className="benefit__item">
          <img src={IconBenefit3} alt="benefit" className="benefit__image" />
          <p className="benefit__description">Новые качественные автомобили</p>
        </div>
        <div className="benefit__item">
          <img src={IconBenefit4} alt="benefit" className="benefit__image" />
          <p className="benefit__description">Возможность обучения на Automatikgetriebe</p>
        </div>
      </div>
    </div>
  </section>
);

export default Promo;
