import React from 'react';

import { ReactComponent as BgPattern } from '../../img/bg-pattern-about-4.svg';
import verge from '../../img/logo-the-verge.png';
import jakarta from '../../img/logo-jakarta-post.png';
import guardian from '../../img/logo-the-guardian.png';
import techRadar from '../../img/logo-tech-radar.png';
import gadgets from '../../img/logo-gadgets-now.png';

const Clients = () => {
  return (
    <section id='clients'>
      <h2 className='section-title'>Some of our clients</h2>
      <div className='clients-wrapper'>
        <img className='client-logo' src={verge} alt='Logo The Verge' />
        <img className='client-logo' src={jakarta} alt='Logo Jakarta Post' />
        <img className='client-logo' src={guardian} alt='Logo The Guardian' />
        <img className='client-logo' src={techRadar} alt='Logo Tech Radar' />
        <img className='client-logo' src={gadgets} alt='Logo Gadgets Now' />
      </div>
      <BgPattern className='bg-pattern' />
    </section>
  );
};

export default Clients;
