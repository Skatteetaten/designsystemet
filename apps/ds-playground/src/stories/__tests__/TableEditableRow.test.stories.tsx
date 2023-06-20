import { Table } from '@skatteetaten/ds-table';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';

export default {
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
    onEdit: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} as ComponentMeta<typeof Table.EditableRow>;

const Template: ComponentStory<typeof Table.EditableRow> = (args) => (
  <div data-test-block>
    <Table caption={'testtabell'}>
      <Table.Body>
        <Table.EditableRow {...args}>
          <Table.DataCell as={'th'}>{'Cake'}</Table.DataCell>
          <Table.DataCell>{'3,000'}</Table.DataCell>
        </Table.EditableRow>
      </Table.Body>
    </Table>
  </div>
);

// Når Table har en ref, så får dom table elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ref: (instance: HTMLTableRowElement | null): void => {
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
  const table = canvas.getByRole('row');
  await expect(table).toBeInTheDocument();
  await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når TableRow har en id, så har table-element id
// Når TableRow har en custom CSS, så vises custom stil
// Når TableRow har en lang, så har table-element lang
// Når TableRow har dataTestid, så har table-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
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
  const table = canvas.getByRole('row');
  await expect(table).toHaveClass('dummyClassname');
  await expect(table).toHaveAttribute('id', 'htmlId');
  await expect(table).toHaveAttribute('lang', 'nb');
  await expect(table).toHaveAttribute('data-testid', '123ID');
};
