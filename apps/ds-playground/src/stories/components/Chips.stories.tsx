import { useState } from 'react';

import { Chips, ChipsProps } from '@skatteetaten/ds-collections';
import { Heading } from '@skatteetaten/ds-typography';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Chips.Toggle = { ...Chips.Toggle };
Chips.Toggle.displayName = 'Chips.Chip';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Chips.Removable = { ...Chips.Removable };
Chips.Removable.displayName = 'Chips.Removable';

const meta = {
  component: Chips,
  title: 'Komponenter/Chips/Chips',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  args: {
    children: [
      <Chips.Toggle key={'trd'}>{'Trondheim'}</Chips.Toggle>,
      <Chips.Toggle key={'bgo'}>{'Bergen'}</Chips.Toggle>,
      <Chips.Toggle key={'osl'}>{'Oslo'}</Chips.Toggle>,
    ],
  },
} satisfies Meta<ChipsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

const options = [
  'Ål',
  'Bjørnafjorden',
  'Evje og Hornnes',
  'Hamar',
  'Trondheim',
];

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [filter, setFilter] = useState(options);

    return (
      <div className={'flex flexColumn gapXl'}>
        <div>
          <Heading level={5} as={'h2'}>
            {'Kontorsted'}
          </Heading>
          <Chips>
            <Chips.Toggle showCheckmark={false}>{'Ål'}</Chips.Toggle>
            <Chips.Toggle showCheckmark={false}>{'Bjørnafjorden'}</Chips.Toggle>
            <Chips.Toggle showCheckmark={false}>
              {'Evje og Hornnes'}
            </Chips.Toggle>
            <Chips.Toggle showCheckmark={false}>{'Hamar'}</Chips.Toggle>
            <Chips.Toggle showCheckmark={false}>{'Trondheim'}</Chips.Toggle>
          </Chips>
        </div>

        <div>
          <Heading level={5} as={'h2'}>
            {'Jeg kan kontaktes på'}
          </Heading>
          <Chips>
            <Chips.Toggle>{'Mandag'}</Chips.Toggle>
            <Chips.Toggle>{'Tirsdag'}</Chips.Toggle>
            <Chips.Toggle>{'Onsdag'}</Chips.Toggle>
            <Chips.Toggle>{'Torsdag'}</Chips.Toggle>
            <Chips.Toggle>{'Fredag'}</Chips.Toggle>
          </Chips>
        </div>
        <div>
          <Heading level={5} as={'h2'}>
            {'Viser saker fra'}
          </Heading>
          <Chips>
            {filter.map((c) => (
              <Chips.Removable
                key={c}
                onClose={() => {
                  setFilter((x) => x.filter((y) => y !== c));
                }}
              >
                {c}
              </Chips.Removable>
            ))}
          </Chips>
        </div>
      </div>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
