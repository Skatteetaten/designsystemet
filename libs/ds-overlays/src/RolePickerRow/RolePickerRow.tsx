import { useContext, JSX } from 'react';

import { NavigationTile } from '@skatteetaten/ds-navigation';
import { Alert } from '@skatteetaten/ds-status';

import { RolePickerRowProps } from './RolePickerRow.types';
import { RolePickerContext } from '../RolePickerContext/RolePickerContext';

import styles from './RolePickerRow.module.scss';

export function RolePickerRow({
  id,
  title,
  description,
  svgPath,
  titleAs,
  onClick,
}: RolePickerRowProps): JSX.Element {
  const ctx = useContext(RolePickerContext);

  const hasError = ctx?.error?.entityId === id;

  return (
    <div>
      <NavigationTile
        href={'#'}
        className={`${hasError ? styles.withAlert : ''}`}
        titleAs={titleAs ?? 'h3'}
        title={title}
        svgPath={svgPath}
        hasSpinner={ctx?.loadingEntityId === id}
        size={'medium'}
        description={description}
        onClick={async (e) => {
          e.preventDefault();
          onClick?.(e);
        }}
      />
      <Alert
        variant={'neutral'}
        showAlert={ctx?.error?.entityId === id}
        onClose={() => ctx?.setError(undefined)}
      >
        {ctx?.error?.message}
      </Alert>
    </div>
  );
}

RolePickerRow.displayName = 'RolePickerRow';
