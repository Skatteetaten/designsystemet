import { useState, FocusEvent, ChangeEvent } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import { RadioGroup } from '@skatteetaten/ds-forms';

import {
  loremIpsum,
  loremIpsumWithoutSpaces,
  wrapper,
} from './testUtils/storybook.testing.utils';
import { htmlEventDescription } from '../../../.storybook/helpers';

const meta = {
  component: RadioGroup.Radio,
  title: 'Tester/RadioGroup/Radio',
  argTypes: {
    // Baseprops
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
    form: {
      table: { disable: true },
    },
    // Aria
    ariaDescribedby: {
      table: { disable: true },
    },
    // Events
    onBlur: { ...htmlEventDescription, table: { disable: true } },
    onChange: { ...htmlEventDescription, table: { disable: true } },
    onFocus: { ...htmlEventDescription, table: { disable: true } },
  },
} satisfies Meta<typeof RadioGroup.Radio>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof RadioGroup.Radio> = (args) => (
  <RadioGroup legend={'radio example'} hideLegend>
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
    form: 'formid123',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
    form: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[3];
    const input = canvas.getByRole('radio');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(input).toHaveAttribute('id', 'htmlId');
    await expect(input).toHaveAttribute('data-testid', '123ID');
    await expect(input).toHaveAttribute('form', 'formid123');
  },
} satisfies Story;

export const Defaults = {
  render: Template,
  name: 'Defaults (A1, A3, B1)',
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
  name: 'With Description (A3, A5)',
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

    await expect(input).toHaveAttribute('value', 'person');
  },
} satisfies Story;

export const WithAriaDescribedby = {
  render: Template,
  name: 'With AriaDescribedby (B4)',
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

const EventHandlersTemplate: StoryFn<typeof RadioGroup.Radio> = (args) => {
  const [labelText, setLabelText] = useState('Radio');
  return (
    <RadioGroup legend={'radio example'} hideLegend>
      <RadioGroup.Radio
        {...args}
        onBlur={(event: FocusEvent<HTMLInputElement>): void => {
          setLabelText('Radio har mistet fokus');
          args.onBlur && args.onBlur(event);
        }}
        onChange={(event: ChangeEvent<HTMLInputElement>): void => {
          setLabelText('Radio har blitt klikket på');
          args.onChange && args.onChange(event);
        }}
        onFocus={(event: FocusEvent<HTMLInputElement>): void => {
          setLabelText('Radio har fått fokus');
          args.onFocus && args.onFocus(event);
        }}
      >
        {`${args.children} ${labelText}`}
      </RadioGroup.Radio>
    </RadioGroup>
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers',
  args: {
    ...defaultArgs,
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn(),
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ args, canvasElement, step }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('radio');

    await step(
      'Klikker på radio og sjekker om onChange er kjørt og fokus er satt',
      async () => {
        await userEvent.click(inputNode);
        await waitFor(() => expect(args.onChange).toHaveBeenCalled());
        await expect(inputNode).toHaveFocus();
      }
    );
    await step(
      'Fjerner fokus fra radio og sjekker om radio har mistet fokus',
      async () => {
        inputNode.blur();
        await waitFor(() => expect(args.onChange).toHaveBeenCalled());
        await expect(inputNode).not.toHaveFocus();
      }
    );
  },
} satisfies Story;
