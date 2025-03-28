import { JSX } from 'react';

import { StoryObj } from '@storybook/react';

import containersJson from '@skatteetaten/ds-core-designtokens/designtokens/containers.json';
import { Table } from '@skatteetaten/ds-table';
import { Paragraph } from '@skatteetaten/ds-typography';

import { TokensList } from './TokensList';

export default {
  title: 'Designtokens/Containers',
};

interface Breakpoint {
  name: string;
  query: string;
}

const rootQuery = ':root,\n  :host';
const breakpoints: Breakpoint[] = [
  { name: 'Breakpoint S', query: '@media (width >= 640px)' },
  { name: 'Breakpoint M', query: '@media (width >= 1024px)' },
  { name: 'Breakpoint L', query: '@media (width >= 1366px)' },
];

const containersJsonTyped: any = containersJson;

const generateTableRows = (
  tokens: Record<string, string>,
  breakpoints: Breakpoint[],
  category: string,
  start: number,
  end: number
): JSX.Element[] => {
  return Object.keys(tokens)
    .map((key, index) => (
      <Table.Row key={key}>
        {index === start && (
          <Table.DataCell rowSpan={Math.floor(end - start)}>
            <strong>{category}</strong>
          </Table.DataCell>
        )}
        <Table.DataCell className={'rowLeftBorder'}>
          <strong>{key}</strong>
        </Table.DataCell>
        <Table.DataCell className={'rowLeftBorder'}>
          {tokens[key]}
        </Table.DataCell>
        {breakpoints.map((breakpoint) => (
          <Table.DataCell
            key={breakpoint.name}
            className={`${containersJsonTyped[breakpoint.query][rootQuery][key] ? 'rowLeftBorder' : ''} ${breakpoint.name === 'Breakpoint L' ? 'rowRightBorder' : ''}`}
          >
            {containersJsonTyped[breakpoint.query][rootQuery][key] || ''}
          </Table.DataCell>
        ))}
      </Table.Row>
    ))
    .slice(start, end);
};

export const Containers: StoryObj = {
  render: () => {
    const responsiveTokens = Object.fromEntries(
      Object.entries(containersJson[':root,\n:host']).filter(([key, _value]) =>
        key.includes('responsive')
      )
    );
    return (
      <>
        <TokensList tokenType={'containers'} />
        <Paragraph>
          {'Når dynamiske container-tokens endres fra utgangspunktet (mobile):'}
        </Paragraph>
        <Table
          caption={
            'Når dynamiske container-tokens endres fra utgangspunktet (mobile)'
          }
          variant={'compact'}
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={2}>{''}</Table.HeaderCell>
              <Table.HeaderCell className={'noWrap'}>
                {'Mobile/Breakpoint XS'}
              </Table.HeaderCell>
              {breakpoints.map((breakpoint) => (
                <Table.HeaderCell key={breakpoint.name} className={'noWrap'}>
                  {breakpoint.name}
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {generateTableRows(responsiveTokens, breakpoints, 'External', 0, 3)}
            {generateTableRows(responsiveTokens, breakpoints, 'Internal', 3, 8)}
          </Table.Body>
        </Table>
      </>
    );
  },
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
};
