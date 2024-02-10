import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

const buttonVariants = cva(
  'focus-visible:ring-ring inline-flex h-12 px-8 items-center justify-center whitespace-nowrap rounded-full text-lg font-semibold lowercase transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-25',
  {
    variants: {
      variant: {
        'primary-light':
          'border-[2px] bg-transparent px-8 text-white border-white hover:bg-white hover:text-darkGreen',
        'primary-dark':
          'border-[2px] bg-transparent text-darkGreen border-darkGreen hover:bg-darkGreen hover:text-white',
        secondary: 'bg-white text-darkGreen hover:bg-raptureBlue'
      }
    },
    defaultVariants: {
      variant: 'primary-light'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, children, variant, ...props }, ref) => {
    const Component = asChild ? 'span' : 'button';
    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Button.displayName = 'Button';

export default Button;
