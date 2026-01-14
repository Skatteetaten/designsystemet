import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getListAsDefault } from './defaults';
import { ListProps, ListComponent, AnyHTMLListElement } from './List.types';
import { ListElement } from './ListElement/ListElement';

import styles from './List.module.scss';

/**
 * List
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-list--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/typography#list) - Brukerveiledning
 */
export const List = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  as: Tag = getListAsDefault(),
  canBeManuallyFocused,
  hasSpacing,
  children,
}: ListProps): JSX.Element => {
  return (
    <Tag
      ref={ref as (instance: AnyHTMLListElement | null) => void}
      id={id}
      className={`${styles.list} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      data-ul={Tag === 'ul' ? 'true' : undefined}
      data-has-spacing={hasSpacing ? 'true' : undefined}
      tabIndex={canBeManuallyFocused ? -1 : undefined}
    >
      {children}
    </Tag>
  );
}) as ListComponent;

List.displayName = 'List';
List.Element = ListElement;
List.Element.displayName = 'List.Element';
