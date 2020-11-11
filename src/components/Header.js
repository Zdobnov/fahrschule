import React from 'react';

import logo from '../images/logo.png';
import iconCall from '../images/icons/call.svg';
import iconPlace from '../images/icons/place.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <img className="header__logo" src={logo} alt="Logo" />
        <address className="header__address">
          <img src={iconPlace} alt="icon" className="icon"/>
          <a href="https://www.google.com/maps/place/Neue+Bahnhofstra%C3%9Fe+5,+10245+Berlin/@52.5053287,13.4679337,17z/data=!3m1!4b1!4m5!3m4!1s0x47a84ef0dbcfa363:0x7714e55b01314e2c!8m2!3d52.505326!4d13.4697742" target="_blank" rel="noreferrer">
            Neue Bahnhofstrasse 5, 10245 Berlin
          </a>
        </address>
        <div className="header__phone">
          <img src={iconCall} alt="icon" className="icon"/>
          <a href="tel:+49302942923">+49 30 2942923</a>
        </div>
      </div>
    </header>
  )
};

export default Header;
