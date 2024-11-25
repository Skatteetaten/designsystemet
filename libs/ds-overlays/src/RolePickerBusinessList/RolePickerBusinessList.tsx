import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Checkbox } from '@skatteetaten/ds-forms';
import {
  BriefcaseSVGpath,
  BriefcaseOffSVGpath,
  BriefcaseMultipleSVGpath,
} from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import { RolePickerBusinessListProps } from './RolePickerBusinessList.types';
import { Business } from '../RolePicker/RolePicker.types';
import { RolePickerContext } from '../RolePickerContext/RolePickerContext';
import { RolePickerRow } from '../RolePickerRow/RolePickerRow';

import styles from './RolePickerBusinessList.module.scss';

const MAX_INITIAL_ITEMS = 5;

export const RolePickerBusinessList = ({
  businesses,
  filterQuery,
  showInactiveBusinesses: externalShowInactiveBusinesses,
  showSubunits: externalShowSubUnits,
}: RolePickerBusinessListProps): JSX.Element | null => {
  const { t } = useTranslation('ds_overlays', { i18n: dsI18n });
  const ctx = useContext(RolePickerContext);
  const [showAll, setShowAll] = useState(false);
  const [showInactiveBusinesses, setShowInactiveBusinesses] = useState(
    externalShowInactiveBusinesses
  );
  const [showSubUnits, setShowSubUnits] = useState(externalShowSubUnits);

  const navRef = useRef<HTMLElement>(null);

  const handleShowAll = (): void => {
    const visibleLinks = navRef.current?.querySelectorAll('a').length ?? 1;

    setShowAll(true);
    navRef.current?.querySelectorAll('a')[visibleLinks - 1].focus();
  };

  const handleEntityClicked = async (entity: Business): Promise<void> => {
    ctx?.setLoadingEntityId(entity.organizationNumber);
    ctx?.onEntitySelect?.(entity).then((res) => {
      if (res?.error) {
        ctx?.setError({
          entityId: entity.organizationNumber,
          message: res.error,
        });
      }
      ctx.setLoadingEntityId(undefined);
    });
  };

  const visibleItems = useMemo(() => {
    let items = businesses.list;

    items = !showInactiveBusinesses ? items.filter((p) => !p.isDeleted) : items;

    if (filterQuery) {
      // Filteret sjekker om `filterQuery` er til stede i organisasjonens navn, enhetstype eller organisasjonsnummer.
      // Hvis `showSubUnits` er sann, sjekker det også om noen av underenhetenes navn inkluderer `filterQuery`.
      items = items.filter(
        (business) =>
          (business.name + business.unitType)
            .toLowerCase()
            .includes(filterQuery.toLowerCase()) ||
          business.organizationNumber.includes(filterQuery.toLowerCase()) ||
          business.mainOrganizationNumber?.includes(
            filterQuery.toLowerCase()
          ) ||
          (showSubUnits &&
            business.subunits?.some((sub) =>
              sub.name.toLowerCase().includes(filterQuery.toLowerCase())
            ))
      );
    } else {
      items = showAll ? items : items.slice(0, MAX_INITIAL_ITEMS);
    }
    return items;
  }, [
    filterQuery,
    businesses.list,
    showAll,
    showInactiveBusinesses,
    showSubUnits,
  ]);

  const hasInactiveItems = businesses.list.some(
    (business) => business.isDeleted
  );
  const hasItemsWithSubOranizations = businesses.list.some(
    (business) => business.subunits
  );

  const getShowAllCount = useCallback((): number => {
    if (showSubUnits && showInactiveBusinesses) {
      return businesses.total;
    }

    if (showSubUnits) {
      return businesses.list
        .filter((item) => !item.isDeleted)
        .reduce((total, curr) => {
          const subUnitsCount = curr.subunits?.length ?? 0;
          return total + 1 + subUnitsCount;
        }, 0);
    }

    if (showInactiveBusinesses) {
      return businesses.list.length;
    }

    return businesses.list.filter((item) => !item.isDeleted).length;
  }, [businesses.list, businesses.total, showInactiveBusinesses, showSubUnits]);

  const displayShowAllButton =
    !showAll && !filterQuery && businesses.list?.length > MAX_INITIAL_ITEMS;

  return (
    <div>
      <Heading as={'h2'} level={3} id={'businessesHeadingId'}>
        {filterQuery
          ? `${visibleItems.length} ${t('rolepicker.BusinessHits')}`
          : t('rolepicker.BusinessesHeading')}
      </Heading>
      {hasInactiveItems || hasItemsWithSubOranizations ? (
        <div className={styles.checkboxGroup}>
          {hasInactiveItems ? (
            <Checkbox
              checked={showInactiveBusinesses}
              onChange={(e) => setShowInactiveBusinesses(e.target.checked)}
            >
              {t('rolepicker.ShowInactiveBusinessesHeader')}
            </Checkbox>
          ) : null}
          {hasItemsWithSubOranizations ? (
            <Checkbox
              checked={showSubUnits}
              onChange={(e) => setShowSubUnits(e.target.checked)}
            >
              {t('rolepicker.ShowSubBusinessesHeading')}
            </Checkbox>
          ) : null}
        </div>
      ) : null}

      <nav ref={navRef} aria-labelledby={'businessesHeadingId'}>
        <ul className={styles.businessList}>
          {visibleItems?.map((item) => {
            if (showSubUnits && item.subunits) {
              const subUnits = showInactiveBusinesses
                ? item.subunits
                : item.subunits.filter((sub) => !sub.isDeleted);

              return (
                <li key={item.organizationNumber}>
                  <RolePickerRow
                    id={item.organizationNumber}
                    title={`${item.name} ${item.unitType}`}
                    description={
                      <>
                        {t('rolepicker.BusinessDescriptionPrefix')}{' '}
                        {item.organizationNumber}{' '}
                        <em>
                          {'('}
                          {t('rolepicker.MainBusiness')}
                          {')'}
                        </em>
                      </>
                    }
                    svgPath={
                      item.isDeleted
                        ? BriefcaseOffSVGpath
                        : BriefcaseMultipleSVGpath
                    }
                    onClick={() => {
                      handleEntityClicked(item);
                    }}
                  />

                  <ul className={styles.subUnitsWrapper}>
                    {subUnits.map((sub) => {
                      return (
                        <li key={sub.organizationNumber}>
                          <RolePickerRow
                            id={sub.organizationNumber}
                            title={`${sub.name} ${sub.unitType}`}
                            description={
                              <>
                                {t('rolepicker.BusinessDescriptionPrefix')}{' '}
                                {sub.organizationNumber}{' '}
                                <em>
                                  {'('}
                                  {t('rolepicker.SubUnit')}
                                  {')'}
                                </em>
                              </>
                            }
                            svgPath={
                              sub.isDeleted
                                ? BriefcaseOffSVGpath
                                : BriefcaseSVGpath
                            }
                            onClick={() => {
                              handleEntityClicked(sub);
                            }}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            } else {
              const svgPath = item.subunits
                ? BriefcaseMultipleSVGpath
                : BriefcaseSVGpath;
              return (
                <li key={item.organizationNumber}>
                  <RolePickerRow
                    id={item.organizationNumber}
                    title={`${item.name} ${item.unitType}`}
                    description={`${t('rolepicker.BusinessDescriptionPrefix')} ${item.organizationNumber}`}
                    svgPath={item.isDeleted ? BriefcaseOffSVGpath : svgPath}
                    onClick={() => {
                      handleEntityClicked(item);
                    }}
                  />
                </li>
              );
            }
          })}
        </ul>
      </nav>
      {displayShowAllButton ? (
        <div className={styles.showAllButtonWrapper}>
          <Button
            variant={'tertiary'}
            onClick={handleShowAll}
          >{`${t('rolepicker.ShowAll')} ${t('rolepicker.Businesses')} (${getShowAllCount()})`}</Button>
        </div>
      ) : null}
    </div>
  );
};

RolePickerBusinessList.displayName = 'RolePickerBusinessList';
