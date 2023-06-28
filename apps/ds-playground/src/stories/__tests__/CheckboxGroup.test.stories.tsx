import { CheckboxGroup } from '@skatteetaten/ds-forms';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';

export default {
  component: CheckboxGroup,
  title: 'Tester/CheckboxGroup',
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
      control: { type: null },
    },
    errorMessage: { table: { disable: true } },
    hasError: {
      table: {
        disable: true,
      },
    },
    hideLegend: {
      table: {
        disable: true,
      },
    },
    legend: { table: { disable: true } },
    showRequiredMark: {
      table: {
        disable: true,
      },
    },
    // HTML
    disabled: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof CheckboxGroup>;

const defaultLegendText = 'Velg det som passer deg';
const defaultErrorMessage = 'Velg minst ett av alternativene';
const defaultChildren = [
  <CheckboxGroup.Checkbox key={'checkboxGroupOption_1'}>
    {'Har barn over 16 år'}
  </CheckboxGroup.Checkbox>,
  <CheckboxGroup.Checkbox key={'checkboxGroupOption_2'}>
    {'Har barn under 12 år'}
  </CheckboxGroup.Checkbox>,
  <CheckboxGroup.Checkbox key={'checkboxGroupOption_4'}>
    {'Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov'}
  </CheckboxGroup.Checkbox>,
];
const childrenWithOneChecked = [
  <CheckboxGroup.Checkbox key={'checkboxGroupOption_1'} checked>
    {'Har barn over 16 år'}
  </CheckboxGroup.Checkbox>,
  <CheckboxGroup.Checkbox key={'checkboxGroupOption_2'}>
    {'Har barn under 12 år'}
  </CheckboxGroup.Checkbox>,
  <CheckboxGroup.Checkbox key={'checkboxGroupOption_4'}>
    {'Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov'}
  </CheckboxGroup.Checkbox>,
];

const defaultArgs = {
  legend: defaultLegendText,
  children: defaultChildren,
};

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <div data-test-block>
    <CheckboxGroup {...args} />
  </div>
);

// Når CheckboxGroup har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLFieldSetElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
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
  const fieldsetNode = canvas.getByRole('group');
  await expect(fieldsetNode).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når CheckboxGroup har en id, så har fieldset-elementet id'en satt
// Når CheckboxGroup har en custom className, så har fieldset-elementet className satt og custom stil vises
// Når CheckboxGroup har en lang, så har fieldset-elementet lang satt
// Når CheckboxGroup har en data-testid, så har fieldset-elementet data-testid satt
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
  const fieldsetNode = canvas.getByRole('group');
  await expect(fieldsetNode).toHaveAttribute('id', 'htmlid');
  await expect(fieldsetNode).toHaveClass('dummyClassname');
  await expect(fieldsetNode).toHaveAttribute('lang', 'nb');
  await expect(fieldsetNode).toHaveAttribute('data-testid', '123ID');
};

// Når CheckboxGroup instansieres, får den riktige default-verdier
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1, B1, B5)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  legend: { table: { disable: false } },
  children: { table: { disable: false } },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const fieldsetNode = canvas.getByRole('group');
  await expect(fieldsetNode).toBeInTheDocument();
  await expect(fieldsetNode.tagName).toBe('FIELDSET');
  const legendNode = canvas.getByText(defaultLegendText);
  await expect(legendNode).toBeInTheDocument();
  await expect(legendNode.tagName).toBe('LEGEND');
  const inputNodes = canvas.getAllByRole('checkbox');
  for (const input of inputNodes) {
    await expect(input).not.toHaveAttribute('aria-invalid');
    await expect(input).not.toBeRequired();
  }
};

// Når Legend har markup, så ser det riktig ut
export const LegendWithMarkup = Template.bind({});
LegendWithMarkup.storyName = 'Legend With Markup (B1)';
LegendWithMarkup.args = {
  ...defaultArgs,
  legend: (
    <>
      <Heading as={'h1'} level={3}>
        {'Dette er en Heading i legend'}
      </Heading>
      <Paragraph variant={'ingress'}>
        <em>{'Dette er en italic Paragraph med ingress variant i legend'}</em>
      </Paragraph>
    </>
  ),
};
LegendWithMarkup.argTypes = {
  legend: { table: { disable: false }, control: { type: null } },
};

// Når Legend har markup og er required med stjerne, så vises stjerne bak første child-element i legend
export const LegendWithMarkupAndRequiredMark = Template.bind({});
LegendWithMarkupAndRequiredMark.storyName =
  'Legend With Markup and Required Mark (B1)';
LegendWithMarkupAndRequiredMark.args = {
  ...defaultArgs,
  legend: (
    <>
      <Heading as={'h1'} level={3}>
        {'Dette er en Heading i legend'}
      </Heading>
      <Paragraph variant={'ingress'}>
        <em>{'Dette er en italic Paragraph med ingress variant i legend'}</em>
      </Paragraph>
    </>
  ),
  showRequiredMark: true,
};
LegendWithMarkupAndRequiredMark.argTypes = {
  legend: { table: { disable: false }, control: { type: null } },
  showRequiredMark: { table: { disable: false } },
};

// Når CheckboxGroup har hideLegend, så finnes legend-elementet fremdeles men er elementet ikke synlig
export const WithHideLegend = Template.bind({});
WithHideLegend.storyName = 'Without Legend (B1)';
WithHideLegend.args = {
  ...defaultArgs,
  hideLegend: true,
};
WithHideLegend.argTypes = {
  hideLegend: { table: { disable: false } },
};
WithHideLegend.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const legendNode = canvas.getByText(defaultLegendText);
  await expect(legendNode).toBeInTheDocument();
};

// Når CheckboxGroup er disabled, så er disabled satt på fieldset-elementet og vises checkboksene i disabled stil
export const WithDisabled = Template.bind({});
WithDisabled.storyName = 'With Disabled (A1, B2)';
WithDisabled.args = {
  ...defaultArgs,
  disabled: true,
};
WithDisabled.argTypes = {
  disabled: { table: { disable: false } },
};
WithDisabled.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const fieldsetNode = canvas.getByRole('group');
  await expect(fieldsetNode).toBeDisabled();
};

// Når CheckboxGroup er disabled og en checkbox er checked, så er disabled satt på fieldset-elementet og vises checkboksene i disabled stil
export const WithDisabledAndChecked = Template.bind({});
WithDisabledAndChecked.storyName = 'With Disabled And Checked (A1)';
WithDisabledAndChecked.args = {
  ...defaultArgs,
  children: childrenWithOneChecked,
  disabled: true,
};
WithDisabledAndChecked.argTypes = {
  disabled: { table: { disable: false } },
};

// Når CheckboxGroup har showRequiredMark er satt, så vises stjerne bak legend
export const WithRequiredMark = Template.bind({});
WithRequiredMark.storyName = 'With Required Mark (A1, B3)';
WithRequiredMark.args = {
  ...defaultArgs,
  showRequiredMark: true,
};
WithRequiredMark.argTypes = {
  showRequiredMark: { table: { disable: false } },
};

// Når CheckboxGroup har error, så får input-elementene aria-invalid og aria-describedby satt, vises checkboksene i korrekt stil og feilmeldingen vises
export const WithError = Template.bind({});
WithError.storyName = 'With Error (A1, B5)';
WithError.args = {
  ...defaultArgs,
  hasError: true,
  errorMessage: defaultErrorMessage,
};
WithError.argTypes = {
  hasError: { table: { disable: false } },
  errorMessage: { table: { disable: false } },
};
WithError.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const errorMessageNode = canvas.getAllByRole('generic');
  await expect(errorMessageNode[16]).toBeInTheDocument();
  await expect(errorMessageNode[16]).toHaveAttribute('id');
  const inputNodes = canvas.getAllByRole('checkbox', {
    description: defaultErrorMessage,
  });
  for (const input of inputNodes) {
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  }
};
