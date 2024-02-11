import { cn } from '@/lib/utils';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
  errorMessage?: string;
}

export default function Textarea({
  name,
  placeholder,
  register,
  error,
  errorMessage
}: TextareaProps) {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        rows={3}
        {...register(name!)}
        className={cn(
          'w-full resize-none border-b border-l-0 border-r-0 border-t-0 border-b-white bg-transparent pb-4 pl-3 font-semibold text-white transition-all placeholder:text-base placeholder:font-semibold placeholder:text-white/60 focus:border-b-raptureBlue focus:outline-none focus:ring-0 active:border-b-raptureBlue',
          {
            'border-b-lightCoral placeholder:text-lightCoral': error
          }
        )}
      />
      <small
        className={cn(
          'text-xxs inline-block h-2.5 w-full font-bold italic text-lightCoral',
          {
            visible: error,
            invisible: !error
          }
        )}
      >
        {errorMessage}
      </small>
    </div>
  );
}
