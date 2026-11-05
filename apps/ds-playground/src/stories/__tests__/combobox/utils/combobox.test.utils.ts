/* eslint-disable react-compiler/react-compiler */
import { createElement, useRef } from 'react';

import { StoryFn } from '@storybook/react-vite';

import { Combobox } from '@skatteetaten/ds-forms';

export const defaultOptions = [
  { label: 'Norge', value: 'no' },
  { label: 'Sverige', value: 'se' },
  { label: 'Danmark', value: 'dk' },
];

export const defaultLabel = 'Velg land';

/** 1200 nesten like alternativer for å teste filtrering og rendering av store lister */
export const largeOptions = ['bolig', 'formue', 'gjeld', 'pensjon'].flatMap(
  (category) =>
    Array.from({ length: 300 }, (_, index) => {
      const number = String(index + 1).padStart(3, '0');
      return {
        label: `Skatteinfo om ${category} ${number}`,
        value: `${category}-${number}`,
      };
    })
);

export const wrapper = '.docs-story > div';

export const ProgrammaticFocusTemplate: StoryFn<typeof Combobox> = () => {
  const comboboxRef = useRef<HTMLInputElement>(null);

  return createElement(
    'div',
    null,
    createElement(
      'button',
      {
        className: 'mb-4',
        onClick: () => {
          if (comboboxRef.current) {
            comboboxRef.current.focus();
          }
        },
      },
      'Fokuser på combobox'
    ),
    createElement(Combobox, {
      ref: comboboxRef,
      label: 'Velg land',
      options: defaultOptions,
      hasSpacing: false,
    })
  );
};
