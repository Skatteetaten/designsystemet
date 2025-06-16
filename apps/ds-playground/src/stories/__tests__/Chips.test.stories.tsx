import { useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';

import { Chips, ChipsProps } from '@skatteetaten/ds-collections';
import { dsI18n } from '@skatteetaten/ds-core-utils';

const elementId = 'htmlId';

const meta = {
  component: Chips,
  title: 'Tester/Chips/Chips',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    // Aria
    ariaLabel: { table: { disable: true } },
  },
} satisfies Meta<typeof Chips>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: ChipsProps = {
  children: [
    <Chips.Toggle key={'trd'} showCheckmark={false}>
      {'Trondheim'}
    </Chips.Toggle>,
    <Chips.Toggle key={'bgo'}>{'Bergen'}</Chips.Toggle>,
    <Chips.Removable key={'osl'}>{'Oslo'}</Chips.Removable>,
  ],
};

const defaultLocations = ['Trondheim', 'Bergen', 'Oslo'];

const TemplateWithOnClose: StoryFn<typeof Chips> = () => {
  const [locations, setLocations] = useState<string[]>(defaultLocations);

  const handleLocationRemove = (location: string): void => {
    setLocations((prevLocations) =>
      prevLocations.filter((l) => l !== location)
    );
  };

  return (
    <Chips>
      {locations.map((location: string) => (
        <Chips.Removable
          key={location}
          onClose={() => handleLocationRemove(location)}
        >
          {location}
        </Chips.Removable>
      ))}
    </Chips>
  );
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLUListElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
    ...defaultArgs,
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('list');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes(FA2-5)',
  args: {
    id: elementId,
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    ...defaultArgs,
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('list');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (B2 delvis)',
  args: defaultArgs,
} satisfies Story;

const label = 'Kontorsted';

export const WithAriaLabel = {
  name: 'With AriaLabel (B2 delvis)',
  args: {
    ariaLabel: label,
    ...defaultArgs,
  },
  argTypes: {
    ariaLabel: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('list');
    await expect(container).toHaveAttribute('aria-label', label);
  },
} satisfies Story;

export const WithCloseAndFocusNext = {
  name: 'With Close and Focus Next (B3)',
  render: TemplateWithOnClose,
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    let chips = canvas.getAllByRole('button');
    await expect(chips.length).toEqual(3);

    await userEvent.click(chips[1]);
    chips = canvas.getAllByRole('button');
    await expect(chips.length).toEqual(2);
    await expect(chips[1]).toHaveFocus();
  },
} satisfies Story;

export const WithCloseLastChip = {
  name: 'With Close Last Chip (B3)',
  render: TemplateWithOnClose,
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const chips = canvas.getAllByRole('button');
    await expect(chips.length).toEqual(3);
    await userEvent.click(chips[2]);
    await userEvent.click(chips[1]);
    await userEvent.click(chips[0]);
    const span = canvas.getByText(dsI18n.t('ds_collections:chips.NoFilters'));
    await expect(span).toHaveFocus();
  },
} satisfies Story;
