import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <div className='brand-logo'>
          <img src={logo} alt='My Team logo' className='logo' />
        </div>
        <div className='page-links'>
          <Link className='link' to='/'>
            home
          </Link>
          <Link className='link' to='/about'>
            about
          </Link>
        </div>
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
        <a
          className='footer-link'
          href='https://www.facebook.com'
          target='_blank'
          rel='noreferrer noopener'
        >
          <i className='fab fa-facebook-square'></i>
        </a>
        <a
          className='footer-link'
          href='https://www.pinterest.com'
          target='_blank'
          rel='noreferrer noopener'
        >
          <i className='fab fa-pinterest'></i>
        </a>
        <a
          className='footer-link'
          href='https://www.twitter.com'
          target='_blank'
          rel='noreferrer noopener'
        >
          <i className='fab fa-twitter'></i>
        </a>
      </div>
      <p className='copyright'>Copyright 2020. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
