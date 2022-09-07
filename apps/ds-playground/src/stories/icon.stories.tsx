import { sizeArr } from '@skatteetaten/ds-core-devutils';
import {
  Icon as DefaultIcon,
  AccountChildSVGpath,
  AccountEnkSVGpath,
  AccountMultipleSVGpath,
} from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import './icon.css';

export default {
  component: DefaultIcon,
  title: 'Design System',
} as ComponentMeta<typeof DefaultIcon>;

const Template: ComponentStory<typeof DefaultIcon> = (args) => (
  <div style={{ width: '150px' }}>
    <DefaultIcon {...args} />
  </div>
);

export const Icon = Template.bind({});

Icon.argTypes = {
  className: { control: 'select', options: ['myIconClassname'] },
  title: { control: 'text' },
  'aria-label': { control: 'text' },
  role: { control: 'text' },
  viewBox: { control: 'text' },
  size: { control: 'select', options: sizeArr },
  svgPath: {
    name: 'icon',
    options: ['AccountChild', 'AccountEnk', 'AccountMultiple'],
    control: { type: 'select' },
    mapping: {
      AccountChild: AccountChildSVGpath,
      AccountEnk: AccountEnkSVGpath,
      AccountMultiple: AccountMultipleSVGpath,
    },
  },
};

Icon.args = {
  title: 'Default title',
  viewBox: '0 0 24 24',
};
