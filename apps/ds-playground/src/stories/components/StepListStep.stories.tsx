import { StepList } from '@skatteetaten/ds-collections';
import { stepVariantArr } from '@skatteetaten/ds-collections';
import { getPanelTitleAsDefault } from '@skatteetaten/ds-content';
import { headingAsArr } from '@skatteetaten/ds-core-utils';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

export default {
  component: StepList.Step,
  title: 'Komponenter/StepList/Step',
  argTypes: {
    // Props
    editButtonText: { table: { category: category.props }, control: 'text' },
    nextButtonText: { table: { category: category.props }, control: 'text' },
    introTitle: { table: { category: category.props }, control: 'text' },
    introTitleAs: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelTitleAsDefault() },
      },
    },
    titleAs: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: { category: category.props },
    },
    introContent: {
      control: 'text',
      table: { category: category.props },
    },
    children: { table: { category: category.props }, control: 'text' },
    onEdit: { table: { category: category.props } },
    onNext: { table: { category: category.props } },
    title: { table: { category: category.props }, control: 'text' },
    stepNumber: {
      table: { category: category.props },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    svgTitle: {
      table: { category: category.props },
    },
    variant: {
      options: [...stepVariantArr],
      control: 'inline-radio',
      table: {
        category: category.props,
      },
    },
    hasResultContentFullWidth: { table: { category: category.props } },
  },
  parameters: {
    version: getVersion('ds-collections'),
  },
} satisfies Meta<typeof StepList.Step>;

export const Preview = {
  args: {
    title: 'overskrift',
    children: 'innhold',
    stepNumber: 9,
  },
} satisfies StoryObj<typeof StepList.Step>;
