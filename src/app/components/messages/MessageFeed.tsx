import useMessages from '@/contexts/message.context';
import InfiniteScroll from 'react-infinite-scroll-component';
import Message from './Message';

const MessageFeed = () => {
  const { messages, messagePage, fetchNextPage, refresh } = useMessages();

  return (
    <>
      <InfiniteScroll
        dataLength={messages.length}
        next={fetchNextPage}
        hasMore={!messagePage.pagination.last}
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
