'use client';

import { MessageType } from '@/app/types/message.type';
import { PageType } from '@/app/types/pagination.types';
import messageApi from '@/services/messages/messages.service';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Message from './Message';

type MessageFeedProps = {
  initialMessages: PageType<MessageType>;
};

const MessageFeed = ({ initialMessages }: MessageFeedProps) => {
  const [messageResponse, setMessageResponse] = useState<PageType<MessageType>>(initialMessages);
  const [messages, setMessages] = useState<MessageType[]>(initialMessages.content);
  const [hasMore, setHasMore] = useState<boolean>(!initialMessages.pagination.last);

  const fetchData = async () => {
    const page = messageResponse.pagination.page + 1;
    const response = await messageApi.getMessageFeed(page, 10);
    setMessageResponse(response);
    setMessages([...messages, ...response.content]);
    setHasMore(!response.pagination.last);
  };

  const refresh = async () => {
    const response = await messageApi.getMessageFeed(0, 10);
    setMessageResponse(response);
    setMessages(response.content);
    setHasMore(!response.pagination.last);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={messages.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        refreshFunction={refresh}
        pullDownToRefresh={false}
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
      >
        {messages.map((message, index) => (
          <Message key={`${index}`} message={message} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default MessageFeed;
