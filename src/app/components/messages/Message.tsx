import { MessageType } from '@/app/types/message.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type MessageProps = {
  message: MessageType;
};

const Message = ({ message }: MessageProps) => {
  return (
    <div className='flex'>
      <div className='rounded-full p-5 bg-gray-300 w-16 text-center mb-4'>
        <span className='font-semibold text-sm'>AS</span>
      </div>
      <div className='flex flex-col ml-4 mt-2'>
        <div className='flex'>
          <h3>{message.name}</h3>
          <div className='text-md ml-2 text-gray-600 cursor-pointer'>
            @<Link href={`/users/${message.username}`}>{message.username}</Link>
          </div>
        </div>
        <p>{message.message}</p>
        <div>
          <Image
            src='https://media.istockphoto.com/id/1302442639/photo/view-from-dune-top-over-north-sea.jpg?s=612x612&w=0&k=20&c=j7FVws1QxujyxKmJLlDHmQrwwOCmAl1mcS_9DChyDg4='
            alt='Picture of the author'
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
