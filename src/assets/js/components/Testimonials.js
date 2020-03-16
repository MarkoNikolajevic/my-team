import React from 'react';

import { ReactComponent as BgPatternTop } from '../../img/bg-pattern-home-4-about-3.svg';
import { ReactComponent as BgPatternBottom } from '../../img/bg-pattern-home-5.svg';
import { ReactComponent as Quotes } from '../../img/icon-quotes.svg';

import kady from '../../img/avatar-kady.jpg';
import aiysha from '../../img/avatar-aiysha.jpg';
import arthur from '../../img/avatar-arthur.jpg';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2 className='section-title'>
        Delivering real results for top companies. Some of our
        <span> success stories.</span>
      </h2>
      <div className='testimonials-wrapper'>
        <div className='testimonial'>
          <Quotes className='quotes' />
          <p className='testimonial-quote'>
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <h3 className='testimonial-name'>Kady Baker</h3>
          <p className='testimonial-job'>
            <em>Product Manager at Bookmark</em>
          </p>
          <img src={kady} alt='Kady Baker' className='testimonial-picture' />
        </div>

        <div className='testimonial'>
          <Quotes className='quotes' />
          <p className='testimonial-quote'>
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </p>
          <h3 className='testimonial-name'>Aiysha Reese</h3>
          <p className='testimonial-job'>
            <em>Founder of Manage</em>
          </p>
          <img
            src={aiysha}
            alt='Aiysha Reese'
            className='testimonial-picture'
          />
        </div>

        <div className='testimonial'>
          <Quotes className='quotes' />
          <p className='testimonial-quote'>
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </p>
          <h3 className='testimonial-name'>Arthur Clarke</h3>
          <p className='testimonial-job'>
            <em>Co-founder of MyPhysio</em>
          </p>
          <img
            src={arthur}
            alt='Arthur Clarke'
            className='testimonial-picture'
          />
        </div>
      </div>
      <BgPatternTop className='bg-pattern top' />
      <BgPatternBottom className='bg-pattern bottom' />
    </section>
  );
};

export default Testimonials;
