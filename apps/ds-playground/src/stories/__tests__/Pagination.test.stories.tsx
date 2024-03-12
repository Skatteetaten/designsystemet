import {
  Pagination,
  getDefaultListLength,
  getDefaultSibling,
} from '@skatteetaten/ds-navigation';
import { List, Paragraph } from '@skatteetaten/ds-typography';
import { useArgs } from '@storybook/preview-api';
import { StoryObj, Meta } from '@storybook/react';
import { fn, expect } from '@storybook/test';
import { within, userEvent } from '@storybook/testing-library';

const meta = {
  component: Pagination,
  title: 'Tester/Pagination',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    currentPage: { table: { disable: true } },
    defaultCurrentPage: { table: { disable: true } },
    listLength: { table: { disable: true } },
    listTotalLength: { table: { disable: true } },
    sibling: { table: { disable: true } },
    hidePrevNextButtonTitle: { table: { disable: true } },
    hidePageSummary: { table: { disable: true }, control: null },
    onChange: { table: { disable: true } },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  listLength: getDefaultListLength(),
  listTotalLength: 70,
  sibling: getDefaultSibling(),
  onChange: fn(),
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    defaultCurrentPage: 1,
    ref: (instance: HTMLElement | null): void => {
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
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    defaultCurrentPage: 1,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
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
    const nav = canvas.getByRole('navigation');
    await expect(nav).toHaveAttribute('id', 'htmlId');
    await expect(nav).toHaveClass('dummyClassname');
    await expect(nav).toHaveAttribute('lang', 'nb');
    await expect(nav).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults',
  args: {
    defaultCurrentPage: 1,
    listTotalLength: 15,
  },
} satisfies Story;

export const HidePageSummary = {
  name: 'Hide Page Summary (A5)',
  args: {
    ...defaultArgs,
    defaultCurrentPage: 1,
    hidePageSummary: true,
  },
  argTypes: {
    hidePageSummary: { table: true },
  },
} satisfies Story;

export const HidePrevNextButtonTitle = {
  name: 'Hide Prev/Next-button Title (A1)',
  args: {
    ...defaultArgs,
    defaultCurrentPage: 1,
    hidePrevNextButtonTitle: true,
  },
  argTypes: {
    hidePrevNextButtonTitle: { table: true },
  },
} satisfies Story;

export const Sibling = {
  name: 'Width Sibling (A4)',
  args: {
    ...defaultArgs,
    defaultCurrentPage: 1,
    sibling: 2,
  },
  argTypes: {
    sibling: { table: true },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
} satisfies Story;

export const WithButtons: Story = {
  name: 'Button AriaCurrent (A2, B2)',
  args: {
    ...defaultArgs,
    defaultCurrentPage: 1,
  },
  argTypes: {
    sibling: { table: true },
  },
  render: function Render(args): JSX.Element {
    return <Pagination {...args} />;
  },
} satisfies Story;

export const WithPrevNextLabel: Story = {
  name: 'PrevNext Alternative Label (B5)',
  args: {
    ...defaultArgs,
    defaultCurrentPage: 1,
    hidePrevNextButtonTitle: true,
  },
  argTypes: {
    sibling: { table: true },
  },
  render: function Render(args): JSX.Element {
    return <Pagination {...args} />;
  },
  play: async ({ canvasElement, args }): Promise<void> => {
    const canvas = within(canvasElement);
    const nextButton = canvas.getByRole('button', {
      name: 'Neste',
    });
    await expect(nextButton).toBeInTheDocument();
    await userEvent.click(nextButton);
    await expect(args.onChange).toHaveBeenCalled();
    const previousButton = canvas.getByRole('button', {
      name: 'Forrige',
    });
    await expect(previousButton).toBeInTheDocument();
  },
} satisfies Story;

const data = [
  {
    navn: 'Donald Duck',
    dato: '25.03.20',
    type: 'Bruker',
  },
  {
    navn: 'Robbie Wiliams',
    dato: '25.03.15',
    type: 'Admin',
  },
  {
    navn: 'Minnie Mouse',
    dato: '12.05.18',
    type: 'Bruker',
  },
  {
    navn: 'Katy Perry',
    dato: '01.01.23',
    type: 'Admin',
  },
  {
    navn: 'Langbein',
    dato: '14.02.22',
    type: 'Bruker',
  },
  {
    navn: 'Justin Bieber',
    dato: '08.03.19',
    type: 'Bruker',
  },
];

type List = typeof data;

const listWithLimit = (
  data: List,
  start: number,
  listSize: number
): JSX.Element[] => {
  const itemStart = (start - 1) * listSize;
  return data
    .map((e, i) => {
      return (
        <List.Element key={`${e.navn}-${e.dato}`}>
          {i + 1} {e.navn}
        </List.Element>
      );
    })
    .slice(itemStart, itemStart + listSize);
};

export const WithListLimit: Story = {
  name: 'With List Limit (A3, A6, B3)',
  args: {
    listLength: 6,
    listTotalLength: data.length * 7,
    sibling: getDefaultSibling(),
    currentPage: 1,
  },
  render: (args): JSX.Element => {
    const [{ currentPage }, updateArgs] = useArgs();
    const listLength = 5;
    const onChange = (page: number): void => {
      updateArgs({ currentPage: page });
    };

    return (
      <>
        <List hasSpacing>
          {listWithLimit(
            data.concat(data, data, data, data, data, data),
            currentPage,
            listLength
          )}
        </List>
        <Pagination
          {...args}
          listLength={listLength}
          currentPage={currentPage}
          onChange={onChange}
        />
        <Paragraph>
          <Pagination
            listTotalLength={8}
            listLength={2}
            sibling={2}
            defaultCurrentPage={1}
            ariaLabel={'Second landmark'}
            onChange={onChange}
          />
        </Paragraph>
      </>
    );
  },
} satisfies Story;

export const WithMultiple: Story = {
  name: 'With Focus (A6, A7, B1, B2, B4)',
  args: {
    ...defaultArgs,
    defaultCurrentPage: 1,
  },
  render: function Render(args): JSX.Element {
    return <Pagination {...args} />;
  },
} satisfies Story;
