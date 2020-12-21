import React from 'react';

// Styles
import './Tutors.scss';

// Images
import IconTutors from '../images/icons/tutors.svg';

import Tutor1 from '../images/tutor_1.png';
import Tutor2 from '../images/tutor_2.png';
import Tutor3 from '../images/tutor_3.png';
import Tutor4 from '../images/tutor_4.png';

const Tutors = () => (
  <section className="tutors">
    <div className="wrapper">
      <p className="tutors__cars-description">
        При организации обучения водителей мы полагаемся на новейшие технологии и автомобили.<br/>
        Наши блоки практического обучения индивидуально адаптированы к вам, вашим потребностям и вашим навыкам, чтобы вы всегда получали именно те знания.
      </p>
      <div className="section-header">
        <div className="section-header__icon section-header__icon--tutors" style={{ backgroundImage: `url(${IconTutors})` }}/>
        <h2 className="section-header__title">Автошкола</h2>
      </div>
      <div className="grid grid--4">
        <div className="tutor">
          <img src={Tutor1} alt="tutor 1" />
        </div>
        <div className="tutor">
          <img src={Tutor2} alt="tutor 2" />
        </div>
        <div className="tutor">
          <img src={Tutor3} alt="tutor 3" />
        </div>
        <div className="tutor">
          <img src={Tutor4} alt="tutor 4" />
        </div>
      </div>
      <p className="tutors__description">
        Мы заботимся о том, чтобы поддержать вас наилучшим образом. Поэтому мы адаптируем обучение водителей индивидуально к вашим потребностям и навыкам. В настоящее время мы предлагаем обучение водителей на немецком, английском, русском и турецком языках.
      </p>
    </div>
  </section>
);

export default Tutors;
