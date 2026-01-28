import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import {
  Alert,
  getAlertBackgroundBrightnessDefault,
} from '@skatteetaten/ds-status';

import AlertExample from './AlertExample';
import alertExampleCode from './AlertExample?raw';
import { category } from '../../../../.storybook/helpers';
import { SystemSVGPaths } from '../../utils/icon.systems';

const meta = {
  component: Alert,
  title: 'Komponenter/Alert',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    backgroundBrightness: {
      table: {
        category: category.props,
        defaultValue: { summary: getAlertBackgroundBrightnessDefault() },
      },
    },
    showAlert: { table: { category: category.props } },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    variant: { table: { category: category.props } },
    // Aria
    ariaLive: {
      table: { category: category.aria },
      defaultValue: { summary: 'polite' },
    },
    // Events
    onClose: { table: { category: category.event } },
  },
  args: {
    children:
      'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.',
    showAlert: true,
    variant: 'warning',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        code: alertExampleCode,
        type: 'auto',
        language: 'tsx',
      },
    },
    controls: {
      exclude: /.*/,
    },
  },
  render: (): JSX.Element => <AlertExample />,
} satisfies Story;
