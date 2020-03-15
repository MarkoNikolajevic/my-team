import React from 'react';

import { ReactComponent as BgPattern } from '../../img/bg-pattern-about-1-mobile-nav-1.svg';

const AboutHeader = () => {
  return (
    <header className='main-header'>
      <h1 className='section-title'>About</h1>
      <p className='intro'>
        We help companies build dynamic teams made up of top global talent.
        Using our network of passionate professionals we drive innovation and
        deliver incredible outcomes. Talented, diverse teams shape the best
        products and experiences. We’ll bring those teams to you.
      </p>
      <BgPattern className='bg-pattern-about' />
    </header>
  );
};

export default AboutHeader;
