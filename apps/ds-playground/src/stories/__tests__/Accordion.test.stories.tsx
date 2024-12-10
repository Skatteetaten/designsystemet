import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Accordion, AccordionProps } from '@skatteetaten/ds-collections';

const elementId = 'htmlId';
const defaultTitle = 'Meg selv';
const defaultSubtitle = 'Beskrivelse';
const defaultContent =
  'Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.';

const meta = {
  component: Accordion,
  title: 'Tester/Accordion/Accordion',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
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
      <Accordion className={'bottomSpacingXL'} color={'none'}>
        {items}
      </Accordion>
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

const defaultArgs: AccordionProps = {
  children: (
    <Accordion.Item title={defaultTitle}>{defaultContent}</Accordion.Item>
  ),
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
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
    imageSnapshot: { disable: true },
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
    ...defaultArgs,
    id: elementId,
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
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A2, A4, A7 delvis)',
  args: defaultArgs,
} satisfies Story;

export const WithIconLeft = {
  name: 'With Icon Left (A2)',
  args: {
    iconPosition: 'left',
    ...defaultArgs,
  },
} satisfies Story;

export const WithAllColorVariants = {
  render: TemplateWithAllColors,
  name: 'With All Color Variants (A1)',
  args: defaultArgs,
} satisfies Story;

export const WithSmall = {
  name: 'Variant Small (A7)',
  args: { size: 'small', ...defaultArgs },
} satisfies Story;

export const WithMedium = {
  name: 'Variant Medium (A7)',
  args: { size: 'medium', ...defaultArgs },
} satisfies Story;

export const WithLarge = {
  name: 'Variant Large (A7)',
  args: { size: 'large', ...defaultArgs },
} satisfies Story;
