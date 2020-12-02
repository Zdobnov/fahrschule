import React from 'react';

// Components
import Section from '../components/Section';
import Article from '../components/Article';

// styles
import './Prices.scss';

const About = () => (
  <main className="prices">
    <Section className="section--gray">
      <Article title="Preise">
        <div className="grid grid--3">
          <div className="card">
            <div className="card__content card__content--center">
              <h4 className="card__title">Grundbetrag einschließlich Theorieunterricht</h4>
              <p>
                Um mit deiner Führerscheinausbildung zu starten, musst du dich bei unserer Fahrschule anmelden. Die Anmeldung inkludiert den theoretischen Unterricht.
              </p>
            </div>
            <div className="card__additional-info">
              200 €
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <h4 className="card__title">Theoriestunden</h4>
              <p>
                Sie müssen 14 Theorieeinheiten zu je 90 Minuten besuchen. Einzelunterricht ist auf Anfrage möglich.
              </p>
            </div>
            <div className="card__additional-info">
              Frei
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <h4 className="card__title">Vorstellung Praxisprüfung</h4>
              <p>
                Je nach Prüfstelle kommt eine Fahrstunde zwischen 40 und 60 Minuten dazu.
              </p>
            </div>
            <div className="card__additional-info">
              95 €
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <h4 className="card__title">Fahrstunden</h4>
              <p>
                Die Dauer der Standardreise beträgt 80 Minuten.
              </p>
            </div>
            <div className="card__additional-info">
              72 €
            </div>
          </div>
          <div className="card prices--wide-card">
            <div className="card__content card__content--center">
              <h4 className="card__title">Besondere Ausbildungsfahrten</h4>
              <p>
                Die besonderen Ausbildungsfahrten zu je 45 Minuten kosten 45 €, sie werden auch Sonderfahrten genannt.<br/>
                Es müssen folgene Fahrten absolviert werden:
              </p>
              <ol>
                <li>5 Einheiten auf Bundes- oder Landstraßen zu je 45 €</li>
                <li>4 Einheiten auf Autobahn zu je 45 €</li>
                <li>3 Einheiten bei Dämmerungs- und Dunkelheit zu je 45 €</li>
              </ol>
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <h4 className="card__title">Autobahnfahrt</h4>
              <p>
                Die Autobahnfahrt ist eine der Pflichtfahrten. Sie hat einen Umfang von 4 x 45 (180) Minuten zuzüglich der An- und Abfahrt von 40 Minuten zur Autobahn.
              </p>
            </div>
            <div className="card__additional-info">
              216 €
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <h4 className="card__title">Überlandfahrt</h4>
              <p>
                Bei der Überlandfahrt übern wir das Fahren auf Bundes- oder Landstraßen  und durch kleinere Orte. Es werden 5 x 45 (225) Minuten absolviert.
              </p>
            </div>
            <div className="card__additional-info">
              225 €
            </div>
          </div>
          <div className="card">
            <div className="card__content card__content--center">
              <h4 className="card__title">Nachtfahrt</h4>
              <p>
                Die Nachtfahrt ist eine Sonderfahrstunde bei Dämmerung und Dunkelheit. Sie findet daher auch abends statt. Hier fahren wir 3 x 45 (135) Minuten.
              </p>
            </div>
            <div className="card__additional-info">
              135 €
            </div>
          </div>
        </div>
      </Article>
      <div className="section__button">
        <a href="mailto:fahrschule2drive@gmx.de" className="button">schreiben uns</a>
      </div>
    </Section>
    <Section>
      <Article title="Infos">
        <ul className="faq">
          <li className="faq__item">
            <h4>Was kostet die Anmeldung in eurer Fahrschule?</h4>
            <p>Die Anmeldung bei uns kostet 200 € und inkludiert die Teilnahme an den theoretischen Unterrichtseinheiten.</p>
          </li>
          <li className="faq__item">
            <h4>Wann kann ich mich zum Führerschein anmelden?</h4>
            <p>Es ist empfehlenswert, sich etwa 6 Monate vor der Vollendung der 18. Lebensjahrs bei uns anzumelden. Der Gesetzgeber genehmigt die theoretische Prüfung 3 Monate vor deinem 18. Geburstag, die praktische Prüfung einen Monat vorher.</p>
          </li>
          <li className="faq__item">
            <h4>Welche Unterlagen benötige ich?</h4>
            <p>Es bietet sich an, die erforderten Unterlagen zum Antragstermin vollständig einzureichen. Andernfalls verlängert sich die Zeit der Erteilung.</p>
            <p>Folgenden Unterlagen sind bei den entsprechenden Behörden einreichen:</p>
            <ol>
              <li>Ein aktuelles biometrisches Passbild</li>
              <li>Ein Sehtest, nicht älter als zwei Jahre</li>
              <li>Personalausweis oder Reisepass</li>
              <li>Einen Nachweis über die Ausbildung in „Lebensrettenden Sofortmaßnahmen“, „Erste Hilfe“. </li>
            </ol>
          </li>
          <li className="faq__item">
            <h4>Wie lange dauert die Führerscheinausbildung?</h4>
            <p>Die Zeit, die Du für den Erwerb deines Führerscheins benötigst, hängt von verschiedenen Faktoren ab.</p>
            <p>Ausschlaggebend dafür sind zum Beispiel:</p>
            <ol>
              <li>Dein Engagement</li>
              <li>Die Zeit die du investierst bzw. deine zeitliche Flexibilität</li>
              <li>Deine Aufnahmefähigkeit und</li>
              <li>Deine Motivation</li>
            </ol>
            <p>Aufgrund der Auswirkungen von Corona ist es zur Zeit nicht möglich den Führerschein zeitnah zu erwerben. Es muss mit längeren Wartezeiten bei der Vergabe von Praxisstunden, sowie praktischer Prüftermine gerechnet werden.</p>
          </li>
          <li className="faq__item">
            <h4>Kann ich bei euch auch einen Führerschein für Automatik PKW machen?</h4>
            <p>Ja, wir haben einen Automatik-Fahrzeug  und bieten die Führerscheinausbildung auf Automatik an. Gib uns einfach Bescheid, ob du auf Schaltwagen oder Automatik lernen möchtest. Plane jedoch mehr Wartezeit ein, da aktuell die Nachfrage nach Automatik-Stunden sehr hoch ist.</p>
          </li>
          <li className="faq__item">
            <h4>Wie viele Fahrstunden benötige ich?</h4>
            <p>Unser Team ist stets bemüht, Deinen Fahrstunden und die dazugehörigen Kosten so gering wie möglich zu halten.</p>
            <p>Unser gemeinsames Ziel ist es, dass Du Deine Prüfung beim ersten Mal bestehst. Die Anzahl der Übungsstunden, die Du benötigst, hängt davon ab, wie schnell Du Dich im fließenden Verkehr einfügst und sicher mit dem Fahrzeug umgehst. Die gesetzlich vorgeschriebenen Sonderfahrten werden in der Regel am Ende der Fahrausbildung absolviert</p>
          </li>
          <li className="faq__item">
            <h4>Fahren mit 17 Jahren?</h4>
            <p>Es ist möglich, bereits mit 17 Jahren den Führerschein zu erwerben. Der Führerscheinantrag kann bereits mit 16 1/2 Jahren gestellt werden. Zu beachten ist, dass Du den  Antrag ausschlich mit der persönlichen Zustimmung eines Erziehungsberechtigten stellen kannst und das diese mit der Benennung als Begleitpersoneinverstanden ist.</p>
            <p>Die Begleitperson muss folgenden Mindeskretären erfüllen:</p>
            <ol>
              <li>Mindestens 30 Jahre alt</li>
              <li>Führerschein der Klasse B</li>
              <li>Nicht mehr als 1 Punkte im Fahreignungsregister in Flensburg</li>
            </ol>
          </li>
          <li className="faq__item">
            <h4>Wie melde ich mich zur Prüfung an?</h4>
            <p>Für die Anmeldung zur Prüfung musst Du als erstes die Prüfungszulassung bei Deinem zuständigen Bürgeramt beantragen. Dazu benötigst du den Nachweis über die Teilnahme am Erste Hilfe Kurs, einen Sehtest und die Anmeldung bei der Fahrschule. In der Regel braucht das Amt 3 bis 6 Monate für die Bearbeitung des Antrags.</p>
            <p>Wenn du die Zulassung hast, kannst du dann auch die theoretische Prüfung beim TÜV oder der Dekra machen. Dazu braucht es keine vorherige Anmeldung. Du gehst einfach mit deiner Zulassung, deinem Ausweis oder Pass und der benötigten Gebühr zum TÜV oder der Dekra und absolvierst die Prüfung.</p>
            <p>Für die praktische Prüfung melden wir dich an, sodass für dich hier kein Aufwand mehr entsteht. Du musst allerdings dafür sorgen, dass die entsprechende Gebühr für die praktische Prüfung bezahlt ist.</p>
          </li>
          <li className="faq__item">
            <h4>Wie melde ich mich bei euch zur Führerscheinausbildung an?</h4>
            <p>Das ist ganz einfach, komm einfach während unserer Öffnungszeiten vorbei und melde dich an. Bringt dazu bitte deinen Ausweis oder Pass mit und die Anmeldegebühr in Höhe von 200€ in bar und dann kann es losgehen.</p>
            <p>Alle weiteren Infos bekommst du dann von uns vor Ort.</p>
          </li>
        </ul>
      </Article>
      <div className="section__button">
        <a href="tel:+49302942923" className="button">Rufen uns</a>
      </div>
    </Section>
  </main>
);

export default About;
