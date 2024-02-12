import { cn } from '@/lib/utils';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  error?: FieldError | undefined;
  errorMessage?: string;
}

export default function Input({
  name,
  type,
  placeholder,
  defaultValue,
  register,
  error,
  errorMessage
}: InputProps) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name!)}
        className={cn(
          'h-11 w-full border-b border-l-0 border-r-0 border-t-0 border-b-white bg-transparent pb-4 pl-3 font-semibold text-white transition-all placeholder:text-base placeholder:font-semibold placeholder:text-white/60 focus:border-b-raptureBlue focus:outline-none focus:ring-0 active:border-b-raptureBlue',
          {
            'border-b-lightCoral placeholder:text-lightCoral': error
          }
        )}
      />
      <small
        className={cn(
          'inline-block h-2.5 w-full text-xxs font-bold italic text-lightCoral',
          {
            visible: error,
            invisible: !error
          }
        )}
      >
        {errorMessage}
      </small>
    </>
  );
}
