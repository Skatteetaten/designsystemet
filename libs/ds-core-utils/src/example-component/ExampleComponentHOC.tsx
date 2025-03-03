import { ComponentType, Ref, useRef, JSX } from 'react';

import { ExampleComponentProps } from './ExampleComponent';

export interface WhateverHOCProps {
  propFromHOC: string;
}

export interface IncomingRefProp {
  incomingRef: Ref<HTMLButtonElement> | undefined;
}

const whateverHOC = <T extends WhateverHOCProps>(
  Component: ComponentType<T>
) => {
  return function Test(props: Omit<T, keyof WhateverHOCProps>): JSX.Element {
    const propFromHOC = 'random-string';

    return <Component {...(props as T)} propFromHOC={propFromHOC} />;
  };
};

// Eksempel med HOC og Ref i et "outer-element"
// Denne komponenten skal ikke eksporteres
const ExampleComponentWithoutRef = whateverHOC(
  ({
    incomingRef,
    propFromHOC,
    id,
    variant = 'primary',
    className,
    'data-testid': dataTestId = `testid-${id}`,
    onClick,
    children,
  }: ExampleComponentProps &
    WhateverHOCProps &
    IncomingRefProp): JSX.Element => {
    return (
      <button
        ref={incomingRef}
        data-testid={dataTestId}
        className={className}
        onClick={onClick}
      >
        <span>
          <span>{`I am ${variant}`}</span>
          <span>{propFromHOC}</span>
          <span>{children}</span>
        </span>
      </button>
    );
  }
);

// Dette er komponeneten som eksporteres
export const ExampleComponentHOC = function MyExampleComponent({
  ref,
  ...props
}: ExampleComponentProps): JSX.Element {
  return <ExampleComponentWithoutRef {...props} incomingRef={ref} />;
};

// Eksempel på hvordan man bruker komponenten
export const UsageOfMyComponent = (): JSX.Element => {
  const myRef = useRef<HTMLButtonElement>(null);
  return (
    <ExampleComponentHOC ref={myRef} id={'123'}>
      {'My test'}
    </ExampleComponentHOC>
  );
};
