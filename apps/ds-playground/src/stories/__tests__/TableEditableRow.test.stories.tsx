import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fireEvent, within } from '@storybook/test';

import { Table } from '@skatteetaten/ds-table';

const meta = {
  component: Table.EditableRow,
  title: 'Tester/Table/EditableRow',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    editableContent: { table: { disable: true } },
    editButtonAriaDescribedby: { table: { disable: true } },
    editButtonPosition: { table: { disable: true } },
    editButtonRef: { table: { disable: true } },
    editableContentRef: { table: { disable: true } },
    onEdit: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Table.EditableRow>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Table.EditableRow> = (args) => (
  <Table caption={'testtabell'}>
    <Table.Body>
      <Table.EditableRow {...args}>
        <Table.DataCell as={'th'}>{'Cake'}</Table.DataCell>
        <Table.DataCell>{'3,000'}</Table.DataCell>
      </Table.EditableRow>
    </Table.Body>
  </Table>
);

export const WithRef = {
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLTableRowElement | null): void => {
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
    const table = canvas.getByRole('row');
    await expect(table).toBeInTheDocument();
    await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithEditButtonRef = {
  render: Template,
  name: 'With EditButtonRef',
  args: {
    editButtonRef: (instance: HTMLButtonElement | null): void => {
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
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const editButton = canvas.getByRole('button');
    await expect(editButton).toBeInTheDocument();
    await expect(editButton).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithEditableContentRef = {
  render: Template,
  name: 'With EditableContentRef',
  args: {
    editableContentRef: (instance: HTMLSpanElement | null): void => {
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
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const editButton = canvas.getByRole('button');
    await fireEvent.click(editButton);
    const editableContent = canvas.getByText('Rediger data');
    await expect(editableContent).toBeInTheDocument();
    await expect(editableContent).toHaveAttribute(
      'id',
      'dummyIdForwardedFromRef'
    );
  },
} satisfies Story;

export const WithAttributes = {
  render: Template,
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlId',
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
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole('row');
    await expect(table).toHaveClass('dummyClassname');
    await expect(table).toHaveAttribute('id', 'htmlId');
    await expect(table).toHaveAttribute('lang', 'nb');
    await expect(table).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;
