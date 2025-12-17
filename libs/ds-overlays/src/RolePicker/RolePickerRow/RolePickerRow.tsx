import { useContext, JSX, useRef } from 'react';

import { NavigationTile } from '@skatteetaten/ds-navigation';
import { Alert } from '@skatteetaten/ds-status';

import { RolePickerRowProps } from './RolePickerRow.types';
import { RolePickerContext } from '../RolePickerContext';

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
  const ref = useRef<HTMLAnchorElement>(null);

  const hasError = ctx?.error?.entityId === id;

  const handleCloseError = (): void => {
    ctx?.setError(undefined);
    ref.current?.focus();
  };

  return (
    <div>
      <NavigationTile
        ref={ref}
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
        variant={'warning'}
        showAlert={hasError}
        onClose={handleCloseError}
      >
        {ctx?.error?.message}
      </Alert>
    </div>
  );
}

RolePickerRow.displayName = 'RolePickerRow';
