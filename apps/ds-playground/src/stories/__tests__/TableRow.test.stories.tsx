import { Table } from '@skatteetaten/ds-table';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

export default {
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
    onOpen: { table: { disable: true } },
    onClose: { table: { disable: true } },
    onExpand: { table: { disable: true } },
  },
} as ComponentMeta<typeof Table.Row>;

const Template: ComponentStory<typeof Table.Row> = (args) => (
  <div data-test-block>
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
  const row = canvas.getByRole('row');
  await expect(row).toHaveClass('dummyClassname');
  await expect(row).toHaveAttribute('id', 'htmlId');
  await expect(row).toHaveAttribute('lang', 'nb');
  await expect(row).toHaveAttribute('data-testid', '123ID');
};

// Når TableRow er expandable så setter den riktig title, aria-expanded og aria-describedby på ikonknappen
export const WithExpandable = Template.bind({});
WithExpandable.storyName = 'With Expandable (TableRow B6)';
WithExpandable.args = {
  isExpandable: true,
  expandButtonAriaDescribedby: 'Id123',
};
WithExpandable.argTypes = {
  isExpandable: { table: { disable: false } },
  expandButtonAriaDescribedby: { table: { disable: false } },
};
WithExpandable.parameters = {
  imageSnapshot: { disable: true },
  HTMLSnapshot: { disable: true },
};
WithExpandable.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const iconButton = canvas.getByRole('button');
  await expect(iconButton).toHaveAttribute('aria-describedby', 'Id123');
  await expect(iconButton).toHaveAccessibleName('Mer informasjon');
  await expect(iconButton).toHaveAttribute('aria-expanded', 'false');
  await userEvent.click(iconButton);
  await expect(iconButton).toHaveAttribute('aria-expanded', 'true');
};
