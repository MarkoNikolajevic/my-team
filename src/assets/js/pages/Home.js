import React, { Fragment } from 'react';

import HomeHeader from '../components/HomeHeader';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <Fragment>
      <HomeHeader />
      <Services />
      <Testimonials />
      <ContactSection />
    </Fragment>
  );
};

export default Home;
