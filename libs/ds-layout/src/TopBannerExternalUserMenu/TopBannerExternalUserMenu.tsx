import { useEffect, useRef, useState, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import {
  arrow,
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
} from '@floating-ui/react';

import { InlineButton, Link } from '@skatteetaten/ds-buttons';
import { Divider } from '@skatteetaten/ds-content';
import {
  dsI18n,
  formatOrganisationNumber,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import {
  InfoSquareSVGpath,
  BellSVGpath,
  PersonSVGpath,
  LogOutSVGpath,
  PersonMoreSVGpath,
} from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import { TopBannerExternalUserMenuProps } from './TopBannerExternalUserMenu.types';
import { TopBannerUserMenuButton } from '../TopBannerUserMenuButton/TopBannerUserMenuButton';

import styles from './TopBannerExternalUserMenu.module.scss';

/* eslint-disable react-compiler/react-compiler */

/* eslint-disable react/forbid-dom-props */
export const TopBannerExternalUserMenu = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  notificationCount,
  user,
  onLogOutClick,
  onSwitchUserClick,
  children,
}: TopBannerExternalUserMenuProps): JSX.Element => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const arrowLen = arrowRef.current?.offsetWidth ?? 0;
  // +6 for at pilen skal ligge på utsiden av outline på knappen
  const floatingOffset = Math.sqrt(2 * arrowLen ** 2) / 2 + 6;

  const [isOpen, setOpen] = useState<boolean>(false);

  const floatingData = useFloating<HTMLButtonElement>({
    open: isOpen,
    onOpenChange: (open) => {
      setOpen(open);
    },
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({ mainAxis: floatingOffset, alignmentAxis: -32 }),
      flip(),
      shift(),
      arrow({ element: arrowRef }),
    ],
  });

  const dismiss = useDismiss(floatingData.context, {
    ancestorScroll: true,
  });
  const interactions = useInteractions([dismiss]);
  const { refs, floatingStyles, middlewareData } = floatingData;
  const { getFloatingProps, getReferenceProps } = interactions;

  const { t } = useTranslation(['ds_layout', 'ds_overlays'], { i18n: dsI18n });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const mergedButtonRef = useMergeRefs([refs.setReference, buttonRef, ref]);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.ariaExpanded = isOpen.toString();
    }
  }, [isOpen]);

  return (
    <>
      <TopBannerUserMenuButton
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
        {...getReferenceProps()}
        ref={mergedButtonRef}
        user={user}
        isMenuOpen={isOpen}
        notificationCount={notificationCount}
        onClick={() => {
          setOpen(!isOpen);
        }}
      />
      {isOpen && (
        <FloatingFocusManager
          returnFocus={buttonRef}
          context={floatingData.context}
          modal={false}
          // -1 her for å hindre at fokusManager overstyrer fokus vekk fra knappen når menyen åpnes
          initialFocus={-1}
        >
          <div
            className={styles.menu}
            {...getFloatingProps()}
            ref={refs.setFloating}
            style={floatingStyles}
          >
            <Heading as={'h4'} level={4}>
              {user.role !== 'meg' && (
                <div className={styles.namePrefix}>
                  {t('ds_overlays:topbannerexternalusermenu.OnBehalfOf')}
                </div>
              )}
              {user.role === 'virksomhet' ? user.name.toUpperCase() : user.name}
            </Heading>
            {user.role === 'virksomhet' && user.orgnr && (
              <div>{`${t('ds_overlays:rolepicker.BusinessDescriptionPrefix')} ${formatOrganisationNumber(user.orgnr)}`}</div>
            )}
            <InlineButton
              className={styles.marginTopS}
              data-testid={'switch-user'}
              svgPath={PersonMoreSVGpath}
              onClick={onSwitchUserClick}
            >
              {t('ds_overlays:topbannerexternalusermenu.SwitchUser')}
            </InlineButton>
            <Divider spacingTop={'m'}></Divider>
            <div className={styles.link}>
              {(user.role === 'virksomhet' || user.role === 'meg') && (
                <Link
                  className={styles.marginRightS}
                  svgPath={BellSVGpath}
                  href={`https://skatteetaten.no/web/minside/${user.role === 'meg' ? 'person' : 'virksomhet'}/varsler`}
                  ariaDescribedby={'notificationCount'}
                >
                  {t('ds_overlays:topbannerexternalusermenu.Notification')}
                </Link>
              )}
              {!!notificationCount && notificationCount > 0 && (
                <span
                  id={'notificationCount'}
                  aria-label={t(
                    'ds_overlays:topbannerexternalusermenu.NotificationCountMessage',
                    { count: notificationCount }
                  )}
                  className={styles.notificationBadge}
                  data-testid={'varsel-circle'}
                >
                  {notificationCount > 99
                    ? '99+'
                    : notificationCount > 0 && notificationCount}
                </span>
              )}
            </div>
            <div className={styles.link}>
              <Link
                svgPath={PersonSVGpath}
                href={'https://skatteetaten.no/web/minside'}
              >
                {t('ds_overlays:topbannerexternalusermenu.MyPage')}
              </Link>
            </div>
            {user.role === 'virksomhet' && (
              <div className={styles.link}>
                <Link
                  svgPath={InfoSquareSVGpath}
                  href={
                    'https://skatteetaten.no/web/minside/virksomhet/omvirksomheten'
                  }
                >
                  {t(
                    'ds_overlays:topbannerexternalusermenu.AboutTheOrganisation'
                  )}
                </Link>
              </div>
            )}
            {user.role === 'meg' && (
              <div className={styles.link}>
                <Link
                  svgPath={InfoSquareSVGpath}
                  href={'https://skatteetaten.no/web/minside/person/ommeg'}
                >
                  {t('ds_overlays:topbannerexternalusermenu.AboutMe')}
                </Link>
              </div>
            )}
            {children}
            <Divider spacingTop={'m'}></Divider>
            <InlineButton svgPath={LogOutSVGpath} onClick={onLogOutClick}>
              {t('ds_overlays:rolepicker.Logout')}
            </InlineButton>
            <div
              ref={arrowRef}
              style={{
                left: `${(middlewareData.arrow?.x ?? 0) - 16}px`,
                top: `-${(arrowRef.current?.offsetWidth ?? 0) / 2}px`,
              }}
              className={styles.arrow}
            ></div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};

TopBannerExternalUserMenu.displayName = 'TopBannerExternalUserMenu';
