import {
  InlineButton,
  getInlineButtonPositionDefault,
} from '@skatteetaten/ds-buttons';
import { positionArr } from '@skatteetaten/ds-core-utils';
import { AddOutlineSVGpath, CancelSVGpath } from '@skatteetaten/ds-icons';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';

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
} as ComponentMeta<typeof InlineButton>;

const TemplateDefault: ComponentStory<typeof InlineButton> = (args) => (
  <InlineButton {...args} onClick={action('klikkEvent InlineButton')}>
    {args.children}
  </InlineButton>
);
const TemplateExample: ComponentStory<typeof InlineButton> = () => (
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

export const InlineButtonDefault = TemplateDefault.bind({});
export const InlineButtonExample = TemplateExample.bind({});
InlineButtonDefault.storyName = 'Default';
InlineButtonExample.storyName = 'Example';

InlineButtonDefault.args = {
  children: 'Legg til rapport',
  iconPosition: getInlineButtonPositionDefault(),
};
