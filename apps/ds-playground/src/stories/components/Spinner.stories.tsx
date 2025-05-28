import { useEffect, useState, JSX, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  Spinner,
  getSpinnerColorDefault,
  getSpinnerLabelDefault,
  getSpinnerSizeDefault,
  getSpinnerTitlePositionDefault,
  spinnerSizeArr,
} from '@skatteetaten/ds-progress';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Spinner,
  title: 'Komponenter/Spinner',
  argTypes: {
    // Props
    classNames: { control: false, table: { category: category.props } },
    children: {
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerLabelDefault() },
      },
    },
    size: {
      options: [...spinnerSizeArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerSizeDefault() },
      },
    },
    titlePosition: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerTitlePositionDefault() },
      },
    },
    color: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerColorDefault() },
      },
    },
    percentComplete: {
      table: {
        category: category.props,
      },
    },
    hideTitle: { table: { category: category.props } },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [showSpinner, setShowSpinner] = useState(false);
    const [progress, setProgress] = useState(0);
    const interval = useRef<ReturnType<typeof setTimeout> | undefined>(
      undefined
    );
    useEffect(() => {
      if (progress === 100) {
        clearInterval(interval.current);
      }
    }, [progress]);
    return (
      <>
        <Button
          onClick={() => {
            setProgress(0);
            setShowSpinner(!showSpinner);
            if (interval.current) {
              clearInterval(interval.current);
              interval.current = undefined;
            }
            interval.current = setInterval(() => {
              setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
            }, 1000);
          }}
        >
          {'toggle spinner'}
        </Button>
        {showSpinner && (
          <Spinner
            percentComplete={progress}
            className={'bottomSpacingXL'}
            size={'large'}
            color={'blue'}
            titlePosition={'right'}
          />
        )}
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
