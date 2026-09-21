import { JSX } from 'react';

import { Link, MegaButton } from '@skatteetaten/ds-buttons';
import { Panel } from '@skatteetaten/ds-content';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function PanelPreviewStateExample(): JSX.Element {
  return (
    <Panel
      title={'Når kommer skattepengene?'}
      spacing={'xl'}
      variant={'outline'}
    >
      <Paragraph hasSpacing>
        <Link href={'#'}>
          {'Vi varsler deg når skatteoppgjøret ditt er klart.'}
        </Link>
      </Paragraph>
      <Paragraph hasSpacing>
        {
          'Vi kan dessverre ikke gi deg en konkret dato for når du får oppgjøret ditt, verken på telefon, facebook eller chat.'
        }
      </Paragraph>
      <Paragraph>{'Logg inn:'}</Paragraph>
      <MegaButton>{'Sjekk skatten'}</MegaButton>
      <Paragraph className={styles.dummySpacingTop}>
        {
          'Ser du etter skattemeldingen? Hvis du oppdager feil eller har mottatt nye eller forsinkede opplysninger, kan du fortsatt '
        }
        <Link href={'#'}>{'se, endre og levere skattemeldingen'}</Link>
        {'.'}
      </Paragraph>
    </Panel>
  );
}
