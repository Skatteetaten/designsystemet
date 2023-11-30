/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable sonarjs/no-duplicate-string */

import { Button, getButtonVariantDefault } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  getCommonButtonTypeDefault,
} from '@skatteetaten/ds-core-utils';
import { Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

export default {
  component: Button,
  title: 'Komponenter/Button',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    hasSpinner: { table: { category: category.props } },
    spinnerTitle: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('ds_status:spinner.LoadingLabel') },
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    variant: {
      table: {
        category: category.props,
        defaultValue: { summary: getButtonVariantDefault() },
      },
    },
    // HTML
    accessKey: {
      table: { category: category.htmlAttribute },
    },
    disabled: {
      table: {
        category: category.htmlAttribute,
      },
    },
    type: {
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: getCommonButtonTypeDefault() },
      },
    },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  parameters: {
    version: getVersion('ds-buttons'),
  },
} as Meta<typeof Button>;

export const Preview: StoryObj<typeof Button> = {
  args: {
    children: 'Send inn skjema',
  },
};

export const Example: StoryFn<typeof Button> = (_args) => (
  <>
    <Button className={'exampleSpacing'}>{'Send inn skjema'}</Button>
    <Button className={'exampleSpacing'} variant={'secondary'}>
      {'Avbryt'}
    </Button>
    <div>
      <Button className={'exampleSpacing'} variant={'tertiary'}>
        {'Logg inn'}
      </Button>
    </div>
    <Button className={'exampleSpacing'} variant={'danger'}>
      {'Slett'}
    </Button>
  </>
);

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
