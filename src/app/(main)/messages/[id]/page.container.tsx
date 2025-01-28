'use client';

import Message from '@/app/components/messages/Message';
import MessagePostForm from '@/app/components/messages/MessagePostForm';
import { MessageType } from '@/app/types/message.type';
import { PageType } from '@/app/types/pagination.types';
import { MessageProvider } from '@/contexts/message.context';

type MessagePageProps = {
  message: MessageType;
  repliesPage: PageType<MessageType>;
  parentId?: string;
};

const MessagePageContainer = ({ message, repliesPage, parentId }: MessagePageProps) => {
  return (
    <MessageProvider>
      <section className='flex flex-col mb-8'>
        <Message message={message} />
      </section>

      <section className='flex flex-col mb-8'>
        <MessagePostForm parentId={parentId} />
      </section>

      <section className='flex flex-col w-full'>
        {repliesPage.content.map((message, index) => (
          <Message key={`${index}`} message={message} />
        ))}
      </section>
    </MessageProvider>
  );
};

export default MessagePageContainer;
