import React, { Fragment } from 'react';

import AboutHeader from '../components/AboutHeader';
import Directors from '../components/Directors';
import Clients from '../components/Clients';
import ContactSection from '../components/ContactSection';

const About = () => {
  return (
    <Fragment>
      <AboutHeader />
      <Directors />
      <Clients />
      <ContactSection />
    </Fragment>
  );
};

export default About;
