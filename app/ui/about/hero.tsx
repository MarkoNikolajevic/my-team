import Image from 'next/image';

export default function Hero() {
  return (
    <section className='pb-27 relative overflow-hidden text-center text-white'>
      <div className='container'>
        <h1 className='mb-4.5 text-balance text-4.5xl font-bold md:mb-6 md:text-6.5xl'>
          About
        </h1>
        <p className='text-pretty font-semibold'>
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </div>
      <div className='absolute -bottom-25 -right-25'>
        <Image
          src='/bg-pattern/bg-pattern-about-1-mobile-nav-1.svg'
          alt=''
          width={200}
          height={200}
          className='h-auto max-md:w-full'
          priority
        />
      </div>
    </section>
  );
}
