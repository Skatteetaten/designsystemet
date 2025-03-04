import { useCallback, useContext, useMemo, useRef, useState, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  formatNationalIdentityNumber,
} from '@skatteetaten/ds-core-utils';
import { Checkbox } from '@skatteetaten/ds-forms';
import { PersonSVGpath } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import { RolePickerPeopleListProps } from './RolePickerPeopleList.types';
import { Person } from '../RolePicker/RolePicker.types';
import { RolePickerContext } from '../RolePickerContext/RolePickerContext';
import { RolePickerRow } from '../RolePickerRow/RolePickerRow';

import styles from './RolePickerPeopleList.module.scss';

const MAX_INIITAL_ITEMS = 5;

export const RolePickerPeopleList = ({
  people,
  filterQuery,
  showDeceasedPeople: showDeceasedPeopleExternal,
}: RolePickerPeopleListProps): JSX.Element | null => {
  const { t } = useTranslation('ds_overlays', { i18n: dsI18n });
  const [showAll, setShowAll] = useState(false);
  const [showDeceasedPeople, setShowDeceasedPeople] = useState(
    showDeceasedPeopleExternal
  );
  const ctx = useContext(RolePickerContext);
  const navRef = useRef<HTMLElement>(null);

  const handleShowAll = (): void => {
    setShowAll(true);
    navRef.current?.querySelectorAll('a')[MAX_INIITAL_ITEMS - 1].focus();
  };

  const handleShowLess = (): void => {
    setShowAll(false);
    navRef.current?.querySelectorAll('a')[0].focus();
  };

  const handleEntityClicked = async (entity: Person): Promise<void> => {
    ctx?.setLoadingEntityId(entity.personId);
    ctx?.onEntitySelect?.(entity).then((res) => {
      if (res?.error) {
        ctx?.setError({
          entityId: entity.personId,
          message: res.error,
        });
      }
      ctx.setLoadingEntityId(undefined);
    });
  };

  const visibleItems = useMemo(() => {
    // lager en dyp kopiering av person-listen for å unngå mutasjon
    let items: Person[] = JSON.parse(JSON.stringify(people.list));

    items = !showDeceasedPeople ? items.filter((p) => !p.isDeleted) : items;

    if (filterQuery) {
      return items.filter(
        (f) =>
          f.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
          f.personId.includes(filterQuery.toLowerCase())
      );
    }
    if (showAll) {
      return items;
    }
    return items.slice(0, MAX_INIITAL_ITEMS);
  }, [people.list, showDeceasedPeople, filterQuery, showAll]);

  const getShowAllCount = useCallback((): number => {
    return showDeceasedPeople
      ? people.total
      : people.list.filter((p) => !p.isDeleted).length;
  }, [people.list, people.total, showDeceasedPeople]);

  const displayToggleAllButton =
    !filterQuery && people.total > MAX_INIITAL_ITEMS;

  return (
    <div>
      <Heading as={'h2'} level={3} id={'otherPeopleHeadingId'}>
        {filterQuery
          ? `${visibleItems.length} ${t('rolepicker.PeopleHits')}`
          : t('rolepicker.PeopleHeading')}
      </Heading>
      {people.list.some((person) => person.isDeleted) ? (
        <Checkbox
          className={styles.showDeceasedChecbox}
          checked={showDeceasedPeople}
          onChange={(e) => setShowDeceasedPeople(e.target.checked)}
        >
          {t('rolepicker.ShowDeceasedPersons')}
        </Checkbox>
      ) : null}

      <nav ref={navRef} aria-labelledby={'otherPeopleHeadingId'}>
        <ul className={styles.peopleList}>
          {visibleItems.map((item) => {
            return (
              <li key={item.personId}>
                <RolePickerRow
                  id={item.personId}
                  title={`${item.name}${item.isDeleted ? ` (${t('rolepicker.Deceased')})` : ''}`}
                  description={`${t('rolepicker.PeopleDescriptionPrefix')} ${formatNationalIdentityNumber(item.personId)}`}
                  svgPath={PersonSVGpath}
                  onClick={() => handleEntityClicked(item)}
                />
              </li>
            );
          })}
        </ul>
      </nav>
      {displayToggleAllButton ? (
        <div className={styles.showAllButtonWrapper}>
          {showAll ? (
            <Button variant={'tertiary'} onClick={handleShowLess}>
              {'Vis færre'}
            </Button>
          ) : (
            <Button
              variant={'tertiary'}
              onClick={handleShowAll}
            >{`${t('rolepicker.ShowAll')} ${t('rolepicker.People')} (${getShowAllCount()})`}</Button>
          )}
        </div>
      ) : null}
    </div>
  );
};
