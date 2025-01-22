import React, { FC, PropsWithChildren } from 'react';
import Menu from '../components/menu/Menu';
import ExploreTrending from '../components/explore/ExploreTrending';
import exploreApi from '@/services/explore/explore.service';

const LINKS = [
  { title: 'Home', href: '/' },
  { title: 'Explore', href: '/explore' },
  { title: 'Profile', href: '/my-profile' },
];

const UsersLayout: FC<PropsWithChildren> = async ({ children }) => {
  const hashes = await exploreApi.getTrendingHashtags(0, 3);

  return (
    <div className='w-full h-full grid grid-cols-12 gap-4 px-4'>
      <div className='col-span-3'>
        <Menu links={LINKS} />
      </div>
      <main className='col-span-6'>{children}</main>
      <div className='col-span-3'>
        <ExploreTrending hashes={hashes.content} />
      </div>
    </div>
  );
};

export default UsersLayout;
