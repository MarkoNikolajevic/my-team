import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative overflow-hidden pb-27 text-center text-white md:pb-28 lg:pb-30'>
      <div className='container lg:flex lg:justify-between'>
        <h1 className='mb-4.5 text-balance text-4.5xl font-bold md:mb-6 md:text-6.5xl'>
          About
        </h1>
        <div className='lg:flex lg:flex-col'>
          <div className='hidden lg:mb-10 lg:block lg:h-1 lg:w-12 lg:bg-lightCoral' />
          <p className='text-pretty font-semibold md:max-w-prose lg:text-left'>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </div>
      <Image
        src='/bg-pattern/bg-pattern-about-1-mobile-nav-1.svg'
        alt=''
        width={200}
        height={200}
        className='absolute -bottom-25 -right-25 md:bottom-0'
        priority
      />
    </section>
  );
}
