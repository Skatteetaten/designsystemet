import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { getSpinnerLabelDefault } from '@skatteetaten/ds-core-utils';
import { AddOutlineSVGpath, CancelSVGpath } from '@skatteetaten/ds-icons';

import {
  category,
  htmlEventDescription,
  svgPathDescription,
} from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: InlineButton,
  title: 'Komponenter/InlineButton',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    hasSpinner: { table: { category: category.props } },
    spinnerTitle: {
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerLabelDefault() },
      },
    },
    iconPosition: { table: { category: category.props } },
    brightness: { table: { category: category.props } },
    svgPath: { ...svgPathDescription },
    // HTML
    accessKey: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    form: { table: { category: category.htmlAttribute } },
    type: { table: { category: category.htmlAttribute } },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
    onBlur: { ...htmlEventDescription },
  },
  args: {
    children: 'Legg til rapport',
  },
} satisfies Meta<typeof InlineButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
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
  },
} satisfies Story;
Examples.parameters = exampleParameters;
