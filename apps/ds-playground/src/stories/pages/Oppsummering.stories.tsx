import { useEffect, useRef, useState, type JSX } from 'react';

import { linkTo } from '@storybook/addon-links';

import { Button, InlineButton, Link } from '@skatteetaten/ds-buttons';
import { Card, DescriptionList } from '@skatteetaten/ds-content';
import { Checkbox } from '@skatteetaten/ds-forms';
import { ArrowBackSVGpath, PrintSVGpath } from '@skatteetaten/ds-icons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './Oppsummering.module.css';
import stylesAsString from './Oppsummering.module.css?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';
import { withPageLayout } from '../../../.storybook/pagelayout-decorator';

export default {
  title: 'Sidetyper/Ekstern/Oppsummering',
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

export const Oppsummering = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const checkRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  return (
    <main className={styles.mainExternal}>
      <div className={styles.miniNav}>
        <Link href={'#'} svgPath={ArrowBackSVGpath}>
          {'Til Min side'}
        </Link>
        <InlineButton svgPath={PrintSVGpath}>{'Skriv ut'}</InlineButton>
      </div>
      <div className={styles.article}>
        <Heading as={'h1'} level={1} hasSpacing>
          {'Bekreft opplysninger om virksomheten.'}
        </Heading>
        <Paragraph className={styles.marginBottomXl} hasSpacing>
          {
            'Overanstrengelse formiddag utstår, besynderlighet hukommelse forrykke De ubehageligheter forretningsverdenen, arkskrift dødsfallet levetid den. Imellem vås veie, bestyrelse sengeliggende forstillelse tålte nyss. '
          }
        </Paragraph>
      </div>
      <div ref={panelRef} tabIndex={-1} className={styles.noFocusVisible}>
        <Card color={'forest'}>
          <Card.Content>
            <Heading as={'h2'} level={3} hasSpacing>
              {'Opplysninger om virksomheten'}
            </Heading>
            <DescriptionList>
              <DescriptionList.Element term={'Navn'}>
                {'McRonald Hansen'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Adresse'}>
                {'Adresseveien 1'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Postnummer'}>
                {'1314'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Poststed'}>
                {'Kolbotn'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Rolle'}>
                {'Styreeier'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Navn'}>
                {'McRonald Hansen'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Adresse'}>
                {'Adresseveien 1'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Postnummer'}>
                {'1314'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Poststed'}>
                {'Kolbotn'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Rolle'}>
                {'Styreeier'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
        </Card>
      </div>
      <div className={styles.article}>
        <Checkbox
          ref={checkRef}
          checked={isChecked}
          errorMessage={errorMessage}
          className={`${styles.marginTopM} ${styles.marginBottomXl}`}
          onChange={() => {
            setIsChecked(!isChecked);
            setErrorMessage('');
          }}
        >
          {'Jeg bekrefter at opplysningene stemmer'}
        </Checkbox>
        <Button
          className={styles.marginRightM}
          onClick={() => {
            if (isChecked) {
              linkTo('Sidetyper/Ekstern/Oppgaveliste', 'Oppgaveliste')();
            } else {
              setErrorMessage('Du må bekrefte at opplysningene stemmer.');
              checkRef.current?.focus();
            }
          }}
        >
          {'Lagre og gå til oppgaveliste'}
        </Button>
        <Button variant={'secondary'}>{'Avbryt'}</Button>
      </div>
    </main>
  );
};
