import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../img/logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <Logo />
      <div className='page-links'>
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
      </div>
      <p className='contact-info'>
        987 Hillcrest Lane
        <br />
        Irvine, CA
        <br />
        California 92714
        <br />
        Call Us: 949-833-7432
      </p>
      <div className='social-links'>
        <a className='footer-link' href='www.facebook.com'>
          facebook
        </a>
        <a className='footer-link' href='www.pinterest.com'>
          pinterest
        </a>
        <a className='footer-link' href='www.twitter.com'>
          twitter
        </a>
      </div>
      <p className='copyright'>Copyright 2020. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
