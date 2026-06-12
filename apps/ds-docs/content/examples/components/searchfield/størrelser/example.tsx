import { type ReactElement } from 'react';

import { SearchField } from '@skatteetaten/ds-forms';

import styles from './searchfield.module.scss';

export default function SearchFieldSizesExample(): ReactElement {
  return (
    <div className={styles.container}>
      <SearchField
        label={'Søk (medium)'}
        variant={'medium'}
        hideLabel={false}
      />
      <SearchField label={'Søk (large)'} variant={'large'} hideLabel={false} />
      <SearchField
        label={'Søk (extraLarge)'}
        variant={'extraLarge'}
        hideLabel={false}
      />
    </div>
  );
}
