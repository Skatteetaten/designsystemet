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
  { name: 'Breakpoint XS', query: '@media (width >= 480px)' },
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
      Object.entries(containersJson[':root,\n:host']).slice(8, 16)
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
              <Table.HeaderCell>{'Mobile'}</Table.HeaderCell>
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
        {/* <Table
          caption={
            'Når dynamiske container-tokens endres fra utgangspunktet (mobile)'
          }
          variant={'compact'}
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={2}>{''}</Table.HeaderCell>
              <Table.HeaderCell>{'Mobile'}</Table.HeaderCell>
              <Table.HeaderCell className={'noWrap'}>
                {'Breakpoint XS'}
              </Table.HeaderCell>
              <Table.HeaderCell>{'Breakpoint S'}</Table.HeaderCell>
              <Table.HeaderCell>{'Breakpoint M'}</Table.HeaderCell>
              <Table.HeaderCell>{'Breakpoint L'}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell rowSpan={3} className={'rowRightBorder'}>
                <strong>{'External'}</strong>
              </Table.DataCell>
              <Table.DataCell className={'rowRightBorder'}>
                <strong>{'--semantic-responsive-container'}</strong>
              </Table.DataCell>
              <Table.DataCell colSpan={2} className={'rowRightBorder'}>
                {'var(--container-xs)'}
              </Table.DataCell>
              <Table.DataCell className={'rowRightBorder'}>
                {'var(--container-s)'}
              </Table.DataCell>
              <Table.DataCell className={'rowRightBorder'}>
                {'var(--container-m)'}
              </Table.DataCell>
              <Table.DataCell className={'rowRightBorder'}>
                {'var(--container-l)'}
              </Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell className={'rowRightBorder'}>
                <strong>{'--semantic-responsive-container-padding'}</strong>
              </Table.DataCell>
              <Table.DataCell colSpan={2} className={'rowRightBorder'}>
                {'0 var(--spacing-m)'}
              </Table.DataCell>
              <Table.DataCell colSpan={3} className={'rowRightBorder'}>
                {'0'}
              </Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell className={'rowRightBorder'}>
                <strong>{'--semantic-responsive-article'}</strong>
              </Table.DataCell>
              <Table.DataCell colSpan={2} className={'rowRightBorder'}>
                {'var(--container-xs)'}
              </Table.DataCell>
              <Table.DataCell colSpan={3} className={'rowRightBorder'}>
                {'var(--container-s)'}
              </Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell rowSpan={5} className={'rowRightBorder'}>
                <strong>{'Internal'}</strong>
              </Table.DataCell>
              <Table.DataCell className={'rowRightBorder'}>
                <strong>
                  {'--semantic-responsive-internal-container-display'}
                </strong>
              </Table.DataCell>
              <Table.DataCell colSpan={5} className={'rowRightBorder'}>
                {'flex'}
              </Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell className={'rowRightBorder'}>
                <strong>
                  {'--semantic-responsive-internal-container-flex-direction'}
                </strong>
              </Table.DataCell>
              <Table.DataCell colSpan={3} className={'rowRightBorder'}>
                {'column'}
              </Table.DataCell>
              <Table.DataCell colSpan={2} className={'rowRightBorder'}>
                {'row'}
              </Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell className={'rowRightBorder'}>
                <strong>
                  {'--semantic-responsive-internal-container-padding'}
                </strong>
              </Table.DataCell>
              <Table.DataCell colSpan={3} className={'rowRightBorder'}>
                {'var(--spacing-m)'}
              </Table.DataCell>
              <Table.DataCell colSpan={2} className={'rowRightBorder'}>
                {'var(--spacing-xl)'}
              </Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell className={'rowRightBorder'}>
                <strong>{'--semantic-responsive-internal-aside'}</strong>
              </Table.DataCell>
              <Table.DataCell colSpan={3} className={'rowRightBorder'}>
                {'var(--container-xs)'}
              </Table.DataCell>
              <Table.DataCell className={'rowRightBorder'}>
                {'var(--container-aside-narrow)'}
              </Table.DataCell>
              <Table.DataCell className={'rowRightBorder'}>
                {'var(--container-aside)'}
              </Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell className={'rowRightBorder'}>
                <strong>{'--semantic-responsive-wide-content'}</strong>
              </Table.DataCell>
              <Table.DataCell className={'rowRightBorder'}>
                {'var(--container-xs)'}
              </Table.DataCell>
              <Table.DataCell className={'rowRightBorder'}>
                {'var(--container-s)'}
              </Table.DataCell>
              <Table.DataCell colSpan={3} className={'rowRightBorder'}>
                {'var(--container-wide-content)'}
              </Table.DataCell>
            </Table.Row>
          </Table.Body>
        </Table> */}
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
