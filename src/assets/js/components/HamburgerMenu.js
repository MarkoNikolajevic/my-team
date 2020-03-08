import React from 'react';

const HamburgerMenu = ({ open, setOpen }) => {
  const menu = document.querySelector('.menu');

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

export default HamburgerMenu;
