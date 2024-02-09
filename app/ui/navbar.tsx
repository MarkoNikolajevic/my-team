'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/nav-links';
import { cn } from '@/lib/utils';
import Button from './button';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className='pt-8'>
      <div className='container flex gap-12'>
        <Image src='./logo.svg' alt='My Team logo' width={128} height={32} />
        <nav className='flex gap-10'>
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
      </div>
    </header>
  );
}
