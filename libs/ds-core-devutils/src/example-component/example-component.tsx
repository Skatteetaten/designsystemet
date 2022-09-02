import React, { useRef } from 'react';

import { BaseProps } from '../base-props.types';

// Her plukker man manuelt hvilke html-attributer skal eksponeres som property
type MyExampleComponentPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'title' | 'onClick' | 'children'
>;

// Her er alle de custom propsene
// Så kan typene fra html-attribute overskrives når man f.eks ønsker å begrense type på dem
interface MyExampleComponentCustomProps
  extends MyExampleComponentPropsHTMLAttributes {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: string;
}

// Her samler jeg interfacet med BaseProps som er et set med properties som alle komponentene våre skal tilby
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

// Eksempel på hvordan man bruker komponenten
export const UsageOfMyComponent = (): JSX.Element => {
  const myRef = useRef<HTMLButtonElement>(null);
  return (
    <MyExampleComponent ref={myRef} id={'123'}>
      {'My test'}
    </MyExampleComponent>
  );
};
