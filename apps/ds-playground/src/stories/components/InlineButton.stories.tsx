import {
  InlineButton,
  getInlineButtonPositionDefault,
} from '@skatteetaten/ds-buttons';
import { positionArr } from '@skatteetaten/ds-core-utils';
import { AddOutlineSVGpath, CancelSVGpath } from '@skatteetaten/ds-icons';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: InlineButton,
  title: 'Komponenter/InlineButton',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    iconPosition: {
      options: [...positionArr],
      control: 'radio',
      table: {
        type: { summary: positionArr.toString() },
        category: category.props,
        defaultValue: { summary: getInlineButtonPositionDefault() },
      },
    },
    svgPath: {
      options: [''].concat(Object.keys(SystemSVGPaths)),
      mapping: SystemSVGPaths,
      table: { category: category.props },
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
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
    onBlur: { ...htmlEventDescription },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-buttons'),
  },
} satisfies Meta<typeof InlineButton>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof InlineButton> = (args) => (
  <InlineButton {...args} onClick={action('klikkEvent InlineButton')}>
    {args.children}
  </InlineButton>
);
const TemplateExample: StoryFn<typeof InlineButton> = () => (
  <div className={'flex'}>
    <InlineButton className={'exampleSpacing'} svgPath={AddOutlineSVGpath}>
      {'Legg til'}
    </InlineButton>
    <InlineButton
      className={'exampleSpacing'}
      svgPath={CancelSVGpath}
      iconPosition={'right'}
    >
      {'Fjern'}
    </InlineButton>
  </div>
);

export const InlineButtonDefault = {
  render: TemplateDefault,
  name: 'Default',

  args: {
    children: 'Legg til rapport',
    iconPosition: getInlineButtonPositionDefault(),
  },
} satisfies Story;

export const InlineButtonExample = {
  render: TemplateExample,
  name: 'Example',

  parameters: {
    controls: { disabled: true },
  },
  args: {
    children: 'dummy',
  },
} satisfies Story;
