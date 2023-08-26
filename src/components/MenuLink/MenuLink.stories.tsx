import { MenuLink, MenuLinkProps } from './MenuLink';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'MenuLink',
  component: MenuLink,
  tags: ['autodocs'],
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta<typeof MenuLink>;

export const Template: StoryFn<MenuLinkProps> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};
