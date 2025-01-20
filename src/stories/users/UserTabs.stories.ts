import UserTabs from '@/app/components/users/UserTabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Users/UserTabs',
  component: UserTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const messages = [
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
];

const replies = [
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

export const MessageTab: Story = {
  args: {
    messages: messages,
    replies: replies,
  },
};
