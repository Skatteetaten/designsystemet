import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import { Card } from '@skatteetaten/ds-content';
import { InfoOutlineSVGpath } from '@skatteetaten/ds-icons';
import { Tag } from '@skatteetaten/ds-status';
import { List } from '@skatteetaten/ds-typography';

const meta = {
  component: Card.Header,
  title: 'Tester/Card/Header',
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
    rightContent: {
      table: { disable: true },
      control: 'text',
    },
    classNames: { table: { disable: true } },
  },
} satisfies Meta<typeof Card.Header>;
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

export const WithChildrenRigthContent: Story = {
  name: 'With Children RightContent (A4)',
  render: (args) => (
    <Card>
      <Card.Header {...args} />
    </Card>
  ),
  args: {
    children: (
      <List>
        <List.Element>{'første element'}</List.Element>
        <List.Element>{'andre element'}</List.Element>
      </List>
    ),
    rightContent: <Tag svgPath={InfoOutlineSVGpath}>{'Endret av deg'}</Tag>,
  },
  argTypes: {
    children: { table: { disable: false } },
    rightContent: { table: { disable: false } },
  },
} satisfies Story;
