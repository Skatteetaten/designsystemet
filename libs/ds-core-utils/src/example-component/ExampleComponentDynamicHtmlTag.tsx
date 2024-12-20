import { HTMLAttributes, forwardRef, useRef, JSX } from 'react';

import { BaseProps } from '../base-props.types';

// Her plukker man manuelt hvilke html-attributer skal eksponeres som property.
// Vi tar utgangspunkt i interfacet HTMLOrSVGElement fordi vi ikke vet hvilken html tag som skal outputes
type ExampleComponentPropsHTMLAttributes = Pick<
  HTMLAttributes<HTMLOrSVGElement>,
  'title' | 'onClick' | 'children'
>;

export interface ExampleComponentCustomProps
  extends ExampleComponentPropsHTMLAttributes {
  as?: 'button' | 'div';
  children?: string;
}

// Her samler jeg interfacet med BaseProps som er et set med properties som alle komponentene våre skal tilby
type ExampleComponentProps = ExampleComponentCustomProps & BaseProps;

export const ExampleComponentDynamicHtmlTag = forwardRef<
  HTMLButtonElement | HTMLDivElement,
  ExampleComponentProps
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

ExampleComponentDynamicHtmlTag.displayName = 'ExampleComponentDynamicHtmlTag';

export const UsageOfMyComponent = (): JSX.Element => {
  // Her har vi en svakhet i den forstand at vi ikke kan sjekke at ref som opprettes har riktig type.
  // Velger konsumenten å bruke as "div" og oppretter en ref med type HTMLButtonElement får man ingen varsling
  const myRef = useRef<HTMLDivElement>(null);
  return (
    <ExampleComponentDynamicHtmlTag ref={myRef} as={'div'} id={'123'}>
      {'My test'}
    </ExampleComponentDynamicHtmlTag>
  );
};
