import React, { useRef } from 'react';

import { BaseProps } from '../base-props.types';

// Here I pick manually all the native html attributes that I wanna do smthg with
type MyExampleComponentPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'title' | 'onClick' | 'children'
>;

// Here are all my custom props
// And I can also overwrite the types from html attribute that I want to limit
interface MyExampleComponentCustomProps
  extends MyExampleComponentPropsHTMLAttributes {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: string;
}

export type MyExampleComponentProps = MyExampleComponentCustomProps & BaseProps;

export const MyExampleComponent = React.forwardRef<
  HTMLButtonElement,
  MyExampleComponentProps
>(
  (
    {
      id,
      variant = 'primary',
      className,
      'data-testid': dataTestId = `testid-${id}`,
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

export const UsageOfMyComponent = (): JSX.Element => {
  const myRef = useRef<HTMLButtonElement>(null);
  return (
    <MyExampleComponent ref={myRef} id={'123'}>
      {'My test'}
    </MyExampleComponent>
  );
};
