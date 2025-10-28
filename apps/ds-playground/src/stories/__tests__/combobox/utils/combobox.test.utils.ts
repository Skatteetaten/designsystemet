/* eslint-disable react-compiler/react-compiler */
import React, { useRef } from 'react';

import { StoryFn } from '@storybook/react-vite';

import { Combobox } from '@skatteetaten/ds-forms';

export const defaultOptions = [
  { label: 'Norge', value: 'no' },
  { label: 'Sverige', value: 'se' },
  { label: 'Danmark', value: 'dk' },
];

export const defaultArgs = {
  label: 'Velg land',
  options: defaultOptions,
};

export const wrapper = '.docs-story > div';

export const ProgrammaticFocusTemplate: StoryFn<typeof Combobox> = () => {
  const comboboxRef = useRef<HTMLInputElement>(null);

  return React.createElement(
    'div',
    null,
    React.createElement(
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
    React.createElement(Combobox, {
      ref: comboboxRef,
      label: 'Velg land',
      options: defaultOptions,
      hasSpacing: false,
    })
  );
};
