import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { ModalProps } from '../Modal/Modal.types';

export type Paginated<T> = {
  total: number;
  list: T[];
};

export type Entity = {
  name: string;
  isDeleted?: boolean;
  type: string;
};

export interface Person extends Entity {
  personId: string;
}

export interface Business extends Entity {
  organizationNumber: string;
  unitType: string;
  subunits?: Business[];
  mainOrganizationNumber?: string | null;
}

export type OnEntitySelectHandler = (
  entity: Entity
) => Promise<{ error: string } | void>;

export interface RolePickerProps
  extends BaseProps,
    Partial<
      Pick<
        ModalProps,
        'dismissOnEsc' | 'dismissOnOutsideClick' | 'hideCloseButton' | 'onClose'
      >
    > {
  ref?: React.Ref<HTMLDialogElement>;
  /** Egendefinert tittel på modal. */
  title?: string;
  /** Den nåværende brukeren representert som et Person-objekt. */
  me?: Person;
  /** En paginert liste over personer. */
  people?: Paginated<Person>;
  /** En paginert liste over virksomheter. */
  businesses?: Paginated<Business>;
  /** Om avviklede virksomheter skal vises som standard når rollevelger åpnes. */
  showInactiveBusinesses?: boolean;
  /** Om underenheter av virksomheter skal vises som standard når rollevelger åpnes. */
  showSubunits?: boolean;
  /** Om avdøde personer skal vises som standard når rollevelger åpnes. */
  showDeceasedPeople?: boolean;
  /** Tilbakekallingsfunksjon for å håndtere valg av virksomhet/person. */
  onEntitySelect?: OnEntitySelectHandler;
  /** Tilbakekallingsfunksjon for å håndtere utlogging. */
  onLogout?: () => void;
  /** Eventuelt annet innhold som rendres etter listen med roller. */
  children?: ReactNode;
}

export type RolePickerContextProps = {
  onEntitySelect?: OnEntitySelectHandler;
  error?: { entityId: string; message: string };
  setError: (error?: { entityId: string; message: string }) => void;
  loadingEntityId?: string;
  setLoadingEntityId: (entityId?: string) => void;
};
