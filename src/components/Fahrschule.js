import React from 'react';

// Styles
import './Fahrschule.scss';

// Images
import IconFahrschule from '../images/icons/fahrschule.svg';
import IconOurCars from '../images/icons/our-cars.svg';

import Office from '../images/office.webp';

const Fahrschule = () => (
  <section className="fahrschule">
    <div className="wrapper">
      <div className="section-header">
        <div className="section-header__icon section-header__icon--fahrschule" style={{ backgroundImage: `url(${IconFahrschule})` }}/>
        <h2 className="section-header__title">Наши инструкторы</h2>
      </div>
      <div className="fahrschule__content">
        <div className="about">
          <img src={Office} alt="office" className="about__image" />
          <article className="about__content">
            <p className="about__description">Целью автошколы является обучение плавному управлению автомобилем и соблюдению необходимых правил дорожного движения.</p>
            <p className="about__description">
              Усилия нашей команды 2Drive идут намного дальше.<br/>
              Среди прочего, мы заботимся о том, чтобы вы научились управлять автомобилем безопасно и контролируемым образом, при этом заводя друзей и получая удовольствие.
            </p>
          </article>
          <p style={{ color: 'blue' }}>Показать Больше > (новый текст может быть значительно больше и тут будет кнопка, которая сможет его сворачивать до 8-и строк)</p>
        </div>
        <div className="faq">
          FAQ
        </div>
      </div>
      <div className="section-header">
        <div className="section-header__icon section-header__icon--our-cars" style={{ backgroundImage: `url(${IconOurCars})` }}/>
        <h2 className="section-header__title">Наши автомобили</h2>
      </div>
    </div>
  </section>
);

export default Fahrschule;
