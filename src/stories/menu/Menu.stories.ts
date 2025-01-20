import Menu from '@/app/components/menu/Menu';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Menu/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    links: [
      { title: 'Home', href: '/' },
      { title: 'Explore', href: '/explore' },
      { title: 'Profile', href: '/my-profile' },
    ],
  },
};
