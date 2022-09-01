import React, { forwardRef, useRef } from 'react';

import { BaseProps } from '../base-props.types';

// Her plukker man manuelt hvilke html-attributer skal eksponeres som property.
// Vi tar utgangspunkt i interfacet HTMLOrSVGElement fordi vi ikke vet hvilket html tag skal outputes
type MyExampleComponentPropsHTMLAttributes = Pick<
  React.HTMLAttributes<HTMLOrSVGElement>,
  'title' | 'onClick' | 'children'
>;

export interface MyExampleComponentCustomProps
  extends MyExampleComponentPropsHTMLAttributes {
  as?: 'button' | 'div';
  children?: string;
}

// Her samler jeg interfacet med BaseProps som er et set med properties som alle komponentene våre skal tilby
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
