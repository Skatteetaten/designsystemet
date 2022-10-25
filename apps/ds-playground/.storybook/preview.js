import React from 'react';

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
  id: { table: { category: category.htmlAttribute } },
  ref: { table: { category: category.htmlAttribute } },
  className: { table: { category: category.htmlAttribute } },
  key: { table: { category: category.props } },
  'data-testid': { table: { category: category.htmlAttribute } },
};
