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

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: ScrollToTopButton,
  title: 'Komponenter/ScrollToTopButton',
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
    version: getVersion('ds-buttons'),
  },
} as Meta<ScrollToTopButtonProps>;

const TemplateDefault: Story<ScrollToTopButtonProps> = (args) => (
  <div className={'height100vh'}>
    <main className={'scrollToTopContainer'} tabIndex={-1}>
      <ExternalLayout />
      <ScrollToTopButton {...args} />
    </main>
  </div>
);

const TemplateExample: Story<ScrollToTopButtonProps> = () => (
  <div className={'height100vh'}>
    <ScrollToTopButton visibilityThreshold={0} />
  </div>
);

export const ScrollToTopButtonDefault: Story<ScrollToTopButtonProps> =
  TemplateDefault.bind({});
export const ScrollToTopButtonExample: Story<ScrollToTopButtonProps> =
  TemplateExample.bind({});
ScrollToTopButtonDefault.storyName = 'Default';
ScrollToTopButtonExample.storyName = 'Example';

ScrollToTopButtonDefault.args = {
  visibilityThreshold: getVisibilityThresholdDefault(),
};
