import { MessageType } from '@/app/types/message.type';
import { PageType } from '@/app/types/pagination.types';
import { UserType } from '@/app/types/user.types';

const API_URL = 'http://localhost:8080/api';
const API_PUBLIC_URL = `${API_URL}/public`;

export const getUserData = async (username: string): Promise<UserType> => {
  const res = await fetch(`${API_PUBLIC_URL}/users/${username}`);

  if (!res.ok) {
    throw new Error('Failed to retrieve user');
  }

  return res.json();
};

export const getUserMessages = async (
  username: string
): Promise<PageType<MessageType>> => {
  const res = await fetch(`${API_PUBLIC_URL}/users/${username}/messages`);

  if (!res.ok) {
    throw new Error('Failed to retrieve user messages');
  }

  return res.json();
};

export const getUserMessageReplies = async (
  username: string
): Promise<PageType<MessageType>> => {
  const res = await fetch(
    `${API_PUBLIC_URL}/users/${username}/messages/replies`
  );

  if (!res.ok) {
    throw new Error('Failed to retrieve user messages');
  }

  return res.json();
};
