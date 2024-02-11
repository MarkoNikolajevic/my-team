import Link from 'next/link';
import Button from './button';

interface ButtonLinkProps {
  variant: 'primary-light' | 'primary-dark' | 'secondary';
  href: string;
  label: string;
  className?: string;
}

export default function ButtonLink({
  variant,
  href,
  label,
  className
}: ButtonLinkProps) {
  return (
    <Button variant={variant} className={className}>
      <Link
        href={href}
        className='flex h-full w-full items-center justify-center'
      >
        {label}
      </Link>
    </Button>
  );
}
