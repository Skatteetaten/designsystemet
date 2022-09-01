import React, { useRef } from 'react';

import { MyExampleComponentProps } from './example-component';

export interface WhateverHOCProps {
  propFromHOC: string;
}

export interface IncomingRefProp {
  incomingRef: React.Ref<HTMLButtonElement>;
}

// Dummy HOC for example only
const whateverHOC = <T extends WhateverHOCProps>(
  Component: React.ComponentType<T>
) => {
  return function Test(props: Omit<T, keyof WhateverHOCProps>): JSX.Element {
    const propFromHOC = 'random-string';

    return <Component {...(props as T)} propFromHOC={propFromHOC} />;
  };
};

// Example with HOC and Ref supported in the outter element
// Denne komponenten skal ikke eksporteres
const MyExampleComponentWithoutRef = whateverHOC(
  ({
    incomingRef,
    propFromHOC,
    id,
    variant = 'primary',
    className,
    dataTestId = `testid-${id}`,
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

export const MyExampleComponentWithHOC = React.forwardRef<
  HTMLButtonElement,
  MyExampleComponentProps
>(function MyExampleComponent(props, ref) {
  return <MyExampleComponentWithoutRef {...props} incomingRef={ref} />;
});

export const UsageOfMyComponent = (): JSX.Element => {
  const myRef = useRef<HTMLButtonElement>(null);
  return (
    <MyExampleComponentWithHOC ref={myRef} id={'123'}>
      {'My test'}
    </MyExampleComponentWithHOC>
  );
};
