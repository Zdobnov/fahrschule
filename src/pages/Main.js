import React from 'react';

// Components
import Promo from '../components/Promo';
import Info from '../components/Info';
import Fahrschule from '../components/Fahrschule';
import Tutors from '../components/Tutors';
import Exam from '../components/Exam';
import Prices from '../components/Prices';
import Map from '../components/Map';
import PreFooter from '../components/PreFooter';
import PostFooter from '../components/PostFooter';
import Footer from '../components/Footer';
import OurCars from '../components/OurCars';

const Main = () => (
  <>
    <Promo />
    <Info />
    <Fahrschule />
    <OurCars />
    <Tutors />
    Feedbacks
    <Exam />
    <Prices />
    <Map />
    <footer>
      <PreFooter />
      <Footer />
      <PostFooter />
    </footer>
  </>
);

export default Main;
