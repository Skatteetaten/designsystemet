import { JSX } from 'react';

import containersJson from '@skatteetaten/ds-core-designtokens/designtokens/containers.json';
import { Table } from '@skatteetaten/ds-table';
import { Paragraph } from '@skatteetaten/ds-typography';

import { TokensList } from './TokensList';

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

//eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const responsiveTokens = Object.fromEntries(
  Object.entries(containersJson[':root,\n:host']).filter(([key, _value]) =>
    key.includes('responsive')
  )
);

const externalTokenOrder = [
  '--semantic-responsive-container',
  '--semantic-responsive-container-spacing',
  '--semantic-responsive-wide-content',
  '--semantic-responsive-article',
];

const internalTokenOrder = [
  '--semantic-responsive-internal-container-display',
  '--semantic-responsive-internal-container-flex-direction',
  '--semantic-responsive-internal-container-spacing',
  '--semantic-responsive-internal-aside',
  '--semantic-responsive-wide-content',
];

const externalTokens = Object.fromEntries(
  externalTokenOrder.map((key) => [key, responsiveTokens[key]])
);

const internalTokens = Object.fromEntries(
  internalTokenOrder.map((key) => [key, responsiveTokens[key]])
);

export const ContainersTokenExamplesGenerator = (): JSX.Element => {
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
          {generateTableRows(
            externalTokens,
            breakpoints,
            'External',
            0,
            externalTokenOrder.length
          )}
          {generateTableRows(
            internalTokens,
            breakpoints,
            'Internal',
            0,
            internalTokenOrder.length
          )}
        </Table.Body>
      </Table>
    </>
  );
};
