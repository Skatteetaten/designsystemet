import React from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { category } from './helpers';
import '@skatteetaten/ds-core-designtokens/index.css';
import './playground.css';

export const decorators = [(Story) => <Story />];

const getBreakPoint = (point) => {
  const pointPx = getComputedStyle(document.documentElement).getPropertyValue(
    point
  );
  return `${parseInt(pointPx) + 1}px`;
};

const makeViewPort = (dsbreakpoint) => {
  return {
    [dsbreakpoint.replace(/[^a-zA-Z]/, '')]: {
      name: dsbreakpoint,
      styles: {
        width: getBreakPoint(dsbreakpoint),
        height: '100%',
      },
    },
  };
};

const DSViewports = {
  ...makeViewPort('--breakpoint-xs'),
  ...makeViewPort('--breakpoint-s'),
  ...makeViewPort('--breakpoint-m'),
  ...makeViewPort('--breakpoint-l'),
  ...makeViewPort('--breakpoint-xl'),
};
export const parameters = {
  controls: { sort: 'alpha' },
  viewport: { viewports: DSViewports },
};

export const argTypes = {
  key: { table: { category: category.baseProps } },
  ref: { table: { category: category.baseProps } },
  className: {
    control: 'select',
    options: ['', 'dummyClassname'],
    description: 'Verdien appended til designsystemets stilsett for komponent',
    table: {
      category: category.baseProps,
      defaultValue: { summary: getCommonClassNameDefault() },
    },
  },
  'data-testid': { table: { category: category.baseProps } },
  id: { table: { category: category.baseProps } },
};
