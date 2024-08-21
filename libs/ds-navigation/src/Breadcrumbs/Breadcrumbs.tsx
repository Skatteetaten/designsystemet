import React, {
  JSX,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { Link } from '@skatteetaten/ds-buttons';
import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { BreadcrumbsProps } from './Breadcrumbs.types';

import styles from './Breadcrumbs.module.scss';

type BreadcrumbLinkProps = {
  href: string;
  children: string;
};

const BreadcrumbLink = ({
  href,
  children,
}: BreadcrumbLinkProps): JSX.Element => {
  return (
    <Link className={styles.breadcrumbsLink} href={href}>
      {children}
    </Link>
  );
};

type BreadcrumbItemProps = {
  children: React.ReactNode;
};

const BreadcrumbItem = (props: BreadcrumbItemProps): JSX.Element => {
  return <li>{props.children}</li>;
};

const BreadcrumbSeparator = (): JSX.Element => {
  return <span aria-hidden={'true'}>{'/'}</span>;
};

type BreadcrumbListProps = {
  shouldCollapse: boolean;
  children: React.ReactNode;
};

const LINE_HEIGHT = 26.656;

const BreadcrumbList = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ children }, ref): JSX.Element => {
    const [isCollapsed, setIsCollaped] = useState(false);
    const listRef = useRef<HTMLOListElement>(null);
    const prevWidth = useRef(window.innerWidth);
    // useImperativeHandle(ref, () => listRef?.current);

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

    return (
      <ol ref={listRef} className={styles.breadcrumbsList}>
        {!isCollapsed || childrenAsArray.length < 3 ? (
          childrenAsArray
        ) : (
          <>
            {childrenAsArray[0]}
            <button>{'...'}</button>
            {childrenAsArray[childrenAsArray.length - 1]}
          </>
        )}
      </ol>
    );
  }
);

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      // isCollapsed = true,
    },
    ref
  ): JSX.Element => {
    // const { t } = useTranslation('ds_buttons', { i18n: dsI18n });

    return (
      <nav
        ref={ref}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
        aria-label={'brødsmuler (hent fra tekstslistekatalogen)'}
      >
        <BreadcrumbList shouldCollapse>
          <BreadcrumbItem>
            <BreadcrumbLink href={'#'}>{'Første element'}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={'#'}>{'Neste side2'}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={'#'}>{'Bank og innskudd'}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={'#'}>{'Neste side'}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={'#'}>{'Neste side'}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={'#'}>{'Siste element'}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';
BreadcrumbList.displayName = 'BreadcrumbsList';
