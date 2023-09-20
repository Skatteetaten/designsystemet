import { IconButton, getIconButtonSizeDefault } from '@skatteetaten/ds-buttons';
import { sizeArr } from '@skatteetaten/ds-core-utils';
import { PrintSVGpath } from '@skatteetaten/ds-icons';
import { action } from '@storybook/addon-actions';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

const availableSizes = [...sizeArr].slice(0, 4);
const meta = {
  component: IconButton,
  title: 'Komponenter/IconButton',
  argTypes: {
    // Props
    isOutlined: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    size: {
      options: availableSizes,
      control: 'radio',
      table: {
        type: { summary: availableSizes.toString() },
        category: category.props,
        defaultValue: { summary: getIconButtonSizeDefault() },
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    title: {
      table: {
        category: category.props,
      },
    },
    // HTML
    accessKey: {
      table: { category: category.htmlAttribute },
    },
    disabled: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    type: {
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: 'button' },
      },
    },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-buttons'),
  },
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof IconButton> = (args) => (
  <IconButton {...args} onClick={action('KlikkEvent IconButton')} />
);

const TemplateExample: StoryFn<typeof IconButton> = () => (
  <>
    <div>
      <IconButton
        className={'exampleSpacing'}
        svgPath={PrintSVGpath}
        size={'extraSmall'}
        title={'Skriv ut'}
        isOutlined
      />
      <IconButton
        svgPath={PrintSVGpath}
        size={'extraSmall'}
        title={'Skriv ut'}
      />
    </div>
    <div>
      <IconButton
        className={'exampleSpacing'}
        svgPath={PrintSVGpath}
        size={'small'}
        title={'Skriv ut'}
        isOutlined
      />
      <IconButton svgPath={PrintSVGpath} size={'small'} title={'Skriv ut'} />
    </div>
    <div>
      <IconButton
        className={'exampleSpacing'}
        svgPath={PrintSVGpath}
        size={'medium'}
        title={'Skriv ut'}
        isOutlined
      />
      <IconButton svgPath={PrintSVGpath} size={'medium'} title={'Skriv ut'} />
    </div>
    <div>
      <IconButton
        className={'exampleSpacing'}
        svgPath={PrintSVGpath}
        size={'large'}
        title={'Skriv ut'}
        isOutlined
      />
      <IconButton svgPath={PrintSVGpath} size={'large'} title={'Skriv ut'} />
    </div>
  </>
);

export const IconButtonDefault = {
  render: TemplateDefault,
  name: 'Default',
  args: {
    svgPath: Object.values(SystemSVGPaths)[14], // Bell icon
    size: getIconButtonSizeDefault(),
    title: 'default tekst accessible name',
  },
} satisfies Story;

export const IconButtonExample = {
  render: TemplateExample,
  name: 'Example',
  args: {
    title: 'dummy',
    svgPath: Object.values(SystemSVGPaths)[14], // Bell icon
  },
  parameters: {
    controls: { disable: true },
  },
} satisfies Story;
