import {
  useDeferredValue,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  JSX,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  formatNationalIdentityNumber,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import { FavoriteSVGpath, LogOutSVGpath } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

import {
  getRolePickerHideCloseButtonDefault,
  getRolePickerMinimumEntitiesForSearchDefault,
  getRolePickerShowDeceasedPeopleDefault,
  getRolePickerShowInactiveBusinessesDefault,
  getRolePickerShowSubunitsDefault,
} from './defaults';
import { Business, Entity, RolePickerProps } from './RolePicker.types';
import {
  getModalDismissOnEscDefault,
  getModalDismissOnOutsideClickDefault,
} from '../Modal/defaults';
import { Modal } from '../Modal/Modal';
import { RolePickerBusinessList } from './RolePickerBusinessList/RolePickerBusinessList';
import { RolePickerContext } from './RolePickerContext';
import { RolePickerFilterInput } from './RolePickerFilterInput/RolePickerFilterInput';
import { RolePickerPeopleList } from './RolePickerPeopleList/RolePickerPeopleList';
import { RolePickerRow } from './RolePickerRow/RolePickerRow';

import styles from './RolePicker.module.scss';

export const RolePicker = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  me,
  businesses,
  people,
  title,
  dismissOnEsc = getModalDismissOnEscDefault(),
  dismissOnOutsideClick = getModalDismissOnOutsideClickDefault(),
  hideCloseButton = getRolePickerHideCloseButtonDefault(),
  minimumEntitiesForSearch = getRolePickerMinimumEntitiesForSearchDefault(),
  showInactiveBusinesses = getRolePickerShowInactiveBusinessesDefault(),
  showSubunits = getRolePickerShowSubunitsDefault(),
  showDeceasedPeople = getRolePickerShowDeceasedPeopleDefault(),
  onClose,
  onEntitySelect,
  onLogout,
  children,
}: RolePickerProps): JSX.Element => {
  const [filter, setFilter] = useState('');
  const [loadingEntityId, setLoadingEntityId] = useState<string | undefined>(
    undefined
  );
  const [error, setError] = useState<
    { entityId: string; message: string } | undefined
  >(undefined);
  const { t } = useTranslation('ds_overlays', { i18n: dsI18n });
  const deferredFilter = useDeferredValue(filter);
  const businessesCount = businesses ? businesses.total : 0;
  const peopleCount = people ? people.total : 0;
  const displaySearch =
    businessesCount + peopleCount >= minimumEntitiesForSearch;

  const modalRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => modalRef.current as HTMLDialogElement);

  const handleClose = (): void => {
    setError(undefined);
    setLoadingEntityId(undefined);
    onClose?.();
  };

  const handleCancel = (): void => {
    modalRef.current?.close();
    handleClose();
  };

  const getRepresentationText = (): JSX.Element | null => {
    if (people && people.total > 0 && businesses && businesses.total > 0) {
      return (
        <Paragraph>
          {t('rolepicker.YouCanRepresent')}
          <strong>
            {` ${people.total} ${people.total > 1 ? t('rolepicker.People') : t('rolepicker.Person')} ${t('rolepicker.And')} ${businesses.total} ${businesses.total > 1 ? t('rolepicker.Businesses') : t('rolepicker.Business')}.`}
          </strong>
        </Paragraph>
      );
    } else if (people && people.total > 0) {
      return (
        <Paragraph>
          {t('rolepicker.YouCanRepresent')}
          <strong>{` ${people.total} ${people.total > 1 ? t('rolepicker.People') : t('rolepicker.Person')}.`}</strong>
        </Paragraph>
      );
    } else if (businesses && businesses.total > 0) {
      return (
        <Paragraph>
          {t('rolepicker.YouCanRepresent')}
          <strong>{` ${businesses.total} ${businesses.total > 1 ? t('rolepicker.Businesses') : t('rolepicker.Business')}.`}</strong>
        </Paragraph>
      );
    } else {
      return null;
    }
  };

  const concatenatedClassName = `${styles.container} ${className}`.trim();

  const noValidBusinesses =
    !me && !people && businesses && businesses.total === 0;

  let internalTitle = title ? title : t('rolepicker.Heading');

  if (noValidBusinesses) {
    internalTitle = t('rolepicker.NoBusinessesErrorTitle');
  }
  const handleEntitySelect = useCallback(
    (entity: Entity): void => {
      const entityId =
        'personId' in entity
          ? (entity.personId as string)
          : (entity as Business).organizationNumber;

      setLoadingEntityId(entityId);
      onEntitySelect?.(entity).then((res) => {
        setError(
          res?.error
            ? {
                entityId,
                message: res.error,
              }
            : undefined
        );
        setLoadingEntityId(undefined);
      });
    },
    [onEntitySelect]
  );

  const contextValue = useMemo(
    () => ({
      onEntitySelect: handleEntitySelect,
      error,
      setError,
      loadingEntityId,
      setLoadingEntityId,
    }),
    [error, handleEntitySelect, loadingEntityId]
  );

  return (
    <RolePickerContext.Provider value={contextValue}>
      <Modal
        ref={modalRef}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        title={internalTitle}
        data-testid={dataTestId}
        dismissOnEsc={dismissOnEsc}
        dismissOnOutsideClick={dismissOnOutsideClick}
        hideCloseButton={hideCloseButton}
        onClose={handleClose}
      >
        <div>
          <div className={styles.rolePicker}>
            {me ? (
              <RolePickerRow
                id={me.personId}
                title={t('rolepicker.MeHeading')}
                description={`${t('rolepicker.PeopleDescriptionPrefix')} ${formatNationalIdentityNumber(me.personId)}`}
                svgPath={FavoriteSVGpath}
                titleAs={'h2'}
                onClick={() => handleEntitySelect(me)}
              />
            ) : null}
            {getRepresentationText()}
            {displaySearch ? (
              <RolePickerFilterInput
                label={t('rolepicker.SearchText')}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                onClear={() => setFilter('')}
              />
            ) : null}

            {people && people?.total > 0 ? (
              <RolePickerPeopleList
                people={people}
                filterQuery={deferredFilter}
                showDeceasedPeople={showDeceasedPeople}
              />
            ) : null}
            {businesses && businesses.total > 0 ? (
              <RolePickerBusinessList
                businesses={businesses}
                filterQuery={deferredFilter}
                showSubunits={showSubunits}
                showInactiveBusinesses={showInactiveBusinesses}
              />
            ) : null}

            {noValidBusinesses ? (
              <Paragraph>
                {t('rolepicker.NoBusinessesDescription')}{' '}
                <strong>
                  {t('rolepicker.Business')}
                  {'.'}
                </strong>
              </Paragraph>
            ) : null}

            {children}
          </div>

          <div className={styles.rolePickerFooter}>
            {noValidBusinesses ? (
              <Button href={`https://skatt.skatteetaten.no/web/minside/person`}>
                {t('rolepicker.GoToMyPage')}
              </Button>
            ) : (
              <>
                <Button
                  variant={'secondary'}
                  svgPath={LogOutSVGpath}
                  onClick={onLogout}
                >
                  {t('rolepicker.Logout')}
                </Button>

                {!hideCloseButton ? (
                  <Button variant={'secondary'} onClick={handleCancel}>
                    {t('rolepicker.Cancel')}
                  </Button>
                ) : null}
              </>
            )}
          </div>
        </div>
      </Modal>
    </RolePickerContext.Provider>
  );
};

RolePicker.displayName = 'RolePicker';
