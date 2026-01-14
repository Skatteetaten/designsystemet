import { JSX } from 'react';

import { StoryObj } from '@storybook/react-vite';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { OpenClose } from '@skatteetaten/ds-collections';
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
          <Paragraph className={styles.label}>{'Statuskode 404'}</Paragraph>
          <Heading as={'h1'} hasSpacing>
            {'Siden finnes ikke'}
          </Heading>
        </div>
        <Paragraph variant={'ingress'} className={styles.ingress}>
          {
            'Beklager, denne siden kan være flyttet eller slettet, eller det er en feil i lenken.'
          }
        </Paragraph>

        <LinkGroup>
          <LinkGroup.Link href={'https://skatt.skatteetaten.no/web/minside/'}>
            {'Gå til Min Side'}
          </LinkGroup.Link>
          <LinkGroup.Link href={'#'}>
            {'Meld fra om ødelagt lenke'}
          </LinkGroup.Link>
        </LinkGroup>

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
          <Paragraph className={styles.label}>{'Statuskode 404'}</Paragraph>
          <Heading as={'h1'} hasSpacing>
            {'Siden finnes ikke'}
          </Heading>
        </div>
        <Paragraph variant={'ingress'} className={styles.ingress}>
          {
            'Beklager, denne siden kan være flyttet eller slettet, eller det er en feil i lenken.'
          }
        </Paragraph>

        <LinkGroup>
          <LinkGroup.Link href={'https://skatteetaten.no'}>
            {'Gå til forsiden'}
          </LinkGroup.Link>
          <LinkGroup.Link href={'#'}>
            {'Meld fra om ødelagt lenke'}
          </LinkGroup.Link>
        </LinkGroup>

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
