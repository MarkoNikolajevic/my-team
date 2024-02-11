import Image from 'next/image';
import { features } from '@/data/features';

export default function Features() {
  return (
    <section className='relative overflow-hidden bg-sacramentoStateGreen py-16 text-white md:py-25'>
      <div className='container lg:flex lg:gap-32'>
        <div className='lg:w-2/5'>
          <div className='mb-8 h-1 w-12 bg-lightCoral' />
          <h2 className='text-3.5xl font-bold max-lg:w-2/3 lg:text-5xl'>
            Build & manage distributed teams like no one else.
          </h2>
        </div>
        <div className='mt-14 flex flex-col gap-12 lg:col-span-7'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center md:flex-row md:gap-6 md:text-left'
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={72}
                height={72}
              />
              <div className='max-md:mt-4'>
                <h3 className='mb-2 text-lg font-bold text-lightCoral md:mb-4'>
                  {feature.title}
                </h3>
                <p className='text-pretty font-semibold md:max-w-prose'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src='/bg-pattern/bg-pattern-home-3.svg'
        alt=''
        width={200}
        height={244}
        className='absolute -right-25 max-lg:top-0 lg:bottom-0'
      />
    </section>
  );
}
