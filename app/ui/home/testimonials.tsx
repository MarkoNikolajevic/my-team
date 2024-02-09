import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className='pt-35 pb-41 relative overflow-hidden bg-deepJungleGreen text-white'>
      <Image
        src='/bg-pattern/bg-pattern-home-4-about-3.svg'
        alt=''
        width={147}
        height={100}
        className='absolute left-0 top-0'
      />
      <div className='container'>
        <h2 className='text-3.5xl text-balance text-center font-bold'>
          Delivering real results for top companies. Some of our{' '}
          <span className='text-raptureBlue'>success stories</span>.
        </h2>
        <div className='mt-16 flex flex-col gap-16'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='relative flex flex-col items-center text-center'
            >
              <p className='z-10 text-pretty font-semibold'>
                {testimonial.comment}
              </p>
              <div className='mt-4 flex flex-col items-center'>
                <h3 className='mb-0.5 text-lg font-bold text-raptureBlue'>
                  {testimonial.name}
                </h3>
                <em className='text-xs font-medium'>{testimonial.role}</em>
                <div className='mt-4 h-16 w-16 rounded-full border-[2px] border-raptureBlue'>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className='rounded-full'
                  />
                </div>
              </div>
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
