import { type ReactElement } from 'react';

import { NavigationTile } from '@skatteetaten/ds-navigation';
import { Heading } from '@skatteetaten/ds-typography';

import styles from './navigationtile.module.scss';

export default function NavigationTileHeadingExample(): ReactElement {
  return (
    <>
      <Heading as={'h2'} hasSpacing>
        {'Min overskrift'}
      </Heading>
      <nav
        className={styles.container}
        aria-label={'Navigasjonsflater under min overskrift'}
      >
        <NavigationTile
          title={'Skatt'}
          description={'Skattekort • Selvangivelse • Fradrag'}
          href={'#'}
          titleAs={'h3'}
        />
        <NavigationTile
          title={'Arbeidsgiver'}
          description={'A-melding • Lønn • Oppgjør'}
          href={'#'}
          titleAs={'h3'}
        />
        <NavigationTile
          title={'Merverdiavgift'}
          description={'Mva-melding • Inntekter • Fradrag'}
          href={'#'}
          titleAs={'h3'}
        />
      </nav>
    </>
  );
}
