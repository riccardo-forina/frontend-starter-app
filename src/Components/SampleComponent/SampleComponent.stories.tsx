import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { expect, within } from 'storybook/test';
import SampleComponent from './sample-component';

const meta: Meta<typeof SampleComponent> = {
  title: 'Components/SampleComponent',
  component: SampleComponent,
};

export default meta;
type Story = StoryObj<typeof SampleComponent>;

export const Default: Story = {
  args: {
    children: 'Hello from the starter app!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.findByText('Hello from the starter app!'),
    ).resolves.toBeInTheDocument();
  },
};
