import { type ReactElement, useState } from 'react';

import { NavigationTile } from '@skatteetaten/ds-navigation';

import styles from './navigationtile.module.scss';

const title = 'Næring';
const description = 'Næringsinntekt • Kostnader • Avskrivning';

export default function NavigationTileSpinnerExample(): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout((): void => setIsLoading(false), 2000);
  };

  return (
    <nav className={styles.container} aria-label={'Eksempel med spinner'}>
      <NavigationTile
        title={title}
        description={description}
        href={'#'}
        hasSpinner={isLoading}
        onClick={handleClick}
      />
    </nav>
  );
}
