import { Fragment } from 'react';
import Image from 'next/image';
import { directors } from '@/data/directors';
import DirectorCard from '../director-card';

export default function Directors() {
  return (
    <section className='pt-22 pb-29 relative overflow-hidden bg-deepJungleGreen'>
      <Image
        src='/bg-pattern/bg-pattern-about-2-contact-1.svg'
        alt=''
        width={200}
        height={200}
        className='absolute -left-25 -top-25'
      />
      <div className='container text-white'>
        <h2 className='text-center text-3.5xl font-bold'>Meet the directors</h2>
        <div className='gap-13 mt-12 flex flex-col'>
          {directors.map((director, index) => (
            <Fragment key={index}>
              <DirectorCard {...director} />
            </Fragment>
          ))}
        </div>
      </div>
      <Image
        src='/bg-pattern/bg-pattern-home-4-about-3.svg'
        alt=''
        width={147}
        height={100}
        className='absolute bottom-0 right-0'
      />
    </section>
  );
}
