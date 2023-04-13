import {
  Paragraph,
  ParagraphProps,
  paragraphVariantArr,
} from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { loremIpsum, wrapper } from './testUtils/storybook.testing.utils';

export default {
  component: Paragraph,
  title: 'Tester/Paragraph',
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
      control: 'text',
    },
    hasSpacing: { table: { disable: true } },
    variant: {
      table: { disable: true },
      options: [...paragraphVariantArr],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Paragraph>;

const defaultArgs: ParagraphProps = {
  children: loremIpsum,
};
const Template: ComponentStory<typeof Paragraph> = (args) => (
  <div data-test-block>
    <Paragraph {...args} />
  </div>
);

// Når Paragraph har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLParagraphElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.parameters = { imageSnapshot: { disable: true } };
WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const paragraph = canvas.getByText(loremIpsum);
  await expect(paragraph).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når Paragraph har en id, så har element id
// Når Paragraph har en custom CSS, så vises custom stil
// Når Paragraph har en lang, så har element lang
// Når Paragraph har dataTestid, så har elementet data-testid satt
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
  ...WithAttributes.argTypes,
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const paragraph = canvas.getByText(loremIpsum);
  await expect(paragraph).toHaveClass('dummyClassname');
  await expect(paragraph).toHaveAttribute('id', 'htmlId');
  await expect(paragraph).toHaveAttribute('lang', 'nb');
  await expect(paragraph).toHaveAttribute('data-testid', '123ID');
};

// Når Paragraph instansieres, så finnes <p>-elementet
export const IsPElement = Template.bind({});
IsPElement.storyName = 'Is <p>-element (B1)';
IsPElement.args = {
  ...defaultArgs,
};
IsPElement.parameters = {
  imageSnapshot: { disable: true },
};
IsPElement.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  await expect(canvas.getByText(loremIpsum).nodeName).toBe('P');
};

const TemplateWithMarkup: ComponentStory<typeof Paragraph> = (args) => (
  <div data-test-block>
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
  </div>
);

// Når Paragraph inkluderer markup, så får markupen riktig styling
export const WithMarkup = TemplateWithMarkup.bind({});
WithMarkup.storyName = 'With Markup (A2, B2)';
WithMarkup.args = {
  ...defaultArgs,
};
WithMarkup.argTypes = {
  ...WithMarkup.argTypes,
  children: {
    table: { disable: false },
    control: { type: null },
  },
};
WithMarkup.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > p a`,
    focus: `${wrapper} > p a`,
  },
};

const TemplateWithTwoParagraphs: ComponentStory<typeof Paragraph> = (args) => (
  <div data-test-block>
    <Paragraph {...args} />
    <Paragraph {...args} />
  </div>
);

// Når Paragraph instansieres, får den riktige default-verdier
export const Defaults = TemplateWithTwoParagraphs.bind({});
Defaults.storyName = 'Defaults Variant Standard (A1, B2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  children: { table: { disable: false } },
};

// Når Paragraph er et ingress, så får elementet riktige verdier
export const VariantIngress = TemplateWithTwoParagraphs.bind({});
VariantIngress.storyName = 'Variant Ingress (A1)';
VariantIngress.args = {
  ...defaultArgs,
  variant: 'ingress',
};
VariantIngress.argTypes = {
  ...VariantIngress.argTypes,
  variant: { table: { disable: false } },
};

// Når Paragraph har spacing, så får elementet en margin under avsnittet
export const WithSpacing = TemplateWithTwoParagraphs.bind({});
WithSpacing.storyName = 'With Spacing Variant Standard (A3)';
WithSpacing.args = {
  ...defaultArgs,
  hasSpacing: true,
};
WithSpacing.argTypes = {
  ...WithSpacing.argTypes,
  hasSpacing: { table: { disable: false } },
};

// Når Paragraph er et ingress og har spacing, så får elementet riktige verdier og en margin under ingresset
export const VariantIngressWithSpacing = TemplateWithTwoParagraphs.bind({});
VariantIngressWithSpacing.storyName = 'With Spacing Variant Ingress (A3)';
VariantIngressWithSpacing.args = {
  ...defaultArgs,
  hasSpacing: true,
  variant: 'ingress',
};
VariantIngressWithSpacing.argTypes = {
  ...VariantIngressWithSpacing.argTypes,
  hasSpacing: { table: { disable: false } },
  variant: { table: { disable: false } },
};
