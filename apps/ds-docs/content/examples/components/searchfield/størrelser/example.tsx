import { type ReactElement } from 'react';

import { SearchField } from '@skatteetaten/ds-forms';

import styles from './searchfield.module.scss';

export default function SearchFieldSizesExample(): ReactElement {
  return (
    <div className={styles.container}>
      <SearchField label={'Søk (medium)'} size={'medium'} hideLabel={false} />
      <SearchField label={'Søk (large)'} size={'large'} hideLabel={false} />
      <SearchField
        label={'Søk (extraLarge)'}
        size={'extraLarge'}
        hideLabel={false}
      />
    </div>
  );
}
