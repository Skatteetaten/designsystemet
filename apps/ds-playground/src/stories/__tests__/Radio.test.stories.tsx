import { Radio, RadioProps } from '@skatteetaten/ds-forms';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';

import {
  loremIpsum,
  loremIpsumWithoutSpaces,
  wrapper,
} from './testUtils/storybook.testing.utils';

export default {
  component: Radio,
  title: 'Tester/Radio',
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
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <div data-test-block>
    <Radio {...args} />
  </div>
);

const defaultLabelText = 'Enkeltpersonsforetak';
const defaultArgs: RadioProps = {
  children: defaultLabelText,
};

// Når Radio har en ref, så får dom input-elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLInputElement | null): void => {
    if (instance) {
      instance.name = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: { disable: true },
};
WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getByRole('radio');
  await expect(container).toHaveAttribute('name', 'dummyIdForwardedFromRef');
};

// Når Radio har en id, så har input-element id
// Når Radio har en custom CSS, så vises custom stil
// Når Radio har en lang, så har div-element lang
// Når Radio har dataTestid, så har input-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlId',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
};
WithAttributes.argTypes = {
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  // eslint-disable-next-line testing-library/no-node-access
  const container = canvasElement.querySelector(`${wrapper} > div`);
  const input = canvas.getByRole('radio');
  await expect(container).toHaveClass('dummyClassname');
  await expect(container).toHaveAttribute('lang', 'nb');
  await expect(input).toHaveAttribute('id', 'htmlId');
  await expect(input).toHaveAttribute('data-testid', '123ID');
};

// Når Radio instansieres, så får den riktig defaults
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1 delvis, A3 delvis)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  children: { table: { disable: false } },
};
Defaults.parameters = {
  imageSnapshot: {
    hover: `${wrapper} input[type='radio']`,
    focus: `${wrapper} input[type='radio']`,
    click: `${wrapper} input[type='radio']`,
  },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole('radio');
  const label = canvas.getByText(defaultLabelText);
  await expect(input).toBeInTheDocument();
  await expect(input).toHaveAttribute('id');
  await expect(label).toBeInTheDocument();
  await expect(label).toHaveAttribute('for', input.id);
};

// Når Radio har en beskrivelse, så blir den vist sammen med label/ledeteksten
export const WithDescription = Template.bind({});
WithDescription.storyName = 'With Description (A3 delvis, A5)';
WithDescription.args = {
  ...defaultArgs,
  description: 'En liten beskrivelse tekst',
};
WithDescription.argTypes = {
  description: { table: { disable: false } },
};
WithDescription.parameters = {
  imageSnapshot: {
    hover: `${wrapper} input[type='radio']`,
    focus: `${wrapper} input[type='radio']`,
    click: `${wrapper} input[type='radio']`,
  },
};
WithDescription.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const labelWithDescription = canvas.getByText('En liten beskrivelse tekst');
  await expect(labelWithDescription).toBeInTheDocument();
};

// Når Radio har en lang tekst, så skal teksten være venstrejustert
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A2)';
WithLongText.args = {
  children: loremIpsum,
  description: loremIpsum,
};
WithLongText.argTypes = {
  children: { table: { disable: false } },
  description: { table: { disable: false } },
};

// Når Radio har en lang tekst uten mellomrom, så skal den brekke over flere linjer
export const WithLongTextAndBreaking = Template.bind({});
WithLongTextAndBreaking.storyName = 'With Long Text And Breaking';
WithLongTextAndBreaking.args = {
  children: loremIpsumWithoutSpaces,
  description: loremIpsumWithoutSpaces,
};
WithLongTextAndBreaking.argTypes = {
  children: { table: { disable: false } },
  description: { table: { disable: false } },
};

// Når Radio har value, så har input-element value
export const WithValue = Template.bind({});
WithValue.storyName = 'With Value';
WithValue.args = {
  ...defaultArgs,
  value: 'person',
};
WithValue.argTypes = {
  value: { table: { disable: false } },
};
WithValue.parameters = {
  imageSnapshot: { disable: true },
};
WithValue.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole('radio');
  // eslint-disable-next-line jest-dom/prefer-to-have-value
  await expect(input).toHaveAttribute('value', 'person');
};

// Når Radio har aria-describedby, så har input-element aria-describedby
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B4 delvis)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: 'htmlId',
};
WithAriaDescribedby.argTypes = {
  ariaDescribedby: { table: { disable: false } },
};
WithAriaDescribedby.parameters = {
  imageSnapshot: { disable: true },
};
WithAriaDescribedby.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole('radio');
  await expect(input).toHaveAttribute('aria-describedby', 'htmlId');
};
