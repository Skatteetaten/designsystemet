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
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  InfoSquareSVGpath,
  BellSVGpath,
  PersonSVGpath,
  LogOutSVGpath,
  PersonMoreSVGpath,
} from '@skatteetaten/ds-icons';

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
  user,
  varslerAmount,
  onLogOutClick,
  onUserClick,
  canRepresentOthers,
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

  const domainName = window.location.hostname;
  const varselCircleStyle =
    varslerAmount && varslerAmount > 9
      ? styles.varselCircleLarge
      : styles.varselCircleSmall;
  return (
    <>
      <TopBannerUserMenuButton
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
        {...getReferenceProps()}
        ref={mergedButtonRef}
        user={user ?? undefined}
        isMenuOpen={isOpen}
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
            <div className={styles.wrapper}>
              {(user?.role === 'virksomhet' || user?.role === 'andre') &&
                canRepresentOthers && (
                  <div className={styles.namePrefix}>
                    {t('ds_overlays:topbannerexternalusermenu.OnBehalfOf')}
                  </div>
                )}
              <div className={styles.name}>{user?.name}</div>
              {user?.role === 'virksomhet' && user.orgnr && (
                <div className={styles.orgnr}>{`Orgnr. ${user.orgnr}`}</div>
              )}
              <div>
                <InlineButton
                  data-testid={'switch-user'}
                  svgPath={PersonMoreSVGpath}
                  onClick={onUserClick}
                >
                  {t('ds_overlays:topbannerexternalusermenu.SwitchUser')}
                </InlineButton>
              </div>
              <Divider></Divider>
              <div className={styles.varselWrapper}>
                {user?.role === 'virksomhet' && (
                  <Link
                    svgPath={BellSVGpath}
                    href={`https://${domainName}/web/minside/virksomhet/varsler`}
                  >
                    {t('ds_overlays:topbannerexternalusermenu.Notification')}
                  </Link>
                )}
                {user?.role === 'meg' && (
                  <Link
                    svgPath={BellSVGpath}
                    href={`https://${domainName}/web/minside/person/varsler`}
                  >
                    {t('ds_overlays:topbannerexternalusermenu.Notification')}
                  </Link>
                )}
                {typeof varslerAmount == 'number' && varslerAmount > 0 && (
                  <span
                    className={varselCircleStyle}
                    data-testid={'varsel-circle'}
                  >
                    <span className={styles.varselAmount}>
                      {varslerAmount > 99
                        ? '99+'
                        : varslerAmount > 1 && varslerAmount}
                    </span>
                  </span>
                )}
              </div>
              <div>
                <Link
                  svgPath={PersonSVGpath}
                  href={`https://${domainName}/web/minside`}
                >
                  {t('ds_overlays:topbannerexternalusermenu.MyPage')}
                </Link>
              </div>
              {user?.role === 'virksomhet' && (
                <div>
                  <Link
                    svgPath={InfoSquareSVGpath}
                    href={`https://${domainName}/web/minside/virksomhet/omvirksomheten`}
                  >
                    {t(
                      'ds_overlays:topbannerexternalusermenu.AboutTheOrganisation'
                    )}
                  </Link>
                </div>
              )}
              {user?.role === 'meg' && (
                <div>
                  <Link
                    svgPath={InfoSquareSVGpath}
                    href={`https://${domainName}/web/minside/person/ommeg`}
                  >
                    {t('ds_overlays:topbannerexternalusermenu.AboutMe')}
                  </Link>
                </div>
              )}
              <div>
                <Divider></Divider>
                {children}
                <InlineButton svgPath={LogOutSVGpath} onClick={onLogOutClick}>
                  {t('ds_overlays:rolepicker.Logout')}
                </InlineButton>
              </div>
            </div>

            <div
              ref={arrowRef}
              style={{
                left: middlewareData.arrow?.x,
                top: `-${(arrowRef.current?.offsetWidth ?? 0) / 2}px`,
              }}
              className={`${styles.arrow}`.trim()}
            ></div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};

TopBannerExternalUserMenu.displayName = 'TopBannerExternalUserMenu';
