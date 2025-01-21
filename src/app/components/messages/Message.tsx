import { MessageType } from '@/app/types/message.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type MessageProps = {
  message: MessageType;
};

const Message = ({ message }: MessageProps) => {
  return (
    <div className='grid grid-cols-12'>
      <div className='w-full mt-1 rounded-full text-center mb-4 block relative w-20 h-20 col-span-2 flex items-center justify-center'>
        <Image
          className='rounded-full'
          src={message.user.photoUrl}
          alt={`Picture of ${message.user}`}
          height={60}
          width={60}
          priority
        />
      </div>
      <div className='flex flex-col ml-4 mt-2 col-span-10'>
        <div className='flex'>
          <h3>{message.user.name}</h3>
          <div className='text-md ml-2 text-gray-600 cursor-pointer'>
            <Link href={`/users/${message.user.username}`}>
              {message.user.username}
            </Link>
          </div>
        </div>
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default Message;
