import React from 'react';

const HamburgerMenu = ({ open, setOpen }) => {
  const menu = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.navbar-nav-mobile');

  if (open) {
    mobileNav.classList.toggle('show-mobile-nav');
    menu.classList.toggle('animated');
    setOpen(false);
    closeNav();
  }

  return (
    <div
      className='hamburger-menu'
      open={open}
      onClick={() => setOpen(!open)}
      aria-label='Menu'
      aria-controls='navigation'
    >
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
    </div>
  );
};

const closeNav = () => {
  let links = document.querySelectorAll('.nav-mobile-link');
  links = Array.from(links);
  links.forEach(elem => {
    elem.addEventListener('click', () => {
      const menu = document.querySelector('.hamburger-menu');
      const mobileNav = document.querySelector('.navbar-nav-mobile');
      mobileNav.classList.remove('show-mobile-nav');
      menu.classList.remove('animated');
    });
  });
};

export default HamburgerMenu;
