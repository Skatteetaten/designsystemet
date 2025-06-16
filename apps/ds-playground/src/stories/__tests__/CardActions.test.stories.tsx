import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { DeleteSVGpath, EditSVGpath } from '@skatteetaten/ds-icons';

const meta = {
  component: Card.Actions,
  title: 'Tester/Card/Actions',
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
  },
} satisfies Meta<typeof Card.Actions>;
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
    const cardNote = canvas.getAllByRole('generic')[1];
    await expect(cardNote).toHaveAttribute('id', 'htmlId');
    await expect(cardNote).toHaveClass('dummyClassname');
    await expect(cardNote).toHaveAttribute('lang', 'en');
    await expect(cardNote).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;
export const WithChildren: Story = {
  name: 'With Children (A6)',
  render: (args) => (
    <Card>
      <Card.Actions {...args} />
    </Card>
  ),
  args: {
    children: [
      <InlineButton key={'button1'} svgPath={EditSVGpath}>
        {'Endre'}
      </InlineButton>,
      <InlineButton key={'button2'} svgPath={DeleteSVGpath}>
        {'Slett'}
      </InlineButton>,
    ],
  },
  argTypes: {
    children: { table: { disable: false } },
  },
} satisfies Story;
