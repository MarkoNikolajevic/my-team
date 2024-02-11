import { Fragment } from 'react';
import Image from 'next/image';
import { directors } from '@/data/directors';
import DirectorCard from '../director-card';

export default function Directors() {
  return (
    <section className='relative overflow-hidden bg-deepJungleGreen pb-29 pt-22 md:pb-32 md:pt-25'>
      <Image
        src='/bg-pattern/bg-pattern-about-2-contact-1.svg'
        alt=''
        width={200}
        height={200}
        className='absolute -left-25 -top-25 md:top-0'
      />
      <div className='container text-white'>
        <h2 className='text-center text-3.5xl font-bold'>Meet the directors</h2>
        <div className='mt-12 flex flex-col gap-13 md:mx-14 md:grid md:grid-cols-12 md:gap-x-3 md:gap-y-16'>
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
