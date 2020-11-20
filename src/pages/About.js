import React from 'react';

// Components
import Section from '../components/Section';
import Article from '../components/Article';
import LanguagesWeSpeak from '../components/LanguagesWeSpeak';

// styles
import './About.scss';

import photo9 from '../images/photo/_9.webp';

// Images (team)
import photo27 from '../images/photo/_27.webp';
import photo4 from '../images/photo/_4.webp';
import photo28 from '../images/photo/_28.webp';
import photo30 from '../images/photo/_30.webp';

// Images (cars)
import photo22 from '../images/photo/_22.webp';
import photo11 from '../images/photo/_11.webp';
import photo3 from '../images/photo/_3.webp';
import photo34 from '../images/photo/_34.webp';
import photo35 from '../images/photo/_35.webp';
import photo21 from '../images/photo/_21.webp';

// "Our cars" images array
const ourCarsImagesArray = [
  photo22,
  photo11,
  photo3,
  photo34,
  photo35,
  photo21,
];

const About = () => (
  <main className="about-us">
    <Section className="section--gray">
      <Article title="Über uns">
        <div className="about-us__philosophy">
          <div>
            <h4>Philosophie</h4>
            <p>Das Ziel der Fahrschule ist es, den reibungslosen Umgang mit dem jeweiligen Fahrzeug und die nötigen Verkehrsbestimmungen beizubringen.</p>
            <h4>Das Bestreben unseres 2Drive-Teams geht dabei noch viel weiter.</h4>
            <p>Unser Anliegen ist es, unter anderem, dass Du sicher und kontrolliert das Fahrzeug beherrschen lernst, jedoch dabei Freunde und Spaß empfindest. Wir möchten, dass Du möglichst stressfrei und in einer angenehmen Atmosphäre ausgebildet wirst, damit du zeitig deinen Führerschein in deinen Händen halten kannst.</p>
            <p>Unser Ziel ist es, dass Du nach unserer Ausbildung das erlernte, auch Jahre später noch, verinnerlicht hast und stets sicher und gut durch den Verkehr gelangst. Dabei endet unser Engagement nicht mit dem Erwerb deines Führerscheins. Wir stehen unseren Kunden auch gerne nach der Ausbildung mit Rat und Tat zur Verfügung.</p>
          </div>
          <div className="about-us__philosophy--image" style={{ backgroundImage: `url(${photo9})` }}/>
        </div>
      </Article>
    </Section>
    <Section>
      <Article title="Unser Team">
        <div className="grid grid--3">
          <div className="card">
            <div className="card__image" style={{ backgroundImage: `url(${ photo27 })` }}/>
            <div className="card__content card__content--center">
              <h4 className="card__title">Yunus Kalan</h4>
              <h5 className="card__subtitle">Fahrlehrer & KFZ-Gutachter</h5>
              <p>
                Yunus ist nicht nur Miteigentümer der Fahrschule, sondern auch erfahrender Fahrlehrer, der immer für seine Schüler da ist und KFZ-Sachverständiger.
                Für Gutachten kannst du ihn über folgende Website erreichen:<br/>
                <a href="https://ka-gutachten.de" target="_blank" rel="noreferrer">ka-gutachten.de</a>
              </p>
              <LanguagesWeSpeak languages={['de', 'en', 'tr']} />
            </div>
          </div>
          <div className="card">
            <div className="card__image" style={{ backgroundImage: `url(${ photo4 })` }}/>
            <div className="card__content card__content--center">
              <h4 className="card__title">Dennis Polinsky</h4>
              <h5 className="card__subtitle">Fahrlehrer</h5>
              <p>
                Auch Dennis ist einer der Miteigentümer der Fahrschule und einer unserer beliebtesten Fahrlehrer. Als Autohändler kennt er sich außerdem gut mit Fahrzeugen aus und kann Fahrschüler nach bestandenem Führerschein beim Autokauf beraten.
              </p>
              <LanguagesWeSpeak languages={['de', 'en', 'ru']} />
            </div>
          </div>
          <div className="card">
            <div className="card__image" style={{ backgroundImage: `url(${ photo28 })` }}/>
            <div className="card__content card__content--center">
              <h4 className="card__title">Florian</h4>
              <h5 className="card__subtitle">Fahrlehrer</h5>
              <p>
                Florian ist einer unserer erfahrensten Fahrlehrer. Er ist besonders beliebt wegen seiner ruhigen und ausgeglichenen Art Lehrmethoden.
              </p>
              <LanguagesWeSpeak languages={['de']} />
            </div>
          </div>
          <div className="card">
            <div className="card__image" style={{ backgroundImage: `url(${ photo30 })` }}/>
            <div className="card__content card__content--center">
              <h4 className="card__title">Momo</h4>
              <h5 className="card__subtitle">Fahrlehrer</h5>
              <p>
                Momo ist einer unserer Fahrlehrer und auf Grund seiner lustigen und lockeren Art, ist er bei unseren Fahrschülern sehr beliebt.
              </p>
              <LanguagesWeSpeak languages={['de', 'tr']} />
            </div>
          </div>
          <div className="card">
            <div className="card__image"/>
            <div className="card__content card__content--center">
              <h4 className="card__title">Melanie</h4>
              <h5 className="card__subtitle">Backoffice</h5>
              <p>
                Melanie ist die Frau im Hintergrund, die alles Organisiert und dafür sorgt, dass ihr immer passende Termine mit eurem Fahrlehrer findet.
              </p>
            </div>
          </div>
        </div>
      </Article>
    </Section>
    <Section className="section--gray">
      <Article title="Unsere Fahrzeuge">
        <div className="grid grid--3">
          {ourCarsImagesArray.map((image, index) => (
            <div className="card" key={index}>
              <div className="card__image" style={{ backgroundImage: `url(${ image })` }}/>
            </div>
          ))}
        </div>
      </Article>
    </Section>
  </main>
);

export default About;
