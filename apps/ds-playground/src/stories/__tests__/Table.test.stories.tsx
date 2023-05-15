import { Table, TableProps } from '@skatteetaten/ds-table';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole('table');
    await expect(table).toBeInTheDocument();
    await expect(table).toHaveAttribute(attribute, expectedValue);
  };

export default {
  component: Table,
  title: 'Tester/Table',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    caption: { table: { disable: true } },
    variant: { table: { disable: true } },
    hasFullWidth: { table: { disable: true } },
    showCaption: { table: { disable: true } },
    sortState: { table: { disable: true } },
    setSortState: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} as ComponentMeta<typeof Table>;

const defaultArgs: TableProps = {
  caption: 'tabellcaption',
};

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args} variant={args.variant}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell scope={'col'}>{'Items'}</Table.HeaderCell>
        <Table.HeaderCell scope={'col'}>{'Expenditure'}</Table.HeaderCell>
        <Table.HeaderCell scope={'col'}>{'Category'}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.DataCell as={'th'}>{'Donuts'}</Table.DataCell>
        <Table.DataCell>{'3,000'}</Table.DataCell>
        <Table.DataCell className={'rowSpanLeft'} rowSpan={2}>
          {'Edible'}
        </Table.DataCell>
      </Table.Row>
      <Table.Row>
        <Table.DataCell as={'th'}>{'Cake'}</Table.DataCell>
        <Table.DataCell>{'3,000'}</Table.DataCell>
      </Table.Row>
      <Table.Row>
        <Table.DataCell as={'th'}>{'Stationery'}</Table.DataCell>
        <Table.DataCell>{'18,000'}</Table.DataCell>
        <Table.DataCell>{'Non-Edible'}</Table.DataCell>
      </Table.Row>
    </Table.Body>
  </Table>
);

// Når Table har en ref, så får dom table elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLTableElement | null): void => {
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
WithRef.play = verifyAttribute('id', 'dummyIdForwardedFromRef');

// Når IconButton har en id, så har a-element id
// Når IconButton har en custom CSS, så vises custom stil
// Når IconButton har en lang, så har a-element lang
// Når IconButton har dataTestid, så har a-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes(FA2-5)';
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
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const table = canvas.getByRole('table');
  await expect(table).toHaveClass('dummyClassname');
  await expect(table).toHaveAttribute('id', 'htmlId');
  await expect(table).toHaveAttribute('lang', 'nb');
  await expect(table).toHaveAttribute('data-testid', '123ID');
};

export const WithVariantCompact = Template.bind({});
WithVariantCompact.storyName = 'Variant compact(A1)';
WithVariantCompact.args = {
  ...defaultArgs,
  variant: 'compact',
};
WithVariantCompact.argTypes = {
  variant: { table: { disable: false } },
};

const TemplateScroll: ComponentStory<typeof Table> = (args) => {
  const exampleTable = (
    <Table {...args} variant={args.variant}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope={'col'}>{'Forename'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Surname'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'email'}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.DataCell>{'Otto'}</Table.DataCell>
          <Table.DataCell>{'Octavius'}</Table.DataCell>
          <Table.DataCell>{'doc.ock@example.org'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'Norman'}</Table.DataCell>
          <Table.DataCell>{'Osbourne'}</Table.DataCell>
          <Table.DataCell>{'norman.osbourne@example.org'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'Curt'}</Table.DataCell>
          <Table.DataCell>{'Connors'}</Table.DataCell>
          <Table.DataCell>{'curt.connors@example.org'}</Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  return (
    <div>
      <p>{'Table med Scrollbar'}</p>
      <div className={'scrollTableWrapper'}>{exampleTable}</div>
      <div className={'scrollTableWrapperSuccess'}>{exampleTable}</div>
      <div className={'scrollTableWrapperWarning'}>{exampleTable}</div>
    </div>
  );
};

// Når Table får en scrollbar så tegnes den opp som forventet
export const WithScrollbar = TemplateScroll.bind({});
WithScrollbar.storyName = 'With scroll(A5)';
WithScrollbar.parameters = { a11y: { disable: true } };
