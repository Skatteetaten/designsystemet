import React, { useRef } from 'react';

import { MyExampleComponentProps } from './example-component';

export interface WhateverHOCProps {
  propFromHOC: string;
}

export interface IncomingRefProp {
  incomingRef: React.Ref<HTMLButtonElement>;
}

const whateverHOC = <T extends WhateverHOCProps>(
  Component: React.ComponentType<T>
) => {
  return function Test(props: Omit<T, keyof WhateverHOCProps>): JSX.Element {
    const propFromHOC = 'random-string';

    return <Component {...(props as T)} propFromHOC={propFromHOC} />;
  };
};

// Eksempel med HOC og Ref i et "outer-element"
// Denne komponenten skal ikke eksporteres
const MyExampleComponentWithoutRef = whateverHOC(
  ({
    incomingRef,
    propFromHOC,
    id,
    variant = 'primary',
    className,
    'data-testid': dataTestId = `testid-${id}`,
    onClick,
    children,
  }: MyExampleComponentProps &
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

// Dette er komponeneten som eksporteres, da den har fått forwardref på seg i lik linje som de andre
export const MyExampleComponentWithHOC = React.forwardRef<
  HTMLButtonElement,
  MyExampleComponentProps
>(function MyExampleComponent(props, ref) {
  return <MyExampleComponentWithoutRef {...props} incomingRef={ref} />;
});

// Eksempel på hvordan man bruker komponenten
export const UsageOfMyComponent = (): JSX.Element => {
  const myRef = useRef<HTMLButtonElement>(null);
  return (
    <MyExampleComponentWithHOC ref={myRef} id={'123'}>
      {'My test'}
    </MyExampleComponentWithHOC>
  );
};
