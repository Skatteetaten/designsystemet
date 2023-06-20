import {
  ReactElement,
  ReactNode,
  RefAttributes,
  useRef,
  useState,
} from 'react';

import { densityArr } from '@skatteetaten/ds-core-utils';
import { SortState, Table, TableProps } from '@skatteetaten/ds-table';
import { Heading } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';

export default {
  component: Table,
  title: 'Tester/Table/Table',
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
    variant: {
      table: { disable: true },
      options: [...densityArr],
      control: 'radio',
    },
    hasFullWidth: { table: { disable: true } },
    showCaption: { table: { disable: true } },
    sortState: { table: { disable: true } },
    setSortState: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} as ComponentMeta<typeof Table>;

const caption = 'tabellcaption';
const defaultArgs: TableProps = {
  caption,
};

const ExpandEditSortTable = (
  args: TableProps & RefAttributes<HTMLTableElement>
): ReactElement => {
  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });
  const redigerDataRef = useRef<HTMLHeadingElement>(null);

  const data = [
    {
      id: 's5f0e',
      rowData: {
        month: 'Januar',
        amount: 5426,
        coverage: '100 %',
        revenue: 1000,
      },
    },
    {
      id: '3vesy',
      rowData: {
        month: 'Februar',
        amount: 5432,
        coverage: '50 %',
        revenue: 500,
      },
    },
    {
      id: '16prz',
      rowData: {
        month: 'Mars',
        amount: 4899,
        coverage: '20 %',
        revenue: 2000,
      },
    },
    {
      id: '3xpjb',
      isExpandable: true,
      rowData: {
        month: 'April',
        amount: 2344,
        coverage: '30 %',
        revenue: 1055,
      },
    },
  ];

  const sortedData = data.slice().sort((a, b) => {
    const sortKey = sortState.sortKey as keyof typeof data[0]['rowData'];
    const rowA = a.rowData;
    const rowB = b.rowData;

    if (!sortKey) {
      return 0;
    }
    if (rowA[sortKey] === rowB[sortKey]) {
      return 0;
    }
    if (sortState.direction === 'ascending') {
      return rowA[sortKey] > rowB[sortKey] ? 1 : -1;
    }
    return rowA[sortKey] < rowB[sortKey] ? 1 : -1;
  });

  return (
    <Table
      {...args}
      sortState={sortState}
      setSortState={setSortState}
      variant={args.variant}
      caption={'Månedoversikt'}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell as={'td'} />
          <Table.HeaderCell scope={'col'} sortKey={'coverage'} isSortable>
            {'Dekningsgrad'}
          </Table.HeaderCell>
          <Table.HeaderCell
            data-testid={'header-belop'}
            scope={'col'}
            sortKey={'amount'}
            isSortable
          >
            {'Beløp'}
          </Table.HeaderCell>
          <Table.HeaderCell
            alignment={'right'}
            scope={'col'}
            sortKey={'month'}
            isSortable
          >
            {'Måned'}
          </Table.HeaderCell>
          <Table.HeaderCell
            data-testid={'header-avkastning'}
            alignment={'right'}
            scope={'col'}
            sortKey={'revenue'}
            isSortable
          >
            {'Avkastning'}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedData.map(({ isExpandable, id, rowData }, index) => {
          const content = (
            <>
              <Table.DataCell alignment={'right'} id={id}>
                {rowData.coverage}
              </Table.DataCell>
              <Table.DataCell alignment={'right'}>
                {rowData.amount}
              </Table.DataCell>
              <Table.DataCell alignment={'center'}>
                {rowData.month}
              </Table.DataCell>
              <Table.DataCell alignment={'right'}>
                {rowData.revenue}
              </Table.DataCell>
            </>
          );

          if (isExpandable) {
            return (
              <Table.Row
                key={`${id}${index}`}
                data-testid={`row-expand-${index}`}
                expandButtonAriaDescribedby={id}
                expandableContent={
                  <div className={'emptyExpandedTableRow'}>
                    <Heading ref={redigerDataRef} as={'h2'} level={2}>
                      {'data'}
                    </Heading>
                  </div>
                }
                expandButtonPosition={'left'}
                isExpandable
              >
                {content}
              </Table.Row>
            );
          }

          return (
            <Table.EditableRow
              key={index}
              data-testid={`row-${index}`}
              editButtonAriaDescribedby={id}
              editButtonPosition={'left'}
              editableContent={(): ReactNode => (
                <div className={'emptyExpandedTableRow'}></div>
              )}
            >
              {content}
            </Table.EditableRow>
          );
        })}
      </Table.Body>
      <Table.Sum colSpan={4} hasTopSeparator>
        {'4555'}
      </Table.Sum>
    </Table>
  );
};

const Template: ComponentStory<typeof Table> = (args) => (
  <div data-test-block>
    <Table {...args} variant={args.variant}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope={'col'}>{'Category'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Items'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Expenditure'}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.DataCell className={'rowSpanRight'} rowSpan={2}>
            {'Edible'}
          </Table.DataCell>
          <Table.DataCell>{'Donuts'}</Table.DataCell>
          <Table.DataCell>{'3,000'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'Cake'}</Table.DataCell>
          <Table.DataCell>{'3,000'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell rowSpan={2} className={'rowSpanRight'}>
            {'Non-Edible'}
          </Table.DataCell>
          <Table.DataCell>{'Stationery'}</Table.DataCell>
          <Table.DataCell>{'18,000'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'Batteries'}</Table.DataCell>
          <Table.DataCell>{'9,000'}</Table.DataCell>
        </Table.Row>
      </Table.Body>
      <Table.Sum colSpan={2}>{'32,000'}</Table.Sum>
    </Table>
  </div>
);

const TemplateExpandEditSort: ComponentStory<typeof Table> = (args) => (
  <div data-test-block>
    <ExpandEditSortTable {...args} />
  </div>
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
WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const table = canvas.getByRole('table');
  await expect(table).toBeInTheDocument();
  await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når Table har en id, så har table-element id
// Når Table har en custom CSS, så vises custom stil
// Når Table har en lang, så har table-element lang
// Når Table har dataTestid, så har table-elementet data-testid satt
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
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const table = canvas.getByRole('table');
  await expect(table).toHaveClass('dummyClassname');
  await expect(table).toHaveAttribute('id', 'htmlId');
  await expect(table).toHaveAttribute('lang', 'nb');
  await expect(table).toHaveAttribute('data-testid', '123ID');
};

export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (Table A1, A8, B1, B2, TableRow B1, A20)';
Defaults.args = {
  ...defaultArgs,
};

Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  await expect(canvas.getByText(caption)).toBeInTheDocument();
  await expect(canvas.getByRole('table')).toBeInTheDocument();
};

export const WithVariantCompact = TemplateExpandEditSort.bind({});
WithVariantCompact.storyName =
  'Variant compact(Table A1, A3, TableHeader A2, TableRow A3, A17, A19, A20)';
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
    <div data-test-block>
      <p>{'Table med Scrollbar'}</p>
      <div className={'scrollTableWrapper'}>{exampleTable}</div>
      <div className={'scrollTableWrapperSuccess'}>{exampleTable}</div>
      <div className={'scrollTableWrapperWarning'}>{exampleTable}</div>
    </div>
  );
};

// Når Table får en scrollbar så tegnes den opp som forventet
export const WithScrollbar = TemplateScroll.bind({});
WithScrollbar.storyName = 'With scroll (A5)';
WithScrollbar.parameters = { a11y: { disable: true } };

const TemplateAlignment: ComponentStory<typeof Table> = (args) => (
  <div data-test-block>
    <Table {...args} variant={'standard'}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell alignment={'left'} scope={'col'}>
            {'left'}
          </Table.HeaderCell>
          <Table.HeaderCell alignment={'center'} scope={'col'}>
            {'center'}
          </Table.HeaderCell>
          <Table.HeaderCell alignment={'right'} scope={'col'}>
            {'right'}
          </Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'default'}</Table.HeaderCell>
          <Table.HeaderCell alignment={'right'} scope={'col'}>
            {'right'}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.DataCell alignment={'left'}>{'left'}</Table.DataCell>
          <Table.DataCell alignment={'center'}>{'center'}</Table.DataCell>
          <Table.DataCell alignment={'right'}>{'right'}</Table.DataCell>
          <Table.DataCell>{'default'}</Table.DataCell>
          <Table.DataCell alignment={'left'}>{'left'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell alignment={'left'}>{'left'}</Table.DataCell>
          <Table.DataCell alignment={'center'}>{'center'}</Table.DataCell>
          <Table.DataCell alignment={'right'}>{'right'}</Table.DataCell>
          <Table.DataCell>{'default'}</Table.DataCell>
          <Table.DataCell alignment={'right'}>{'right'}</Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

//Når table har full bredde tegnes den riktig
//Når Table rader/kolonner har alignment så tegnes det riktig
export const WithFullWidthAndTextAlignment = TemplateAlignment.bind({});
WithFullWidthAndTextAlignment.storyName =
  'With Full Width, text Alignment (Table A4, A10, TableHeader A1, TableRow A2)';
WithFullWidthAndTextAlignment.args = {
  ...defaultArgs,
  hasFullWidth: true,
};

export const WithExpandEditSort = TemplateExpandEditSort.bind({});
WithExpandEditSort.storyName =
  'With Expand Edit Sort (Table A9, A11, A14, A15, TableHeader A4, A5, A6, A7, B2, TableRow B3, A14, A15, A19)';
WithExpandEditSort.args = {
  ...defaultArgs,
};

WithExpandEditSort.parameters = {
  imageSnapshot: {
    hover: [
      `${wrapper} [data-testid="row-0"]`,
      `${wrapper} [data-testid="header-belop"] button`,
    ],
    focus: [
      `${wrapper} [data-testid="header-belop"] button`,
      `${wrapper} [data-testid="row-0"] button`,
    ],
    click: [
      `${wrapper} [data-testid="row-0"] button`,
      `${wrapper} [data-testid="row-expand-3"] button`,
      `${wrapper} [data-testid="header-belop"] button`,
      `${wrapper} [data-testid="header-belop"] button`,
      `${wrapper} [data-testid="header-avkastning"] button`,
    ],
  },
};

export const WithWideScreen = TemplateExpandEditSort.bind({});
WithWideScreen.storyName = 'With Wide screen (Table A1, A2)';
WithWideScreen.args = {
  ...defaultArgs,
};

WithWideScreen.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-m',
  },
};
