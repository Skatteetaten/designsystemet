import { JSX } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, fireEvent, fn, within } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Table } from '@skatteetaten/ds-table';

const meta = {
  component: Table.Row,
  title: 'Tester/Table/Row',
  argTypes: {
    // Baseprops
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
    expandButtonProps: { table: { disable: true } },
    showExpandButtonTitle: { table: { disable: true } },
    isExpandable: { table: { disable: true } },
    isExpanded: { table: { disable: true } },
    children: { table: { disable: true } },
    onClose: { table: { disable: true } },
    onExpand: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
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
    imageSnapshot: { disableSnapshot: true },
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
    imageSnapshot: { disableSnapshot: true },
    a11y: {
      test: 'off',
    },
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
    onExpand: fn(),
  },
  argTypes: {
    isExpandable: { table: { disable: false } },
    expandButtonAriaDescribedby: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement, args }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toHaveAttribute('aria-describedby', 'Id123');
    await expect(iconButton).toHaveAccessibleName(
      `${dsI18n.t('ds_tables:tablerow.Expandable')} ${dsI18n.t('ds_tables:tablerow.ExpandButtonScreenReaderText')}`
    );
    await expect(iconButton).toHaveAttribute('aria-expanded', 'false');
    /* Etter bytte fra @storybook/jest til @storybook/test må denne testen bruke
    fireevent i stedet for UserEvent. Med userEVent gir testen ustabilt resultat.
    I tillegg ser det ut som visningen i interactions fanen i storybook ikke samsvarer med resultatet til testen.
     */
    await fireEvent.click(iconButton);
    await expect(
      canvas.queryByText(dsI18n.t('ds_tables:table.ExpandAreaStart'))
    ).not.toBeInTheDocument();
    await expect(args.onExpand).toHaveBeenCalled();
    await expect(iconButton).toHaveAttribute('aria-expanded', 'true');
  },
} satisfies Story;

export const WithExpandableExtraRows = {
  render: Template,
  name: 'With Expandable Multiple Rows',
  args: {
    isExpandable: true,
    expandButtonAriaDescribedby: 'Id123',
    expandButtonPosition: 'right',
    onExpand: fn(),
    expandableContent: (
      <Table.Row>
        <Table.DataCell>{'Muffin'}</Table.DataCell>
        <Table.DataCell>{'9000'}</Table.DataCell>
        <Table.DataCell />
      </Table.Row>
    ),
  },
  argTypes: {
    isExpandable: { table: { disable: false } },
    expandButtonAriaDescribedby: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement, args }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toHaveAttribute('aria-describedby', 'Id123');
    await expect(iconButton).toHaveAccessibleName(
      dsI18n.t('ds_tables:tablerow.Expandable')
    );
    await expect(iconButton).toHaveAttribute('aria-expanded', 'false');
    /* Etter bytte fra @storybook/jest til @storybook/test må denne testen bruke
    fireevent i stedet for UserEvent. Med userEVent gir testen ustabilt resultat.
    I tillegg ser det ut som visningen i interactions fanen i storybook ikke samsvarer med resultatet til testen.
     */
    await fireEvent.click(iconButton);
    await expect(
      canvas.getByText(dsI18n.t('ds_tables:table.ExpandAreaStart'))
    ).toBeInTheDocument();
    await expect(
      canvas.getByText(dsI18n.t('ds_tables:table.ExpandAreaEnd'))
    ).toBeInTheDocument();
    await expect(args.onExpand).toHaveBeenCalled();
    await expect(iconButton).toHaveAttribute('aria-expanded', 'true');
  },
} satisfies Story;

export const WithExpandableContent = {
  render: Template,
  name: 'With Expandable Content',
  args: {
    isExpandable: true,
    expandableContent: 'Ekstra innhold',
  },
  argTypes: {
    isExpandable: { table: { disable: false } },
    expandableContent: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button', {
      name: `${dsI18n.t('ds_tables:tablerow.Expandable')} ${dsI18n.t('ds_tables:tablerow.ExpandButtonScreenReaderText')}`,
    });
    await fireEvent.click(inlineButton);
  },
} satisfies Story;

export const WithExpandButtonPositionRight = {
  render: Template,
  name: 'With ExpandButtonPosition Right',
  args: {
    isExpandable: true,
    expandButtonPosition: 'right',
    expandableContent: 'Ekstra innhold',
  },
  argTypes: {
    isExpandable: { table: { disable: false } },
    expandButtonPosition: { table: { disable: false } },
    expandableContent: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_tables:tablerow.Expandable'),
    });
    await fireEvent.click(inlineButton);
  },
} satisfies Story;

export const WithExpandTextLeft = {
  render: Template,
  name: 'With ExpandText on Left Side (TableRow A11.1, B6)',
  args: {
    isExpandable: true,
    showExpandButtonTitle: true,
    expandButtonAriaDescribedby: 'Id123',
    expandableContent: 'Ekstra innhold',
    onExpand: fn(),
  },
  argTypes: {
    isExpandable: { table: { disable: false } },
    showExpandButtonTitle: { table: { disable: false } },
    expandButtonTitle: { table: { disable: false } },
    expandButtonAriaDescribedby: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement, args }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button', {
      name: `${dsI18n.t('ds_tables:tablerow.ExpandText')} ${dsI18n.t('ds_tables:tablerow.ExpandButtonScreenReaderText')}`,
    });
    await expect(inlineButton).toHaveAttribute('aria-describedby', 'Id123');
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(inlineButton);
    await expect(args.onExpand).toHaveBeenCalled();
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'true');
  },
} satisfies Story;

export const WithExpandTextRight = {
  render: Template,
  name: 'With ExpandText on Right Side (TableRow A11.1, B6)',
  args: {
    isExpandable: true,
    showExpandButtonTitle: true,
    expandButtonPosition: 'right',
    expandButtonAriaDescribedby: 'Id123',
    expandableContent: 'Ekstra innhold',
    onExpand: fn(),
  },
  argTypes: {
    isExpandable: { table: { disable: false } },
    showExpandButtonTitle: { table: { disable: false } },
    expandButtonTitle: { table: { disable: false } },
    expandButtonAriaDescribedby: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement, args }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_tables:tablerow.ExpandText'),
    });
    await expect(inlineButton).toHaveAttribute('aria-describedby', 'Id123');
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(inlineButton);
    await expect(args.onExpand).toHaveBeenCalled();
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'true');
  },
} satisfies Story;

export const WithExpandButtonTitle = {
  render: Template,
  name: 'With ExpandButtonTitle',
  args: {
    isExpandable: true,
    showExpandButtonTitle: true,
    expandButtonTitle: 'Vis mer',
    expandableContent: 'Ekstra innhold',
    expandButtonPosition: 'right',
  },
  argTypes: {
    isExpandable: { table: { disable: false } },
    showExpandButtonTitle: { table: { disable: false } },
    expandButtonTitle: { table: { disable: false } },
    expandButtonPosition: { table: { disable: false } },
  },
} satisfies Story;

export const WithScreenReaderTextOnlyOnFirstLeftExpandableRow = {
  render: (): JSX.Element => (
    <Table caption={'testtabell'}>
      <Table.Body>
        <Table.Row expandButtonAriaDescribedby={'Id123'} isExpandable>
          <Table.DataCell id={'Id123'} as={'th'}>
            {'Cake'}
          </Table.DataCell>
          <Table.DataCell>{'3,000'}</Table.DataCell>
        </Table.Row>
        <Table.Row expandButtonAriaDescribedby={'Id456'} isExpandable>
          <Table.DataCell id={'Id456'} as={'th'}>
            {'Muffin'}
          </Table.DataCell>
          <Table.DataCell>{'4,000'}</Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
  name: 'With ScreenReaderText only on first left expandable row',
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const [firstButton, secondButton] = canvas.getAllByRole('button');

    await expect(firstButton).toHaveAccessibleName(
      `${dsI18n.t('ds_tables:tablerow.Expandable')} ${dsI18n.t('ds_tables:tablerow.ExpandButtonScreenReaderText')}`
    );
    await expect(secondButton).toHaveAccessibleName(
      dsI18n.t('ds_tables:tablerow.Expandable')
    );
  },
} satisfies Story;

export const WithScreenReaderTextOnlyOnFirstRowOfEachType = {
  render: (): JSX.Element => (
    <Table caption={'testtabell'}>
      <Table.Body>
        <Table.Row expandButtonAriaDescribedby={'Id123'} isExpandable>
          <Table.DataCell id={'Id123'} as={'th'}>
            {'Cake'}
          </Table.DataCell>
          <Table.DataCell>{'3,000'}</Table.DataCell>
        </Table.Row>
        <Table.Row expandButtonAriaDescribedby={'Id456'} isExpandable>
          <Table.DataCell id={'Id456'} as={'th'}>
            {'Muffin'}
          </Table.DataCell>
          <Table.DataCell>{'4,000'}</Table.DataCell>
        </Table.Row>
        <Table.EditableRow
          editableContent={(): JSX.Element => <span>{'Rediger data 1'}</span>}
        >
          <Table.DataCell as={'th'}>{'Cookie'}</Table.DataCell>
          <Table.DataCell>{'5,000'}</Table.DataCell>
        </Table.EditableRow>
        <Table.EditableRow
          editableContent={(): JSX.Element => <span>{'Rediger data 2'}</span>}
        >
          <Table.DataCell as={'th'}>{'Brownie'}</Table.DataCell>
          <Table.DataCell>{'6,000'}</Table.DataCell>
        </Table.EditableRow>
      </Table.Body>
    </Table>
  ),
  name: 'With ScreenReaderText only on first row of each type',
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const [
      firstExpandButton,
      secondExpandButton,
      firstEditButton,
      secondEditButton,
    ] = canvas.getAllByRole('button');

    await expect(firstExpandButton).toHaveAccessibleName(
      `${dsI18n.t('ds_tables:tablerow.Expandable')} ${dsI18n.t('ds_tables:tablerow.ExpandButtonScreenReaderText')}`
    );
    await expect(secondExpandButton).toHaveAccessibleName(
      dsI18n.t('ds_tables:tablerow.Expandable')
    );
    await expect(firstEditButton).toHaveAccessibleName(
      `${dsI18n.t('ds_tables:tablerow.Editable')} ${dsI18n.t('ds_tables:tablerow.EditButtonScreenReaderText')}`
    );
    await expect(secondEditButton).toHaveAccessibleName(
      dsI18n.t('ds_tables:tablerow.Editable')
    );
  },
} satisfies Story;
