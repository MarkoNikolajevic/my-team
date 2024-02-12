import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/data/nav-links';
import { socialLinks } from '@/data/social-links';

export default function Footer() {
  return (
    <footer className='bg-darkGreen py-16 md:py-14 lg:py-12'>
      <div className='container flex flex-col items-center text-center md:flex-row md:flex-wrap md:items-start lg:grid lg:grid-cols-12'>
        <div className='my-6 flex flex-col gap-6 md:my-0 lg:col-span-3'>
          <Image src='/logo.svg' alt='My Team logo' width={128} height={32} />
          <div className='flex gap-6'>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className='font-semibold text-white transition-colors hover:text-lightCoral'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className='mb-10 text-center font-semibold text-white/60 md:mb-8 md:text-right md:max-lg:ml-auto lg:col-span-5 lg:mb-0 lg:text-left'>
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us: 949-833-7432
        </p>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between md:max-lg:w-full lg:col-span-4 lg:h-full lg:flex-col lg:items-end'>
          <div className='flex items-center justify-center gap-4'>
            {socialLinks.map(link => (
              <Link key={link.href} href={link.href} target='_blank'>
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
          <p className='text-center font-semibold text-white/60 max-md:mt-4 md:text-right lg:mt-auto'>
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
