import React from 'react';

// Components
import Section from '../components/Section';
import Article from '../components/Article';

// icons
import iconCall from '../images/icons/call.svg';
import iconPlace from '../images/icons/place.svg';
import iconMail from '../images/icons/mail.svg';

// styles
import './Contacts.scss';

const Contacts = () => (
  <main className="contacts">
    <Section className="section--gray">
      <Article title="Kontakte">
        <div className="grid grid--3">
          <div className="card">
            <div className="card__content card__content--center">
              <img src={iconPlace} alt="icon" className="icon card__icon" />
              <h4 className="card__title">Adresse</h4>
              <p>
                <a href="https://www.google.com/maps/place/Neue+Bahnhofstra%C3%9Fe+5,+10245+Berlin/@52.5053287,13.4679337,17z/data=!3m1!4b1!4m5!3m4!1s0x47a84ef0dbcfa363:0x7714e55b01314e2c!8m2!3d52.505326!4d13.4697742" target="_blank" rel="noreferrer" className="link">
                  Neue Bahnhofstrasse 5, 10245 Berlin
                </a>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <img src={iconCall} alt="icon" className="icon card__icon" />
              <h4 className="card__title">Telefon</h4>
              <p><a href="tel:+49302942923" className="link">030 2942923</a></p>
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <img src={iconMail} alt="icon" className="icon card__icon" />
              <h4 className="card__title">E-mail</h4>
              <p><a href="mailto:fahrschule2drive@gmx.de" className="link">fahrschule2drive@gmx.de</a></p>
            </div>
          </div>
        </div>
      </Article>
    </Section>
    <Section>
      <Article title="Unsere Öffnungszeiten">
        <div className="contacts__hours-wrapper">
          <ul className="contacts__hours">
            <li><b>Montag</b> 11-18 Uhr</li>
            <li><b>Dienstag</b> 11-18 Uhr</li>
            <li><b>Mittwoch</b> nach Vereinbarung</li>
            <li><b>Donnerstag</b> 11-18 Uhr</li>
            <li><b>Freitag</b> 10-16 Uhr</li>
            <li><b>Montag</b> Geschlossen</li>
            <li><b>Montag</b> Geschlossen</li>
          </ul>
        </div>
      </Article>
    </Section>
    <Section className="section--gray">
      <Article title="Schreibe Uns">
        <p>
          Du hast eine Frage an uns, ein Anliegen oder möchtest gerne einen Rückruf von uns erhalten, dann schreib uns einfach eine Email an <a href="mailto:fahrschule2drive@gmx.de" className="link">fahrschule2drive@gmx.de</a>.<br/>
          Schreib gerne direkt ein passendes Rückrufdatum dazu.
        </p>
        <p>Oder ruf uns während unserer Öffungszeiten direkt an, unter der Nummer: <a href="tel:+49302942923" className="link">030 2942923</a></p>
        <p>Wir freuen uns auf deine Kontaktaufnahme und melden uns zeitnah bei dir zurück.</p>
      </Article>
    </Section>
  </main>
);

export default Contacts;
