import type { ThemeRegistrationRaw } from 'shiki';

import paletteJson from '@skatteetaten/ds-core-designtokens/designtokens/palette.json';

// palette.json har selektoren (":root,\n:host") som top-level nøkkel
const palette = Object.values(paletteJson)[0] as Record<string, string>;

const token = (name: string): string => {
  const value = palette[`--palette-${name}`];
  if (!value) {
    throw new Error(`Mangler palette-token: --palette-${name}`);
  }
  return value;
};

// Egendefinert fargetema for kodeblokker, basert på designtokens
// Bakgrunn er sort, tekstfarger bruker 30-tokens for god kontrast
export const skeCodeTheme: ThemeRegistrationRaw = {
  name: 'ske-dark',
  type: 'dark',
  colors: {
    'editor.background': token('graphite-100'),
    'editor.foreground': token('graphite-0'),
  },
  settings: [
    {
      scope: ['source', 'punctuation'],
      settings: { foreground: token('graphite-0') }, // vanlig tekst
    },
    {
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator',
        'storage',
        'storage.type',
        'storage.modifier',
        'variable.language',
        'constant.language',
        'support.type.primitive',
        // SCSS/CSS nøkkelord
        'keyword.control.at-rule',
        'keyword.other.important',
        'punctuation.definition.keyword',
      ],
      settings: { foreground: token('burgundy-30') }, // nøkkelord
    },
    {
      scope: [
        'string',
        'string.quoted',
        'string.template',
        'punctuation.definition.string',
      ],
      settings: { foreground: token('denim-30') }, // tekststrenger
    },
    {
      scope: [
        'entity.other.attribute-name',
        'meta.object-literal.key',
        'variable.parameter',
        'support.type.property-name',
        // SCSS: property-navn og variabler
        'support.type.property-name.css',
        'support.type.property-name.scss',
        'variable.scss',
        'variable.other.scss',
        'variable.other.readwrite',
        'variable.css',
      ],
      settings: { foreground: token('denim-30') }, // props/attributter
    },
    {
      scope: [
        'entity.name.tag',
        'support.class.component',
        'support.class',
        'entity.name.class',
        'entity.name.type.class',
        'entity.name.type',
        'meta.tag',
        // SCSS-selektorer
        'entity.name.tag.css',
        'entity.name.tag.scss',
        'entity.other.attribute-name.class',
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.id',
        'entity.other.attribute-name.id.css',
        'entity.other.attribute-name.pseudo-class',
        'entity.other.attribute-name.pseudo-element',
        'entity.name.function.scss',
        'support.function.misc.css',
      ],
      settings: { foreground: token('ochre-30') }, // komponenter
    },
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: token('graphite-30'), fontStyle: 'italic' },
    },
  ],
};
