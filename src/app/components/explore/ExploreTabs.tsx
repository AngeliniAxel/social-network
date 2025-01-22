'use client';
import { TrendingHashtag } from '@/app/types/hash.types';
import { TrendingUserType } from '@/app/types/user.types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import MessageHashtag from '../messages/MessageHashtag';
import UserCard, { UserCardLayout } from '../users/UserCard';

enum TabView {
  HASHTAGS,
  USERS,
}

type ExploreTabsProps = {
  hashtags: TrendingHashtag[];
  users: TrendingUserType[];
  initialTab?: string;
};

const ExploreTabs = ({ hashtags, users, initialTab }: ExploreTabsProps) => {
  const searchParams = useSearchParams();

  const [tab, setTab] = useState<TabView>(
    initialTab ? TabView[initialTab as keyof typeof TabView] : TabView.HASHTAGS
  );

  useEffect(() => {
    const type = searchParams.get('type');
    setTab(type ? TabView[type as keyof typeof TabView] : tab);
  }, [searchParams, tab]);

  return (
    <div>
      <div className='flex justify-evenly mb-4'>
        <Link href='/explore?type=HASHTAGS'>
          <div
            className={`cursor-pointer border-b-4 ${
              tab === TabView.HASHTAGS ? 'border-blue-400' : ''
            }`}
          >
            Hashtags
          </div>
        </Link>
        <Link href='/explore?type=USERS'>
          <div
            className={`cursor-pointer border-b-4 ${
              tab === TabView.USERS ? 'border-blue-400' : ''
            }`}
          >
            Users
          </div>
        </Link>
      </div>
      <div>
        {tab === TabView.HASHTAGS &&
          hashtags.map((hash, index) => (
            <MessageHashtag key={`explore-hash-${index}`} hash={hash} />
          ))}
        {tab === TabView.USERS &&
          users.map((user, index) => (
            <UserCard key={`explore-user-${index}`} layout={UserCardLayout.VERTICAL} user={user} />
          ))}
      </div>
    </div>
  );
};

export default ExploreTabs;
