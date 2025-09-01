import { StoryFn, Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { ErrorMessage } from '@skatteetaten/ds-forms';

const meta = {
  component: ErrorMessage,
  title: 'Tester/ErrorMessage',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    hasSpacing: { table: { disable: true } },
    showError: { table: { disable: true } },
  },
  tags: ['test'],
} satisfies Meta<typeof ErrorMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultText = 'Feilmelding';

const defaultArgs = {
  showError: false,
  children: defaultText,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDivElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5, B1)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    showError: true,
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    const errorMessage = canvas.getAllByRole('generic')[2];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(errorMessage).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Default (A1, A2)',
  args: {
    ...defaultArgs,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toBeInTheDocument();
    await expect(container).toHaveAttribute('aria-live', 'assertive');
    await expect(container).toHaveAttribute('aria-atomic');

    const textNode = container.querySelector('p');
    await expect(textNode).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithPElement = {
  name: 'With <p>-element (B1)',
  args: {
    ...defaultArgs,
    showError: true,
  },
  argTypes: {
    showError: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textNode = canvas.getByText(defaultText);
    await expect(textNode.tagName).toBe('P');
  },
} satisfies Story;

const TemplateWithInput: StoryFn<typeof ErrorMessage> = (args) => (
  <div className={'errorMessageContainer'}>
    <ErrorMessage {...args} />
  </div>
);

export const WithLongText = {
  render: TemplateWithInput,
  name: 'With Long Text (A3)',
  args: {
    ...defaultArgs,
    showError: true,
    children:
      'Dette blir en veldig lang feilmelding for å teste om du oppfører seg om den skal.',
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const WithLongTextAndBreaking = {
  render: TemplateWithInput,
  name: 'With Long Text And Breaking',
  args: {
    ...defaultArgs,
    showError: true,
    children:
      'Detteblirenveldiglangfeilmeldingforåtesteomduoppførersegomdenskal.',
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
} satisfies Story;
