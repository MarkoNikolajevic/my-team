import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../img/logo.svg';

import HamburgerMenu from '../components/HamburgerMenu.js';
import NavMobile from '../components/NavMobile.js';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar' style={{ background: 'green' }}>
        <div className='brand-logo'>
          <Logo />
        </div>
        <HamburgerMenu />
        <ul className='navbar-nav-large'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>
              about
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link'>
              contact us
            </Link>
          </li>
        </ul>
      </nav>
      <NavMobile />
    </Fragment>
  );
};

export default Navbar;
