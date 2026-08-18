import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from '@skatteetaten/ds-buttons';
import { defaultSpinnerLabel } from '@skatteetaten/ds-core-utils';
import { PrintSVGpath } from '@skatteetaten/ds-icons';

import {
  category,
  htmlEventDescription,
  svgPathDescription,
} from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: IconButton,
  title: 'Komponenter/IconButton',
  argTypes: {
    // Props
    brightness: { table: { category: category.props } },
    hasSpinner: { table: { category: category.props } },
    spinnerTitle: {
      table: {
        category: category.props,
        defaultValue: { summary: defaultSpinnerLabel },
      },
    },
    isOutlined: { table: { category: category.props } },
    size: { table: { category: category.props } },
    svgPath: { ...svgPathDescription },
    // HTML
    accessKey: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    title: { table: { category: category.htmlAttribute } },
    type: { table: { category: category.htmlAttribute } },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    ariaExpanded: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  args: {
    title: 'Skriv ut',
    svgPath: PrintSVGpath,
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <>
        <div>
          <IconButton
            className={'exampleSpacing'}
            svgPath={PrintSVGpath}
            size={'small'}
            title={'Skriv ut'}
            isOutlined
          />
          <IconButton
            svgPath={PrintSVGpath}
            size={'small'}
            title={'Skriv ut'}
          />
        </div>
        <div>
          <IconButton
            className={'exampleSpacing'}
            svgPath={PrintSVGpath}
            size={'medium'}
            title={'Skriv ut'}
            isOutlined
          />
          <IconButton
            svgPath={PrintSVGpath}
            size={'medium'}
            title={'Skriv ut'}
          />
        </div>
        <div>
          <IconButton
            className={'exampleSpacing'}
            svgPath={PrintSVGpath}
            size={'large'}
            title={'Skriv ut'}
            isOutlined
          />
          <IconButton
            svgPath={PrintSVGpath}
            size={'large'}
            title={'Skriv ut'}
          />
        </div>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
