import { TrendingHashtag } from '@/app/types/hash.types';
import { PageType } from '@/app/types/pagination.types';
import exploreApi from '@/services/explore/explore.service';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MessageHashtag from './MessageHashtag';

type MessageHashtagListProps = {
  initialPage: PageType<TrendingHashtag>;
};

const MessageHashtagList = ({ initialPage }: MessageHashtagListProps) => {
  const [page, setPage] = useState<PageType<TrendingHashtag>>(initialPage);
  const [hashtags, setHashtags] = useState<TrendingHashtag[]>(initialPage.content);

  const fetchData = async () => {
    const pageNumber = page.pagination.page + 1;
    const response = await exploreApi.getTrendingHashtags(pageNumber, 5);
    setPage(response);
    setHashtags([...hashtags, ...response.content]);
  };

  const refresh = async () => {
    const response = await exploreApi.getTrendingHashtags(0, 5);
    setPage(response);
    setHashtags(response.content);
  };

  return (
    <InfiniteScroll
      dataLength={hashtags.length}
      next={fetchData}
      hasMore={!page.pagination.last}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      refreshFunction={refresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>}
    >
      {hashtags.map((hash, index) => (
        <MessageHashtag key={`explore-hash-${index}`} hash={hash} />
      ))}
    </InfiniteScroll>
  );
};

export default MessageHashtagList;
