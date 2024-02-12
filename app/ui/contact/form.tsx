'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../input';
import Textarea from '../textarea';
import Button from '../button';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'This field is required'
  }),
  email: z.string().email({
    message: 'This is not a valid email address'
  }),
  company: z.string().optional(),
  title: z.string().optional(),
  message: z.string().min(10, {
    message: 'This field is required'
  })
});

type FormValues = z.infer<typeof FormSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    mode: 'onBlur',
    resolver: zodResolver(FormSchema),
    shouldFocusError: false
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <section className='text-white lg:col-span-6'>
      <form
        className='flex flex-col gap-4 md:max-lg:mx-auto md:max-lg:max-w-lg'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name='name'
          type='text'
          placeholder='Name'
          register={register}
          error={errors.name}
          errorMessage={errors.name?.message}
        />
        <Input
          name='email'
          type='email'
          placeholder='Email Address'
          register={register}
          error={errors.email}
          errorMessage={errors.email?.message}
        />
        <Input
          name='company'
          type='text'
          placeholder='Company Name'
          register={register}
          error={errors.company}
          errorMessage={errors.company?.message}
        />
        <Input
          name='title'
          type='text'
          placeholder='Title'
          register={register}
          error={errors.title}
          errorMessage={errors.title?.message}
        />
        <Textarea
          name='message'
          placeholder='Message'
          register={register}
          error={errors.message}
          errorMessage={errors.message?.message}
        />
        <Button type='submit' className='w-35'>
          Submit
        </Button>
      </form>
    </section>
  );
}
