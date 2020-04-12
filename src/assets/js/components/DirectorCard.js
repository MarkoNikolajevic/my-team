import React, { useState } from 'react';

import { ReactComponent as Plus } from '../../img/icon-cross.svg';

const DirectorCard = ({ director }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`director-card ${flipped ? 'flipped' : ''}`}>
      <div className='front-side'>
        <img src={director.img} alt={director.name} className='director-img' />
        <h3 className='director-name'>{director.name}</h3>
        <small className='director-job'>
          <em>{director.job}</em>
        </small>
      </div>

      <div className='back-side'>
        <h3 className='director-name'>{director.name}</h3>
        <p className='director-quote'>"{director.quote}"</p>
        <div className='social-links'>
          <a
            href={director.twitter}
            className='link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            href={director.linkedin}
            className='link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
      {/* {flipped ? director.job : director.name} */}
      <div
        className={`icon ${flipped ? 'icon-flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        <Plus />
      </div>
    </div>
  );
};

export default DirectorCard;
