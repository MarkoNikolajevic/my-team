'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { navLinks } from '@/data/nav-links';
import { cn } from '@/lib/utils';
import NavMobile from './nav-mobile';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='pt-8'>
      <div className='container flex items-center gap-12'>
        <Image src='./logo.svg' alt='My Team logo' width={128} height={32} />
        <nav className='hidden md:flex md:gap-10'>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-lg font-semibold text-white transition-colors hover:text-lightCoral',
                {
                  'text-lightCoral': pathname === link.href
                }
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className='ml-auto text-white md:hidden'>
          <Bars3Icon className='h-8 w-8' onClick={() => setIsMenuOpen(true)} />
        </div>
      </div>
      {isMenuOpen && <NavMobile setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
}
