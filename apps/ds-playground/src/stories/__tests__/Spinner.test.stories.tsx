import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Spinner } from '@skatteetaten/ds-progress';

const meta = {
  component: Spinner,
  title: 'Tester/Spinner',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
      control: 'text',
    },
    size: {
      table: { disable: true },
      control: 'inline-radio',
    },
    titlePosition: {
      table: { disable: true },
      control: 'inline-radio',
    },
    color: {
      table: { disable: true },
      control: 'inline-radio',
    },
    classNames: { table: { disable: true } },
    percentComplete: { table: { disable: true } },
    hideTitle: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof Spinner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLDivElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const spinner = canvas.getAllByRole('generic')[1];
    await expect(spinner).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
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
    const spinner = canvas.getByTestId('123ID');
    await expect(spinner).toHaveAttribute('id', 'htmlid');
    await expect(spinner).toHaveClass('dummyClassname');
    await expect(spinner).toHaveAttribute('lang', 'nb');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (B2)',
  argTypes: {
    children: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const spinner = await canvas.findByText('Laster inn');
    await expect(spinner).toBeInTheDocument();
  },
} satisfies Story;

export const WithSizeAndPosition = {
  name: 'With Size, TitlePostition, Children (A1, A2, A4)',
  render: (args): JSX.Element => {
    return (
      <>
        <Spinner className={'bottomSpacingXL'} size={'small'} {...args} />
        <Spinner className={'bottomSpacingXL'} size={'medium'} {...args} />
        <Spinner className={'bottomSpacingXL'} size={'large'} {...args} />

        <Spinner
          className={'bottomSpacingXL'}
          titlePosition={'right'}
          size={'small'}
          {...args}
        />
        <Spinner
          className={'bottomSpacingXL'}
          titlePosition={'right'}
          size={'medium'}
          {...args}
        />
        <Spinner
          className={'bottomSpacingXL'}
          titlePosition={'right'}
          size={'large'}
          {...args}
        />
      </>
    );
  },
  args: {
    children: 'henter innhold',
  },
  argTypes: {
    children: { table: { disable: false } },
    size: { table: { disable: false } },
    titlePosition: { table: { disable: false } },
  },
} satisfies Story;

export const WithSizeAndPositionLongText = {
  ...WithSizeAndPosition,
  name: 'With Size, Text Postition, Children, Long Text (A1, A2, A4)',
  args: {
    children: 'Henter årsmiddelkurs fra valutakurstjenesten',
  },
};

export const WithColorsLightBackground = {
  name: 'With Color (A3)',
  render: (args): JSX.Element => {
    return (
      <>
        <Spinner
          className={'bottomSpacingXL'}
          color={'black'}
          size={'medium'}
          {...args}
        >
          {'Henter innhold'}
        </Spinner>
        <Spinner color={'blue'} size={'medium'} {...args}>
          {'Henter innhold'}
        </Spinner>
      </>
    );
  },
  argTypes: {
    color: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const WithColorsDarkBackground = {
  name: 'With Color Dark Background(A3)',
  args: {
    color: 'white',
  },
  argTypes: {
    color: {
      table: { disable: false },
    },
  },
  globals: {
    backgrounds: {
      value: 'dark',
    },
  },
} satisfies Story;

const spinnerTitle = 'laster data';
export const WithHideText = {
  name: 'With HideTitle (B1)',
  args: {
    hideTitle: true,
    children: spinnerTitle,
  },
  argTypes: {
    hideTitle: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    // vi må bruke findBy i stedet for getBY her siden det er en liten delay før teksten rendres
    const spinnerTitleElement = await canvas.findByText(spinnerTitle);
    await expect(spinnerTitleElement).toBeInTheDocument();
  },
} satisfies Story;

export const WithPercent = {
  name: 'With PercentComplete (B3)',
  args: {
    percentComplete: 50,
    children: spinnerTitle,
  },
  argTypes: {
    percentComplete: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('progressbar');
    await expect(canvas.getByText('50 %')).toBeInTheDocument();
    await expect(spinner).toHaveAttribute('aria-busy', 'true');
    await expect(spinner).toHaveAttribute('aria-valuenow', '50');
    await expect(spinner).toHaveAttribute('aria-valuemin', '0');
    await expect(spinner).toHaveAttribute('aria-valuemax', '100');
    await expect(spinner).toBeInTheDocument();
  },
} satisfies Story;
