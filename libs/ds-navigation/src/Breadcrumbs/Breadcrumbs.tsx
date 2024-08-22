import React, {
  JSX,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { BreadcrumbsComponent, BreadcrumbsProps } from './Breadcrumbs.types';
import { BreadcrumbItem } from '../BreadcrumbItem/BreadcrumbItem';
import { BreadcrumbLink } from '../BreadcrumbLink/BreadcrumbLink';

import styles from './Breadcrumbs.module.scss';

// const BreadcrumbSeparator = (): JSX.Element => {
//   return <span aria-hidden={'true'}>{'/'}</span>;
// };

const LINE_HEIGHT = 26.656;

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      // shouldCollapse = true,
      children,
    },
    ref
  ): JSX.Element => {
    // const { t } = useTranslation('ds_buttons', { i18n: dsI18n });

    const [isCollapsed, setIsCollaped] = useState(false);
    const listRef = useRef<HTMLOListElement>(null);
    // const prevWidth = useRef(window.innerWidth);

    useImperativeHandle(ref, () => listRef?.current as HTMLOListElement);

    // når vinduet resizes:
    // 1. blir det mindre og vi har allerede kollapset, ikke endre noen regler for rendring
    // 2. blir det større, sjekk om det er plass
    // 3. blir det mindre, og vi _ikke_ har kollapset, sjekk om vi -må- kollapse.

    useEffect(() => {
      const handleResize = (): void => {
        // if (window.innerWidth < prevWidth.current) {
        //   return;
        // }

        if (listRef.current) {
          const rect = listRef.current.getBoundingClientRect();
          const moreThanOneLine = rect.height / LINE_HEIGHT > 1;
          setIsCollaped(moreThanOneLine);
        }
        // prevWidth.current = window.innerWidth;
      };

      handleResize();
      // TODO: tilpass til shadowDom
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const childrenAsArray = React.Children.toArray(children);

    //TODO: bør vi ta ut en egen listcomponent her for å få plassert baseprops også på nav/ol
    return (
      <nav
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
        aria-label={'brødsmuler (hent fra tekstslistekatalogen)'}
      >
        <ol ref={listRef} className={styles.breadcrumbsList}>
          {!isCollapsed || childrenAsArray.length < 3 ? (
            childrenAsArray
          ) : (
            <>
              <Button
                variant={'tertiary'}
                onClick={() => {
                  /* fjern kollapse */
                }}
              >
                {'...'}
              </Button>
              {childrenAsArray[childrenAsArray.length - 2]}
              <span aria-hidden>{'/'}</span>
              {childrenAsArray[childrenAsArray.length - 1]}
            </>
          )}
        </ol>
      </nav>
    );
  }
) as BreadcrumbsComponent;

Breadcrumbs.displayName = 'Breadcrumbs';
Breadcrumbs.Item = BreadcrumbItem;
Breadcrumbs.Item.displayName = 'BreadcrumbItem';

Breadcrumbs.Link = BreadcrumbLink;
Breadcrumbs.Link.displayName = 'BreadcrumbLink';
