import React from 'react';

import { ReactComponent as BgPattern } from '../../img/bg-pattern-home-3.svg';
import { ReactComponent as IconPerson } from '../../img/icon-person.svg';
import { ReactComponent as IconCog } from '../../img/icon-cog.svg';
import { ReactComponent as IconChart } from '../../img/icon-chart.svg';

const Services = () => {
  return (
    <section id='services'>
      <div className='divider'></div>
      <h2 className='section-title'>
        Build & manage distributed teams like no one else.
      </h2>
      <div className='services-wrapper'>
        <div className='service-card'>
          <IconPerson className='service-icon' />
          <h3 className='service-title'>Experienced Individuals</h3>
          <p className='service-info'>
            Our network is made up of highly experienced professionals who are
            passionate about what they do.
          </p>
        </div>
        <div className='service-card'>
          <IconCog className='service-icon' />
          <h3 className='service-title'>Easy to Implement</h3>
          <p className='service-info'>
            Our processes have been refined over years of implementation meaning
            our teams always deliver.
          </p>
        </div>
        <div className='service-card'>
          <IconChart className='service-icon' />
          <h3 className='service-title'>Enhanced Productivity</h3>
          <p className='service-info'>
            Our customized platform with in-built analytics helps you manage
            your distributed teams.
          </p>
        </div>
      </div>
      <BgPattern className='bg-pattern' />
    </section>
  );
};

export default Services;
