import { Checkbox } from '@skatteetaten/ds-forms';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('checkbox');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute(attribute, expectedValue);
  };

export default {
  component: Checkbox,
  title: 'Tester/Checkbox',
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
    description: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    hasError: {
      table: {
        disable: true,
      },
    },
    hideLabel: {
      table: {
        disable: true,
      },
    },
    // HTML
    checked: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
    required: {
      table: {
        disable: true,
      },
    },
    value: { table: { disable: true } },
    // Aria
    ariaLabelledby: { table: { disable: true } },
    ariaDescribedby: { table: { disable: true } },
    // Events
    onChange: { table: { disable: true } },
  },
} as ComponentMeta<typeof Checkbox>;

const defaultLabelText = 'Checkbox';
const defaultErrorMessage = 'Du må lese og forstå innholdet for å gå videre';
const defaultArgs = {
  children: defaultLabelText,
};

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <div data-test-block>
    <Checkbox {...args} />
  </div>
);

// Når Checkbox har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLInputElement | null): void => {
    if (instance) {
      instance.name = 'dummyNameForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: { disable: true },
};
WithRef.play = verifyAttribute('name', 'dummyNameForwardedFromRef');

// Når Checkbox har en id, så har input-elementet id'en satt
// Når Checkbox har en custom className, så har containeren className satt og custom stil vises
// Når Checkbox har en lang, så har containeren lang satt
// Når Checkbox har en data-testid, så har input-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlid',
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
  const inputNode = canvas.getByRole('checkbox');
  const container = canvas.getAllByRole('generic')[1];
  await expect(inputNode).toHaveAttribute('id', 'htmlid');
  await expect(container).toHaveClass('dummyClassname');
  await expect(container).toHaveAttribute('lang', 'nb');
  await expect(inputNode).toHaveAttribute('data-testid', '123ID');
};

// Når Checkbox instansieres, får den riktige default-verdier
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1, B1)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  children: { table: { disable: false } },
};
Defaults.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > div > label`,
    focus: `${wrapper} > div > input`,
  },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inputNode = canvas.getByLabelText(defaultLabelText);
  await expect(inputNode).toBeInTheDocument();
  await expect(inputNode.tagName).toBe('INPUT');
  await expect(inputNode).not.toHaveAttribute('aria-invalid');
  await expect(inputNode).not.toBeChecked();
  await expect(inputNode).not.toBeRequired();
  await expect(inputNode).toBeEnabled();
  await expect(inputNode).not.toHaveAttribute('aria-describedby');
  const errorMessage = canvas.getByRole('alert');
  await expect(errorMessage).toBeInTheDocument();
};

// Når Checkbox har description, får den en beskrivelse
export const WithDescription = Template.bind({});
WithDescription.storyName = 'With Description (A1)';
WithDescription.args = {
  ...defaultArgs,
  description: 'En beskrivelse av punktet',
};
WithDescription.argTypes = {
  description: { table: { disable: false } },
};
WithDescription.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > div > label`,
    focus: `${wrapper} > div > input`,
  },
};
WithDescription.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const description = canvas.getByText('En beskrivelse av punktet');
  await expect(description).toBeInTheDocument();
};

// Når Checkbox har lang description, så går beskrivelsen over flere linjer
export const WithDescriptionAndLongText = Template.bind({});
WithDescriptionAndLongText.storyName = 'With Description And Long Text (A1)';
WithDescriptionAndLongText.args = {
  ...defaultArgs,
  children:
    'Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning',
  description:
    'Litt rart å ha en beskrivende tekst rett under en lang tekst, men sånn har det blitt',
};
WithDescriptionAndLongText.argTypes = {
  description: { table: { disable: false } },
};
WithDescriptionAndLongText.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når Checkbox har description og er disabled, ser det riktig ut
export const WithDescriptionAndDisabled = Template.bind({});
WithDescriptionAndDisabled.storyName = 'With Description And Disabled (A1)';
WithDescriptionAndDisabled.args = {
  ...defaultArgs,
  description: 'En beskrivelse av punktet',
  disabled: true,
};
WithDescriptionAndDisabled.argTypes = {
  description: { table: { disable: false } },
  disabled: { table: { disable: false } },
};

// Når Checkbox har lang tekst, så venstrejusteres teksten
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A2)';
WithLongText.args = {
  ...defaultArgs,
  children:
    'Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning',
};
WithLongText.argTypes = {
  children: { table: { disable: false } },
};
WithLongText.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når Checkbox har en veldig lang tekst uten breaking space, så skal den brekke over flere linjer
export const WithLongTextAndBreaking = Template.bind({});
WithLongTextAndBreaking.storyName = 'With Long Text And Breaking (A2)';
WithLongTextAndBreaking.args = {
  ...defaultArgs,
  children:
    'Fårekstrareiseveitiljobbpågrunnavleveringtilbarnehageellerskolefritidsordning',
};
WithLongTextAndBreaking.argTypes = {
  children: { table: { disable: false } },
};
WithLongTextAndBreaking.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når Checkbox har hideLabel, så er labelen ikke synlig men label-elementet finnes
export const WithHideLabel = Template.bind({});
WithHideLabel.storyName = 'With HideLabel (A2)';
WithHideLabel.args = {
  ...defaultArgs,
  hideLabel: true,
};
WithHideLabel.argTypes = {
  hideLabel: { table: { disable: false } },
};
WithHideLabel.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inputNode = canvas.getByLabelText(defaultLabelText);
  await expect(inputNode).toBeInTheDocument();
};

// Når Checkbox er checked fra utsiden, så er checked satt på input-elementet og ser det riktig ut
export const WithChecked = Template.bind({});
WithChecked.storyName = 'With Checked (A1, A3)';
WithChecked.args = {
  ...defaultArgs,
  checked: true,
};
WithChecked.argTypes = {
  checked: { table: { disable: false } },
};
WithChecked.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > div > label`,
    focus: `${wrapper} > div > input`,
  },
};
WithChecked.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inputNode = canvas.getByRole('checkbox');
  await expect(inputNode).toBeChecked();
  await expect(inputNode).not.toHaveAttribute('aria-invalid');
};

// Når Checkbox er disabled, så er disabled satt på input-elementet og vises checkboksen i disabled stil
export const WithDisabled = Template.bind({});
WithDisabled.storyName = 'With Disabled (A1, A5 delvis, B2)';
WithDisabled.args = {
  ...defaultArgs,
  disabled: true,
};
WithDisabled.argTypes = {
  disabled: { table: { disable: false } },
};
WithDisabled.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inputNode = canvas.getByRole('checkbox');
  await expect(inputNode).toBeDisabled();
};

// Når Checkbox er disabled, så er disabled satt på input-elementet og vises checkboksen i disabled stil
export const WithDisabledAndChecked = Template.bind({});
WithDisabledAndChecked.storyName =
  'With Disabled And Checked (A1, A5 delvis, B2)';
WithDisabledAndChecked.args = {
  ...defaultArgs,
  checked: true,
  disabled: true,
};
WithDisabledAndChecked.argTypes = {
  checked: { table: { disable: false } },
  disabled: { table: { disable: false } },
};
WithDisabledAndChecked.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inputNode = canvas.getByRole('checkbox');
  await expect(inputNode).toBeChecked();
  await expect(inputNode).toBeDisabled();
};

// Når Checkbox er required, så er required satt på input-elementet og vises stjerne bak labelen
export const WithRequired = Template.bind({});
WithRequired.storyName = 'With Required (A1, B3)';
WithRequired.args = {
  ...defaultArgs,
  required: true,
};
WithRequired.argTypes = {
  required: { table: { disable: false } },
};
WithRequired.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inputNode = canvas.getByRole('checkbox');
  await expect(inputNode).toBeRequired();
};

// Når CheckboxGroup har error, så får input-elementet aria-invalid og aria-describedby satt, vises checkboksen i korrekt stil og feilmeldingen vises
export const WithError = Template.bind({});
WithError.storyName = 'With Error And ErrorMessage (A1, B4)';
WithError.args = {
  ...defaultArgs,
  errorMessage: defaultErrorMessage,
  hasError: true,
};
WithError.argTypes = {
  errorMessage: { table: { disable: false } },
  hasError: { table: { disable: false } },
};
WithError.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > div > label`,
    focus: `${wrapper} > div > input`,
  },
};
WithError.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const errorMessageNode = canvas.getByRole('alert');
  await expect(errorMessageNode).toHaveAttribute('id');
  const inputNode = canvas.getByRole('checkbox', {
    description: defaultErrorMessage,
  });
  await expect(inputNode).toHaveAttribute('aria-invalid', 'true');
};

// Når Checkbox er disabled og required, så ser checkboksen riktig ut
export const WithDisabledAndRequired = Template.bind({});
WithDisabledAndRequired.storyName = 'With Disabled And Required (A1)';
WithDisabledAndRequired.args = {
  ...defaultArgs,
  disabled: true,
  required: true,
};
WithDisabledAndRequired.argTypes = {
  disabled: { table: { disable: false } },
  required: { table: { disable: false } },
};
WithDisabledAndRequired.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inputNode = canvas.getByRole('checkbox');
  await expect(inputNode).toBeDisabled();
  await expect(inputNode).toBeRequired();
};

// Når Checkbox har error og er required, så ser checkboksen riktig ut
export const WithErrorAndRequired = Template.bind({});
WithErrorAndRequired.storyName = 'With Error And Required (A1)';
WithErrorAndRequired.args = {
  ...defaultArgs,
  hasError: true,
  required: true,
};
WithErrorAndRequired.argTypes = {
  hasError: { table: { disable: false } },
  required: { table: { disable: false } },
};
WithErrorAndRequired.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > div > label`,
    focus: `${wrapper} > div > input`,
  },
};
WithErrorAndRequired.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inputNode = canvas.getByRole('checkbox');
  await expect(inputNode).toHaveAttribute('aria-invalid', 'true');
  await expect(inputNode).toBeRequired();
};

// Når Checkbox er checked og required, så har input-elementet ikke required-attribut
export const WithCheckedAndRequired = Template.bind({});
WithCheckedAndRequired.storyName = 'With Checked And Required (B3)';
WithCheckedAndRequired.args = {
  ...defaultArgs,
  checked: true,
  required: true,
};
WithCheckedAndRequired.argTypes = {
  checked: { table: { disable: false } },
  required: { table: { disable: false } },
};
WithCheckedAndRequired.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inputNode = canvas.getByRole('checkbox');
  await expect(inputNode).toBeChecked();
  await expect(inputNode).toBeRequired();
};

// Når Checkbox har aria-labelledby, så er aria-labelledby satt
export const WithAriaLabelledby = Template.bind({});
WithAriaLabelledby.storyName = 'With AriaLabelledby (B1)';
WithAriaLabelledby.args = {
  ...defaultArgs,
  ariaLabelledby: 'textId',
};
WithAriaLabelledby.argTypes = {
  ariaLabelledby: { table: { disable: false } },
};
WithAriaLabelledby.parameters = {
  imageSnapshot: { disable: true },
};
WithAriaLabelledby.play = verifyAttribute('aria-labelledby', 'textId');

// Når Checkbox har aria-describedby, så er aria-describedby satt og fremdeles knyttet til id'en i ErrorMessage
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B1)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: '123ID',
};
WithAriaDescribedby.argTypes = {
  ariaDescribedby: { table: { disable: false } },
};
WithAriaDescribedby.parameters = {
  imageSnapshot: { disable: true },
};
WithAriaDescribedby.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inputNode = canvas.getByRole('checkbox');
  await expect(inputNode).toHaveAttribute('aria-describedby');
  await expect(inputNode).toHaveAttribute(
    'aria-describedby',
    expect.stringMatching('123ID')
  );
};

// Når Checkbox har en value, så er value satt
export const WithValue = Template.bind({});
WithValue.storyName = 'With Value';
WithValue.args = {
  ...defaultArgs,
  value: 'test_value_checkbox',
};
WithValue.argTypes = {
  value: { table: { disable: false } },
};
WithValue.parameters = {
  imageSnapshot: { disable: true },
};
WithValue.play = verifyAttribute('value', 'test_value_checkbox');
