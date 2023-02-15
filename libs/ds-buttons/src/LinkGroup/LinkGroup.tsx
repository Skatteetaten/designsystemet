import { Children, cloneElement, forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  ArrowForwardSVGpath,
  ArrowDownSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';

import { Link } from '../Link/Link';
import { getLinkGroupVariantDefault } from './defaults';
import { LinkGroupComponent, LinkGroupProps } from './LinkGroup.types';

import styles from './LinkGroup.module.scss';

const LinkGroup = forwardRef<HTMLUListElement, LinkGroupProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      hasSpacing,
      color,
      variant = getLinkGroupVariantDefault(),
      children,
    },
    ref
  ): JSX.Element => {
    const hasVariantList = variant !== 'anchors';
    const iconPath = hasVariantList ? ArrowForwardSVGpath : ArrowDownSVGpath;
    const iconVariantClassName = hasVariantList
      ? `${styles.icon_forward}`
      : `${styles.icon_down}`;
    const concatenatedIconClassName = `${styles.icon} ${iconVariantClassName} ${
      color ? styles[`icon_${color}`] : ''
    }`;

    const spacingClassName = hasSpacing ? `${styles.linkGroup_hasSpacing}` : '';
    const concatenatedClassName = `${styles.linkGroup} ${spacingClassName} ${className} `;

    const links = Children.toArray(children);

    return (
      <ul
        ref={ref}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
      >
        {links.map((link, index) => {
          return (
            <li key={index} className={styles.linkGroupItem}>
              <Icon className={concatenatedIconClassName} svgPath={iconPath} />
              {cloneElement(link as JSX.Element, { color: color })}
            </li>
          );
        })}
      </ul>
    );
  }
) as LinkGroupComponent;

LinkGroup.displayName = 'LinkGroup';
LinkGroup.Link = Link;

export { LinkGroup, getLinkGroupVariantDefault };
