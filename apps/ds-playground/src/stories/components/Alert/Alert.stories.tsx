import { Meta, StoryObj } from '@storybook/react-vite';

import {
  Alert,
  getAlertBackgroundBrightnessDefault,
} from '@skatteetaten/ds-status';

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

export const Preview: Story = {
  tags: ['!dev', '!autodocs'],
} satisfies Story;

export const Info: Story = {
  name: 'Nøytral',
  args: {
    variant: 'info',
    children:
      'Disse feltene er låst for redigering fordi du har fått et varsel fra oss',
  },
} satisfies Story;

export const Success: Story = {
  name: 'Suksess',
  args: {
    variant: 'success',
    children: 'Filen ble lastet opp',
  },
} satisfies Story;

export const Warning: Story = {
  name: 'Advarsel',
  args: {
    variant: 'warning',
    children:
      'Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser.',
  },
} satisfies Story;

export const Error: Story = {
  name: 'Feil',
  args: {
    variant: 'error',
    children:
      'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.',
  },
} satisfies Story;

export const Danger: Story = {
  name: 'Fare',
  args: {
    variant: 'danger',
    children: 'Strengt fortrolig (Kode 6)',
  },
} satisfies Story;
