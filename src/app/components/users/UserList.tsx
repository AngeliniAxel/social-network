import { PageType } from '@/app/types/pagination.types';
import { TrendingUserType } from '@/app/types/user.types';
import exploreApi from '@/services/explore/explore.service';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserCard, { UserCardLayout } from './UserCard';

type UserListProps = {
  initialUserPage: PageType<TrendingUserType>;
};

const UserList = ({ initialUserPage }: UserListProps) => {
  const [page, setPage] = useState<PageType<TrendingUserType>>(initialUserPage);
  const [users, setUsers] = useState<TrendingUserType[]>(initialUserPage.content);

  const fetchData = async () => {
    const pageNumber = page.pagination.page + 1;
    const response = await exploreApi.getFollowRecomendation(pageNumber, 5);
    setPage(response);
    setUsers([...users, ...response.content]);
  };

  const refresh = async () => {
    const response = await exploreApi.getFollowRecomendation(0, 5);
    setPage(response);
    setUsers(response.content);
  };

  return (
    <InfiniteScroll
      dataLength={users.length}
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
      {users.map((user, index) => (
        <UserCard key={`explore-user-${index}`} layout={UserCardLayout.VERTICAL} user={user} />
      ))}
    </InfiniteScroll>
  );
};

export default UserList;
