import React from 'react';

// Styles
import './Info.scss';

const Info = () => (
  <section className="info">
    <div className="wrapper">
      <div className="grid grid--3">
        <div>
          <h3 className="info__title">
            Корректировка цен
          </h3>
          <p className="info__description">
            С 01.01.2021 вступают в силу изменения в правилах проведения испытаний. Это приводит к изменению оплаты практического экзамена.
          </p>
        </div>
        <div>
          <h3 className="info__title">
            Текущее изменение
          </h3>
          <p className="info__description">
            С 01.01.2021 вступают в силу изменения в правилах проведения испытаний. Это приводит к изменению оплаты практического экзамена.
          </p>
        </div>
        <div>
          <h3 className="info__title info__title--warning">
            Остановка записи
          </h3>
          <p className="info__description">
            В связи с высоким спросом мы не будем принимать новых водителей для учащихся примерно <b>до сентября 2021 года</b>.
          </p>
        </div>
      </div>
      <p style={{ color: 'blue', textAlign: 'center' }}>Показать Больше > (новый текст может быть значительно больше и тут будет кнопка, которая сможет его сворачивать до 4-х строк)</p>
    </div>
  </section>
);

export default Info;
