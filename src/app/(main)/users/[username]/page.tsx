import Link from 'next/link';
import React, { use } from 'react';

const UserPage = ({ params }: { params: { username: string } }) => {
  const user = {
    username: params.username,
    name: 'Axel Angelini',
    bio: 'Yo soy Axel',
    followersCount: 15,
    followingCount: 3,
    messages: [
      { message: 'primer mensaje', repliesCount: 13 },
      { message: 'Segundo mensaje', repliesCount: 5 },
    ],
    replies: [{ message: 'Mi respuesta', repliesCount: 0 }],
  };

  return (
    <main className='flex flex-col bg-gray-100 p-8'>
      <section className='flex flex-col mb-8'>
        <div className='rounded-full p-6 bg-gray-300 w-20 text-center mb-4'>
          <span className='font-semibold text-lg'>AA</span>
        </div>
        <h2 className='font-semibold text-lg mb-1'>{user.name}</h2>
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

      <div className='flex justify-evenly mb-4'>
        <div className='cursor-pointer border-b-4 border-blue-400'>
          Messages
        </div>
        <div className='cursor-pointer'>Replies</div>
      </div>
      <div>
        {user.messages.map((message, index) => (
          <div key={`${index}`}>{message.message}</div>
        ))}
      </div>
    </main>
  );
};

export default UserPage;
