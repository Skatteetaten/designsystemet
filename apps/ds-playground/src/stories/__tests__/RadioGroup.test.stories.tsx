import { useState } from 'react';

import {
  Radio,
  RadioGroup,
  RadioGroupProps,
  radioGroupVariantArr,
} from '@skatteetaten/ds-forms';
import { Heading } from '@skatteetaten/ds-typography';
import { useArgs } from '@storybook/client-api';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

export default {
  component: RadioGroup,
  title: 'Tester/RadioGroup',
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
    errorMessage: { table: { disable: true } },
    hasError: { table: { disable: true } },
    hideLegend: { table: { disable: true } },
    legend: { table: { disable: true } },
    selectedValue: { type: 'string', table: { disable: true } },
    variant: {
      table: { disable: true },
      options: [...radioGroupVariantArr],
      control: 'inline-radio',
    },
    // HTML
    disabled: { table: { disable: true } },
    name: { table: { disable: true } },
    required: { table: { disable: true } },
    // Events
    onChange: { table: { disable: true } },
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => {
  const [, setArgs] = useArgs();

  return (
    <div data-test-block>
      <RadioGroup
        {...args}
        onChange={(e): void => {
          setArgs({ selectedValue: e.target.value });
        }}
      />
    </div>
  );
};

const defaultLegendText = 'Type virksomhet';
const defaultArgs: RadioGroupProps = {
  legend: defaultLegendText,
  children: [
    <RadioGroup.Radio key={'radioGroupRadio_1'} value={'foretak'}>
      {'Enkeltpersonsforetak'}
    </RadioGroup.Radio>,
    <RadioGroup.Radio key={'radioGroupRadio_2'} value={'selskap'}>
      {'Aksjeselskap'}
    </RadioGroup.Radio>,
    <RadioGroup.Radio key={'radioGroupRadio_3'} value={'annet'}>
      {'Annet'}
    </RadioGroup.Radio>,
  ],
};

// Når RadioGroup har en ref, så får dom fieldset elementet ref forwarded
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
  const container = canvas.getByRole('group');
  await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når RadioGroup har en id, så har fieldset-element id
// Når RadioGroup har en custom CSS, så vises custom stil
// Når RadioGroup har en lang, så har fieldset-element lang
// Når RadioGroup har dataTestid, så har fieldset-elementet data-testid satt
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
  const fieldset = canvas.getByRole('group');
  await expect(fieldset).toHaveClass('dummyClassname');
  await expect(fieldset).toHaveAttribute('id', 'htmlId');
  await expect(fieldset).toHaveAttribute('lang', 'nb');
  await expect(fieldset).toHaveAttribute('data-testid', '123ID');
};

// Når RadioGroup instansieres, så vises default-variant og rendrer riktig ulike tilstander
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults Variant Standard (A1 delvis, B1 delvis)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  children: { table: { disable: false } },
  legend: { table: { disable: false } },
  variant: { table: { disable: false } },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const fieldset = canvas.getByRole('group');
  const legend = canvas.getByText(defaultLegendText);
  const radios = canvas.getAllByRole('radio');
  await expect(fieldset).toBeInTheDocument();
  await expect(fieldset.tagName).toBe('FIELDSET');
  await expect(legend).toBeInTheDocument();
  await expect(legend.tagName).toBe('LEGEND');
  radios.forEach((input) => {
    expect(input).toHaveAttribute('name');
  });
};

// Når RadioGroup har en variant, så vises stilsett for varianten
export const VariantHorizontal = Template.bind({});
VariantHorizontal.storyName = 'Variant Horizontal (A6)';
VariantHorizontal.args = {
  ...defaultArgs,
  variant: 'horizontal',
};
VariantHorizontal.argTypes = {
  variant: { table: { disable: false } },
};

// Når RadioGroup har prop hideLegend, så skal legend skjules visuelt men fortsatt være synlig for en skjermleser
export const WithHideLegend = Template.bind({});
WithHideLegend.storyName = 'With Hide Legend (B1)';
WithHideLegend.args = {
  ...defaultArgs,
  hideLegend: true,
};
WithHideLegend.argTypes = {
  hideLegend: { table: { disable: false } },
};
WithHideLegend.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const legend = canvas.getByText(defaultLegendText);
  await expect(legend).toBeInTheDocument();
};

// Når RadioGroup har prop selectedValue, så er riktig radio blitt valgt
export const WithSelectedValue = Template.bind({});
WithSelectedValue.storyName = 'With SelectedValue (A3 delvis)';
WithSelectedValue.args = {
  ...defaultArgs,
  selectedValue: 'annet',
};
WithSelectedValue.argTypes = {
  selectedValue: { table: { disable: false } },
};
WithSelectedValue.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole('radio', { checked: true });
  // eslint-disable-next-line jest-dom/prefer-to-have-value
  await expect(input).toHaveAttribute('value', 'annet');
};

// Når RadioGroup har prop disabled, så er alle Radio disabled og stil er satt til disabled
export const WithDisabled = Template.bind({});
WithDisabled.storyName = 'With Disabled (A4 delvis)';
WithDisabled.args = {
  ...defaultArgs,
  disabled: true,
  selectedValue: 'annet',
};
WithDisabled.argTypes = {
  disabled: { table: { disable: false } },
};
WithDisabled.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const radios = canvas.getAllByRole('radio');
  radios.forEach((input) => {
    expect(input).toBeDisabled();
  });
};

// Når RadioGroup er påkrevd, så har alle Radio required og stil er satt til required
export const WithRequired = Template.bind({});
WithRequired.storyName = 'With Required (A7 delvis)';
WithRequired.args = {
  ...defaultArgs,
  required: true,
};
WithRequired.argTypes = {
  required: { table: { disable: false } },
};
WithRequired.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const radios = canvas.getAllByRole('radio');
  radios.forEach((input) => {
    expect(input).toBeRequired();
  });
};

// Når RadioGroup er påkrev og legend består av markup, så skal obligatorisk stjerne vises på etter første barn
export const WithRequiredAndLegendAsMarkup = Template.bind({});
WithRequiredAndLegendAsMarkup.storyName =
  'With Required And Legend As Markup (A7 delvis)';
WithRequiredAndLegendAsMarkup.args = {
  ...defaultArgs,
  legend: (
    <>
      <Heading as={'h4'} level={3}>
        {defaultLegendText}
      </Heading>
      <span>{'Med virksomhet så menes bla bla'}</span>
    </>
  ),
  required: true,
};
WithRequiredAndLegendAsMarkup.argTypes = {
  required: { table: { disable: false } },
};

// Når RadioGroup har prop name, så har alle Radio name med verdi fra konsumenten
export const WithName = Template.bind({});
WithName.storyName = 'With Name (B1)';
WithName.args = {
  ...defaultArgs,
  name: 'nameFraKonsument',
};
WithName.argTypes = {
  name: { table: { disable: false } },
};
WithName.parameters = {
  imageSnapshot: { disable: true },
};
WithName.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const radios = canvas.getAllByRole('radio');
  radios.forEach((input) => {
    expect(input).toHaveAttribute('name', 'nameFraKonsument');
  });
};

// Når RadioGroup har prop errorMessage, så vises ingen feilmelding, aria-attributter eller stil satt for error
export const WithErrorMessage = Template.bind({});
WithErrorMessage.storyName = 'With ErrorMessage (B4 delvis)';
WithErrorMessage.args = {
  ...defaultArgs,
  errorMessage: 'Feilmelding',
};
WithErrorMessage.argTypes = {
  errorMessage: { table: { disable: false } },
};
WithErrorMessage.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const errorMessageContainer = canvas.getAllByRole('generic')[5];
  await expect(errorMessageContainer).toBeInTheDocument();
  await expect(canvas.queryByText('Feilmelding')).not.toBeInTheDocument();
  const radios = canvas.getAllByRole('radio');
  radios.forEach((radio) => {
    expect(radio).not.toHaveAttribute('aria-invalid', 'true');
    expect(radio).not.toHaveAttribute('aria-describedby');
  });
};

// Når RadioGroup har en error, så vises feilmelding, alle radio's relevante aria-attributter og stil er satt til error
export const WithHasError = Template.bind({});
WithHasError.storyName = 'With HasError (B4 delvis, A3 delvis)';
WithHasError.args = {
  ...defaultArgs,
  errorMessage: 'Feilmelding',
  hasError: true,
  selectedValue: 'annet',
};
WithHasError.argTypes = {
  hasError: { table: { disable: false } },
};
WithHasError.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const radios = canvas.getAllByRole('radio');
  const errorMessage = canvas.getByText('Feilmelding');
  const errorMessageContainer = canvas.getAllByRole('generic')[5];
  await expect(errorMessage).toBeInTheDocument();
  await expect(errorMessageContainer).toBeInTheDocument();
  radios.forEach((radio) => {
    expect(radio).toHaveAttribute('aria-invalid', 'true');
    expect(radio).toHaveAttribute('aria-describedby', errorMessageContainer.id);
  });
};

// Når RadioGroup har prop hasError og radios har prop ariaDescribedby fra konsument, så har aria-describedby begge id-ene
export const WithHasErrorAndAriaDescribedby = Template.bind({});
WithHasErrorAndAriaDescribedby.storyName =
  'With HasError And AriaDescribedby (B4 delvis)';
WithHasErrorAndAriaDescribedby.args = {
  ...defaultArgs,
  children: [
    <RadioGroup.Radio key={'radioGroupRadio_1'} ariaDescribedby={'konsumentId'}>
      {'Enkeltpersonsforetak'}
    </RadioGroup.Radio>,
  ],
  errorMessage: 'Feilmelding',
  hasError: true,
};
WithHasErrorAndAriaDescribedby.argTypes = {
  hasError: { table: { disable: false } },
};
WithHasErrorAndAriaDescribedby.parameters = {
  imageSnapshot: { disable: true },
};
WithHasErrorAndAriaDescribedby.play = async ({
  canvasElement,
}): Promise<void> => {
  const canvas = within(canvasElement);
  const errorMessageContainer = canvas.getAllByRole('generic')[3];
  const radio = canvas.getByRole('radio');
  expect(radio).toHaveAttribute(
    'aria-describedby',
    `konsumentId ${errorMessageContainer.id}`
  );
};

// Når brukeren klikker på radio, så kalles riktig eventHandler
// Eventhandlere endrer tesksten på knappen
const EventHandlersTemplate: ComponentStory<typeof RadioGroup> = (args) => {
  const [labelText, setLabelText] = useState('Aksjeselskap');
  return (
    <div data-test-block>
      <RadioGroup
        {...args}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          setLabelText('Radio har blitt klikket på');
          args.onChange && args.onChange(event);
        }}
      >
        <Radio value={'selskap'}>{labelText}</Radio>
      </RadioGroup>
    </div>
  );
};
export const WithEventHandlers = EventHandlersTemplate.bind({});
WithEventHandlers.storyName = 'With EventHandlers';
WithEventHandlers.args = {
  ...defaultArgs,
};
WithEventHandlers.parameters = {
  imageSnapshot: { disable: true },
};
WithEventHandlers.play = async ({ args, canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const radio = canvas.getByRole('radio');
  await expect(radio).toBeInTheDocument();
  await userEvent.click(radio);
  await waitFor(() =>
    expect(args.onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'selskap' }),
      })
    )
  );
};
