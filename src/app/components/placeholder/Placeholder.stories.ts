import type { Meta, StoryObj } from '@storybook/angular';

import Placeholder from './placeholder.component';

const meta: Meta<Placeholder> = {
  title: 'Example/Placeholder',
  component: Placeholder,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<Placeholder>;

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Placeholder',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Placeholder',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Placeholder',
  },
};
