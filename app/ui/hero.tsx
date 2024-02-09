import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative pb-52 text-center text-white'>
      <div className='container'>
        <h1 className='mb-4.5 text-balance text-4.5xl font-bold'>
          Find the
          <br />
          best <span className='text-lightCoral'>talent</span>
        </h1>
        <p className='text-pretty font-semibold'>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
      <div className='absolute bottom-0 left-2 right-2'>
        <Image
          src='/bg-pattern/bg-pattern-home-2.svg'
          alt=''
          width={358}
          height={100}
          className='h-auto max-md:w-full'
        />
      </div>
    </section>
  );
}
