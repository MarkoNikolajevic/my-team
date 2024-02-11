import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative pb-52 text-center text-white md:pb-64'>
      <Image
        src='/bg-pattern/bg-pattern-home-1.svg'
        alt=''
        width={200}
        height={200}
        className='hidden lg:absolute lg:-left-25 lg:block'
      />
      <div className='container lg:grid lg:grid-cols-12'>
        <h1 className='mb-4.5 text-balance text-4.5xl font-bold md:mb-6 md:text-6.5xl lg:col-span-8 lg:mb-0 lg:text-left lg:text-8xl'>
          Find the
          <br />
          best <span className='text-lightCoral'>talent</span>
        </h1>
        <div className='lg:col-span-4 lg:flex lg:flex-col lg:text-left'>
          <div className='hidden lg:mb-auto lg:block lg:h-1 lg:w-12 lg:bg-raptureBlue' />
          <p className='text-pretty font-semibold'>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
      <div className='absolute bottom-0 left-2 max-md:right-2 md:left-1/2 md:-translate-x-1/2 lg:translate-x-2/3'>
        <Image
          src='/bg-pattern/bg-pattern-home-2.svg'
          alt=''
          width={358}
          height={100}
          className='h-auto max-md:w-full'
          priority
        />
      </div>
    </section>
  );
}
