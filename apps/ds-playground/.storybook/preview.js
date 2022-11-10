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

// TODO FRONT-930 - sortering på prop-kategorier i argsTable
export const parameters = {
  controls: { sort: 'alpha' },
  viewport: { viewports: DSViewports },
};

export const argTypes = {
  key: {
    control: false,
    description:
      'Spesielt string attributt som brukes for å iterere gjennom elementer',
    table: { type: { summary: 'string' }, category: category.baseProps },
  },
  ref: {
    control: false,
    description: 'React ref sendt gjennom React.forwardref',
    table: {
      type: { summary: 'React.ForwardedRef' },
      category: category.baseProps,
    },
  },
  className: {
    control: 'select',
    options: ['', 'dummyClassname'],
    description: 'html class til noden',
    table: {
      type: { summary: 'string' },
      category: category.baseProps,
      defaultValue: { summary: getCommonClassNameDefault() },
    },
  },
  'data-testid': {
    control: 'text',
    description: 'data attribute som brukes for tester',
    table: { type: { summary: 'string' }, category: category.baseProps },
  },
  id: {
    control: 'text',
    description: 'unik id attribute',
    table: { type: { summary: 'string' }, category: category.baseProps },
  },
  lang: {
    control: 'text',
    description: 'html lang attribute',
    table: { type: { summary: 'string' }, category: category.baseProps },
  },
};
