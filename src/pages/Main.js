import React from 'react';
import { Link } from 'react-router-dom';

import Promo from '../components/Promo';
import Section from '../components/Section';
import Article from '../components/Article';

import iconLibraryBooks from '../images/icons/library_books.svg';
import iconAltRoute from '../images/icons/alt-route.svg';
import iconDevices from '../images/icons/devices.svg';
import iconChat from '../images/icons/chat.svg';

import wallpaper from '../images/wallpaper.webp';

const Main = () => (
  <>
    <Promo />
    {/*<Section className="section--red section--double">*/}
    {/*  <Article>*/}
    {/*    <h3>Aktuelle Änderung</h3>*/}
    {/*    <p>aufgrund der am 02.11.2020 in Kraft tretenden Verordnung müssen auch wie einige Vorkehrungen treffen.</p>*/}
    {/*    <h6>Bürozeiten/Erreichbarkeit des Büros:</h6>*/}
    {/*    <p>es dürfen nur noch 4 Personen gleichzeitig im Büro sein, bitte kontaktiert uns daher bevorzugt per Email oder Telefon. Vermeidet so viel persönlichen Kontakt wie möglich.</p>*/}
    {/*    <h6>Theorie:</h6>*/}
    {/*    <p>in diesem Jahr KEIN Theorieuntericht mehr statt. Wenn sich alles normalisiert hat beginnen wir am 05.01.2021 wiedr mit der Theorie.</p>*/}
    {/*    <h6>Praxis:</h6>*/}
    {/*    <p>die Praxisstunden sind vorerst von den neuen Regelungen nicht betroffen. Bitte erscheint nur, wenn ihr gesund seid, sonst sagt die Stunde besser rechtzeitig ab. Bitte bezahlt bei euren Fahrlehrern und tretet nur nach Aufforderung ins Büro ein.</p>*/}
    {/*  </Article>*/}
    {/*  <Article>*/}
    {/*    <h3>Aufnahmestop</h3>*/}
    {/*    <p>wegen der hohen Nachfrage nehmen wir vorerst bis ca. Juni/Juli 2021 keine neuen Fahrschüler auf. Sollte sich die Lage entspannen heben wir diese Maßnahme eher auf. Gern nehmen wir euch auf unsere Warteliste auf. Dies gilt sowohl für Erstanträge, Umschreiber, Fahrschulwechsler sowie Auffrischer.</p>*/}
    {/*    <p>Solltet ihr noch Fragen haben ruft einfach an oder schreibt eine Email.</p>*/}
    {/*    <p>Vielen Dank für eure Geduld und eurer Verständnis</p>*/}
    {/*    <p>Team 2Drive</p>*/}
    {/*  </Article>*/}
    {/*</Section>*/}
    <Section>
      <Article title="Warum wir">
        <div className="grid grid--4">
          <div className="card">
            <div className="card__content card__content--center">
              <img src={iconLibraryBooks} alt="icon" className="icon card__icon" />
              <h4 className="card__title">Theoretischer Unterricht</h4>
              <p>Unser Unterricht findet auf dem neusten Stand und von ausgebildeten Fahrlehrern statt. Uns ist wichtig, nicht nur Wissen zu vermitteln, sondern das Lernen interessant mit Freude zu gestalten.</p>
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <img src={iconAltRoute} alt="icon" className="icon card__icon" />
              <h4 className="card__title">Individuelle Praxis</h4>
              <p>Unsere praktischen Unterrichtseinheiten sind ganz individuell an dich, deine Bedürfnisse und deine Fähigkeiten angepasst, sodass du immer genau das passende Wissen vermittelt bekommst.</p>
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <img src={iconDevices} alt="icon" className="icon card__icon" />
              <h4 className="card__title">Online Lernen</h4>
              <p>Dank der Fahren Lernen App, kannst du alles Gelernte auch zu Hause online wiederholen und dich auf die theoretische Prüfung vorbereiten. Zugang zur App kannst du bei uns erwerben.</p>
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <img src={iconChat} alt="icon" className="icon card__icon" />
              <h4 className="card__title">Sprachen</h4>
              <p>Wir bieten unsere Fahrausbildung im Moment in den Sprachen Deutsch, Englisch, Russisch und Türkisch an. Gerne kannst du auch direkt in einer dieser Sprachen anfragen.</p>
            </div>
          </div>
        </div>
      </Article>
    </Section>
    <Section className="section--prices section--gray">
      <Article title="Unsere Preise und Angebote">
        <div className="grid grid--3">
          <div className="card">
            <div className="card__content card__content--center">
              <h4 className="card__title">Anmeldung</h4>
              <p>Die Anmeldung beinhaltet die Registrierung in der Fahrschule und die Teilnahme an allen Theoriestunden.<br/>An den theoretischen Einheiten darfst du so oft teilnehmen, wie du es möchtest und gerne auch jede Einheit zwei Mal besuchen. Auch private Theoriestunden sind möglich.</p>
            </div>
            <div className="card__additional-info">200 €</div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <h4 className="card__title">Fahrstunden</h4>
              <p>Für eine reguläre Fahrstunde planen wir 80 Minuten ein. Gerne aber auch mehr oder weniger Zeit, angepasst an deine Bedürfnisse.</p>
            </div>
            <div className="card__additional-info">80 minuten 72 €</div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <h4 className="card__title">Vorstellung zur Praxisprüfung</h4>
              <p>Für die Vorstellung für die Praxisprüfung erheben wir einen Betrag von 95 €. Zusätzlich fällt eine 40-minütige Übungsfahrt an. Damit du dich noch einmal auf die Prüfung vorbereiten kannst.</p>
            </div>
            <div className="card__additional-info">131 €</div>
          </div>
        </div>
      </Article>
      <div className="section__button">
        <Link to="/prices" className="button">Alle preise ansehen</Link>
      </div>
    </Section>
    <Section
      className="section--support section--background"
      style={{ backgroundImage: `url(${ wallpaper })` }}
    >
      <Article title="Wir helfen dir deine prüfung zu bestehen">
        <p className="text--white">Der Führerschein bedeutet Freiheit. Spontane Ausflüge mit Kumpels oder Famile, Wochenendtrips mit dem Partner oder Shoppen mit der besten Freundin zum günstigen Outlet-Center außerhalb.</p>
        <p className="text--white">Wir möchten Dich auf Deinem Weg in die mobile Zukunft begleiten. Unsere Fahrprofis sind Deine Ansprechpartner in Theorie und Praxis und bringen Dich in kürzester Zeit spielerisch durch die Prüfungen.</p>
        <p className="text--white">Wir stehen Dir in allen Fragen jederzeit gerne zur Verfügung und freuen uns über Deinen Besuch in unserer Fahrschule. Gerne kannst du hier direkt einen Termin für ein Beratungsgespräch anfragen.</p>
      </Article>
    </Section>
    <Section
      className="section--gray"
    >
      <Article title={(<>Übrigens m wir auch <a href="https://ka-gutachten.de/" className="link" target="_blank" rel="noreferrer">KFZ-Gutachten</a></>)}>
        <p className="kfz__title">Yunus Kalan</p>
        <p className="kfz__subtitle">Kfz-Gutachter & Wirt.-Ing./Masch.</p>
        <div className="grid grid--2">
          <div>
            <p>TÜV Rheinland zertifizierter Sachverständiger</p>
            <ol>
              <li>Schadengutachten</li>
              <li>Haftpflicht- & Kaskogutachten</li>
              <li>Fahrzeugbewertung</li>
              <li>Beweissicherung</li>
            </ol>
          </div>
          <div>
            <p>Mobil: <a href="tel:+491633705199" className="link">+49 163 3705199</a></p>
            <p>Telefon: <a href="tel:+49302942923" className="link">+49 30 2942923</a></p>
            <p>Email: <a href="mailto:info@ka-gutachten.de" className="link">info@ka-gutachten.de</a></p>
            <p>Web: <a href="https://ka-gutachten.de/" className="link">ka-gutachten.de</a></p>
          </div>
        </div>
      </Article>
    </Section>
  </>
);

export default Main;
