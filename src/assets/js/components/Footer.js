import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../img/logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <Logo />
      <div className='page-links'>
        <Link className='link' to='/'>
          home
        </Link>
        <Link className='link' to='/about'>
          about
        </Link>
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
        <a className='footer-link' href='www.facebook.com' target='_blank'>
          <i class='fab fa-facebook-square'></i>
        </a>
        <a className='footer-link' href='www.pinterest.com' target='_blank'>
          <i class='fab fa-pinterest'></i>
        </a>
        <a className='footer-link' href='www.twitter.com' target='_blank'>
          <i class='fab fa-twitter'></i>
        </a>
      </div>
      <p className='copyright'>Copyright 2020. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
