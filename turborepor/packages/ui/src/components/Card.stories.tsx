import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    children: 'Elevated Card',
    variant: 'elevated',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Card',
    variant: 'outline',
  },
};

export const Filled: Story = {
  args: {
    children: 'Filled Card',
    variant: 'filled',
  },
}; 