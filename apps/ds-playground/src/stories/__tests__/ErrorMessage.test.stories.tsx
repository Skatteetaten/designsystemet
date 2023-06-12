import { ErrorMessage } from '@skatteetaten/ds-forms';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';

export default {
  component: ErrorMessage,
  title: 'Tester/ErrorMessage',
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
    showError: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof ErrorMessage>;

const defaultText = 'Feilmelding';

const defaultArgs = {
  children: defaultText,
};

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <div data-test-block>
    <ErrorMessage {...args} />
  </div>
);

// Når ErrorMessage har en ref, så får dom elementet ref forwarded
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

// Når ErrorMessage har en id, så har containeren id'en satt
// Når ErrorMessage har en custom className, så har containeren className satt og custom stil vises
// Når ErrorMessage har en lang, så har containeren lang satt
// Når ErrorMessage har en data-testid, så har containeren data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5, B1)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlId',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
  showError: true,
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
  await expect(container).toHaveAttribute('id', 'htmlId');
  await expect(container).toHaveClass('dummyClassname');
  await expect(container).toHaveAttribute('lang', 'nb');
  await expect(container).toHaveAttribute('data-testid', '123ID');
};

// Når ErrorMessage instansieres, får den riktige default-verdier og p-elementet finnes ikke
export const Defaults = Template.bind({});
Defaults.storyName = 'Default (A1, A2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toBeInTheDocument();
  await expect(container).toHaveAttribute('aria-live', 'assertive');
  await expect(container).toHaveAttribute('aria-atomic');
  // eslint-disable-next-line testing-library/no-node-access
  const textNode = container.querySelector('p');
  await expect(textNode).not.toBeInTheDocument();
};

// Når ErrorMessage har children, finnes et p-element
export const WithPElement = Template.bind({});
WithPElement.storyName = 'With <p>-element (B1)';
WithPElement.args = {
  ...defaultArgs,
  showError: true,
};
WithPElement.argTypes = {
  showError: {
    table: { disable: false },
  },
};
WithPElement.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textNode = canvas.getByText(defaultText);
  await expect(textNode.tagName).toBe('P');
};

const TemplateWithInput: ComponentStory<typeof ErrorMessage> = (args) => (
  <div className={'errorMessageContainer'} data-test-block>
    {/* TODO FRONT-1279 erstattes med TextField når den er ferdig utviklet */}
    <label htmlFor={'label1'} className={'block'}>
      {'Label'}
    </label>
    <input id={'label1'} type={'text'} />
    <ErrorMessage {...args} />
  </div>
);

// Når ErrorMessage har en tekst over flere linjer, så aligner ikonet med første linje
export const WithLongText = TemplateWithInput.bind({});
WithLongText.storyName = 'With Long Text (A3)';
WithLongText.args = {
  ...defaultArgs,
  showError: true,
  children:
    'Dette blir en veldig lang feilmelding for å teste om du oppfører seg om den skal.',
};
WithLongText.argTypes = {
  children: {
    table: { disable: false },
  },
};

// Når ErrorMessage har en lang tekst uten breaking space, så skal det brekke over flere linjer
export const WithLongTextAndBreaking = TemplateWithInput.bind({});
WithLongTextAndBreaking.storyName = 'With Long Text And Breaking';
WithLongTextAndBreaking.args = {
  ...defaultArgs,
  showError: true,
  children:
    'Detteblirenveldiglangfeilmeldingforåtesteomduoppførersegomdenskal.',
};
WithLongTextAndBreaking.argTypes = {
  children: {
    table: { disable: false },
  },
};
