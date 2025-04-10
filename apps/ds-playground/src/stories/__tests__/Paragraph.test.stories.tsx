import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import {
  Paragraph,
  ParagraphProps,
  paragraphVariantArr,
} from '@skatteetaten/ds-typography';

import { loremIpsum, wrapper } from './testUtils/storybook.testing.utils';

const meta = {
  component: Paragraph,
  title: 'Tester/Paragraph',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    canBeManuallyFocused: { table: { disable: true } },
    children: {
      table: { disable: true },
      control: 'text',
    },
    hasSpacing: { table: { disable: true } },
    variant: {
      table: { disable: true },
      options: [...paragraphVariantArr],
      control: 'radio',
    },
  },
} satisfies Meta<typeof Paragraph>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: ParagraphProps = {
  children: loremIpsum,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLParagraphElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: { imageSnapshot: { disable: true } },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const paragraph = canvas.getByText(loremIpsum);
    await expect(paragraph).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
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
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const paragraph = canvas.getByText(loremIpsum);
    await expect(paragraph).toHaveClass('dummyClassname');
    await expect(paragraph).toHaveAttribute('id', 'htmlId');
    await expect(paragraph).toHaveAttribute('lang', 'nb');
    await expect(paragraph).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const IsPElement = {
  name: 'Is <p>-element (B1)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(loremIpsum).nodeName).toBe('P');
  },
} satisfies Story;

const TemplateWithMarkup: StoryFn<typeof Paragraph> = (args) => (
  <Paragraph {...args}>
    <span>
      {'Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge klarspråkprinsippene når en skriver tekster. ' +
        'I dette tilfellet skriver bare litt ekstra tekst for å få litt '}
      <strong>{'innhold '}</strong>
      {', men '}
      <em>{'normalt '}</em>
      {
        'vil en ønske å skrive så konsentret som mulig. Mange brukere leser bare de første ordene i en tekst, eller hopper ganske enkelt over den. Dette er en '
      }
      <a
        href={
          'https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/2-460499/Latvia/Bauskas%20Rajons/Codes%20pagasts/Code'
        }
      >
        {'lenke'}
      </a>
      {' for å sjekke været i '}
      <code>{'Code '}</code>
      {'som er en '}
      <small>{'small '}</small>
      {'landsby i et land med mange '}
      <mark>{'mark '}</mark>
      {'og et språk uten '}
      <b>{'b '}</b>
      {'eller '}
      <i>{'i'}</i>
      {'.'}
    </span>
  </Paragraph>
);

export const WithMarkup = {
  render: TemplateWithMarkup,
  name: 'With Markup (A2, B2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: {
      table: { disable: false },
      control: { disable: true },
    },
  },
  parameters: {
    imageSnapshot: {
      hover: `${wrapper} > p a`,
      focus: `${wrapper} > p a`,
    },
  },
} satisfies Story;

const TemplateWithTwoParagraphs: StoryFn<typeof Paragraph> = (args) => (
  <>
    <Paragraph {...args} />
    <Paragraph {...args} />
  </>
);

export const Defaults = {
  render: TemplateWithTwoParagraphs,
  name: 'Defaults Variant Standard (A1, B2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
} satisfies Story;

export const VariantIngress = {
  render: TemplateWithTwoParagraphs,
  name: 'Variant Ingress (A1)',
  args: {
    ...defaultArgs,
    variant: 'ingress',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
} satisfies Story;

export const WithSpacing = {
  render: TemplateWithTwoParagraphs,
  name: 'With Spacing Variant Standard (A3)',
  args: {
    ...defaultArgs,
    hasSpacing: true,
  },
  argTypes: {
    hasSpacing: { table: { disable: false } },
  },
} satisfies Story;

export const VariantIngressWithSpacing = {
  render: TemplateWithTwoParagraphs,
  name: 'With Spacing Variant Ingress (A3)',
  args: {
    ...defaultArgs,
    hasSpacing: true,
    variant: 'ingress',
  },
  argTypes: {
    hasSpacing: { table: { disable: false } },
    variant: { table: { disable: false } },
  },
} satisfies Story;

export const WithCanBeManuallyFocused: Story = {
  render: TemplateWithTwoParagraphs,
  args: {
    ...defaultArgs,
    canBeManuallyFocused: true,
  },
  argTypes: {
    canBeManuallyFocused: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const paragraph = canvas.getAllByText(loremIpsum)[1];
    paragraph.focus();
    await expect(paragraph).toBeInTheDocument();
    await expect(paragraph).toHaveAttribute('tabIndex', '-1');
  },
} satisfies Story;
