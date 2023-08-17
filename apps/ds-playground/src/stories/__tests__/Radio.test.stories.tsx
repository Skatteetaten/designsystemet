import { RadioGroup } from '@skatteetaten/ds-forms';
import { expect } from '@storybook/jest';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import {
  loremIpsum,
  loremIpsumWithoutSpaces,
  wrapper,
} from './testUtils/storybook.testing.utils';

const meta = {
  component: RadioGroup.Radio,
  title: 'Tester/RadioGroup/Radio',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
    },
    description: {
      table: { disable: true },
    },
    // HTML
    value: {
      table: { disable: true },
    },
    // Aria
    ariaDescribedby: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof RadioGroup.Radio>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof RadioGroup.Radio> = (args) => (
  <RadioGroup legend={'radio example'} hideLegend>
    {/* eslint-disable-next-line testing-library/no-node-access */}
    <RadioGroup.Radio {...args}>{args.children}</RadioGroup.Radio>
  </RadioGroup>
);

const defaultLabelText = 'Enkeltpersonsforetak';
const defaultArgs = {
  children: defaultLabelText,
};

export const WithRef = {
  render: Template,
  name: 'With Ref (FA1)',

  args: {
    ...defaultArgs,
    ref: (instance: HTMLInputElement | null): void => {
      if (instance) {
        instance.name = 'dummyIdForwardedFromRef';
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
    const container = canvas.getByRole('radio');
    await expect(container).toHaveAttribute('name', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  render: Template,
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
    // eslint-disable-next-line testing-library/no-node-access
    const container = canvasElement.querySelector(
      `${wrapper} fieldset > div > div`
    );
    const input = canvas.getByRole('radio');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(input).toHaveAttribute('id', 'htmlId');
    await expect(input).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  render: Template,
  name: 'Defaults (A1 delvis, A3 delvis)',

  args: {
    ...defaultArgs,
  },

  argTypes: {
    children: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: {
      hover: `${wrapper} input[type='radio']`,
      focus: `${wrapper} input[type='radio']`,
      click: `${wrapper} input[type='radio']`,
    },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('radio', { name: defaultLabelText });
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAttribute('id');
  },
} satisfies Story;

export const WithDescription = {
  render: Template,
  name: 'With Description (A3 delvis, A5)',

  args: {
    ...defaultArgs,
    description: 'En liten beskrivelse tekst',
  },

  argTypes: {
    description: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: {
      hover: `${wrapper} input[type='radio']`,
      focus: `${wrapper} input[type='radio']`,
      click: `${wrapper} input[type='radio']`,
    },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const labelWithDescription = canvas.getByText('En liten beskrivelse tekst');
    await expect(labelWithDescription).toBeInTheDocument();
  },
} satisfies Story;

export const WithLongText = {
  render: Template,
  name: 'With Long Text (A2)',

  args: {
    children: loremIpsum,
    description: loremIpsum,
  },

  argTypes: {
    children: { table: { disable: false } },
    description: { table: { disable: false } },
  },
} satisfies Story;

export const WithLongTextAndBreaking = {
  render: Template,
  name: 'With Long Text And Breaking',

  args: {
    children: loremIpsumWithoutSpaces,
    description: loremIpsumWithoutSpaces,
  },

  argTypes: {
    children: { table: { disable: false } },
    description: { table: { disable: false } },
  },
} satisfies Story;

export const WithValue = {
  render: Template,
  name: 'With Value',

  args: {
    ...defaultArgs,
    value: 'person',
  },

  argTypes: {
    value: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('radio');
    // eslint-disable-next-line jest-dom/prefer-to-have-value
    await expect(input).toHaveAttribute('value', 'person');
  },
} satisfies Story;

export const WithAriaDescribedby = {
  render: Template,
  name: 'With AriaDescribedby (B4 delvis)',

  args: {
    ...defaultArgs,
    ariaDescribedby: 'htmlId',
  },

  argTypes: {
    ariaDescribedby: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('radio');
    await expect(input).toHaveAttribute('aria-describedby', 'htmlId');
  },
} satisfies Story;
