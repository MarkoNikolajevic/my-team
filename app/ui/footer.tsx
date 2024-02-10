import { navLinks } from '@/data/nav-links';
import { socialLinks } from '@/data/social-links';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-darkGreen py-16'>
      <div className='container flex flex-col items-center text-center'>
        <Image src='/logo.svg' alt='My Team logo' width={128} height={32} />
        <div className='my-6 flex gap-6'>
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
        <p className='mb-10 text-center font-semibold text-white/60'>
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us: 949-833-7432
        </p>
        <div className='flex items-center justify-center gap-4'>
          {socialLinks.map(link => (
            <Link key={link.href} href={link.href} target='_blank'>
              <Image src={link.icon} alt={link.label} width={24} height={24} />
            </Link>
          ))}
        </div>
        <p className='mt-4 text-center font-semibold text-white/60'>
          Copyright {new Date().getFullYear()}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
