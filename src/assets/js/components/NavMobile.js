import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as BgPattern } from '../../img/bg-pattern-about-1-mobile-nav-1.svg';

const NavMobile = () => {
  return (
    <nav className='navbar-nav-mobile'>
      <ul className='menu-mobile'>
        <li>
          <Link className='nav-mobile-link' to='/'>
            home
          </Link>
        </li>
        <li>
          <Link className='nav-mobile-link' to='/about'>
            about
          </Link>
        </li>
        <li>
          <Link className='nav-mobile-link' id='last' to='/contact'>
            contact us
          </Link>
        </li>
        <BgPattern />
      </ul>
    </nav>
  );
};

export default NavMobile;
