import React from 'react';
import Carousel from 'react-elastic-carousel';

// Styles
import './OurCars.scss'

// Images
import Photo3 from '../images/photo/_3.webp';
import Photo8 from '../images/photo/_8.webp';
import Photo21 from '../images/photo/_21.webp';
import Photo35 from '../images/photo/_35.webp';

const imagesUrl = [
  Photo3,
  Photo8,
  Photo21,
  Photo35,
  Photo3,
  Photo8,
];

const OurCars = () => {
  return (
    <section className="our-cars">
      <div className="wrapper">
        <Carousel itemsToShow={4} pagination={false}>
          {imagesUrl.map((url, index) => (
            <div className="our-cars__item" key={index} style={{ backgroundImage: `url(${url})` }}>
              <p className="our-cars__description">
                Audi А3 E-tron<br/>
                Automatikgetriebe
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default OurCars;
