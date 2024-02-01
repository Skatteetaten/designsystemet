import {
  StepList,
  getStepListStepTitleAsDefault,
  getStepListStepVariantDefault,
} from '@skatteetaten/ds-collections';
import { getPanelTitleAsDefault } from '@skatteetaten/ds-content';
import { dsI18n, headingAsArr } from '@skatteetaten/ds-core-utils';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: StepList.Step,
  title: 'Komponenter/StepList/Step',
  argTypes: {
    // Props
    editButtonText: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('ds_collections:steplist.Edit') },
      },
    },
    nextButtonText: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('ds_collections:steplist.Next') },
      },
    },
    nextButtonHasSpinner: { table: { category: category.props } },
    introTitle: {
      control: 'text',
      table: { category: category.props, type: { summary: 'string' } },
    },
    introTitleAs: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelTitleAsDefault() },
        type: { summary: [...headingAsArr] },
      },
    },
    titleAs: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getStepListStepTitleAsDefault() },
        type: { summary: [...headingAsArr] },
      },
    },
    introContent: {
      control: 'text',
      table: { category: category.props, type: { summary: 'ReactNode' } },
    },
    children: { table: { category: category.props }, control: 'text' },
    title: { table: { category: category.props } },
    stepNumber: { table: { category: category.props } },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    svgTitle: { table: { category: category.props } },
    variant: {
      table: {
        category: category.props,
        defaultValue: { summary: getStepListStepVariantDefault() },
      },
    },
    hasResultContentFullWidth: { table: { category: category.props } },
    // Event
    onEdit: { table: { category: category.event } },
    onNext: { table: { category: category.event } },
  },
  args: {
    title: 'Overskrift',
    children: 'Innhold',
    stepNumber: 9,
  },
  parameters: {
    version: getVersion('ds-collections'),
  },
} satisfies Meta<typeof StepList.Step>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
