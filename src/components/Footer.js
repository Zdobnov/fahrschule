import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <div className="grid grid--3 footer__main">
        <div className="footer__content footer__content--left">
          <Link to='/' className="logo logo--footer" />
          <span className="footer__credo">Immer sicher ans Ziel kommen.</span>
          <div className="kfz">
            <span className="kfz__by-the-way">Übrigens machen wir auch&nbsp;
              <a href="https://ka-gutachten.de/" className="link" target="_blank" rel="noreferrer">KFZ-Gutachten:</a>
            </span>
            <b>Yunus Kalan</b>
            <span>
              <a href="tel:+49302942923">+49 30 2942923</a> oder&nbsp;
              <a href="tel:+491633705199">+49 163 3705199</a>
            </span>
          </div>
        </div>
        <div className="footer__content footer__content--center working-hours">
          <span className="footer__content-title footer__content-title--center">Unsere Öffnungszeiten</span>
          <table className="working-hours__list">
            <tbody>
              <tr>
                <td>Montag</td>
                <td>11-18 Uhr</td>
              </tr>
              <tr>
                <td>Dienstag</td>
                <td>11-18 Uhr</td>
              </tr>
              <tr>
                <td>Mittwoch</td>
                <td>nach Vereinbarung</td>
              </tr>
              <tr>
                <td>Donnerstag</td>
                <td>11-18 Uhr</td>
              </tr>
              <tr>
                <td>Freitag</td>
                <td>10-16 Uhr</td>
              </tr>
              <tr>
                <td>Samstag</td>
                <td>Geschlossen</td>
              </tr>
              <tr>
                <td>Sonntag</td>
                <td>Geschlossen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer__content footer__content--right">
          <span className="footer__content-title footer__content-title--right">Unsere Kontakte</span>
          <address>
            Adresse<br/>
            <a href="https://www.google.com/maps/place/Neue+Bahnhofstra%C3%9Fe+5,+10245+Berlin/@52.5053287,13.4679337,17z/data=!3m1!4b1!4m5!3m4!1s0x47a84ef0dbcfa363:0x7714e55b01314e2c!8m2!3d52.505326!4d13.4697742" className="link">Neue Bahnhofstrasse 5, 10245 Berlin</a>
          </address>
          <span>
            Email<br/>
            <a href="mailto:fahrschule2drive@gmx.de" className="link">fahrschule2drive@gmx.de</a>
          </span>
          <span>
            Telefon<br/>
            <a href="tel:+49302942923" className="link">+49 30 2942923</a>
          </span>
        </div>
      </div>
      <div className="footer__copyrights">
        Copyright © 2020 Alle Rechte vorbehalten 2Drive fahrschule. <Link exact to="/policy" className="link">Datenschutz</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
