import React from 'react';

// Components
import Section from '../components/Section';
import Article from '../components/Article';

// Images
import photo9 from '../images/photo/_9.webp';
import photo22 from '../images/photo/_22.webp';
import photo11 from '../images/photo/_11.webp';
import photo3 from '../images/photo/_3.webp';
import photo34 from '../images/photo/_34.webp';
import photo35 from '../images/photo/_35.webp';
import photo21 from '../images/photo/_21.webp';

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
      <Article>
        <h3>Über uns</h3>
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
      <Article>
        <h3>Unser Team</h3>
        Team
      </Article>
    </Section>
    <Section className="section--gray">
      <Article>
        <h3>Unsere Fahrzeuge</h3>
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
