'use client';
import { MessageType } from '@/app/types/message.type';
import React, { useState } from 'react';
import Message from '../Message';

enum TabView {
  MESSAGES,
  REPLIES,
}

type UserTabsProps = {
  messages: MessageType[];
  replies: MessageType[];
};

const UserTabs = ({ messages, replies }: UserTabsProps) => {
  const [tab, setTab] = useState<TabView>(TabView.MESSAGES);

  return (
    <div>
      <div className='flex justify-evenly mb-4'>
        <div
          className={`cursor-pointer border-b-4 ${
            tab === TabView.MESSAGES ? 'border-blue-400' : ''
          }`}
          onClick={() => setTab(TabView.MESSAGES)}
        >
          Messages
        </div>
        <div
          className={`cursor-pointer border-b-4 ${
            tab === TabView.REPLIES ? 'border-blue-400' : ''
          }`}
          onClick={() => setTab(TabView.REPLIES)}
        >
          Replies
        </div>
      </div>
      <div>
        {tab === TabView.MESSAGES &&
          messages.map((message, index) => (
            <Message key={`${index}`} message={message} />
          ))}
        {tab === TabView.REPLIES &&
          replies.map((message, index) => (
            <Message key={`${index}`} message={message} />
          ))}
      </div>
    </div>
  );
};

export default UserTabs;
