import { TrendingUserType, UserType } from '@/app/types/user.types';
import Image from 'next/image';
import Link from 'next/link';

type UserCardProps = {
  user: TrendingUserType | UserType;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className='mb-4 grid grid-cols-12'>
      <div className='w-full mt-1 rounded-full text-center mb-4 relative h-20 col-span-2 flex items-center justify-center'>
        <Image
          className='rounded-full'
          src={user.photoUrl}
          alt={`Picture of ${user}`}
          height={60}
          width={60}
          priority
        />
      </div>
      <div className='flex flex-col ml-4 mt-2 col-span-10'>
        <div className='flex'>
          <h3>{user.name}</h3>
          <div className='text-md ml-2 text-gray-600 cursor-pointer'>
            <Link href={`/users/${user.username}`}>@{user.username}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
