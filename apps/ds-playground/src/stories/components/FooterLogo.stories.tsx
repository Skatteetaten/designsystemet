import { Footer } from '@skatteetaten/ds-layout';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import logo from '../__tests__/testUtils/Skatteetaten-Logo-Horisontal-RGB-Hvit.png';
import illustration from '../__tests__/testUtils/test_bonde.svg';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Footer.Logo,
  title: 'Komponenter/Footer/Logo',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-layout'),
  },
} satisfies Meta<typeof Footer.Logo>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof Footer.Logo> = () => (
  <Footer>
    <Footer.Logo>
      <img className={'logoHeight'} alt={'Logo'} src={logo}></img>
    </Footer.Logo>
    <Footer.Logo>
      <img className={'logoHeight'} alt={'Bilde'} src={illustration}></img>
    </Footer.Logo>
  </Footer>
);

export const FooterDefault = {
  render: TemplateDefault,
  name: 'Default',
} satisfies Story;
