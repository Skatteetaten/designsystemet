import {
  StepList,
  getStepListStepTitleAsDefault,
  getStepListStepVariantDefault,
  getStepListStepShouldAutoFocusWhenActiveDefault,
} from '@skatteetaten/ds-collections';
import { getPanelTitleAsDefault } from '@skatteetaten/ds-content';
import { dsI18n, headingAsArr } from '@skatteetaten/ds-core-utils';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';

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
    nextButtonProps: {
      table: {
        category: category.props,
      },
    },
    nextButtonText: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('ds_collections:steplist.Next') },
      },
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
      },
    },
    titleAs: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getStepListStepTitleAsDefault() },
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
    shouldAutoFocusWhenActive: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getStepListStepShouldAutoFocusWhenActiveDefault().toString(),
        },
      },
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
  args: {
    title: 'Overskrift',
    children: 'Innhold',
    stepNumber: 9,
  },
} satisfies Meta<typeof StepList.Step>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
