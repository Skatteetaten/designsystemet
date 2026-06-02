import { JSX } from 'react';

import { ListProps, ListComponent, AnyHTMLListElement } from './List.types';
import { ListElement } from './ListElement/ListElement';

import styles from './List.module.scss';

/**
 * List
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-list--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/typography#list) - Brukerveiledning
 */
export const ListBase = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  as: Tag = 'ul',
  canBeManuallyFocused = false,
  hasSpacing = false,
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
};

export const List = ListBase as ListComponent;

List.displayName = 'List';
List.Element = ListElement;
List.Element.displayName = 'List.Element';
