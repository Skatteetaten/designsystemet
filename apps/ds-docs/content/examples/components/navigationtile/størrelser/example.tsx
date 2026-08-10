import { type ReactElement } from 'react';

import { AccountEnkSVGpath } from '@skatteetaten/ds-icons';
import { NavigationTile } from '@skatteetaten/ds-navigation';

import styles from './navigationtile.module.scss';

export default function NavigationTileSizesExample(): ReactElement {
  return (
    <nav className={styles.container} aria-label={'Eksempel på størrelser'}>
      <NavigationTile
        title={'Medium'}
        description={'Litt mindre skriftsstørrelse'}
        href={'#'}
        size={'medium'}
      />
      <NavigationTile
        title={'Large'}
        description={'Standard størrelse'}
        href={'#'}
        size={'large'}
      />
      <NavigationTile
        title={'Extra large'}
        description={'Midtstilt med ikon'}
        href={'#'}
        size={'extraLarge'}
        svgPath={AccountEnkSVGpath}
      />
    </nav>
  );
}
