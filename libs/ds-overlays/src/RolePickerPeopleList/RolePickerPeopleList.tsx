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

const MAX_INITIAL_ITEMS = 5;

export const RolePickerPeopleList = ({
  people,
  filterQuery,
  showDeceasedPeople: showDeceasedPeopleExternal,
}: RolePickerPeopleListProps): JSX.Element | null => {
  const { t } = useTranslation('ds_overlays', { i18n: dsI18n });
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDeceasedPeople, setShowDeceasedPeople] = useState(
    showDeceasedPeopleExternal
  );
  const ctx = useContext(RolePickerContext);
  const navRef = useRef<HTMLElement>(null);

  const handleExpand = (): void => {
    setIsExpanded(true);
    navRef.current?.querySelectorAll('a')[MAX_INITIAL_ITEMS - 1].focus();
  };

  const handleCollapse = (): void => {
    setIsExpanded(false);
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
    if (isExpanded) {
      return items;
    }
    return items.slice(0, MAX_INITIAL_ITEMS);
  }, [people.list, showDeceasedPeople, filterQuery, isExpanded]);

  const getShowAllCount = useCallback((): number => {
    return showDeceasedPeople
      ? people.total
      : people.list.filter((p) => !p.isDeleted).length;
  }, [people.list, people.total, showDeceasedPeople]);

  const displayToggleAllButton =
    !filterQuery && people.total > MAX_INITIAL_ITEMS;

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
          {isExpanded ? (
            <Button variant={'tertiary'} onClick={handleCollapse}>
              {t('rolepicker.ShowLess')}
            </Button>
          ) : (
            <Button
              variant={'tertiary'}
              onClick={handleExpand}
            >{`${t('rolepicker.ShowAll')} ${t('rolepicker.People')} (${getShowAllCount()})`}</Button>
          )}
        </div>
      ) : null}
    </div>
  );
};
