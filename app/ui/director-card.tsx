'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlusIcon } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';
import { Director } from '@/lib/interfaces';
import Avatar from './avatar';

export default function DirectorCard({
  name,
  role,
  avatar,
  quote,
  social
}: Director) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn(
        'relative flex h-64 justify-center px-6 pb-13 pt-8 md:col-span-6 lg:col-span-4',
        {
          'bg-sacramentoStateGreen': !isFlipped,
          'bg-darkGreen': isFlipped
        }
      )}
    >
      {isFlipped ? (
        <div className='text-center'>
          <h3 className='mb-2 text-lg font-bold text-raptureBlue'>{name}</h3>
          <p className='text-balance font-semibold'>{quote}</p>
          <div className='mt-6 flex justify-center gap-4'>
            {social.twitter && (
              <Link
                href={social.twitter}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/icons/icon-twitter.svg'
                  alt='Twitter'
                  width={24}
                  height={20}
                  className='h-auto w-6'
                />
              </Link>
            )}
            {social.linkedin && (
              <Link
                href={social.linkedin}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/icons/icon-linkedin.svg'
                  alt='Linkedin'
                  width={20}
                  height={20}
                  className='h-auto w-5'
                />
              </Link>
            )}
          </div>
        </div>
      ) : (
        <Avatar size={96} name={name} role={role} avatar={avatar} isReverse />
      )}
      <button
        className={cn(
          '-left-1-2 absolute -bottom-7 flex h-14 w-14 items-center justify-center rounded-full transition-colors',
          {
            'bg-lightCoral': !isFlipped,
            'bg-raptureBlue': isFlipped
          }
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <PlusIcon
          className={cn('h-6 w-6 text-sacramentoStateGreen transition-all', {
            'rotate-45': isFlipped
          })}
        />
      </button>
    </div>
  );
}
