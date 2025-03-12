import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { Card, CardAlertVariant } from '@skatteetaten/ds-content';
import { statusArr } from '@skatteetaten/ds-core-utils';
import { SkattetrekkSVGpath } from '@skatteetaten/ds-icons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

const meta = {
  component: Card.Alert,
  title: 'Tester/Card/Alert',
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
      control: 'text',
    },
    variant: {
      table: { disable: true },
      control: 'text',
    },
    title: {
      table: { disable: true },
      control: 'text',
    },
    titleAs: {
      table: { disable: true },
    },
    showAlert: {
      table: { disable: true },
      control: 'text',
    },
    svgPath: {
      table: { disable: true },
    },
    // Events
    onClose: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Card.Alert>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultText =
  'Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.';

const defaultArgs = {
  children: defaultText,
  variant: statusArr[1],
  title: 'Merknad',
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
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const cardNote = canvas.getAllByRole('generic')[1];
    await expect(cardNote).toHaveAttribute('id', 'htmlId');
    await expect(cardNote).toHaveClass('dummyClassname');
    await expect(cardNote).toHaveAttribute('lang', 'en');
    await expect(cardNote).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithSvgPath = {
  name: 'With custom icon, children and title (A7)',
  args: {
    ...defaultArgs,
    svgPath: SkattetrekkSVGpath,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
} satisfies Story;

const variantsArr: CardAlertVariant[] = ['info', 'warning', 'danger'];
const TemplateAllVariants: StoryFn<typeof Card> = (args) => (
  <Card>
    {variantsArr.map((variant, index) => {
      return (
        <Card.Alert
          title={defaultArgs.title}
          {...args}
          key={`card_${index}`}
          className={'bottomSpacingXL'}
          variant={variant}
        >
          <Card.Content>{args.children}</Card.Content>
        </Card.Alert>
      );
    })}
  </Card>
);

export const AllVariants = {
  render: TemplateAllVariants,
  name: 'All Variants (A7)',
  args: {
    ...defaultArgs,
  },
} satisfies Story;

export const WithOnClose = {
  name: 'With OnClose',
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
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const closeButton = canvas.getByRole('button');
    await userEvent.click(closeButton);
    await waitFor(() => {
      expect(
        canvas.queryByText('Avvist av kortutsteder')
      ).not.toBeInTheDocument();
    });
  },
} satisfies Story;
