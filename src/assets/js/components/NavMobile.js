import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as BgPattern } from '../../img/bg-pattern-about-1-mobile-nav-1.svg';

const NavMobile = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to='/contact'>contact us</Link>
        </li>
        <BgPattern />
      </ul>
    </nav>
  );
};

export default NavMobile;
