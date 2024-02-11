import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import Avatar from '../avatar';

export default function Testimonials() {
  return (
    <section className='relative overflow-hidden bg-deepJungleGreen pb-41 pt-35 text-white lg:pb-35'>
      <Image
        src='/bg-pattern/bg-pattern-home-4-about-3.svg'
        alt=''
        width={147}
        height={100}
        className='absolute left-0 top-0'
      />
      <div className='container'>
        <h2 className='text-balance text-center text-3.5xl font-bold lg:text-5xl'>
          Delivering real results for top companies. Some of our{' '}
          <span className='text-raptureBlue'>success stories</span>.
        </h2>
        <div className='mt-16 flex flex-col gap-16 lg:grid lg:grid-cols-12 lg:gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='relative flex flex-col items-center text-center lg:col-span-4'
            >
              <p className='z-10 text-pretty font-semibold'>
                {testimonial.comment}
              </p>
              <Avatar
                size={64}
                name={testimonial.name}
                role={testimonial.role}
                avatar={testimonial.avatar}
              />
              <Image
                src='/icons/icon-quotes.svg'
                alt=''
                width={67}
                height={56}
                className='absolute -top-7'
              />
            </div>
          ))}
        </div>
      </div>
      <Image
        src='/bg-pattern/bg-pattern-home-5.svg'
        alt=''
        width={200}
        height={200}
        className='absolute bottom-0 right-0'
      />
    </section>
  );
}
