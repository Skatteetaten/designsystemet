import { sizeArr } from '@skatteetaten/ds-core-devutils';
import {
  Icon as DefaultIcon,
  AccountChildSVGpath,
  AccountEnkSVGpath,
  AccountMultipleSVGpath,
} from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import './icon.stories.css';

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

const svgPaths = {
  AccountChildSVGpath,
  AccountEnkSVGpath,
  AccountMultipleSVGpath,
};

Icon.argTypes = {
  className: { control: 'select', options: ['myIconClassname'] },
  title: { control: 'text' },
  'aria-label': { control: 'text' },
  role: {
    control: 'text',
    table: {
      defaultValue: {
        /* (args: TArgs, context: StoryContext<TFramework, TArgs>) */
        summary: `noe ${JSON.stringify(DefaultIcon.defaultProps)}`,
      },
    },
  },
  viewBox: { control: 'text' },
  size: { control: 'select', options: sizeArr, default: 'small' },
  svgPath: {
    options: Object.keys(svgPaths),
    mapping: svgPaths,
    control: {
      type: 'select',
      labels: {
        AccountChildSVGpath: 'AccountChild',
        AccountEnkSVGpath: 'AccountEnkSVG',
        AccountMultipleSVGpath: 'AccountMultiple',
      },
    },
    table: {
      type: { summary: 'select' },
      defaultValue: { summary: 'AccountChild' },
    },
  },
};

Icon.args = {
  ...{ ...DefaultIcon.defaultProps, 'aria-label': undefined },
  title: 'testingr',
  svgPath: AccountChildSVGpath,
};
