import { Footer } from '@skatteetaten/ds-layout';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import illustration from '../../assets/farmer-illustration.svg';
import logo from '../../assets/ske-logo-horizontal-white.png';
import { getVersion } from '../utils/version.utils';

export default {
  component: Footer.Logo,
  title: 'Komponenter/Footer/Logo',
  argTypes: {
    // Props
    children: { control: { type: null }, table: { category: category.props } },
  },
  parameters: {
    version: getVersion('ds-layout'),
  },
} satisfies Meta<typeof Footer.Logo>;

const Template: StoryFn<typeof Footer.Logo> = () => (
  <Footer titleFirstColumn={'Om Skatteetaten'}>
    <Footer.Logo>
      <img className={'logoHeight'} alt={'Logo'} src={logo}></img>
    </Footer.Logo>
    <Footer.Logo>
      <img className={'logoHeight'} alt={'Bilde'} src={illustration}></img>
    </Footer.Logo>
  </Footer>
);

export const Preview = {
  render: Template,
  args: {
    children: 'dummy',
  },
} satisfies StoryObj<typeof Footer.Logo>;