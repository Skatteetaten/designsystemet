import { JSX } from 'react';

import { Panel } from '@skatteetaten/ds-content';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function PanelAlignedWithContainersStateExample(): JSX.Element {
  return (
    <div>
      <div className={styles.articleContainer}>
        <Heading as={'h2'} level={2} hasSpacing>
          {'Panel med innhold som er justert med teksten på siden'}
        </Heading>
        <Paragraph hasSpacing>
          {'Denne teksten bruker bredden --semantic-responsive-article. Det er'}
          {'meningen at teksten her skal starte på same linje som teksten inni'}
          {'panelet.'}
        </Paragraph>
      </div>

      <div className={styles.wideContentContainer}>
        <Panel variant={'filled'} spacing={'l'}>
          {
            'Dette panelet ligger i en container med bredden --semantic-responsive-wide-content. Innholdet i Panel har en innebygd containerbredde på --semantic-responsive-article, for å venstre- og høyrejustere denne teksten med resten av siden.'
          }
        </Panel>
      </div>

      <div className={styles.articleContainer}>
        <Paragraph>
          {'Denne teksten bruker ogsa --semantic-responsive-article for a vise'}
          {'samme venstre- og hoyrejustering som innholdet rundt panelet.'}
        </Paragraph>
      </div>
    </div>
  );
}
