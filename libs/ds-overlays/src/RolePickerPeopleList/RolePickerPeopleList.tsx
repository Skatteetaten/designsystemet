import { useContext, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
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
}: RolePickerPeopleListProps): JSX.Element | null => {
  const { t } = useTranslation('ds_overlays', { i18n: dsI18n });
  const [showAll, setShowAll] = useState(false);
  const ctx = useContext(RolePickerContext);
  const navRef = useRef<HTMLElement>(null);

  const handleShowAll = (): void => {
    setShowAll(true);
    navRef.current?.querySelectorAll('a')[MAX_INIITAL_ITEMS - 1].focus();
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
    if (filterQuery) {
      return people.list.filter(
        (f) =>
          f.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
          f.personId.includes(filterQuery.toLowerCase())
      );
    }
    if (showAll) {
      return people.list;
    }
    return people.list.slice(0, MAX_INIITAL_ITEMS);
  }, [filterQuery, showAll, people.list]);

  const displayShowAllButton =
    !showAll && !filterQuery && people.total > MAX_INIITAL_ITEMS;

  return (
    <div>
      <Heading as={'h2'} level={3} id={'otherPeopleHeadingId'}>
        {filterQuery
          ? `${visibleItems.length} ${t('rolepicker.PeopleHits')}`
          : t('rolepicker.PeopleHeading')}
      </Heading>
      <nav ref={navRef} aria-labelledby={'otherPeopleHeadingId'}>
        <ul className={styles.peopleList}>
          {visibleItems.map((item) => {
            return (
              <li key={item.personId}>
                <RolePickerRow
                  id={item.personId}
                  title={item.name}
                  description={`${t('rolepicker.PeopleDescriptionPrefix')} ${item.personId}`}
                  svgPath={PersonSVGpath}
                  onClick={() => handleEntityClicked(item)}
                />
              </li>
            );
          })}
        </ul>
      </nav>
      {displayShowAllButton ? (
        <div className={styles.showAllButtonWrapper}>
          <Button
            variant={'tertiary'}
            onClick={handleShowAll}
          >{`${t('rolepicker.ShowAll')} ${t('rolepicker.People')} (${people.total})`}</Button>
        </div>
      ) : null}
    </div>
  );
};
