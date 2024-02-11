import Image from 'next/image';
import Button from './button';
import Link from 'next/link';

export default function ContactCta() {
  return (
    <section className='relative overflow-hidden bg-lightCoral py-21'>
      <div className='container mb-4 flex flex-col items-center md:flex-row md:items-center md:justify-between'>
        <h2 className='text-center text-3.5xl font-bold max-md:mb-6'>
          Ready to get started?
        </h2>
        <Button variant='primary-dark'>
          <Link href='/contact'>contact Us</Link>
        </Button>
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
