import Message from '@/app/components/messages/Message';
import React from 'react';

const MessagePage = () => {
  const messages = [
    {
      name: 'Han Solo',
      username: 'Solo',
      message: 'Tercer mensaje',
      repliesCount: 2,
    },
    {
      name: 'Anakin Skywalker',
      username: 'anakin',
      message: 'Segundo mensaje',
      repliesCount: 5,
    },
  ];

  return (
    <main className='flex flex-col bg-gray-100 p-8'>
      <section className='flex flex-col mb-8'>
        {messages.map((message, index) => (
          <Message key={`${index}`} message={message} />
        ))}
      </section>
    </main>
  );
};

export default MessagePage;
