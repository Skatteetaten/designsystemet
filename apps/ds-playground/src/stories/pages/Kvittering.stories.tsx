import { JSX } from 'react';

import { Button, InlineButton, Link } from '@skatteetaten/ds-buttons';
import { OpenClose } from '@skatteetaten/ds-collections';
import { DescriptionList, Panel } from '@skatteetaten/ds-content';
import {
  formatNationalIdentityNumber,
  formatPhoneNumber,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import {
  ArrowBackSVGpath,
  CheckIcon,
  PrintSVGpath,
} from '@skatteetaten/ds-icons';
import { Person } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './Kvittering.module.css';
import stylesAsString from './Kvittering.module.css?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';
import { withPageLayout } from '../../../.storybook/pagelayout-decorator';

export default {
  title: 'Sidetyper/Ekstern/Kvittering',
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

export const Kvittering = (): JSX.Element => {
  const isMobile = !useMediaQuery('(min-width: 480px)');

  const me: Person = {
    name: 'Knuslete Foxtrot',
    personId: '12345678910',
    type: 'Person',
  };

  return (
    <main className={styles.mainExternal}>
      <div className={styles.miniNav}>
        <Link href={'#'} svgPath={ArrowBackSVGpath}>
          {'Til Min side'}
        </Link>
        <InlineButton svgPath={PrintSVGpath}>{'Skriv ut'}</InlineButton>
      </div>
      <div className={styles.article}>
        <Heading as={'h1'} hasSpacing>
          {'Skjematittel'}
        </Heading>
        <DescriptionList hasSpacing>
          <DescriptionList.Element term={'Navn'}>
            {'Knuslete Foxtrot'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Fødselsnummer'}>
            {formatNationalIdentityNumber(me.personId)}
          </DescriptionList.Element>
        </DescriptionList>
      </div>
      {/* Ved navigering fra skjema til kvittering er Panel eneste endring på siden.
      Derfor skal fokus settes hit. */}
      <div tabIndex={-1} className={styles.noFocusVisible}>
        <Panel
          className={styles.panel}
          variant={'outline'}
          color={'forest'}
          title={'[Skjematittel] er sendt inn'}
          titleAs={'h2'}
          renderIcon={(): JSX.Element => (
            <div className={styles.checkIconContainer}>
              <CheckIcon size={'large'} className={styles.checkIcon} />
            </div>
          )}
        >
          <Paragraph className={styles.marginTopM}>
            {'Det kan ta inntil 4 uker før du får svar.'}
          </Paragraph>
          <Paragraph hasSpacing>
            {'Du finner en kopi av skjemaet i innboksen din på Min side.'}
          </Paragraph>
          <Paragraph>{'Sendt inn: 03.07.2023 11:03'}</Paragraph>
          <Paragraph hasSpacing>
            {'Referansenummer: '}
            <strong>{'IN-PG-1234567'}</strong>
          </Paragraph>
          <OpenClose title={'Se hva du har sendt inn'}>
            <DescriptionList
              descriptionDirection={isMobile ? 'vertical' : 'horizontal'}
            >
              <DescriptionList.Element term={'Innsender'}>
                {'Knuslete Foxtrot'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Adresse'}>
                <span className={styles.preLine}>
                  {'Adresseveien 1\n1234 Lillevik'}
                </span>
              </DescriptionList.Element>
              <DescriptionList.Element term={'Telefon'}>
                {formatPhoneNumber('98765432')}
              </DescriptionList.Element>
            </DescriptionList>
          </OpenClose>
        </Panel>
      </div>
      <div className={styles.article}>
        <Button className={styles.marginRightM}>{'Til Min side'}</Button>
        <Button variant={'secondary'}>{'Logg ut'}</Button>
      </div>
    </main>
  );
};
