import React, { useState } from 'react';

// Styles
import './Fahrschule.scss';

// Images
import IconFahrschule from '../images/icons/fahrschule.svg';
import IconOurCars from '../images/icons/our-cars.svg';

import Office from '../images/office.webp';

const faqContent = [{
  question: 'Сколько стоит регистрация в автошколе?',
  answer: 'Регистрация у нас стоит 300€ и включает в себя участие в теоретических занятиях. Для переписки прав регистрация составляет 120€.',
}, {
  question: 'Сколько составляет актуальное время ожидания практических занятий?',
  answer: 'К сожалению, из-за дольшого количества запросов, время ожидания увеличилось до одного года. Мы пытаемся улучшить ситуацию и изо всех сил ищем хороших инструкторов, но на данный момент прогнозы таковы.',
}, {
  question: 'Какие документы мне необходимы?',
  answer: (
    <>
      <p>Следующие документы должны быть представлены в ландесамт бюргерамт:</p>
      <ul>
        <li>актуальное биометрическое фото;</li>
        <li>тест на зрение;</li>
        <li>удостоверение личности (паспорт);</li>
        <li>справка об окончании курсов первой помощи;</li>
        <li>контракт с автошколой;</li>
      </ul>
    </>
  ),
}, {
  question: 'Сколько длится обучение?',
  answer: (
    <>
      <p>Время, необходимое для получения водительских прав, зависит от различных факторов, например:</p>
      <ul>
        <li>твоя вовлеченность;</li>
        <li>гибкость по времени;</li>
        <li>восприимчивость ;</li>
        <li>мотивация;</li>
      </ul>
      <p>В настоящее время длительность обучения увеличена из-за пандемии.</p>
    </>
  ),
}, {
  question: 'Могу ли я получить водительские права на автомобили только с автоматической коробкой передач?',
  answer: 'Да, у нас есть учебные автомобили на автомате. Просто дай нам знать, если ты хочешь учиться на механической или автоматической коробке передач.',
}, {
  question: 'Сколько уроков вождения мне необходимо?',
  answer: (
    <>
      <p>Наша команда всегда старается снизить количество необходимых уроков вождения и связанные с ними расходы.</p>
      <p>Нашей общей целью является то, чтобы ты сдал экзамены с первого раза. Количество часов вождения зависит от того, насколько быстро ты сможешь адаптироваться к движению и безопасно управлять транспортным средством. Необходимые по закону специальные часы вождения обычно делаются в конце курса.</p>
    </>
  ),
}, {
  question: 'Вождение с 17 лет?',
  answer: (
    <>
      <p>Водительские права можно получить в возрасте 17 лет. Подать заявление на получение водительских прав можно в возрасте 16 с половиной лет. Обратите внимание, что ты можешь подать заявление только с личного согласия родителя или опекуна и что этот родитель или опекун согласен быть сопровождающим лицом. Сопровождающее лицо должно отвечать следующим минимальным требованиям:</p>
      <ul>
        <li>возраст минимум 30 лет;</li>
        <li>водительские права класса В;</li>
        <li>не более 1 пункта в регистре пригодности к вождению во Фленсбурге;</li>
      </ul>
    </>
  ),
}, {
  question: 'Как зарегистрироваться на экзамен?',
  answer: 'Für die Anmeldung zur Prüfung musst Du als erstes die Prüfungszulassung bei Deinem zuständigen Bürgeramt beantragen. Dazu benötigst du den Nachweis über die Teilnahme am Erste Hilfe Kurs, einen Sehtest und die Anmeldung bei der Fahrschule. In der Regel braucht das Amt 3 bis 6 Monate für die Bearbeitung des Antrags.\n' +
    'Wenn du die Zulassung hast, kannst du dann auch die theoretische Prüfung beim TÜV oder der Dekra machen. Dazu braucht es keine vorherige Anmeldung. Du gehst einfach mit deiner Zulassung, deinem Ausweis oder Pass und der benötigten Gebühr zum TÜV oder der Dekra und absolvierst die Prüfung.\n' +
    'Für die praktische Prüfung melden wir dich an, sodass für dich hier kein Aufwand mehr entsteht. Du musst allerdings dafür sorgen, dass die entsprechende Gebühr für die praktische Prüfung bezahlt ist.',
}, {
  question: 'Как зарегистрироваться на обучение в 2Drive?',
  answer: 'Проще простого! Зайди к нам в рабочее время и зарегистрируйся. Пожалуйста, возьми с собой удостоверение личности.',
}, {
  question: 'Могу ли я перейти из другой автошколы в 2Drive?',
  answer: 'Да, без проблем. Для этого тебе необходимо просто уведомить нас. Стоимость регистрации в данном случае составляет 50 евро.',
}];

const Fahrschule = () => {
  const [activeFaqPoint, setActiveFaqPoint] = useState(null);

  const handleClick = index => {
    if (activeFaqPoint === index) {
      setActiveFaqPoint(null);
    } else {
      setActiveFaqPoint(index);
    }
  };

  return (
    <section className="fahrschule">
      <div className="wrapper">
        <div className="section-header">
          <div className="section-header__icon section-header__icon--fahrschule" style={{ backgroundImage: `url(${IconFahrschule})` }}/>
          <h2 className="section-header__title">Автошкола</h2>
        </div>
        <div className="fahrschule__content">
          <div className="about">
            <img src={Office} alt="office" className="about__image" />
            <article className="about__content">
              <p className="about__description">
                Целью автошколы является обучение плавному управлению автомобилем и соблюдению необходимых правил дорожного движения.
              </p>
              <p className="about__description">
                Усилия нашей команды 2Drive идут намного дальше.<br/>
                Среди прочего, мы заботимся о том, чтобы вы научились управлять автомобилем безопасно и контролируемым образом, при этом заводя друзей и получая удовольствие.
              </p>
            </article>
            <p style={{ color: 'blue' }}>
              Показать Больше > (новый текст может быть значительно больше и тут будет кнопка, которая сможет его сворачивать до 8-и строк)
            </p>
          </div>
          <div className="faq">
            {faqContent.map((item, index) => (
              <div className={`faq__item ${activeFaqPoint === index && 'faq__item--active'}`}>
                <div className="faq__question" onClick={() => handleClick(index)}>
                  {item.question}
                </div>
                {activeFaqPoint === index && (
                  <div className="faq__answer">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="section-header">
          <div className="section-header__icon section-header__icon--our-cars" style={{ backgroundImage: `url(${IconOurCars})` }}/>
          <h2 className="section-header__title">Наши автомобили</h2>
        </div>
      </div>
    </section>
  );
};

export default Fahrschule;
