/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable sonarjs/no-duplicate-string */
import { JSX } from 'react';

import { Button, getButtonVariantDefault } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  getCommonButtonTypeDefault,
} from '@skatteetaten/ds-core-utils';
import { Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const meta = {
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
    accessKey: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    form: { table: { category: category.htmlAttribute } },
    type: {
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: getCommonButtonTypeDefault() },
      },
    },
    // Aria
    ariaCurrent: {
      table: { category: category.aria },
    },
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  args: {
    children: 'Send inn skjema',
  },
  parameters: {
    version: getVersion('ds-buttons'),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
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
  },
} satisfies Story;
Examples.parameters = exampleParameters;
