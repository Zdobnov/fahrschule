import React from 'react';

// Components
import Section from '../components/Section';
import Article from '../components/Article';

// Images
import photo9 from '../images/photo/_9.webp';
import photo27 from '../images/photo/_27.webp';

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
        <div className="cards xl-3">
          <div className="card about-us__team-card">
            {/*<img src={photo27} alt="Yunus Kalan" className="about-us__team-card--image"/>*/}123
          </div>
          <div className="card about-us__team-card">
            {/*<img src={photo27} alt="Yunus Kalan" className="about-us__team-card--image"/>*/}123
          </div>
          <div className="card about-us__team-card">
            {/*<img src={photo27} alt="Yunus Kalan" className="about-us__team-card--image"/>*/}123
          </div>
          <div className="card about-us__team-card">
            {/*<img src={photo27} alt="Yunus Kalan" className="about-us__team-card--image"/>*/}123
          </div>
          <div className="card about-us__team-card">
            {/*<img src={photo27} alt="Yunus Kalan" className="about-us__team-card--image"/>*/}123
          </div>
        </div>
      </Article>
    </Section>
  </main>
);

export default About;
