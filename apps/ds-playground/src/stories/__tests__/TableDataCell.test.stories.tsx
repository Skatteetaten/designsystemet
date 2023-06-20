import { Table } from '@skatteetaten/ds-table';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';

export default {
  component: Table.DataCell,
  title: 'Tester/Table/DataCell',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    alignment: { table: { disable: true } },
    as: { table: { disable: true } },
    colSpan: { table: { disable: true } },
    rowSpan: { table: { disable: true } },
    scope: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} as ComponentMeta<typeof Table.DataCell>;

const defaultArgs = {
  children: 'cake',
};

const Template: ComponentStory<typeof Table.DataCell> = (args) => (
  <div data-test-block>
    {/* eslint-disable-next-line testing-library/no-node-access */}
    <Table.DataCell {...args}>{args.children}</Table.DataCell>
  </div>
);

// Når Table har en ref, så får dom table elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLTableCellElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: { disable: true },
};
WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const table = canvas.getByRole('cell');
  await expect(table).toBeInTheDocument();
  await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når TableDataCell har en id, så har th-element id
// Når TableDataCell har en custom CSS, så vises custom stil
// Når TableDataCell har en lang, så har th-element lang
// Når TableDataCell har dataTestid, så har th-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlId',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
};
WithAttributes.argTypes = {
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.parameters = {
  imageSnapshot: { disable: true },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const dataCell = canvas.getByRole('cell');
  await expect(dataCell).toHaveClass('dummyClassname');
  await expect(dataCell).toHaveAttribute('id', 'htmlId');
  await expect(dataCell).toHaveAttribute('lang', 'nb');
  await expect(dataCell).toHaveAttribute('data-testid', '123ID');
};

// Når TableDataCell har scope, så har th-elementet attributet satt
// Når TableDataCell har as, så render den som forventet element
export const WithThAndScope = Template.bind({});
WithThAndScope.storyName = 'With Scope And As th (TableRow B2, TableHeader B1)';
WithThAndScope.args = {
  ...defaultArgs,
  as: 'th',
  scope: 'row',
};
WithThAndScope.argTypes = {
  ...WithThAndScope.argTypes,
  as: { table: { disable: false } },
  scope: { table: { disable: false } },
};
WithThAndScope.parameters = {
  imageSnapshot: { disable: true },
};
WithThAndScope.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const dataCell = canvas.getByRole('rowheader');
  await expect(dataCell).toHaveAttribute('scope', 'row');
};

// Når TableDataCell har children, så render den som forventet
export const WithChildren = Template.bind({});
WithChildren.storyName = 'With children (TableRow A1)';
WithChildren.args = {
  children: 'cellChildren',
};
WithChildren.argTypes = {
  children: { table: { disable: false } },
};

WithChildren.parameters = {
  imageSnapshot: { disable: true },
};
WithChildren.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  await expect(canvas.getByText('cellChildren')).toBeInTheDocument();
};
