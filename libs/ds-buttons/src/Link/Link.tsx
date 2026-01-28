import { useContext, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ExternalIcon, Icon } from '@skatteetaten/ds-icons';

import { LinkProps } from './Link.types';
import { LinkContext } from '../LinkGroup/LinkContext';

import styles from './Link.module.scss';

/**
 * Link
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-link--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/link/) - Brukerveiledning
 */
export const Link = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  isExternal,
  color,
  svgPath,
  href,
  target,
  download,
  ariaDescribedby,
  ariaCurrent,
  onClick,
  children,
}: LinkProps): JSX.Element => {
  const { t } = useTranslation('ds_buttons', { i18n: dsI18n });
  const context = useContext(LinkContext);

  return (
    <a
      ref={ref}
      id={id}
      className={`${styles.link} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      href={href}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      target={target}
      data-color={color ?? context?.color}
      aria-current={ariaCurrent}
      aria-describedby={ariaDescribedby}
      download={download}
      onClick={onClick}
    >
      {svgPath && (
        <Icon
          size={'medium'}
          svgPath={svgPath}
          className={`${styles.linkIcon} ${styles.linkIcon_isCustom}`}
        />
      )}
      {children}
      {isExternal && (
        <ExternalIcon
          size={'medium'}
          className={`${styles.linkIcon} ${styles.linkIcon_isExternal}`}
          ariaLabel={t('shared.ExternalIcon')}
        />
      )}
    </a>
  );
};

Link.displayName = 'Link';
