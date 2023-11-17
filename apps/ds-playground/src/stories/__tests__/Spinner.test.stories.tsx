import { JSX } from 'react';

import {
  Spinner,
  spinnerColorArr,
  spinnerPositionArr,
  spinnerSizeArr,
} from '@skatteetaten/ds-status';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const meta = {
  component: Spinner,
  title: 'Tester/Spinner',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
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
      options: [...spinnerSizeArr],
    },
    titlePosition: {
      table: { disable: true },
      control: 'inline-radio',
      options: [...spinnerPositionArr],
    },
    color: {
      table: { disable: true },
      control: 'inline-radio',
      options: [...spinnerColorArr],
    },
    hideTitle: {
      control: 'boolean',
      table: { disable: true },
    },
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
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('status');
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
    const spinner = canvas.getByRole('status');
    await expect(spinner).toHaveAttribute('id', 'htmlid');
    await expect(spinner).toHaveClass('dummyClassname');
    await expect(spinner).toHaveAttribute('lang', 'nb');
    await expect(spinner).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (B2)',
  argTypes: {
    children: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('status');
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
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Story;

const spinnerText = 'laster data';
export const WithHideText = {
  name: 'With HideTitle (B1)',
  args: {
    hideTitle: true,
    children: spinnerText,
  },
  argTypes: {
    hideTitle: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    // vi må bruke findBy i stedet for getBY her siden det er en liten delay før teksten rendres
    const spinnerTextElement = await canvas.findByText(spinnerText);
    await expect(spinnerTextElement).toBeInTheDocument();
  },
} satisfies Story;
