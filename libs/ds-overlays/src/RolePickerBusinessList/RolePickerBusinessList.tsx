import { useCallback, useContext, useMemo, useRef, useState, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@skatteetaten/ds-buttons';
import { dsI18n, formatOrganisationNumber } from '@skatteetaten/ds-core-utils';
import { Checkbox } from '@skatteetaten/ds-forms';
import {
  BriefcaseSVGpath,
  BriefcaseOffSVGpath,
  BriefcaseMultipleSVGpath,
} from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import { RolePickerBusinessListProps } from './RolePickerBusinessList.types';
import { getBusinessTitle } from './utils';
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInactiveBusinesses, setShowInactiveBusinesses] = useState(
    externalShowInactiveBusinesses
  );
  const [showSubUnits, setShowSubUnits] = useState(externalShowSubUnits);

  const navRef = useRef<HTMLElement>(null);

  const handleExpand = (): void => {
    const visibleLinks = navRef.current?.querySelectorAll('a').length ?? 1;

    setIsExpanded(true);
    navRef.current?.querySelectorAll('a')[visibleLinks - 1].focus();
  };

  const handleCollapse = (): void => {
    setIsExpanded(false);
    navRef.current?.querySelectorAll('a')[0].focus();
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
    // lager en dyp kopiering av business-listen for å unngå mutasjon
    let items: Business[] = JSON.parse(JSON.stringify(businesses.list));

    items = !showInactiveBusinesses ? items.filter((p) => !p.isDeleted) : items;

    if (filterQuery) {
      // Filteret sjekker om `filterQuery` er til stede i organisasjonens navn, enhetstype eller organisasjonsnummer.
      // Hvis `showSubUnits` er sann, sjekker det også om noen av underenhetenes navn inkluderer `filterQuery`.
      items = items.filter((business) => {
        const mainMatch =
          (business.name + business.unitType)
            .toLowerCase()
            .includes(filterQuery.toLowerCase()) ||
          business.organizationNumber.includes(filterQuery.toLowerCase()) ||
          business.mainOrganizationNumber?.includes(filterQuery.toLowerCase());

        const subunitMatch =
          showSubUnits &&
          business.subunits?.some(
            (sub) =>
              (sub.name.toLowerCase() + sub.unitType.toLowerCase()).includes(
                filterQuery.toLowerCase()
              ) &&
              (showInactiveBusinesses || !sub.isDeleted)
          );

        if (mainMatch) {
          return true;
        }

        if (subunitMatch) {
          const filteredSubunits = business.subunits?.filter(
            (sub) =>
              (sub.name.toLowerCase() + sub.unitType.toLowerCase()).includes(
                filterQuery.toLowerCase()
              ) &&
              (showInactiveBusinesses || !sub.isDeleted)
          );
          business.subunits = filteredSubunits;
          return true;
        }

        return false;
      });
    } else {
      items = isExpanded ? items : items.slice(0, MAX_INITIAL_ITEMS);
    }
    return items;
  }, [
    businesses.list,
    showInactiveBusinesses,
    filterQuery,
    showSubUnits,
    isExpanded,
  ]);

  const hasInactiveItems = businesses.list.some(
    (business) =>
      business.isDeleted || business.subunits?.some((sub) => sub.isDeleted)
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
          const subUnitsCount =
            curr.subunits?.filter((sub) => !sub.isDeleted).length ?? 0;
          return total + 1 + subUnitsCount;
        }, 0);
    }

    if (showInactiveBusinesses) {
      return businesses.list.length;
    }

    return businesses.list.filter((item) => !item.isDeleted).length;
  }, [businesses.list, businesses.total, showInactiveBusinesses, showSubUnits]);

  const displayExpandCollapseButton =
    !filterQuery && businesses.list?.length > MAX_INITIAL_ITEMS;

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
                    title={getBusinessTitle(item)}
                    description={
                      <>
                        {t('rolepicker.BusinessDescriptionPrefix')}{' '}
                        {formatOrganisationNumber(item.organizationNumber)}{' '}
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

                  <ul className={styles.subUnitsList}>
                    {subUnits.map((sub) => {
                      return (
                        <li
                          key={sub.organizationNumber}
                          className={styles.subUnit}
                        >
                          <RolePickerRow
                            id={sub.organizationNumber}
                            title={getBusinessTitle(sub)}
                            titleAs={'h4'}
                            description={
                              <>
                                {t('rolepicker.BusinessDescriptionPrefix')}{' '}
                                {formatOrganisationNumber(
                                  sub.organizationNumber
                                )}{' '}
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
                    title={getBusinessTitle(item)}
                    description={`${t('rolepicker.BusinessDescriptionPrefix')} ${formatOrganisationNumber(item.organizationNumber)}`}
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
      {displayExpandCollapseButton ? (
        <div className={styles.showAllButtonWrapper}>
          {isExpanded ? (
            <Button variant={'tertiary'} onClick={handleCollapse}>
              {/* TODO Hent fra tekstlistekatalogen */}
              {'Vis færre virksomheder'}
            </Button>
          ) : (
            <Button
              variant={'tertiary'}
              onClick={handleExpand}
            >{`${t('rolepicker.ShowAll')} ${t('rolepicker.Businesses')} (${getShowAllCount()})`}</Button>
          )}
        </div>
      ) : null}
    </div>
  );
};

RolePickerBusinessList.displayName = 'RolePickerBusinessList';
