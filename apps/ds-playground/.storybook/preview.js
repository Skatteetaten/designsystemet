import React from 'react';

import '@skatteetaten/ds-core-designtokens/index.css';
export const decorators = [(Story) => <Story />];

const getBreakPoint = (point) =>
  getComputedStyle(document.documentElement).getPropertyValue(point);

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
  viewport: { viewports: DSViewports },
};
