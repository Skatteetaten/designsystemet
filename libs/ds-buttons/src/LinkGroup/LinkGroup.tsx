import { Children, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  ArrowForwardSVGpath,
  ArrowDownSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';

import { getLinkGroupVariantDefault } from './defaults';
import { LinkContext } from './LinkContext';
import { LinkGroupComponent, LinkGroupProps } from './LinkGroup.types';
import { Link } from '../Link/Link';

import styles from './LinkGroup.module.scss';

export const LinkGroup = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  hasSpacing,
  color,
  variant = getLinkGroupVariantDefault(),
  children,
}: LinkGroupProps): JSX.Element => {
  const hasVariantList = variant !== 'anchors';
  const iconPath = hasVariantList ? ArrowForwardSVGpath : ArrowDownSVGpath;
  const iconVariantClassName = hasVariantList
    ? `${styles.icon_forward}`
    : `${styles.icon_down}`;
  const concatenatedIconClassName = `${styles.icon} ${iconVariantClassName} ${
    color ? styles[`icon_${color}`] : ''
  }`.trim();

  const spacingClassName = hasSpacing ? styles.linkGroup_hasSpacing : '';
  const concatenatedClassName =
    `${styles.linkGroup} ${spacingClassName} ${className}`.trim();

  const links = Children.toArray(children);

  return (
    <ul
      ref={ref}
      id={id}
      className={concatenatedClassName}
      lang={lang}
      data-testid={dataTestId}
    >
      <LinkContext.Provider value={{ color }}>
        {links.map((child, index) => {
          return (
            <li key={index} className={styles.linkGroupItem}>
              <Icon className={concatenatedIconClassName} svgPath={iconPath} />
              {child}
            </li>
          );
        })}
      </LinkContext.Provider>
    </ul>
  );
}) as LinkGroupComponent;

LinkGroup.displayName = 'LinkGroup';
LinkGroup.Link = Link;
