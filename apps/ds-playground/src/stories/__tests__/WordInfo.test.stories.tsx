import { StoryFn, Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Popover, WordInfo } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

const defaultText = 'arkskrift';
const defaultContent = 'En arkskrift er en skrift som er skrevet på et ark.';
const Template: StoryFn<typeof WordInfo> = (args) => (
  <WordInfo {...args}>
    <WordInfo.Trigger>{defaultText}</WordInfo.Trigger>
    <WordInfo.Content>{defaultContent}</WordInfo.Content>
  </WordInfo>
);

const meta = {
  component: WordInfo,
  title: 'Tester/WordInfo',
  argTypes: {
    // Baseprops
    // @ts-expect-error disable baseprops gir error fordi denne komponenten ikke støtter baseprops, men de skal disables alikevel
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    disableAutoDismiss: { table: { disable: true } },
    disableAutoDismissOnMobile: { table: { disable: true } },
    isOpen: { table: { disable: true } },
    position: { table: { disable: true } },
    shouldRestoreFocus: { table: { disable: true } },
    // Event
    onClose: { table: { disable: true } },
  },
  render: Template,
  tags: ['test'],
} satisfies Meta<typeof Popover>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Defaults = {
  name: 'Defaults (A1)',
  args: {},
  argTypes: {
    children: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: false,
      pseudoStates: ['hover', 'focus', 'active'],
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const text = canvas.getByText(defaultText);
    await expect(text).toBeInTheDocument();
  },
} satisfies Story;

export const IsOpen = {
  name: 'IsOpen (A2)',
  args: {
    isOpen: true,
  },
  argTypes: {
    isOpen: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const term = canvas.getByText(defaultText);
    await expect(term).toBeInTheDocument();
    await expect(term).toHaveAttribute('aria-expanded', 'true');
  },
} satisfies Story;

const TemplateWithText: StoryFn<typeof WordInfo> = () => (
  <Heading as={'h2'} level={2}>
    {'Det er legen som melder dødsfall i Norge til '}
    <WordInfo>
      <WordInfo.Trigger>{'Folkeregisteret'}</WordInfo.Trigger>
      <WordInfo.Content>
        <Heading as={'h3'} level={4}>
          {'Folkeregisteret'}
        </Heading>
        <Paragraph>{'Forklaring på Folkeregisteret'}</Paragraph>
      </WordInfo.Content>
    </WordInfo>
    {'. Du trenger ikke å melde noe selv.'}
  </Heading>
);

export const WithinText = {
  name: 'Within Text (A4)',
  render: TemplateWithText,
  args: {
    isOpen: true,
  },
  argTypes: {
    isOpen: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: false,
    },
    pseudoStates: ['hover', 'focus', 'active'],
  },
} satisfies Story;
