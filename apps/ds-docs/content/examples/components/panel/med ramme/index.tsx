import { Link, MegaButton } from '@skatteetaten/ds-buttons';
import { Panel } from '@skatteetaten/ds-content';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

const farmerIllustration = new URL('./farmer-illustration.svg', import.meta.url)
  .href;

export default function PanelPreviewStateExample(): JSX.Element {
  return (
    <Panel
      title={'Når kommer skattepengene?'}
      imageSource={farmerIllustration}
      spacing={'xl'}
      variant={'outline'}
    >
      <Paragraph hasSpacing>
        <Link href={'#'}>
          {'Vi varsler deg nar skatteoppgjoret ditt er klart.'}
        </Link>
      </Paragraph>
      <Paragraph hasSpacing>
        {
          'Vi kan dessverre ikke gi deg en konkret dato for nar du far oppgjoret ditt, verken pa telefon, facebook eller chat.'
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
