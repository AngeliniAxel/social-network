'use client';

import { MessageType } from '@/app/types/message.type';
import { useRouter } from 'next/navigation';
import RepliesCounter from '../counters/RepliesCounter';
import UserCard, { UserCardLayout } from '../users/UserCard';

type MessageProps = {
  message: MessageType;
};

const Message = ({ message }: MessageProps) => {
  const router = useRouter();

  return (
    <UserCard user={message.user} layout={UserCardLayout.HORIZONTAL}>
      <div className='flex flex-col'>
        <p>{message.message}</p>
        <div className='flex justify-end'>
          <RepliesCounter
            onClick={() => router.push(`/messages/${message.id}`)}
            count={message.repliesCount}
          />
        </div>
      </div>
    </UserCard>
  );
};

export default Message;
