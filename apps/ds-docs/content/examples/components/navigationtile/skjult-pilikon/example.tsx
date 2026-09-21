import { type ReactElement } from 'react';

import { NavigationTile } from '@skatteetaten/ds-navigation';

import styles from './navigationtile.module.scss';

const title = 'Arbeidsgiver';
const description = 'A-melding • Skattemelding • Sluttoppgjør • Refusjon';

export default function NavigationTileHiddenArrowExample(): ReactElement {
  return (
    <nav className={styles.container} aria-label={'Eksempel uten pilikon'}>
      <NavigationTile
        title={title}
        description={description}
        href={'#'}
        hideArrowIcon
      />
    </nav>
  );
}
