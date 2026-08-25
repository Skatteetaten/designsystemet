import { JSX } from 'react';

import containersJson from '@skatteetaten/ds-core-designtokens/designtokens/containers.json';
import { Table } from '@skatteetaten/ds-table';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './container-token-table.module.scss';

interface Breakpoint {
  name: string;
  query: string;
}

interface TokenGroup {
  category: string;
  tokenNames: string[];
}

type TokenValues = Record<string, string>;

const rootQuery = ':root,\n  :host';
const breakpoints: Breakpoint[] = [
  { name: 'Breakpoint S\n(640 - 1023px)', query: '@media (width >= 640px)' },
  { name: 'Breakpoint M\n(1024 - 1365px)', query: '@media (width >= 1024px)' },
  { name: 'Breakpoint L\n(1366 - 1919px)', query: '@media (width >= 1366px)' },
];

const tokensByBreakpoint = containersJson as unknown as Record<
  string,
  Record<string, TokenValues>
>;

const responsiveTokens = Object.fromEntries(
  Object.entries(containersJson[':root,\n:host']).filter(([key]) =>
    key.includes('responsive')
  )
);

const tokenGroups: TokenGroup[] = [
  {
    category: 'External',
    tokenNames: [
      '--semantic-responsive-container',
      '--semantic-responsive-container-spacing',
      '--semantic-responsive-wide-content',
      '--semantic-responsive-article',
    ],
  },
  {
    category: 'Internal',
    tokenNames: [
      '--semantic-responsive-internal-container-display',
      '--semantic-responsive-internal-container-flex-direction',
      '--semantic-responsive-internal-container-spacing',
      '--semantic-responsive-internal-aside',
      '--semantic-responsive-wide-content',
    ],
  },
];

const generateTableRows = ({
  category,
  tokenNames,
}: TokenGroup): JSX.Element[] => {
  return tokenNames.map((tokenName, index) => (
    <Table.Row key={tokenName}>
      {index === 0 && (
        <Table.DataCell rowSpan={tokenNames.length}>
          <strong>{category}</strong>
        </Table.DataCell>
      )}
      <Table.DataCell className={styles.cellWithLeftBorder}>
        <strong>{tokenName}</strong>
      </Table.DataCell>
      <Table.DataCell className={styles.cellWithLeftBorder}>
        {responsiveTokens[tokenName]}
      </Table.DataCell>
      {breakpoints.map((breakpoint) => {
        const value =
          tokensByBreakpoint[breakpoint.query]?.[rootQuery]?.[tokenName] ?? '';
        const className = value ? styles.cellWithLeftBorder : undefined;

        return (
          <Table.DataCell key={breakpoint.name} className={className}>
            {value}
          </Table.DataCell>
        );
      })}
    </Table.Row>
  ));
};

export const ContainerTokenTable = (): JSX.Element => {
  return (
    <>
      <Paragraph>
        {'Når dynamiske container-tokens endres fra utgangspunktet (mobile):'}
      </Paragraph>

      <Table
        caption={
          'Når dynamiske container-tokens endres fra utgangspunktet (mobile)'
        }
        size={'extraSmall'}
        className={styles.table}
        hasFullWidth
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={2}>{''}</Table.HeaderCell>
            <Table.HeaderCell>
              {'Mobile/Breakpoint XS\n(320 - 639px)'}
            </Table.HeaderCell>
            {breakpoints.map((breakpoint) => (
              <Table.HeaderCell key={breakpoint.name}>
                {breakpoint.name}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>{tokenGroups.flatMap(generateTableRows)}</Table.Body>
      </Table>
    </>
  );
};
