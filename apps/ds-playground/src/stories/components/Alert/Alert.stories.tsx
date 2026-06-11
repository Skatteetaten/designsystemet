import { Meta, StoryObj } from '@storybook/react-vite';

import { Alert } from '@skatteetaten/ds-status';

import {
  category,
  htmlEventDescription,
  svgPathDescription,
} from '../../../../.storybook/helpers';

const meta = {
  component: Alert,
  title: 'Komponenter/Alert',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    backgroundBrightness: { table: { category: category.props } },
    showAlert: { table: { category: category.props } },
    svgPath: { ...svgPathDescription },
    variant: { table: { category: category.props } },
    // Aria
    ariaLive: {
      table: { category: category.aria },
      description:
        'Default verdi er "polite" for alle varianter unntatt "danger" som bruker "assertive". Bruk "off" hvis varselet ligger på siden når siden lastes. Les mer om aria-live på <a href="https://www.skatteetaten.no/en/stilogtone/designsystemet/komponenter/alert#statiske-og-dynamiske-varsler" target="_blank" rel="noopener noreferrer">stil og tone</a>.',
    },
    // Events
    onClose: { ...htmlEventDescription },
  },
  args: {
    children:
      'Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser.',
    showAlert: true,
    variant: 'warning',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  tags: ['!dev'],
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

export const ErrorAlert: Story = {
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
