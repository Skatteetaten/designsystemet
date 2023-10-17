import {
  InlineButton,
  getInlineButtonPositionDefault,
} from '@skatteetaten/ds-buttons';
import { positionArr } from '@skatteetaten/ds-core-utils';
import { AddOutlineSVGpath, CancelSVGpath } from '@skatteetaten/ds-icons';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

export default {
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
  parameters: {
    version: getVersion('ds-buttons'),
  },
} satisfies Meta<typeof InlineButton>;

export const Preview: StoryObj<typeof InlineButton> = {
  args: {
    children: 'Legg til rapport',
  },
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};

export const Example: StoryFn<typeof InlineButton> = () => (
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
