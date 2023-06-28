import { Table } from '@skatteetaten/ds-table';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';

export default {
  component: Table.HeaderCell,
  title: 'Tester/Table/HeaderCell',
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
    children: { table: { disable: true } },
    colSpan: { table: { disable: true } },
    isSortable: { table: { disable: true } },
    scope: { table: { disable: true } },
    sortKey: { table: { disable: true } },
  },
} as ComponentMeta<typeof Table>;

const defaultArgs = {
  children: 'cake',
};

const Template: ComponentStory<typeof Table.HeaderCell> = (args) => (
  <div data-test-block>
    {/* eslint-disable-next-line testing-library/no-node-access */}
    <Table.HeaderCell {...args}>{args.children}</Table.HeaderCell>
  </div>
);

// Når TableHeaderCell har en ref, så får dom th elementet ref forwarded
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
  const table = canvas.getByRole('columnheader');
  await expect(table).toBeInTheDocument();
  await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når TableHeaderCell har en id, så har table-element id
// Når TableHeaderCell har en custom CSS, så vises custom stil
// Når TableHeaderCell har en lang, så har table-element lang
// Når TableHeaderCell har dataTestid, så har table-elementet data-testid satt
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
  ...WithAttributes.argTypes,
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
  const dataCell = canvas.getByRole('columnheader');
  await expect(dataCell).toHaveClass('dummyClassname');
  await expect(dataCell).toHaveAttribute('id', 'htmlId');
  await expect(dataCell).toHaveAttribute('lang', 'nb');
  await expect(dataCell).toHaveAttribute('data-testid', '123ID');
};

// Når TableHeaderCell har children, så rendres de som forventet
export const WithChildren = Template.bind({});
WithChildren.storyName = 'With Children (Table A8)';
WithChildren.args = {
  children: 'columnheader',
};
WithChildren.argTypes = {
  ...WithChildren.argTypes,
  children: { table: { disable: false } },
};
WithChildren.parameters = {
  imageSnapshot: { disable: true },
};
WithChildren.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const dataCell = canvas.getByText('columnheader');
  await expect(dataCell).toBeInTheDocument();
};
