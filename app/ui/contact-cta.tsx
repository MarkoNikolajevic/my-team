import Image from 'next/image';
import ButtonLink from './button-link';

export default function ContactCta() {
  return (
    <section className='relative overflow-hidden bg-lightCoral py-21'>
      <div className='container mb-4 flex flex-col items-center md:flex-row md:items-center md:justify-between lg:max-w-5xl'>
        <h2 className='text-center text-3.5xl font-bold max-md:mb-6 lg:text-5xl'>
          Ready to get started?
        </h2>
        <ButtonLink href='/contact' label='contact us' variant='primary-dark' />
      </div>
      <Image
        src='/bg-pattern/bg-pattern-home-6-about-5.svg'
        alt=''
        width={200}
        height={244}
        className='absolute -bottom-5 left-0'
      />
    </section>
  );
}
