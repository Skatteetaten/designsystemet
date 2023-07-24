import { Table } from '@skatteetaten/ds-table';
import { expect } from '@storybook/jest';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

const meta = {
  component: Table.Row,
  title: 'Tester/Table/Row',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    expandableContent: { table: { disable: true } },
    expandButtonAriaDescribedby: { table: { disable: true } },
    expandButtonPosition: { table: { disable: true } },
    expandButtonTitle: { table: { disable: true } },
    isExpandable: { table: { disable: true } },
    isExpanded: { table: { disable: true } },
    children: { table: { disable: true } },
    onClose: { table: { disable: true } },
    onExpand: { table: { disable: true } },
  },
} satisfies Meta<typeof Table.Row>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Table.Row> = (args) => (
  <Table caption={'testtabell'}>
    <Table.Body>
      <Table.Row {...args}>
        <Table.DataCell id={'Id123'} as={'th'}>
          {'Cake'}
        </Table.DataCell>
        <Table.DataCell>{'3,000'}</Table.DataCell>
      </Table.Row>
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
    const row = canvas.getByRole('row');
    await expect(row).toHaveClass('dummyClassname');
    await expect(row).toHaveAttribute('id', 'htmlId');
    await expect(row).toHaveAttribute('lang', 'nb');
    await expect(row).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithExpandable = {
  render: Template,
  name: 'With Expandable (TableRow B6)',

  args: {
    isExpandable: true,
    expandButtonAriaDescribedby: 'Id123',
  },

  argTypes: {
    isExpandable: { table: { disable: false } },
    expandButtonAriaDescribedby: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toHaveAttribute('aria-describedby', 'Id123');
    await expect(iconButton).toHaveAccessibleName('Mer informasjon');
    await expect(iconButton).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(iconButton);
    await expect(iconButton).toHaveAttribute('aria-expanded', 'true');
  },
} satisfies Story;
