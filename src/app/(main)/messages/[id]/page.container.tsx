'use client';

import Message from '@/app/components/messages/Message';
import MessageList from '@/app/components/messages/MessageList';
import MessagePostForm from '@/app/components/messages/MessagePostForm';
import { MessageType } from '@/app/types/message.type';
import { PageType } from '@/app/types/pagination.types';
import useMessages, { MessageProvider } from '@/contexts/message.context';

type MessagePageProps = {
  message: MessageType;
  repliesPage: PageType<MessageType>;
  parentId?: string;
};

const MessageContainer = () => {
  const { message } = useMessages();
  if (!message) return <div></div>;
  return (
    <section className='flex flex-col mb-8'>
      <Message message={message} />
    </section>
  );
};

const MessagePageContainer = ({ message, repliesPage, parentId }: MessagePageProps) => {
  return (
    <MessageProvider initialPage={repliesPage} initialMessage={message}>
      <MessageContainer />

      <section className='flex flex-col mb-8'>
        <MessagePostForm parentId={parentId} />
      </section>

      <section className='flex flex-col w-full'>
        <MessageList />
      </section>
    </MessageProvider>
  );
};

export default MessagePageContainer;
