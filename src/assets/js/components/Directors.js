import React, { useState } from 'react';

import DirectorList from './DirectorList';

import { ReactComponent as BgPatternTop } from '../../img/bg-pattern-about-2-contact-1.svg';
import { ReactComponent as BgPatternBottom } from '../../img/bg-pattern-home-4-about-3.svg';
import nikita from '../../img/avatar-nikita.jpg';
import christian from '../../img/avatar-christian.jpg';
import cruz from '../../img/avatar-cruz.jpg';
import drake from '../../img/avatar-drake.jpg';
import griffin from '../../img/avatar-griffin.jpg';
import aden from '../../img/avatar-aden.jpg';

const Directors = () => {
  const [directors, setDirectors] = useState(DIRECTORS);

  return (
    <section id='directors'>
      <h2 className='section-title'>Meet the directors</h2>
      <div className='directors-wrapper'>
        <DirectorList directors={directors} />
      </div>
      <BgPatternTop className='bg-pattern top' />
      <BgPatternBottom className='bg-pattern bottom' />
    </section>
  );
};

const DIRECTORS = [
  {
    id: 1,
    img: nikita,
    name: 'Nikita Marks',
    job: 'Founder & CEO',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga quas doloribus perferendis!',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com',
  },
  {
    id: 2,
    img: christian,
    name: 'Christian Duncan',
    job: 'Co-founder & COO',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga quas doloribus perferendis!',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com',
  },
  {
    id: 3,
    img: cruz,
    name: 'Cruz Hamer',
    job: 'Co-founder & CTO',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga quas doloribus perferendis!',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com',
  },
  {
    id: 4,
    img: drake,
    name: 'Drake Heaton',
    job: 'Business Development Lead',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga quas doloribus perferendis!',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com',
  },
  {
    id: 5,
    img: griffin,
    name: 'Griffin Wise',
    job: 'Lead Marketing',
    quote:
      'Unique perspectives shape unique products, which is what you need to survive these days.',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com',
  },
  {
    id: 6,
    img: aden,
    name: 'Aden Allan',
    job: 'Head of Talent',
    quote:
      'Empowered teams create truly amazing products. Set the north star and let them follow it.',
    twitter: 'www.twitter.com',
    linkedin: 'www.linkedin.com',
  },
];

export default Directors;
