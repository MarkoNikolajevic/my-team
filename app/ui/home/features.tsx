import Image from 'next/image';
import { features } from '@/data/features';

export default function Features() {
  return (
    <section className='relative overflow-hidden bg-sacramentoStateGreen py-16 text-white'>
      <div className='container'>
        <div className='mb-8 h-1 w-12 bg-lightCoral' />
        <h2 className='text-3.5xl w-2/3 font-bold'>
          Build & manage distributed teams like no one else.
        </h2>
        <div className='mt-14 flex flex-col gap-12'>
          {features.map((feature, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              <Image
                src={feature.icon}
                alt={feature.title}
                width={72}
                height={72}
              />
              <div className='mt-4'>
                <h3 className='mb-2 text-lg font-bold text-lightCoral'>
                  {feature.title}
                </h3>
                <p className='text-pretty font-semibold'>
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
        className='-right-25 absolute top-0'
      />
    </section>
  );
}
