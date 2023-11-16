import {
  StepList,
  getStepListStepTitleAsDefault,
  getStepListStepVariantDefault,
} from '@skatteetaten/ds-collections';
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
    editButtonText: {
      table: { category: category.props, defaultValue: { summary: 'Endre' } },
    },
    nextButtonText: {
      table: { category: category.props, defaultValue: { summary: 'Neste' } },
    },
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
