import { useState, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Chips, ChipsProps } from '@skatteetaten/ds-collections';
import { Heading } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

Chips.Toggle.displayName = 'Chips.Toggle';
Chips.Removable.displayName = 'Chips.Removable';

const meta = {
  component: Chips,
  title: 'Komponenter/Chips',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    // Aria
    ariaLabel: { table: { category: category.aria } },
    ariaLabelledBy: { table: { category: category.aria } },
  },
  args: {
    children: [
      <Chips.Toggle key={'trd'} showCheckmark={false}>
        {'Trondheim'}
      </Chips.Toggle>,
      <Chips.Toggle key={'bgo'}>{'Bergen'}</Chips.Toggle>,
      <Chips.Removable key={'osl'}>{'Oslo'}</Chips.Removable>,
    ],
  },
} satisfies Meta<ChipsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const lokasjoner = [
      'Ål',
      'Bjørnafjorden',
      'Evje og Hornnes',
      'Hamar',
      'Trondheim',
    ];

    const dager = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'];

    const [filter, setFilter] = useState(lokasjoner);
    const [valgteDager, setValgteDater] = useState<string[]>([
      dager[0],
      dager[2],
    ]);
    const [valgteLokasjoner, setValgteLokasjoner] = useState<string[]>([
      lokasjoner[1],
      lokasjoner[3],
    ]);

    return (
      <div className={'flex flexColumn gapXl'}>
        <div>
          <Heading level={5} as={'h2'} id={'kontorsted-heading'}>
            {'Kontorsted'}
          </Heading>
          <Chips ariaLabelledBy={'kontorsted-heading'}>
            {lokasjoner.map((lokasjon) => (
              <Chips.Toggle
                key={lokasjon}
                showCheckmark={false}
                isSelected={valgteLokasjoner.includes(lokasjon)}
                onClick={() =>
                  setValgteLokasjoner(
                    valgteLokasjoner.includes(lokasjon)
                      ? valgteLokasjoner.filter((x) => x !== lokasjon)
                      : [...valgteLokasjoner, lokasjon]
                  )
                }
              >
                {lokasjon}
              </Chips.Toggle>
            ))}
          </Chips>
        </div>

        <div>
          <Heading level={5} as={'h2'} id={'kontakt-dager-heading'}>
            {'Jeg kan kontaktes på'}
          </Heading>
          <Chips ariaLabelledBy={'kontakt-dager-heading'}>
            {dager.map((dag) => (
              <Chips.Toggle
                key={dag}
                isSelected={valgteDager.includes(dag)}
                onClick={() =>
                  setValgteDater(
                    valgteDager.includes(dag)
                      ? valgteDager.filter((x) => x !== dag)
                      : [...valgteDager, dag]
                  )
                }
              >
                {dag}
              </Chips.Toggle>
            ))}
          </Chips>
        </div>
        <div>
          <Heading level={5} as={'h2'} id={'saker-fra-heading'}>
            {'Viser saker fra'}
          </Heading>
          <Chips ariaLabelledBy={'saker-fra-heading'}>
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
