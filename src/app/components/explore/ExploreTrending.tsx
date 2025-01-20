import React from 'react';
import PostsCounter from '../counters/PostsCounter';
import Link from 'next/link';
import { Hashtag } from '@/app/types/hash.types';

type ExploreTrendingProps = {
  hashes: Hashtag[];
};

const ExploreTrending = ({ hashes }: ExploreTrendingProps) => {
  if (!hashes || hashes.length === 0) return <div></div>;

  return (
    <div className='bg-gray-200 rounded-lg px-8 py-4' style={{ minWidth: 250 }}>
      <h2 className='mb-2'>Trending</h2>
      {hashes.slice(0, 2).map((hash, index) => (
        <div key={`trending-hash-${index}`} className='mb-4'>
          <Link href={`/messages?query=${hash.hash}&type=hash`}>
            <h4 className='font-semibold cursor-pointer p-1'>#{hash.hash}</h4>
          </Link>
          <div className='px-1'>
            <PostsCounter count={hash.count} />
          </div>
        </div>
      ))}
      {hashes.length > 2 && (
        <Link href='/explore?type=hash'>
          <div className='text-center link-primary'>See more</div>
        </Link>
      )}
    </div>
  );
};

export default ExploreTrending;
