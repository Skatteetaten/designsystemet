import React from 'react';

import { BaseProps } from '../base-props.types';
import { MyExampleComponentCustomProps } from './example-component.types';

export interface MyExampleComponentProps
  extends BaseProps,
    MyExampleComponentCustomProps {}

// Example without HOC
export const MyExampleComponent = React.forwardRef<
  HTMLButtonElement,
  MyExampleComponentProps
>(
  (
    {
      id,
      variant = 'primary',
      className,
      dataTestId = `testid-${id}`,
      onClick,
      children,
    },
    ref
  ): JSX.Element => {
    return (
      <button
        ref={ref}
        data-testid={dataTestId}
        className={className}
        onClick={onClick}
      >
        <span>
          <span>{`I am ${variant}`}</span>
          <span>{children}</span>
        </span>
      </button>
    );
  }
);

MyExampleComponent.displayName = 'MyExampleComponent';
