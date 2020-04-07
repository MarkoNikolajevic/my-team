import React from 'react';

import { ReactComponent as BgPattern } from '../../img/bg-pattern-home-2.svg';
import { ReactComponent as BgPatternLeft } from '../../img/bg-pattern-home-1.svg';

const HomeHeader = () => {
  return (
    <header className='main-header home-header'>
      <div className='col-lg'>
        <h1 className='header-title'>
          Find the
          <br /> best <span>talent</span>
        </h1>
      </div>
      <div className='col-lg second-col'>
        <div className='divider-lg'></div>
        <p className='intro'>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
      <BgPattern className='bg-pattern' />
      <BgPatternLeft className='bg-pattern-left' />
    </header>
  );
};

export default HomeHeader;
