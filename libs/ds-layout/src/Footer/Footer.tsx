import { Children, forwardRef, isValidElement } from 'react';
import { useTranslation } from 'react-i18next';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Heading } from '@skatteetaten/ds-typography';

import { FooterComponent, FooterProps } from './Footer.types';
import logo from './logo.svg';
import { FooterLink } from '../FooterLink/FooterLink';
import { FooterLogo } from '../FooterLogo/FooterLogo';

import styles from './Footer.module.scss';

export const Footer = forwardRef<HTMLElement, FooterProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      accessibilityURL,
      contactUsURL,
      firstColumn,
      secondColumn,
      securityURL,
      thirdColumn,
      titleFirstColumn,
      titleSecondColumn,
      titleThirdColumn,
      hideLogo,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('Shared', { i18n: dsI18n });

    const childrenArray = Children.toArray(children);
    const logos = childrenArray.filter((child) =>
      isValidElement(child) ? child.type === Footer.Logo : null
    );
    const links = childrenArray.filter((child) =>
      isValidElement(child) ? child.type === Footer.Link : null
    );
    const linksFirstColumn = childrenArray.filter((child) =>
      isValidElement(child) ? child.type === Footer.LinkFirstColumn : null
    );

    const threeColumnsClassName = thirdColumn ? styles.columnsThree : '';
    const twoColumnsClassName = secondColumn ? styles.columnsTwo : '';

    return (
      <footer
        ref={ref}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={className}
      >
        <div className={styles.diagonals}>
          <div className={styles.diagonalsLeft}></div>
          <div className={styles.diagonalsRight}></div>
        </div>
        <div className={styles.footer}>
          <div
            className={`${styles.columns} ${threeColumnsClassName} ${twoColumnsClassName}`}
          >
            <div>
              <Heading as={'h2'} level={3} hasSpacing>
                {titleFirstColumn}
              </Heading>
              <LinkGroup color={'white'}>
                <LinkGroup.Link href={contactUsURL ?? t('shared.ContactUsURL')}>
                  {t('shared.ContactUs')}
                </LinkGroup.Link>
                <LinkGroup.Link
                  href={securityURL ?? t('shared.SecurityAndPrivacyURL')}
                >
                  {t('shared.SecurityAndPrivacy')}
                </LinkGroup.Link>
                <LinkGroup.Link
                  href={
                    accessibilityURL ?? t('shared.AccessibilityStatementURL')
                  }
                  target={'_blank'}
                  isExternal
                >
                  {t('shared.AccessibilityStatement')}
                </LinkGroup.Link>
                {linksFirstColumn}
              </LinkGroup>
              {firstColumn}
            </div>
            {secondColumn && (
              <div>
                {titleSecondColumn && (
                  <Heading as={'h2'} level={3} hasSpacing>
                    {titleSecondColumn}
                  </Heading>
                )}
                {secondColumn}
              </div>
            )}
            {thirdColumn && (
              <div>
                {titleThirdColumn && (
                  <Heading as={'h2'} level={3} hasSpacing>
                    {titleThirdColumn}
                  </Heading>
                )}
                {thirdColumn}
              </div>
            )}
          </div>
          {(!hideLogo || logos.length > 0) && (
            <div className={styles.logoContainer}>
              {!hideLogo && (
                <img
                  className={styles.skatteetatenLogo}
                  alt={t('shared.SkeLogoImageText')}
                  src={logo}
                ></img>
              )}
              {logos}
            </div>
          )}
          {links.length > 0 && (
            <ul className={styles.linkContainer}>
              {links.map((link, index) => {
                return (
                  <li key={index} className={styles.linkList}>
                    {link}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </footer>
    );
  }
) as FooterComponent;

Footer.displayName = 'Footer';
Footer.Logo = FooterLogo;
Footer.Link = FooterLink;
Footer.LinkFirstColumn = LinkGroup.Link;
