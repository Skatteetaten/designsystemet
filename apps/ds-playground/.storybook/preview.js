import React from 'react';

import '@skatteetaten/ds-core-designtokens/index.css';
export const decorators = [(Story) => <Story />];

const DSViewports = {
  mobil: {
    name: 'Mobil 320',
    styles: {
      width: '320px',
      height: '963px',
    },
  },
  ipad: {
    name: 'IpadStørrelse',
    styles: {
      width: '647px',
      height: '963px',
    },
  },
};
export const parameters = {
  viewport: { viewports: DSViewports },
};
