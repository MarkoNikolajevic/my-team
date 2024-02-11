import Image from 'next/image';
import { Person } from '@/lib/interfaces';
import { cn } from '@/lib/utils';

interface AvatarProps extends Person {
  size: number;
  isReverse?: boolean;
  className?: string;
}

export default function Avatar({
  name,
  role,
  avatar,
  size,
  isReverse = false,
  className
}: AvatarProps) {
  return (
    <div
      className={cn(`mt-4 flex items-center ${className}`, {
        'flex-col-reverse': isReverse,
        'flex-col': !isReverse
      })}
    >
      <div className='text-center'>
        <h3 className='text-lg font-bold text-raptureBlue'>{name}</h3>
        <em className='text-xs font-medium'>{role}</em>
      </div>
      <div
        className={cn('rounded-full border-[2px] border-raptureBlue', {
          'mt-4 h-16 w-16': !isReverse,
          'mb-4 h-24 w-24': isReverse
        })}
      >
        <Image
          src={avatar}
          alt={name}
          width={size}
          height={size}
          className='rounded-full'
        />
      </div>
    </div>
  );
}
