import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as BgPattern } from '../../img/bg-pattern-home-6-about-5.svg';

const ContactSection = () => {
  return (
    <section id='contact-section'>
      <h2 className='section-title'>Ready to get started?</h2>
      <Link to='/contact' className='contact-btn'>
        contact us
      </Link>
      <BgPattern />
    </section>
  );
};

export default ContactSection;
