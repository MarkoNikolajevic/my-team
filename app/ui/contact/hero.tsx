import Image from 'next/image';
import { helpTopics } from '@/data/help-topics';

export default function Hero() {
  return (
    <section className='pb-14 text-center text-white md:overflow-hidden md:pb-16 lg:col-span-6 lg:pb-0 lg:text-left'>
      <div className='lg:flex lg:flex-col lg:justify-between'>
        <h1 className='mb-4 text-4.5xl font-bold md:mb-6 md:text-6.5xl lg:mb-8'>
          Contact
        </h1>
        <h2 className='text-3.5xl font-bold text-lightCoral'>Ask us about</h2>
      </div>
      <div className='mt-10 flex flex-col gap-6 md:mx-auto md:mt-6 md:max-lg:max-w-lg lg:mt-8'>
        {helpTopics.map((topic, index) => (
          <div key={index} className='flex items-center gap-6 text-left'>
            <Image
              src={topic.icon}
              alt={topic.alt}
              width={72}
              height={72}
              className='w-18 h-auto'
            />
            <p className='text-base font-bold md:text-lg'>{topic.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
