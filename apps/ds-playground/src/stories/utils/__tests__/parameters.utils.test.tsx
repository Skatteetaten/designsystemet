import type { Parameters } from '@storybook/csf';

import { getParameters } from '../parameters.utils';

describe('Parameters utils', () => {
  it('Returnerer parameters', () => {
    const expectedParameters: Parameters = {
      design: [
        {
          name: 'varianter og størrelser',
          type: 'figma',
          url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12296',
        },
        {
          name: 'luft og avstander',
          type: 'figma',
          url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12324',
        },
      ],
    };

    const designParameters = [
      {
        name: 'varianter og størrelser',
        url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12296',
      },
      {
        name: 'luft og avstander',
        url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12324',
      },
    ];
    const parameters = getParameters(designParameters);

    expect(parameters['design']).toEqual(expectedParameters['design']);
  });
});
