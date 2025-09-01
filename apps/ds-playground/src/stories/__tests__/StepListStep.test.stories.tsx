import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, fn, waitFor, within } from 'storybook/test';

import { StepList } from '@skatteetaten/ds-collections';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { TimersandSVGpath } from '@skatteetaten/ds-icons';

import { loremIpsum } from './testUtils/storybook.testing.utils';
import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
  component: StepList.Step,
  title: 'Tester/StepList/Step',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    introContent: { table: { disable: true, category: category.props } },
    introTitle: { table: { disable: true, category: category.props } },
    introTitleAs: { table: { disable: true, category: category.props } },
    stepTitle: { table: { disable: true, category: category.props } },
    titleAs: { table: { disable: true, category: category.props } },
    children: { table: { disable: true, category: category.props } },
    onEdit: { table: { disable: true, category: category.props } },
    onNext: { table: { disable: true, category: category.props } },
    editButtonText: { table: { disable: true, category: category.props } },
    nextButtonText: { table: { disable: true, category: category.props } },
    nextButtonProps: { table: { disable: true, category: category.props } },
    shouldAutoFocusWhenActive: {
      table: { disable: true, category: category.props },
    },
    hasResultContentFullWidth: {
      table: { disable: true, category: category.props },
    },
    title: { table: { disable: true, category: category.props } },
    stepNumber: {
      table: { disable: true, category: category.props },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { disable: true, category: category.props },
    },
    svgTitle: { table: { disable: true, category: category.props } },
    variant: {
      control: 'inline-radio',
      table: {
        disable: true,
        category: category.props,
      },
    },
  },
  tags: ['test'],
} as Meta<typeof StepList.Step>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  stepNumber: 1,
  title: 'title',
  onNext: fn(),
};
const Template: StoryFn<typeof StepList.Step> = (args) => (
  <StepList>
    <StepList.Step {...args} />
  </StepList>
);

export const WithRef = {
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLLIElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const step = canvas.getByRole('listitem');
    await expect(step).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  render: Template,
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const stepList = canvas.getByTestId('123ID');
    await expect(stepList).toHaveAttribute('id', 'htmlid');
    await expect(stepList).toHaveClass('dummyClassname');
    await expect(stepList).toHaveAttribute('lang', 'nb');
  },
} satisfies Story;

export const WithIconTitleAS = {
  render: Template,
  name: 'With icon, titleAs, svgTitle, children (A4)',
  args: {
    variant: 'active',
    title: 'jeg er en tittel',
    titleAs: 'h2',
    children: loremIpsum,
    svgPath: TimersandSVGpath,
    svgTitle: 'svg-tittel',
    onEdit: undefined,
  },
  argTypes: {
    children: { table: { disable: false } },
    title: { table: { disable: false } },
    titleAs: { table: { disable: false } },
    svgPath: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(canvas.getByText('jeg er en tittel')).toBeInTheDocument();
    await expect(canvas.getByTitle('svg-tittel')).toBeInTheDocument();
    await expect(canvas.getByText(loremIpsum)).toBeInTheDocument();
    await expect(heading.tagName).toBe('H2');
    const focused = canvasElement.querySelector('[aria-current="step"]');
    await waitFor(async () => {
      await expect(focused).toHaveFocus();
    });
  },
} satisfies Story;

export const WithShouldAutoFocusWhenActiveFalse = {
  render: Template,
  name: 'With shouldAutoFocusWhenActive False ',
  args: {
    variant: 'active',
    stepNumber: 13,
    title: 'jeg er en tittel',
    titleAs: 'h2',
    children: loremIpsum,
    shouldAutoFocusWhenActive: false,
    onEdit: undefined,
  },
  argTypes: {
    shouldAutoFocusWhenActive: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const focused = canvasElement.querySelector('[aria-current="step"]');
    await expect(focused).not.toHaveFocus();
  },
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
} satisfies Story;

export const WithFullWidthResult = {
  render: Template,
  name: 'With full width content in result (A10)',
  args: {
    variant: 'neutralResult',
    title: 'jeg er en tittel',
    children: loremIpsum,
    onEdit: undefined,
    hasResultContentFullWidth: true,
  },
  argTypes: {
    hasResultContentFullWidth: { table: { disable: false } },
  },
} satisfies Story;

export const WithEditAccessibleDescription = {
  render: Template,
  name: 'With edit button accessible description (B2 delvis)',
  args: {
    stepNumber: 1,
    variant: 'active',
    title: 'tittel',
    children: loremIpsum,
    onEdit: fn(),
  },
  argTypes: {
    title: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const endreButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_collections:steplist.Edit'),
    });
    expect(endreButton).toHaveAccessibleDescription('tittel');
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
} satisfies Story;

export const NextButtonWithSpinner = {
  render: Template,
  name: 'With Spinner In Next Button',
  args: {
    stepNumber: 1,
    variant: 'active',
    title: 'tittel',
    children: loremIpsum,
    nextButtonProps: { hasSpinner: true },
    onNext: (): void => console.log('next'),
    shouldAutoFocusWhenActive: false,
  },
  argTypes: {
    nextButtonProps: { table: { disable: false } },
  },
} satisfies Story;

export const NextButtonWithDisabled = {
  render: Template,
  name: 'With Disabled Next Button',
  args: {
    stepNumber: 1,
    variant: 'active',
    title: 'tittel',
    children: loremIpsum,
    nextButtonProps: { disabled: true },
    onNext: (): void => console.log('next'),
    shouldAutoFocusWhenActive: false,
  },
  argTypes: {
    nextButtonProps: { table: { disable: false } },
  },
} satisfies Story;
