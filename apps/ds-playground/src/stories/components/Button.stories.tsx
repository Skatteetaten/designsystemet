import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@skatteetaten/ds-buttons';
import { getSpinnerLabelDefault } from '@skatteetaten/ds-core-utils';

import {
  category,
  htmlEventDescription,
  svgPathDescription,
} from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Button,
  title: 'Komponenter/Button',
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
    svgPath: { ...svgPathDescription },
    variant: { table: { category: category.props } },
    // HTML
    accessKey: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    form: { table: { category: category.htmlAttribute } },
    href: { table: { category: category.htmlAttribute } },
    isExternal: { table: { category: category.props } },
    type: { table: { category: category.htmlAttribute } },
    // Aria
    ariaCurrent: { control: 'text', table: { category: category.aria } },
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  args: {
    children: 'Send inn skjema',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <>
        <Button className={'exampleSpacing'}>{'Send inn skjema'}</Button>
        <Button className={'exampleSpacing'} variant={'secondary'}>
          {'Avbryt'}
        </Button>
        <div>
          <Button className={'exampleSpacing'} variant={'tertiary'}>
            {'Logg inn'}
          </Button>
        </div>
        <Button className={'exampleSpacing'} variant={'danger'}>
          {'Slett'}
        </Button>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
