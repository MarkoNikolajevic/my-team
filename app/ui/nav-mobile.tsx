import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { dropIn } from '@/lib/animations';
import Backdrop from './backdrop';
import { navLinks } from '@/data/nav-links';
import Button from './button';

interface NavMobileProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavMobile({ setIsMenuOpen }: NavMobileProps) {
  return (
    <Backdrop onClick={() => setIsMenuOpen(false)}>
      <motion.div
        onClick={e => e.stopPropagation()}
        className='absolute bottom-0 right-0 top-0 h-screen w-2/3 bg-policeBlue pl-12 pr-6 pt-8 text-white'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='flex justify-end'>
          <XMarkIcon className='h-8 w-8' onClick={() => setIsMenuOpen(false)} />
        </div>
        <nav className='mt-10 flex flex-col gap-6'>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className='text-lg font-semibold text-white'
            >
              {link.label}
            </Link>
          ))}
          <Button variant='primary-light' className='max-w-40'>
            <Link href='/contact'>contact Us</Link>
          </Button>
        </nav>
        <Image
          src='./bg-pattern/bg-pattern-about-1-mobile-nav-1.svg'
          alt=''
          width={200}
          height={200}
          className='absolute -right-25 bottom-0'
        />
      </motion.div>
    </Backdrop>
  );
}
