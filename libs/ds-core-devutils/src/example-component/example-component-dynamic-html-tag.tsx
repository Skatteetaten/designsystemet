import React, { forwardRef, useRef } from 'react';

import { BaseProps } from '../base-props.types';

// Here I pick manually all the native html attributes that I wanna do smthg with
type MyExampleComponentPropsHTMLAttributes = Pick<
  React.HTMLAttributes<HTMLOrSVGElement>,
  'title' | 'onClick' | 'children'
>;

// Here are all my custom props
// And I can also overwrite the types from html attribute that I want to limit
export interface MyExampleComponentCustomProps
  extends MyExampleComponentPropsHTMLAttributes {
  as?: 'button' | 'div';
  children?: string;
}

type MyExampleComponentProps = MyExampleComponentCustomProps & BaseProps;

export const MyExampleComponentWithDynamicHtmlTag = forwardRef<
  HTMLButtonElement | HTMLDivElement,
  MyExampleComponentProps
>(
  (
    {
      as: Root = 'button',
      id,
      className,
      'data-testid': dataTestId = `testid-${id}`,
      onClick,
      children,
    },
    ref
  ): JSX.Element => {
    return (
      <Root
        ref={
          ref as (instance: HTMLButtonElement | HTMLDivElement | null) => void
        }
        data-testid={dataTestId}
        className={className}
        onClick={onClick}
      >
        <span>
          <span>{children}</span>
        </span>
      </Root>
    );
  }
);

MyExampleComponentWithDynamicHtmlTag.displayName =
  'MyExampleComponentWithDynamicHtmlTag';

export const UsageOfMyComponent = (): JSX.Element => {
  // Her har vi en svakhet i den forstand at vi ikke kan sjekke at ref som opprettes har riktig type.
  // Velger konsumenten å bruke as "div" og oppretter en ref med type HTMLButtonElement får man ingen varsling
  const myRef = useRef<HTMLDivElement>(null);
  return (
    <MyExampleComponentWithDynamicHtmlTag ref={myRef} as={'div'} id={'123'}>
      {'My test'}
    </MyExampleComponentWithDynamicHtmlTag>
  );
};
