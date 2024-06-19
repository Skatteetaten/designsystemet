import { dsI18n, statusArr } from '@skatteetaten/ds-core-utils';
import { LockSVGpath } from '@skatteetaten/ds-icons';
import { Alert } from '@skatteetaten/ds-status';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';
import { useArgs } from '@storybook/preview-api';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import { wrapper } from './testUtils/storybook.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
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
    // Events
    onClose: { table: { disable: true } },
    // Aria
    ariaLive: { table: { disable: true } },
  },
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultText =
  'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.';

const defaultArgs = {
  showAlert: false,
  children: defaultText,
  variant: statusArr[1],
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
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
    'data-testid': '123ID',
    showAlert: true,
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    const alert = canvas.getAllByRole('generic')[2];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(alert).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (B1, B2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toBeInTheDocument();
    await expect(container).toHaveAttribute('aria-live', 'polite');
    await expect(container).toHaveAttribute('aria-atomic');
    // eslint-disable-next-line testing-library/no-node-access
    const alertNode = container.querySelector('div');
    await expect(alertNode).not.toBeInTheDocument();
  },
} satisfies Story;

export const DefaultsWithMessage = {
  name: 'Defaults With Alert Content (B2)',
  args: {
    ...defaultArgs,
    showAlert: true,
  },
  argTypes: {
    children: { table: { disable: false } },
    showAlert: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
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
  },
} satisfies Story;

export const VariantSuccess = {
  name: 'Variant Success (A1, A3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    variant: 'success',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('aria-live', 'polite');
    const alertNode = canvas.getByText(defaultText);
    await expect(alertNode).toBeInTheDocument();
  },
} satisfies Story;

export const VariantNeutral = {
  name: 'Variant Neutral (A1, A3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    variant: 'neutral',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('aria-live', 'polite');
    const alertNode = canvas.getByText(defaultText);
    await expect(alertNode).toBeInTheDocument();
  },
} satisfies Story;

export const VariantWarning = {
  name: 'Variant Warning (A1, A3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    variant: 'warning',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('aria-live', 'polite');
    const alertNode = canvas.getByText(defaultText);
    await expect(alertNode).toBeInTheDocument();
  },
} satisfies Story;

export const VariantDanger = {
  name: 'Variant Danger (A1, A3, B4)',
  args: {
    ...defaultArgs,
    showAlert: true,
    variant: 'danger',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('aria-live', 'assertive');
    const alertNode = canvas.getByText(defaultText);
    await expect(alertNode).toBeInTheDocument();
  },
} satisfies Story;

const TemplateAllVariants: StoryFn<typeof Alert> = (args) => (
  <>
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
  </>
);

export const AllVariants = {
  render: TemplateAllVariants,
  name: 'All Variants (A1)',
  args: {
    ...defaultArgs,
    showAlert: true,
  },
} satisfies Story;

export const AllVariantsMobile = {
  render: TemplateAllVariants,
  name: 'All Variants On Small Screen (A1)',
  args: {
    ...defaultArgs,
    showAlert: true,
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
  },
} satisfies Story;

export const WithLongText = {
  name: 'With Long Text (A2)',
  args: {
    ...defaultArgs,
    children:
      'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon. Dersom teksten går over flere linjer, så vil ikonene beholde plasseringen sin.',
    showAlert: true,
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const WithLongTextAndBreaking = {
  name: 'With Long Text And Breaking (A2)',
  args: {
    ...defaultArgs,
    children:
      'Avvistavkortutsteder.Takontaktmedkortutstederformerinformasjon.Dersomtekstengåroverflerelinjer,såvilikonenebeholdeplasseringensin.',
    showAlert: true,
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const WithMarkup = {
  name: 'With Markup (A2)',
  args: {
    ...defaultArgs,
    children: (
      <>
        <Heading as={'h1'} level={4}>
          {'Avvist av kortutsteder'}
        </Heading>
        <Paragraph>
          {'Ta kontakt med kortutsteder for '}
          <a href={'#storybook-root'}>{'mer informasjon'}</a>
        </Paragraph>
      </>
    ),
    showAlert: true,
  },
} satisfies Story;

export const WithCustomIcon = {
  name: 'With Custom Icon (A3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    svgPath: LockSVGpath,
  },
  argTypes: {
    svgPath: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const WithCustomSVGPath = {
  name: 'With Custom SVG (A3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    svgPath: <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z'} />,
  },
  argTypes: {
    svgPath: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const WithCloseButton = {
  name: 'With Close Button (A4)',
  args: {
    ...defaultArgs,
    showAlert: true,
    onClose: fn(),
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} button`,
      hover: `${wrapper} button`,
    },
  },
} satisfies Story;

export const WithCloseOnClickButton = {
  name: 'With OnClick Close Button (A4)',
  args: {
    ...defaultArgs,
    showAlert: true,
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  render: (args): JSX.Element => {
    const [, setArgs] = useArgs();
    console.log(args);
    return (
      <Alert
        {...args}
        onClose={() => {
          setArgs({ showAlert: false });
        }}
      >
        {args.children}
      </Alert>
    );
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const alertNode = canvas.getByText(defaultText);
    await expect(alertNode).toBeInTheDocument();

    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toBeInTheDocument();
    const svg = canvas.getByTitle(dsI18n.t('ds_status:alert.CloseMessage'));
    await expect(svg).toBeInTheDocument();
    await userEvent.click(iconButton);
    await waitFor(() => expect(alertNode).not.toBeInTheDocument());
  },
} satisfies Story;

export const WithAriaLiveOff = {
  name: 'With Aria-Live Off (B3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    ariaLive: 'off',
  },
  argTypes: {
    ariaLive: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('aria-live', 'off');
  },
} satisfies Story;
