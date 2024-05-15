import { JSX } from 'react';

import { statusArr } from '@skatteetaten/ds-core-utils';
import { Alert } from '@skatteetaten/ds-status';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Alert,
  title: 'Komponenter/Alert',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    showAlert: { table: { category: category.props } },
    showCloseButton: { table: { category: category.props } },
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
  },
  args: {
    children:
      'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.',
    showAlert: true,
    variant: 'neutral',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <>
        <Alert
          variant={'success'}
          className={'bottomSpacingXL'}
          showAlert
          showCloseButton
        >
          {'Filen ble lastet opp'}
        </Alert>
        <Alert variant={'neutral'} className={'bottomSpacingXL'} showAlert>
          {
            'Disse feltene er låst for redigering fordi du har fått et varsel fra oss'
          }
        </Alert>
        <Alert variant={'warning'} className={'bottomSpacingXL'} showAlert>
          {
            'Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser.'
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
