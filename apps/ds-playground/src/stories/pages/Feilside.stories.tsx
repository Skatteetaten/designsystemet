import { JSX } from 'react';

import { StoryObj } from '@storybook/react-vite';

import { Link } from '@skatteetaten/ds-buttons';
import { OpenClose } from '@skatteetaten/ds-collections';
import { ArrowForwardSVGpath } from '@skatteetaten/ds-icons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import stylesAsString from './Feilside.module.scss?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';
import { withPageLayout } from '../../../.storybook/pagelayout-decorator';

import styles from './Feilside.module.scss';

export default {
  title: 'Sidetyper/Ekstern/Feilside',
  decorators: [withPageLayout],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
    docs: {
      source: {
        transform: includeStylesTransform(stylesAsString),
      },
    },
  },
};

const InnloggetTemplate = (): JSX.Element => {
  return (
    <main className={styles.mainContent}>
      <section className={styles.article}>
        <div>
          <Heading as={'h1'} hasSpacing>
            <span className={styles.label}>{'Statuskode 404'}</span>
            {'Siden finnes ikke'}
          </Heading>
        </div>
        <Paragraph variant={'ingress'} className={styles.ingress}>
          {
            'Beklager, denne siden kan være flyttet eller slettet, eller det er en feil i lenken.'
          }
        </Paragraph>

        <Link
          svgPath={ArrowForwardSVGpath}
          className={styles.link}
          href={'https://skatt.skatteetaten.no/web/minside/'}
        >
          {'Gå til Min Side'}
        </Link>

        <OpenClose
          variant={'compact'}
          title={'Teknisk feilmelding'}
          className={styles.openClose}
        >
          {
            'Her kan man skrive en tekst av mer teknisk art, dersom noen i publikum skulle trenge å lese den. «Noen har trukket ut kontakten til en server, så vi har hatt litt trøbbel med å starte alt på nytt. Ekspertene er på saken.'
          }
        </OpenClose>
      </section>
    </main>
  );
};

export const Innlogget: StoryObj = {
  render: InnloggetTemplate,
  parameters: {
    pageLayout: { showAsSignedIn: true },
  },
};

export const Uinnlogget = (): JSX.Element => {
  return (
    <main className={styles.mainContent}>
      <section className={styles.article}>
        <div>
          <Heading as={'h1'} hasSpacing>
            <span className={styles.label}>{'Statuskode 404'}</span>
            {'Siden finnes ikke'}
          </Heading>
        </div>
        <Paragraph variant={'ingress'} className={styles.ingress}>
          {
            'Beklager, denne siden kan være flyttet eller slettet, eller det er en feil i lenken.'
          }
        </Paragraph>

        <Link
          svgPath={ArrowForwardSVGpath}
          href={'https://skatteetaten.no'}
          className={styles.link}
        >
          {'Gå til forsiden'}
        </Link>

        <OpenClose
          variant={'compact'}
          title={'Teknisk feilmelding'}
          className={styles.openClose}
        >
          {
            'Her kan man skrive en tekst av mer teknisk art, dersom noen i publikum skulle trenge å lese den. «Noen har trukket ut kontakten til en server, så vi har hatt litt trøbbel med å starte alt på nytt. Ekspertene er på saken.'
          }
        </OpenClose>
      </section>
    </main>
  );
};
