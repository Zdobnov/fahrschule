import React from 'react';

// Styles
import './Feedbacks.scss'
import IconFeedbacks from "../images/icons/feedbacks.svg";

const Feedbacks = () => (
  <section className="feedbacks">
    <div className="wrapper">
      <div className="section-header">
        <div className="section-header__icon section-header__icon--tutors" style={{ backgroundImage: `url(${IconFeedbacks})` }}/>
        <div className="section-header__subtitle">Google Maps</div>
        <h2 className="section-header__title">Отзывы об автошколе</h2>
      </div>
    </div>
  </section>
);

export default Feedbacks;
