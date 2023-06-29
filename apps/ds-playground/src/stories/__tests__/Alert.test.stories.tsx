import { statusArr } from '@skatteetaten/ds-core-utils';
import { LockSVGpath } from '@skatteetaten/ds-icons';
import { Alert } from '@skatteetaten/ds-status';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

export default {
  component: Alert,
  title: 'Tester/Alert',
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
    showAlert: {
      table: { disable: true },
    },
    showCloseButton: {
      table: { disable: true },
    },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    variant: {
      options: [...statusArr],
      control: 'radio',
      table: { disable: true },
    },
    // Aria
    ariaLive: { table: { disable: true } },
  },
} as ComponentMeta<typeof Alert>;

const defaultText =
  'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.';

const defaultArgs = {
  children: defaultText,
  variant: statusArr[1],
};

const Template: ComponentStory<typeof Alert> = (args) => (
  <div data-test-block>
    <Alert {...args} />
  </div>
);

// Når Alert har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLDivElement | null): void => {
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
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når Alert har en id, så har containeren id'en satt
// Når Alert har en custom className, så har containeren className satt og custom stil vises
// Når Alert har en lang, så har containeren lang satt
// Når Alert har en data-testid, så har containeren data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlId',
  className: 'dummyClassname',
  lang: 'en',
  'data-testid': '123ID',
  showAlert: true,
};
WithAttributes.argTypes = {
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  const alert = canvas.getAllByRole('generic')[2];
  await expect(container).toHaveAttribute('id', 'htmlId');
  await expect(alert).toHaveClass('dummyClassname');
  await expect(container).toHaveAttribute('lang', 'en');
  await expect(container).toHaveAttribute('data-testid', '123ID');
};

// Når Alert instansieres, får den riktige default-verdier og meldingen vises ikke
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (B1, B2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  children: { table: { disable: false } },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toBeInTheDocument();
  await expect(container).toHaveAttribute('aria-live', 'polite');
  await expect(container).toHaveAttribute('aria-atomic');
  // eslint-disable-next-line testing-library/no-node-access
  const alertNode = container.querySelector('div');
  await expect(alertNode).not.toBeInTheDocument();
};

// Når Alert instansieres med showAlert=true, får den riktige default-verdier og meldingen vises
export const DefaultsWithMessage = Template.bind({});
DefaultsWithMessage.storyName = 'Defaults With Alert Content (B2)';
DefaultsWithMessage.args = {
  ...defaultArgs,
  showAlert: true,
};
DefaultsWithMessage.argTypes = {
  children: { table: { disable: false } },
  showAlert: { table: { disable: false } },
};
DefaultsWithMessage.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toBeInTheDocument();
  await expect(container).toHaveAttribute('aria-live', 'polite');
  // eslint-disable-next-line testing-library/no-node-access
  const alertNode = container.querySelector('div');
  await expect(alertNode).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-node-access
  const iconButtonNode = container.querySelector('button');
  await expect(iconButtonNode).not.toBeInTheDocument();
};

// Når Alert har en variant, så vises stilsett for varianten (success)
export const VariantSuccess = Template.bind({});
VariantSuccess.storyName = 'Variant Success (A1, A3)';
VariantSuccess.args = {
  ...defaultArgs,
  showAlert: true,
  variant: 'success',
};
VariantSuccess.argTypes = {
  variant: { table: { disable: false } },
};
VariantSuccess.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toHaveAttribute('aria-live', 'polite');
  const alertNode = canvas.getByText(defaultText);
  await expect(alertNode).toBeInTheDocument();
};

// Når Alert har en variant, så vises stilsett for varianten (neutral)
export const VariantNeutral = Template.bind({});
VariantNeutral.storyName = 'Variant Neutral (A1, A3)';
VariantNeutral.args = {
  ...defaultArgs,
  showAlert: true,
  variant: 'neutral',
};
VariantNeutral.argTypes = {
  variant: { table: { disable: false } },
};
VariantNeutral.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toHaveAttribute('aria-live', 'polite');
  const alertNode = canvas.getByText(defaultText);
  await expect(alertNode).toBeInTheDocument();
};

// Når Alert har en variant, så vises stilsett for varianten (warning)
export const VariantWarning = Template.bind({});
VariantWarning.storyName = 'Variant Warning (A1, A3)';
VariantWarning.args = {
  ...defaultArgs,
  showAlert: true,
  variant: 'warning',
};
VariantWarning.argTypes = {
  variant: { table: { disable: false } },
};
VariantWarning.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toHaveAttribute('aria-live', 'polite');
  const alertNode = canvas.getByText(defaultText);
  await expect(alertNode).toBeInTheDocument();
};

// Når Alert har en variant, så vises stilsett for varianten (danger)
export const VariantDanger = Template.bind({});
VariantDanger.storyName = 'Variant Danger (A1, A3, B4)';
VariantDanger.args = {
  ...defaultArgs,
  showAlert: true,
  variant: 'danger',
};
VariantDanger.argTypes = {
  variant: { table: { disable: false } },
};
VariantDanger.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toHaveAttribute('aria-live', 'assertive');
  const alertNode = canvas.getByText(defaultText);
  await expect(alertNode).toBeInTheDocument();
};

const TemplateAllVariants: ComponentStory<typeof Alert> = (args) => (
  <div data-test-block>
    {statusArr.map((variant, index) => {
      return (
        <Alert
          {...args}
          key={`messageBar_${index}`}
          className={'bottomSpacingXL'}
          variant={variant}
        />
      );
    })}
  </div>
);

// Viser alle varianter med lukkekryss under hverandre
export const AllVariants = TemplateAllVariants.bind({});
AllVariants.storyName = 'All Variants (A1)';
AllVariants.args = {
  ...defaultArgs,
  showCloseButton: true,
  showAlert: true,
};

// Viser alle varianter med lukkekryss under hverandre på mobil
export const AllVariantsMobile = TemplateAllVariants.bind({});
AllVariantsMobile.storyName = 'All Variants On Small Screen (A1)';
AllVariantsMobile.args = {
  ...defaultArgs,
  showCloseButton: true,
  showAlert: true,
};
AllVariantsMobile.parameters = {
  viewport: {
    defaultViewport: '--mobile',
  },
};

// Når Alert har en tekst over flere linjer, så aligner ikonet og knappen med første linje
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A2)';
WithLongText.args = {
  ...defaultArgs,
  children:
    'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon. Dersom teksten går over flere linjer, så vil ikonene beholde plasseringen sin.',
  showCloseButton: true,
  showAlert: true,
};
WithLongText.argTypes = {
  children: {
    table: { disable: false },
  },
};

// Når Alert har en lang tekst uten breaking space, så skal det brekke over flere linjer
export const WithLongTextAndBreaking = Template.bind({});
WithLongTextAndBreaking.storyName = 'With Long Text And Breaking (A2)';
WithLongTextAndBreaking.args = {
  ...defaultArgs,
  children:
    'Avvistavkortutsteder.Takontaktmedkortutstederformerinformasjon.Dersomtekstengåroverflerelinjer,såvilikonenebeholdeplasseringensin.',
  showCloseButton: true,
  showAlert: true,
};
WithLongTextAndBreaking.argTypes = {
  children: {
    table: { disable: false },
  },
};

// Når Alert har markup, så ser det riktig ut
export const WithMarkup = Template.bind({});
WithMarkup.storyName = 'With Markup (A2)';
WithMarkup.args = {
  ...defaultArgs,
  children: (
    <>
      <Heading as={'h1'} level={4}>
        {'Avvist av kortutsteder'}
      </Heading>
      <Paragraph>
        {'Ta kontakt med kortutsteder for '}
        <a href={'#root'}>{'mer informasjon'}</a>
      </Paragraph>
    </>
  ),
  showAlert: true,
};
WithMarkup.argTypes = {
  children: {
    table: { disable: false },
    control: { type: null },
  },
};

// Når Alert har et annet ikon fra vårt galleri, så vises dette ikonet
export const WithCustomIcon = Template.bind({});
WithCustomIcon.storyName = 'With Custom Icon (A3)';
WithCustomIcon.args = {
  ...defaultArgs,
  showAlert: true,
  svgPath: LockSVGpath,
};
WithCustomIcon.argTypes = {
  svgPath: {
    table: { disable: false },
  },
};

// Når Alert har et custom svgPath, så vises denne svg'en
export const WithCustomSVGPath = Template.bind({});
WithCustomSVGPath.storyName = 'With Custom SVG (A3)';
WithCustomSVGPath.args = {
  ...defaultArgs,
  showAlert: true,
  svgPath: <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z'} />,
};
WithCustomSVGPath.argTypes = {
  svgPath: {
    table: { disable: false },
    control: { type: null },
  },
};

// Når Alert har lukkekryss, så vises lukkekrysset
export const WithCloseButton = Template.bind({});
WithCloseButton.storyName = 'With Close Button (A4)';
WithCloseButton.args = {
  ...defaultArgs,
  showCloseButton: true,
  showAlert: true,
};
WithCloseButton.argTypes = {
  showCloseButton: { table: { disable: false } },
};
WithCloseButton.parameters = {
  imageSnapshot: {
    focus: `${wrapper} button`,
    hover: `${wrapper} button`,
  },
};
WithCloseButton.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const iconButton = canvas.getByRole('button');
  await expect(iconButton).toBeInTheDocument();
  const svg = canvas.getByTitle('Lukk melding');
  await expect(svg).toBeInTheDocument();
};

export const WithOnClickCloseButton = Template.bind({});
WithOnClickCloseButton.storyName = 'With OnClick Close Button (A4)';
WithOnClickCloseButton.args = {
  ...defaultArgs,
  showCloseButton: true,
  showAlert: true,
};
WithOnClickCloseButton.parameters = {
  imageSnapshot: { disable: true },
  HTMLSnapshot: { disable: true },
};
WithOnClickCloseButton.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await expect(button).toBeInTheDocument();
  await expect(canvas.getByText(defaultText)).toBeInTheDocument();
  await userEvent.click(button);
  const container = canvas.getAllByRole('generic')[1];
  // eslint-disable-next-line testing-library/no-node-access
  const alertNode = container.querySelector('div');
  await waitFor(() => expect(alertNode).not.toBeInTheDocument());
};

// Når Alert har prop ariaLive, så er aria-live satt
export const WithAriaLiveOff = Template.bind({});
WithAriaLiveOff.storyName = 'With Aria-Live Off (B3)';
WithAriaLiveOff.args = {
  ...defaultArgs,
  showAlert: true,
  ariaLive: 'off',
};
WithAriaLiveOff.argTypes = {
  ariaLive: { table: { disable: false } },
};
WithAriaLiveOff.parameters = {
  imageSnapshot: { disable: true },
};
WithAriaLiveOff.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toHaveAttribute('aria-live', 'off');
};
