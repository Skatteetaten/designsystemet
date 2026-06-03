import { Meta, StoryObj } from '@storybook/react-vite';

import { StepList } from '@skatteetaten/ds-collections';

import {
  category,
  htmlEventDescription,
  svgPathDescription,
} from '../../../.storybook/helpers';
import { dsI18n } from '@skatteetaten/ds-core-utils';

const meta = {
  component: StepList.Step,
  title: 'Komponenter/StepList/Step',
  argTypes: {
    // Props
    classNames: { control: false, table: { category: category.props } },
    editButtonText: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('ds_collections:steplist.Edit') },
      },
    },
    nextButtonProps: { control: false, table: { category: category.props } },
    nextButtonText: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('ds_collections:steplist.Next') },
      },
    },
    introTitle: { table: { category: category.props } },
    introTitleAs: {
      control: 'inline-radio',
      table: { category: category.props },
    },
    titleAs: { control: 'inline-radio', table: { category: category.props } },
    introContent: { control: 'text', table: { category: category.props } },
    children: { table: { category: category.props }, control: 'text' },
    title: { table: { category: category.props } },
    stepNumber: { table: { category: category.props } },
    svgPath: { ...svgPathDescription },
    svgTitle: { table: { category: category.props } },
    shouldAutoFocusWhenActive: { table: { category: category.props } },
    variant: { table: { category: category.props } },
    hasResultContentFullWidth: { table: { category: category.props } },
    // Event
    onEdit: { ...htmlEventDescription },
    onNext: { ...htmlEventDescription },
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
