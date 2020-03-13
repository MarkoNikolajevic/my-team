import React, { Fragment } from 'react';

import HomeHeader from '../components/HomeHeader';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <Fragment>
      <HomeHeader />
      <Services />
      <Testimonials />
    </Fragment>
  );
};

export default Home;
