import { statusArr } from '@skatteetaten/ds-core-utils';
import { Alert } from '@skatteetaten/ds-status';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

export default {
  component: Alert,
  title: 'Komponenter/Alert',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    showAlert: { control: 'boolean', table: { category: category.props } },
    showCloseButton: {
      control: 'boolean',
      table: { category: category.props },
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
  },
  parameters: {
    version: getVersion('ds-status'),
    /*     controls: { exclude: [] }, */
  },
} satisfies Meta<typeof Alert>;

export const MyDocs: StoryObj<typeof Alert> = {
  tags: ['isHidden'],
  args: {
    children: 'This is docs - Avvist av kortutsteder. ',
    showAlert: true,
    variant: 'neutral',
  },
};

export const Preview: StoryObj<typeof Alert> = {
  args: {
    children:
      'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.',
    showAlert: true,
    variant: 'neutral',
  },
};

export const Example: StoryFn<typeof Alert> = (_args) => (
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

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
