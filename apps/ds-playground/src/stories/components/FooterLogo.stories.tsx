import { Footer } from '@skatteetaten/ds-layout';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import logo from '../../assets/ske-logo-horizontal-white.png';

const meta = {
  component: Footer.Logo,
  title: 'Komponenter/Footer/Logo',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  args: {
    children: (
      <img className={'logoHeight'} alt={'Logo Skatteetaten'} src={logo}></img>
    ),
  },
} satisfies Meta<typeof Footer.Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  parameters: {
    backgrounds: { default: 'themePrimary' },
  },
} satisfies Story;
