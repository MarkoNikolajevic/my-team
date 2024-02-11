import Image from 'next/image';
import Form from '../ui/contact/form';
import Hero from '../ui/contact/hero';
import Input from '../ui/input';

export default function ContactPage() {
  return (
    <main className='relative overflow-hidden bg-midnightGreen pb-22 pt-20 md:py-28 lg:py-30'>
      <Image
        src='/bg-pattern/bg-pattern-about-2-contact-1.svg'
        alt=''
        width={200}
        height={200}
        className='hidden md:absolute md:-left-25 md:block'
      />
      <div className='container lg:grid lg:grid-cols-12 lg:gap-8'>
        <Hero />
        <Form />
      </div>
      <Image
        src='/bg-pattern/bg-pattern-contact-2.svg'
        alt=''
        width={225}
        height={200}
        className='absolute -bottom-30 -right-25 h-auto w-56 md:bottom-0'
      />
    </main>
  );
}
