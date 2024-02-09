import Image from 'next/image';
import Button from './button';
import Link from 'next/link';

export default function ContactCta() {
  return (
    <section className='py-21 relative bg-lightCoral'>
      <div className='container mb-4 flex flex-col items-center'>
        <h2 className='text-3.5xl mb-6 text-center font-bold'>
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
        height={144}
        className='absolute bottom-0 left-0'
      />
    </section>
  );
}
