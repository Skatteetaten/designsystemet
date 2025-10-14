import { StoryFn, Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Link } from '@skatteetaten/ds-buttons';
import { WordInfo } from '@skatteetaten/ds-overlays';
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
    children: { control: false, table: { disable: true } },
    disableAutoDismiss: { table: { disable: true } },
    isOpen: { table: { disable: true } },
    position: { table: { disable: true } },
    shouldRestoreFocus: { table: { disable: true } },
    // Event
    onClose: { table: { disable: true } },
  },
  render: Template,
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof WordInfo>;
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
      pseudoStates: ['hover', 'focus-visible', 'active'],
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
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const term = canvas.getByText(defaultText);
    await expect(term).toBeInTheDocument();
    await expect(term).toHaveAttribute('aria-expanded', 'true');
    const content = canvas.getByText(defaultContent);
    await expect(content).toBeInTheDocument();
    await expect(content.tagName.toLowerCase()).toBe('span');
  },
} satisfies Story;

const TemplateWithParagraph: StoryFn<typeof WordInfo> = () => (
  <Paragraph>
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
  </Paragraph>
);

export const WithinParagraph = {
  name: 'Within Paragraph (A4)',
  render: TemplateWithParagraph,
  args: {},
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active'],
    },
  },
} satisfies Story;

const TemplateWithHeading: StoryFn<typeof WordInfo> = () => (
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

export const WithinHeading = {
  name: 'Within Heading (A4)',
  render: TemplateWithHeading,
  args: {},
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active'],
    },
  },
} satisfies Story;

const TemplateWithLink: StoryFn<typeof WordInfo> = () => (
  <Paragraph>
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
    {'. Du trenger ikke å melde noe selv til '}
    <Link href={'#'}>{'Folkeregisteret'}</Link>
    {'.'}
  </Paragraph>
);

export const ParagraphWithLinkAndWordInfo = {
  name: 'Paragraph with Link and WordInfo',
  render: TemplateWithLink,
  args: {},
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'focus-visible', 'active'],
    },
  },
} satisfies Story;
