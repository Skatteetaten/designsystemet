import { Children, isValidElement, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  getCommonClassNameDefault,
  Languages,
  Separator,
} from '@skatteetaten/ds-core-utils';
import { Heading } from '@skatteetaten/ds-typography';

import { getOpenDefaultLinksInNewTabDefault } from './defaults';
import { FooterComponent, FooterProps } from './Footer.types';
import defaultEnglishLogo from './logo_en.svg';
import defaultNorwegainLogo from './logo_no.svg';
import { FooterLink } from '../FooterLink/FooterLink';
import { FooterLogo } from '../FooterLogo/FooterLogo';

import styles from './Footer.module.scss';

export const Footer = (({
  ref,
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
  hideDefaultLinks,
  openDefaultLinksInNewTab = getOpenDefaultLinksInNewTabDefault(),
  children,
}: FooterProps): JSX.Element => {
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

  const logo =
    dsI18n.language === Languages.Engelsk
      ? defaultEnglishLogo
      : defaultNorwegainLogo;
  const logoClassNames =
    dsI18n.language === Languages.Engelsk
      ? styles.skatteetatenLogo_en
      : styles.skatteetatenLogo;

  const openInNexText = `(${t('shared.NewTab')})`;
  const getLinkText = (text: string): string =>
    `${text} ${openDefaultLinksInNewTab ? openInNexText : ''}`.trim();

  return (
    <footer
      ref={ref}
      id={id}
      lang={lang}
      data-testid={dataTestId}
      className={className}
    >
      <Separator className={styles.separator} />
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div
            className={`${styles.columns} ${threeColumnsClassName} ${twoColumnsClassName}`.trim()}
          >
            {(!hideDefaultLinks ||
              firstColumn ||
              titleFirstColumn ||
              linksFirstColumn) && (
              <div>
                {titleFirstColumn && (
                  <Heading as={'h2'} level={3} hasSpacing>
                    {titleFirstColumn}
                  </Heading>
                )}
                {(!hideDefaultLinks || linksFirstColumn) && (
                  <LinkGroup color={'white'}>
                    {!hideDefaultLinks && [
                      <LinkGroup.Link
                        key={'contactUs'}
                        target={openDefaultLinksInNewTab ? '_blank' : undefined}
                        href={contactUsURL ?? t('shared.ContactUsURL')}
                      >
                        {getLinkText(t('shared.ContactUs'))}
                      </LinkGroup.Link>,
                      <LinkGroup.Link
                        key={'securityAndPrivacy'}
                        href={securityURL ?? t('shared.SecurityAndPrivacyURL')}
                        target={openDefaultLinksInNewTab ? '_blank' : undefined}
                      >
                        {getLinkText(t('shared.SecurityAndPrivacy'))}
                      </LinkGroup.Link>,
                      <LinkGroup.Link
                        key={'accessibilityStatement'}
                        href={
                          accessibilityURL ??
                          t('shared.AccessibilityStatementURL')
                        }
                        target={openDefaultLinksInNewTab ? '_blank' : undefined}
                        isExternal
                      >
                        {getLinkText(t('shared.AccessibilityStatement'))}
                      </LinkGroup.Link>,
                    ]}
                    {linksFirstColumn}
                  </LinkGroup>
                )}
                {firstColumn}
              </div>
            )}
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
                  className={logoClassNames}
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
      </div>
    </footer>
  );
}) as FooterComponent;

Footer.displayName = 'Footer';
Footer.Logo = FooterLogo;
Footer.Link = FooterLink;
Footer.LinkFirstColumn = LinkGroup.Link;
