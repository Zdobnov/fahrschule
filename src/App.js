import React from 'react';

import { StateProvider } from './context/LanguageContext';

import Header from './components/Header';
import Nav from './components/Nav';
import Promo from './components/Promo';
import Section from './components/Section';
import Article from './components/Article';

import iconBook from './images/icons/book.svg';
import iconAltRoute from './images/icons/alt-route.svg';
import iconDevices from './images/icons/devices.svg';
import iconChat from './images/icons/chat.svg';

function App() {
  return (
    <StateProvider>
      <Header />
      <Nav />
      <Promo />
      <Section className="section--red section--double">
        <Article>
          <h3>Aktuelle Änderung</h3>
          <p>aufgrund der am 02.11.2020 in Kraft tretenden Verordnung müssen auch wie einige Vorkehrungen treffen.</p>
          <h6>Bürozeiten/Erreichbarkeit des Büros:</h6>
          <p>es dürfen nur noch 4 Personen gleichzeitig im Büro sein, bitte kontaktiert uns daher bevorzugt per Email oder Telefon. Vermeidet so viel persönlichen Kontakt wie möglich.</p>
          <h6>Theorie:</h6>
          <p>in diesem Jahr KEIN Theorieuntericht mehr statt. Wenn sich alles normalisiert hat beginnen wir am 05.01.2021 wiedr mit der Theorie.</p>
          <h6>Praxis:</h6>
          <p>die Praxisstunden sind vorerst von den neuen Regelungen nicht betroffen. Bitte erscheint nur, wenn ihr gesund seid, sonst sagt die Stunde besser rechtzeitig ab. Bitte bezahlt bei euren Fahrlehrern und tretet nur nach Aufforderung ins Büro ein.</p>
        </Article>
        <Article>
          <h3>Aufnahmestop</h3>
          <p>wegen der hohen Nachfrage nehmen wir vorerst bis ca. Juni/Juli 2021 keine neuen Fahrschüler auf. Sollte sich die Lage entspannen heben wir diese Maßnahme eher auf. Gern nehmen wir euch auf unsere Warteliste auf. Dies gilt sowohl für Erstanträge, Umschreiber, Fahrschulwechsler sowie Auffrischer.</p>
          <p>Solltet ihr noch Fragen haben ruft einfach an oder schreibt eine Email.</p>
          <p>Vielen Dank für eure Geduld und eurer Verständnis</p>
          <p>Team 2Drive</p>
        </Article>
      </Section>
      <Section>
        <Article>
          <h3>Warum wir</h3>
          <div className="four-cards">
            <div className="card">
              <img src={iconBook} alt="icon" className="icon" />
              <h6>Theoretischer Unterricht</h6>
              <p>Unser Unterricht findet auf dem neusten Stand und von ausgebildeten Fahrlehrern statt. Uns ist wichtig, nicht nur Wissen zu vermitteln, sondern das Lernen interessant mit Freude zu gestalten.</p>
            </div>
            <div className="card">
              <img src={iconAltRoute} alt="icon" className="icon" />
              <h6>Individuelle Praxis</h6>
              <p>Unsere praktischen Unterrichtseinheiten sind ganz individuell an dich, deine Bedürfnisse und deine Fähigkeiten angepasst, sodass du immer genau das passende Wissen vermittelt bekommst.</p>
            </div>
            <div className="card">
              <img src={iconDevices} alt="icon" className="icon" />
              <h6>Online Lernen</h6>
              <p>Dank der Fahren Lernen App, kannst du alles Gelernte auch zu Hause online wiederholen und dich auf die theoretische Prüfung vorbereiten. Zugang zur App kannst du bei uns erwerben.</p>
            </div>
            <div className="card">
              <img src={iconChat} alt="icon" className="icon" />
              <h6>Sprachen</h6>
              <p>Wir bieten unsere Fahrausbildung im Moment in den Sprachen Deutsch, Englisch, Russisch und Türkisch an. Gerne kannst du auch direkt in einer dieser Sprachen anfragen.</p>
            </div>
          </div>
        </Article>
      </Section>
    </StateProvider>
  );
}

export default App;
