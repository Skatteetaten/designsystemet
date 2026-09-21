import { type ReactElement } from 'react';

import { AccountEnkSVGpath } from '@skatteetaten/ds-icons';
import { NavigationTile } from '@skatteetaten/ds-navigation';

import styles from './navigationtile.module.scss';

export default function NavigationTileGridExample(): ReactElement {
  return (
    <nav
      className={styles.container}
      aria-label={'Beskrivelse av navigasjonsflater'}
    >
      <NavigationTile
        title={'Skatt'}
        description={'Inntekt • Formue • Gjeld'}
        href={'#'}
        size={'extraLarge'}
        svgPath={AccountEnkSVGpath}
      />
      <NavigationTile
        title={'Arbeidsgiver'}
        description={'Ansatte • Kostnader • Fradrag'}
        href={'#'}
        size={'extraLarge'}
        svgPath={AccountEnkSVGpath}
      />
    </nav>
  );
}
