import type { ThemeRegistrationRaw } from 'shiki';
import githubLightDefault from 'shiki/themes/github-light-default.mjs';

import paletteJson from '@skatteetaten/ds-core-designtokens/designtokens/palette.json';

const palette = paletteJson[':root,\n:host'] as Record<string, string>;

const token = (name: string): string => {
  const value = palette[`--palette-${name}`];
  if (!value) {
    throw new Error(`Mangler palette-token: --palette-${name}`);
  }
  return value;
};

// Basetema: github-light-default fra Shiki.
// Overstyringer legges på toppen via egne tokenColors-regler.
// Senere regler vinner i Shiki/TextMate, så våre overrides trumfer basetemaet.
const baseTokenColors =
  githubLightDefault.tokenColors ?? githubLightDefault.settings ?? [];

export const skeCodeTheme: ThemeRegistrationRaw = {
  ...githubLightDefault,
  name: 'ske-light',
  type: 'light',
  colors: {
    ...githubLightDefault.colors,
    'editor.background': token('graphite-0'),
    'editor.foreground': token('graphite-100'),
  },
  tokenColors: [
    ...baseTokenColors,
    // Designsystemet-overstyringer (mørkere palette-varianter)
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
        'keyword.control.at-rule',
        'keyword.other.important',
      ],
      settings: { foreground: token('burgundy-100') },
    },
    {
      scope: [
        'string',
        'string.quoted',
        'string.template',
        'punctuation.definition.string',
      ],
      settings: { foreground: token('forest-100') },
    },
    {
      scope: [
        'entity.name.tag',
        'support.class.component',
        'entity.name.class',
        'entity.name.type.class',
        'entity.name.type',
        'entity.name.tag.css',
        'entity.name.tag.scss',
      ],
      settings: { foreground: token('denim-100') },
    },
    {
      scope: [
        'entity.other.attribute-name',
        'meta.object-literal.key',
        'variable.parameter',
        'support.type.property-name',
        'support.type.property-name.css',
        'support.type.property-name.scss',
        'variable.scss',
        'variable.other.scss',
        'variable.css',
      ],
      settings: { foreground: token('azure-100') },
    },
    {
      scope: [
        'constant.numeric',
        'constant.language.boolean',
        'constant.other',
      ],
      settings: { foreground: token('ochre-100') },
    },
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: token('graphite-50'), fontStyle: 'italic' },
    },
  ],
};
