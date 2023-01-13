import {
  getVisibilityThresholdDefault,
  ScrollToTopButton,
  ScrollToTopButtonProps,
} from '@skatteetaten/ds-buttons';
import { ExternalLayout } from '@skatteetaten/ds-core-utils';
import { Meta, Story } from '@storybook/react';
// @skatteeteaten/ds-core-designtokens er angitt som symlink i package.json
// derfor vil typecheck feile hvis pakken ikke er bygget, derfor bryter vi nx module boundaries her
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import palette from 'libs/ds-core-designtokens/lib/designtokens/palette.json';

import { category } from '../../.storybook/helpers';

export default {
  component: ScrollToTopButton,
  title: 'Design System/ScrollToTopButton',
  argTypes: {
    // Props
    classNames: {
      table: { category: category.props },
    },
    visibilityThreshold: {
      table: {
        category: category.props,
        defaultValue: { summary: getVisibilityThresholdDefault() },
      },
    },
    shadowRootNode: {
      table: { control: false, category: category.props },
    },
    children: { table: { category: category.props } },
  },
  parameters: {
    backgrounds: {
      default: 'graphite-70',
      values: [
        {
          name: 'graphite-70',
          value: palette[':root,\n:host']['--palette-graphite-70'],
        },
      ],
    },
  },
} as Meta<ScrollToTopButtonProps>;

const TemplateDefault: Story<ScrollToTopButtonProps> = (args) => (
  <div style={{ height: '100vh' }}>
    <main className={'scrollToTopContainer'} tabIndex={-1}>
      <ExternalLayout />
      <ScrollToTopButton {...args} />
    </main>
  </div>
);

const scrollToTopButtonDefaultParameters = {
  design: [
    {
      name: 'Tilstander',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=5507%3A10821&t=ph6CtBRDkbwEBgbj-0',
    },
    {
      name: 'Luft og fontstørrelser',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=4636%3A9524&t=rPzwMjzIfFVKpI7b-0',
    },
    {
      name: 'Plassering på desktop',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1276%3A8091&t=vB2K1eVIBGZ0gFtH-0',
    },
    {
      name: 'Plassering på mobil',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=4636%253A9422',
    },
  ],
};

export const ScrollToTopButtonDefault: Story<ScrollToTopButtonProps> =
  TemplateDefault.bind({});
ScrollToTopButtonDefault.storyName = 'Default';

ScrollToTopButtonDefault.args = {
  visibilityThreshold: getVisibilityThresholdDefault(),
};
ScrollToTopButtonDefault.parameters = scrollToTopButtonDefaultParameters;
