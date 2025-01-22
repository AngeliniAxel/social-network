import { TrendingHashtag } from '@/app/types/hash.types';
import Link from 'next/link';
import PostsCounter from '../counters/PostsCounter';

type MessageHashtagProps = {
  hash: TrendingHashtag;
};

const MessageHashtag = ({ hash }: MessageHashtagProps) => {
  return (
    <>
      <Link href={`/messages?query=${hash.hash}&type=hash`}>
        <h4 className='font-semibold cursor-pointer p-1'>{hash.hash}</h4>
      </Link>
      <div className='px-1'>
        <PostsCounter count={hash.count} />
      </div>
    </>
  );
};

export default MessageHashtag;
