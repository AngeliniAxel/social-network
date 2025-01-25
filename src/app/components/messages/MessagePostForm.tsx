'use client';

import messageApi from '@/services/messages/messages.service';
import Image from 'next/image';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  message: string;
};

const MessagePostForm = () => {
  const { register, handleSubmit, resetField, setFocus } = useForm<FormData>();

  useEffect(() => {
    setFocus('message');
  }, []);

  const onSubmit = async (data: FormData) => {
    const response = await messageApi.PostMessage(data.message);
    console.log(JSON.stringify(response));
    resetField('message');
    setFocus('message');
  };
  return (
    <div className='mb-4 grid grid-cols-12'>
      <div className='w-full h-full mt-1 rounded-full text-center mb-4 relative col-span-2 flex items-center justify-center'>
        <Image
          className='rounded-full'
          src='https://i.pinimg.com/564x/1b/2d/c0/1b2dc0ce77080e4a682fbbfd2eb3b0c1.jpg'
          alt={``}
          height={60}
          width={60}
          priority
        />
      </div>
      <div className='flex flex-col ml-4 mt-2 col-span-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            placeholder="What's on your mind?"
            rows={4}
            className='resize-none p-4 w-full mb-4 rounded bg-gray-50 borderborder-gray-200'
            {...register('message', {
              required: true,
            })}
          />
          <div className='flex justify-end'>
            <button onClick={handleSubmit(onSubmit)} className='button-primary w-fit'>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessagePostForm;
