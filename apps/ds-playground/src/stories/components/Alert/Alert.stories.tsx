import { Meta, StoryObj } from '@storybook/react-vite';

import { Alert } from '@skatteetaten/ds-status';
import { Paragraph } from '@skatteetaten/ds-typography';

import {
  category,
  htmlEventDescription,
  svgPathDescription,
} from '../../../../.storybook/helpers';
import { JSX } from 'react';

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

export const Static: Story = {
  name: 'Statiske varsler',
  render: (_args): JSX.Element => {
    return (
      <>
        <Paragraph hasSpacing>
          {
            'Alert kan brukes både til varsler som er synlige når siden lastes, og til varsler som vises eller endres etter at brukeren har gjort noe.'
          }
        </Paragraph>
        <Paragraph hasSpacing>
          {
            'Du må velge ariaLive ut fra om varselet er statisk eller dynamisk. Ikke la standardverdien stå uten en bevisst vurdering.'
          }
        </Paragraph>
        <Paragraph hasSpacing>
          {'Bruk '}
          <strong>{'ariaLive="off"'}</strong>
          {
            ' når varselet allerede er synlig når siden lastes, eller når varselet er en fast del av innholdet på siden eller i skjemaet. Innholdet er fortsatt tilgjengelig for skjermleserbrukere når de navigerer til varselet, men det blir ikke lest opp automatisk.'
          }
        </Paragraph>
        <div className={'flex flexColumn gapXl'}>
          <Alert variant={'info'} ariaLive={'off'} showAlert>
            {
              'Vi jobber med a utvikle denne siden, og du vil kunne se flere av sakene dine etter hvert.'
            }
          </Alert>
          <Alert variant={'warning'} ariaLive={'off'} showAlert>
            {
              'Hvis du henter frem skatteopplysninger for en person, blir det synlig for denne personen.'
            }
          </Alert>
        </div>
      </>
    );
  },
} satisfies Story;

export const Dynamic: Story = {
  name: 'Dynamiske varsler',
  render: (_args): JSX.Element => {
    return (
      <>
        <Paragraph hasSpacing>
          {
            'Alert kan brukes både til varsler som er synlige når siden lastes, og til varsler som vises eller endres etter at brukeren har gjort noe.'
          }
        </Paragraph>
        <Paragraph hasSpacing>
          {
            'Du må velge ariaLive ut fra om varselet er statisk eller dynamisk. Ikke la standardverdien stå uten en bevisst vurdering. Standardverdien er '
          }
          <strong>{'"polite"'}</strong>
          {' til alle varianter, unntatt "danger"-varianten som bruker '}
          <strong>{'"assertive"'}</strong>
          {'.'}
        </Paragraph>
        <Paragraph hasSpacing>
          {'Bruk '}
          <strong>{'ariaLive="polite"'}</strong>
          {
            ' når varselet vises eller endres dynamisk, for eksempel etter at brukeren har gjort et valg, lagret noe eller det har skjedd en endring på siden. Meldingen blir da lest opp av skjermleser på et passende tidspunkt.'
          }
        </Paragraph>
        <div className={'flex flexColumn gapXl'}>
          <Alert variant={'success'} showAlert>
            {'Filen ble lastet opp'}
          </Alert>
          <Paragraph>
            {'Bruk '}
            <strong>{'ariaLive="assertive"'}</strong>
            {
              ' bare når meldingen er kritisk eller tidssensitiv, og brukeren må få den med seg med en gang. Denne verdien kan avbryte det skjermleseren allerede leser, og skal derfor brukes sjelden.'
            }
          </Paragraph>
          <Alert variant={'danger'} showAlert>
            {'Strengt fortrolig (Kode 6)'}
          </Alert>
        </div>
      </>
    );
  },
} satisfies Story;
