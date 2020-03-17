import React, { useState } from 'react';

import { ReactComponent as BgPatternTop } from '../../img/bg-pattern-about-2-contact-1.svg';
import { ReactComponent as BgPatternBottom } from '../../img/bg-pattern-home-4-about-3.svg';
import { ReactComponent as Plus } from '../../img/icon-cross.svg';
import { ReactComponent as IconTwitter } from '../../img/icon-twitter.svg';
import { ReactComponent as IconLinkedin } from '../../img/icon-linkedin.svg';
import nikita from '../../img/avatar-nikita.jpg';
import christian from '../../img/avatar-christian.jpg';
import cruz from '../../img/avatar-cruz.jpg';
import drake from '../../img/avatar-drake.jpg';
import griffin from '../../img/avatar-griffin.jpg';
import aden from '../../img/avatar-aden.jpg';

const Directors = ({ flipped, setFlipped }) => {
  return (
    <section id='directors'>
      <h2 className='section-title'>Meet the directors</h2>
      <div className='directors-wrapper'>
        <div className='director-card'>
          <div className='front-side'>
            <img src={nikita} alt='Nikita Marks' className='director-img' />
            <h3 className='director-name'>Nikita Marks</h3>
            <small className='director-job'>
              <em>Founder & CEO</em>
            </small>
            <div className='icon'>
              <Plus />
            </div>
          </div>
          <div className='back-side'>
            <h3 className='director-name'>Nikita Marks</h3>
            <p className='director-quote'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              fuga quas doloribus perferendis!
            </p>
            <div className='social-links'>
              <a className='link' href='www.twitter.com' target='_blank'>
                <i class='fab fa-twitter'></i>
              </a>
              <a className='link' href='www.linkedin.com' target='_blank'>
                <i class='fab fa-linkedin'></i>
              </a>
            </div>
            <div className='icon'>
              <Plus />
            </div>
          </div>
        </div>

        <div className='director-card'>
          <div className='front-side'>
            <img
              src={christian}
              alt='Christian Duncan'
              className='director-img'
            />
            <h3 className='director-name'>Christian Duncan</h3>
            <small className='director-job'>
              <em>Co-founder & COO</em>
            </small>
            <div className='icon'>
              <Plus />
            </div>
          </div>
          <div className='back-side'>
            <h3 className='director-name'>Christian Duncan</h3>
            <p className='director-quote'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              fuga quas doloribus perferendis!
            </p>
            <div className='social-links'>
              <a className='link' href='www.twitter.com' target='_blank'>
                <i class='fab fa-twitter'></i>
              </a>
              <a className='link' href='www.linkedin.com' target='_blank'>
                <i class='fab fa-linkedin'></i>
              </a>
            </div>
            <div className='icon'>
              <Plus />
            </div>
          </div>
        </div>

        <div className='director-card'>
          <div className='front-side'>
            <img src={cruz} alt='Cruz Hamer' className='director-img' />
            <h3 className='director-name'>Cruz Hamer</h3>
            <small className='director-job'>
              <em>Co-founder & CTO</em>
            </small>
            <div className='icon'>
              <Plus />
            </div>
          </div>
          <div className='back-side'>
            <h3 className='director-name'>Cruz Hamer</h3>
            <p className='director-quote'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              fuga quas doloribus perferendis!
            </p>
            <div className='social-links'>
              <a className='link' href='www.twitter.com' target='_blank'>
                <i class='fab fa-twitter'></i>
              </a>
              <a className='link' href='www.linkedin.com' target='_blank'>
                <i class='fab fa-linkedin'></i>
              </a>
            </div>
            <div className='icon'>
              <Plus class='plus-back' />
            </div>
          </div>
        </div>

        <div className='director-card'>
          <div className='front-side'>
            <img src={drake} alt='Drake Heaton' className='director-img' />
            <h3 className='director-name'>Drake Heaton</h3>
            <small className='director-job'>
              <em>Business Development Lead</em>
            </small>
            <div className='icon'>
              <Plus />
            </div>
          </div>
          <div className='back-side'>
            <h3 className='director-name'>Drake Heaton</h3>
            <p className='director-quote'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              fuga quas doloribus perferendis!
            </p>
            <div className='social-links'>
              <a className='link' href='www.twitter.com' target='_blank'>
                <i class='fab fa-twitter'></i>
              </a>
              <a className='link' href='www.linkedin.com' target='_blank'>
                <i class='fab fa-linkedin'></i>
              </a>
            </div>
            <div className='icon'>
              <Plus class='plus-back' />
            </div>
          </div>
        </div>

        <div className='director-card'>
          <div className='front-side'>
            <img src={griffin} alt='Griffin Wise' className='director-img' />
            <h3 className='director-name'>Griffin Wise</h3>
            <small className='director-job'>
              <em>Lead Marketing</em>
            </small>
            <div className='icon'>
              <Plus />
            </div>
          </div>
          <div className='back-side'>
            <h3 className='director-name'>Griffin Wise</h3>
            <p className='director-quote'>
              "Unique perspectives shape unique products, which is what you need
              to survive these days."
            </p>
            <div className='social-links'>
              <a className='link' href='www.twitter.com' target='_blank'>
                <i class='fab fa-twitter'></i>
              </a>
              <a className='link' href='www.linkedin.com' target='_blank'>
                <i class='fab fa-linkedin'></i>
              </a>
            </div>
            <div className='icon'>
              <Plus class='plus-back' />
            </div>
          </div>
        </div>

        <div className='director-card'>
          <div className='front-side'>
            <img src={aden} alt='Aden Allan' className='director-img' />
            <h3 className='director-name'>Aden Allan</h3>
            <small className='director-job'>
              <em>Head of Talent</em>
            </small>
            <div className='icon'>
              <Plus />
            </div>
          </div>
          <div className='back-side'>
            <h3 className='director-name'>Aden Allan</h3>
            <p className='director-quote'>
              "Empowered teams create truly amazing products. Set the north star
              and let them follow it."
            </p>
            <div className='social-links'>
              <a className='link' href='www.twitter.com' target='_blank'>
                <i class='fab fa-twitter'></i>
              </a>
              <a className='link' href='www.linkedin.com' target='_blank'>
                <i class='fab fa-linkedin'></i>
              </a>
            </div>
            <div className='icon'>
              <Plus class='plus-back' />
            </div>
          </div>
        </div>
      </div>
      <BgPatternTop className='bg-pattern top' />
      <BgPatternBottom className='bg-pattern bottom' />
    </section>
  );
};

export default Directors;
