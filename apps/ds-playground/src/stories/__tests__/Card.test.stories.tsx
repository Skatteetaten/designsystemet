import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Card, cardColorArr } from '@skatteetaten/ds-content';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

const meta = {
  component: Card,
  title: 'Tester/Card/Card',
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
    // Aria
    ariaLabelledBy: { table: { disable: true } },
    color: { table: { disable: true } },
  },
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultText =
  'Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.';

const defaultArgs = {
  children: defaultText,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
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
    const card = canvas.getAllByRole('generic')[1];
    await expect(card).toHaveClass('dummyClassname');
    await expect(card).toHaveAttribute('id', 'htmlId');
    await expect(card).toHaveAttribute('lang', 'en');
    await expect(card).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (B1, B2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];

    const section = canvas.queryByRole('region');
    await expect(section).not.toBeInTheDocument();
    await expect(container).toBeInTheDocument();
  },
} satisfies Story;

const TemplateAllColors: StoryFn<typeof Card> = (args) => (
  <>
    {cardColorArr.map((color, index) => {
      return (
        <Card
          {...args}
          key={`card_${index}`}
          className={'bottomSpacingXL'}
          color={color}
        >
          <Card.Content>{args.children}</Card.Content>
        </Card>
      );
    })}
  </>
);

export const AllColors = {
  render: TemplateAllColors,
  name: 'All Colors (A1, A2)',
  args: {
    ...defaultArgs,
  },
} satisfies Story;

export const WithAriaLabelledBy = {
  name: 'With aria-labelledby (B1)',
  argTypes: {
    ariaLabelledBy: { table: { disable: false } },
  },
  args: {
    ...defaultArgs,
    ariaLabelledBy: 'dummyId',
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const cardNote = canvas.getByRole('region');
    await expect(cardNote).toHaveAttribute('aria-labelledby', 'dummyId');
  },
} satisfies Story;
