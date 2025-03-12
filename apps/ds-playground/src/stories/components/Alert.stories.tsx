import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { statusArr } from '@skatteetaten/ds-core-utils';
import {
  Alert,
  getAlertBackgroundBrightnessDefault,
} from '@skatteetaten/ds-status';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

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
    showAlert: {
      table: { category: category.props },
      control: 'radio',
      options: [true, false],
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    variant: {
      options: [...statusArr],
      control: 'radio',
      table: {
        category: category.props,
      },
    },
    // Aria
    ariaLive: { table: { category: category.aria } },
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
  render: (_args): JSX.Element => {
    return (
      <>
        <Alert variant={'info'} className={'bottomSpacingXL'} showAlert>
          {
            'Disse feltene er låst for redigering fordi du har fått et varsel fra oss'
          }
        </Alert>
        <Alert variant={'success'} className={'bottomSpacingXL'} showAlert>
          {'Filen ble lastet opp'}
        </Alert>

        <Alert variant={'warning'} className={'bottomSpacingXL'} showAlert>
          {
            'Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser.'
          }
        </Alert>
        <Alert variant={'error'} className={'bottomSpacingXL'} showAlert>
          {
            'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.'
          }
        </Alert>
        <Alert variant={'danger'} showAlert>
          {'Strengt fortrolig (Kode 6)'}
        </Alert>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
