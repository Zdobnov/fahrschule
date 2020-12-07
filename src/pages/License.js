import React from 'react';

// Components
import Section from '../components/Section';
import Article from '../components/Article';

// Icons
import iconLibraryBooks from '../images/icons/library_books.svg';
import iconAltRoute from '../images/icons/alt-route.svg';
import iconDevices from '../images/icons/devices.svg';

// Wallpaper
import wallpaper from '../images/wallpaper.webp';

const License = () => (
  <main className="license">
    <Section
      className="section--support section--background"
      style={{ backgroundImage: `url(${ wallpaper })` }}
    >
      <Article title="Führerschein">
        <div className="grid grid--3">
          <div className="card">
            <div className="card__content card__content--center">
              <img src={iconLibraryBooks} alt="icon" className="icon card__icon" />
              <h4 className="card__title">Theoriestunden</h4>
              <p>Der Theorieunterricht besteht aus 14 Einheiten, drei davon sind Pflichtthemen.</p>
              <p className="card__details">Der Theorieunterricht besteht aus 14 Einheiten. Es ist immer vom Vorteil, dass ihr die Theorieeinheiten stets pünktlich und konzentriert besucht, da wir hier alles genau erklären, du das Grundwissen aufbauen und auffrischen kannst und vor allem, weil du hier einen direkten Ansprechpartner hast, der dir alles erklärt und bei Fragen und Unklarheiten für dich da ist.</p>
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <img src={iconDevices} alt="icon" className="icon card__icon" />
              <h4 className="card__title">Online Lernen</h4>
              <p>Lerne für die theoretische Prüfung mit der App auf dem Smartphone.</p>
              <p className="card__details">REWRITE!!!!! Um deine theoretischen Kenntnisse zu üben und dich auf die Prüfung vorzubereiten, kannst du die „Fahren lernen“ App bei uns erwerben. In der App findest du alle Fragen, die in der theoretischen Prüfung gestellt werden können und kannst diese trainieren, bis alle Fragen wirklich sitzen. Außerdem gibt es Prüfungssimulationen, in denen du Fragen beantwortest und so schauen kannst, ob du bereit bist für die Theorieprüfung. In der App findest du auch viele Erklärungen und Hintergrundwissen zum theoretischen Wissen, aber auch zum praktischen Fahren. Natürlich können wir dir neben der App auch physische Lehrmaterialien zur Verfügung stellen.</p>
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <img src={iconAltRoute} alt="icon" className="icon card__icon" />
              <h4 className="card__title">Praxis</h4>
              <p>Praktischer Fahrunterricht, an deine Bedürfnisse und Fähigkeiten angepasst.</p>
              <p className="card__details">REWRITE!!!!! Um den Führerschein zu erwerben musst du neben der theoretischen Prüfung natürlich auch eine praktische Fahrprüfung ablegen. Um dich auf diese Prüfung vorzubereiten werden unsere Fahrlehrer regelmäßige Fahrstunden mit dir vereinbaren, bis ihr das Gefühl habt, dass du bereit bist. Unsere Fahrlehrer werden den praktischen Unterricht dabei immer individuell an deine Bedürfnisse und deine derzeitigen Fähigkeiten anpassen und dich in jeder Situation unterstützen. Neben den klassischen Fahrstunden musst du drei Pflichtfahren nachweisen, um dich für die praktische Führerscheinprüfung anzumelden. Du musst eine Nachtfahrt, eine Überlandfahrt auf der Landstraße und eine Autobahnfahrt mit uns machen. Vor allem an der Autobahnfahrt haben unsere Schüler meistens aber sehr viel Spaß</p>
            </div>
          </div>
        </div>
      </Article>
    </Section>
    <Section className="section--gray">
      <Article title="Überblick">
        <p>Um den Führerschein zu erwerben musst du theoretische und praktische Fahrkenntnisse nachweisen. Dazu bieten wir dir die verpflichtenden Theoriestunden von 14 Einheiten an.</p>
        <p>Bevor du an der theoretischen Prüfung teilnehmen kannst, musst du folgenden Dinge erledigt haben:</p>
        <ol>
          <li>Teilnahme an einem Erste-Hilfe-Kurs</li>
          <li>Nachweis über die Überprüfung der Sehstärke (Sehtest)</li>
          <li>Prüfungsanmeldung im Bürgeramt</li>
          <li>Anmeldung in der Fahrschule</li>
          <li>Nachweis über Teilnahme an den Theoriestunden</li>
        </ol>
        <p>Für die Teilnahme an der praktischen Prüfung musst du außerdem:</p>
        <ol>
          <li>die Pflichtfahrten absolviert haben</li>
          <li>die theoretische Prüfung bestanden haben</li>
        </ol>
      </Article>
    </Section>
  </main>
);

export default License;
