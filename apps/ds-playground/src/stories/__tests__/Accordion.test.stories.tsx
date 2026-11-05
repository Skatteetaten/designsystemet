import { JSX, useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, fireEvent, within } from 'storybook/test';

import { Accordion } from '@skatteetaten/ds-collections';

const defaultTitle = 'Meg selv';
const defaultSubtitle = 'Beskrivelse';
const defaultContent =
  'Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.';

const meta = {
  component: Accordion,
  title: 'Tester/Accordion',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    color: { table: { disable: true } },
    size: { table: { disable: true } },
    iconPosition: { table: { disable: true } },
  },
  args: {
    children: (
      <Accordion.Item title={defaultTitle}>{defaultContent}</Accordion.Item>
    ),
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateWithAllColors: StoryFn<typeof Accordion> = () => {
  const items = [
    <Accordion.Item key={'i1'} title={defaultTitle} subtitle={defaultSubtitle}>
      {defaultContent}
    </Accordion.Item>,
    <Accordion.Item key={'i2'} title={defaultTitle} subtitle={defaultSubtitle}>
      {defaultContent}
    </Accordion.Item>,
  ];

  return (
    <>
      <Accordion className={'bottomSpacingXL'}>{items}</Accordion>
      <Accordion className={'bottomSpacingXL'} color={'burgundy'}>
        {items}
      </Accordion>
      <Accordion className={'bottomSpacingXL'} color={'denim'}>
        {items}
      </Accordion>

      <Accordion className={'bottomSpacingXL'} color={'forest'}>
        {items}
      </Accordion>
      <Accordion className={'bottomSpacingXL'} color={'graphite'}>
        {items}
      </Accordion>
      <Accordion className={'bottomSpacingXL'} color={'ochre'}>
        {items}
      </Accordion>
    </>
  );
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLDivElement | null): void => {
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes(FA2-5)',
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
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A2, A4, A7 delvis)',
  args: {},
} satisfies Story;

export const WithIconLeft = {
  name: 'With Icon Left (A2)',
  args: {
    iconPosition: 'left',
  },
  argTypes: {
    iconPosition: { table: { disable: false } },
  },
} satisfies Story;

export const WithAllColorVariants = {
  render: TemplateWithAllColors,
  name: 'With All Color Variants (A1)',
  args: {},
} satisfies Story;

export const WithSmall = {
  name: 'Variant Small (A7)',
  args: { size: 'small' },
  argTypes: {
    size: { table: { disable: false } },
  },
} satisfies Story;

export const WithMedium = {
  name: 'Variant Medium (A7)',
  args: { size: 'medium' },
  argTypes: {
    size: { table: { disable: false } },
  },
} satisfies Story;

export const WithLarge = {
  name: 'Variant Large (A7)',
  args: { size: 'large' },
  argTypes: {
    size: { table: { disable: false } },
  },
} satisfies Story;

export const WithOneItemOpenAtATime = {
  render: function Render(): JSX.Element {
    const [open, setOpen] = useState<string | undefined>('A');
    const items = ['A', 'B', 'C'];
    return (
      <Accordion>
        {items.map((id) => (
          <Accordion.Item
            key={id}
            title={`Skuff ${id}`}
            isExpanded={open === id}
            onClick={(): void => setOpen(open === id ? undefined : id)}
          >
            {`Innhold ${id}`}
          </Accordion.Item>
        ))}
      </Accordion>
    );
  },
  name: 'With One Item Open At A Time',
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const buttonA = canvas.getByRole('button', { name: 'Skuff A' });
    const buttonB = canvas.getByRole('button', { name: 'Skuff B' });
    const buttonC = canvas.getByRole('button', { name: 'Skuff C' });

    await expect(buttonA).toHaveAttribute('aria-expanded', 'true');
    await expect(buttonB).toHaveAttribute('aria-expanded', 'false');
    await expect(buttonC).toHaveAttribute('aria-expanded', 'false');

    await fireEvent.click(buttonB);
    await fireEvent.click(buttonC);
    await expect(buttonA).toHaveAttribute('aria-expanded', 'false');
    await expect(buttonB).toHaveAttribute('aria-expanded', 'false');
    await expect(buttonC).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText('Innhold A')).not.toBeVisible();
    await expect(canvas.getByText('Innhold B')).not.toBeVisible();
    await expect(canvas.getByText('Innhold C')).toBeVisible();

    await fireEvent.click(buttonB);
    await expect(buttonB).toHaveAttribute('aria-expanded', 'true');
    await expect(buttonC).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.getByText('Innhold B')).toBeVisible();
    await expect(canvas.getByText('Innhold C')).not.toBeVisible();
  },
} satisfies Story;
