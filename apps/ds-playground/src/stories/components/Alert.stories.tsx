import { statusArr } from '@skatteetaten/ds-core-utils';
import { Alert, AlertProps } from '@skatteetaten/ds-status';
import { StoryObj, Meta, StoryFn } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

const meta = {
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
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-status'),
  },
} satisfies Meta<AlertProps>;
export default meta;
type AlertStory = StoryObj<typeof meta>;

const TemplateExample: StoryFn<AlertProps> = () => {
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
};

export const AlertDefault = {
  name: 'Default',

  args: {
    children:
      'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.',
    showAlert: true,
    variant: 'neutral' as const,
  },
} satisfies AlertStory;

export const AlertExample = {
  render: TemplateExample,
  name: 'Example',

  args: {
    variant: 'danger',
    children: 'dummy',
  },
  parameters: {
    controls: { disabled: true },
  },
} satisfies AlertStory;
