import UserTabs from '@/app/components/users/UserTabs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profilePic from '../../../../../public/anakin_profile.webp';

const UserPage = ({ params }: { params: { username: string } }) => {
  const user = {
    username: params.username,
    name: 'Anakin Skywalker',
    bio: 'Vengo del planeta Tatooine',
    followersCount: 15,
    followingCount: 3,
    messages: [
      {
        name: 'Anakin Skywalker',
        username: 'anakin',
        message: 'primer mensaje',
        repliesCount: 13,
      },
      {
        name: 'Anakin Skywalker',
        username: 'anakin',
        message: 'Segundo mensaje',
        repliesCount: 5,
      },
    ],
    replies: [{ message: 'Mi respuesta', repliesCount: 0 }],
  };

  return (
    <main className='flex flex-col bg-gray-100 p-8'>
      <section className='flex flex-col mb-8'>
        <div className='rounded-full text-center mb-4 block relative w-20 h-20'>
          <Image
            className='rounded-full'
            src={profilePic}
            alt='Picture of the author'
            fill
            priority
            placeholder='blur' // Optional blur-up while loading
          />
        </div>
        <h2 className='mb-1'>{user.name}</h2>
        <div className='text-md mb-4 text-gray-600 cursor-pointer'>
          @<Link href={`/users/${user.username}`}>{user.username}</Link>
        </div>
        <div className='mb-4'>{user.bio}</div>
        <div className='flex justify-between mb-4'>
          <div>
            <span className='font-semibold'>{user.followersCount}</span>{' '}
            Followers
          </div>
          <div>
            <span className='font-semibold'>{user.followingCount}</span>{' '}
            Following
          </div>
        </div>
      </section>

      <UserTabs messages={user.messages} replies={[]} />
    </main>
  );
};

export default UserPage;
