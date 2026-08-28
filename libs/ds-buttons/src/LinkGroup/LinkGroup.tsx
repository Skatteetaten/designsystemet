import { Children, JSX } from 'react';

import {
  ArrowForwardSVGpath,
  ArrowDownSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';

import { LinkContext } from './LinkContext';
import { LinkGroupComponent, LinkGroupProps } from './LinkGroup.types';
import { Link } from '../Link/Link';

import styles from './LinkGroup.module.scss';

/**
 * LinkGroup
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-linkgroup--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/linkgroup/) - Brukerveiledning
 */
export const LinkGroup = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  hasSpacing = false,
  color = 'interactive',
  variant = 'list',
  children,
}: LinkGroupProps): JSX.Element => {
  const links = Children.toArray(children);

  return (
    <ul
      ref={ref}
      id={id}
      className={`${styles.linkGroup} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      data-has-spacing={hasSpacing ? 'true' : undefined}
    >
      <LinkContext.Provider value={{ color }}>
        {links.map((child, index) => {
          return (
            <li
              key={index}
              className={styles.linkGroupItem}
              data-color={color}
              data-variant={variant}
            >
              <Icon
                className={styles.linkGroupItemIcon}
                svgPath={
                  variant === 'list' ? ArrowForwardSVGpath : ArrowDownSVGpath
                }
              />
              {child}
            </li>
          );
        })}
      </LinkContext.Provider>
    </ul>
  );
};

export default LinkGroup as LinkGroupComponent;

LinkGroup.displayName = 'LinkGroup';
LinkGroup.Link = Link;
