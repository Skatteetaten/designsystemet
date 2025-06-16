import { JSX } from 'react';

import { useArgs } from 'storybook/preview-api';
import { StoryObj, Meta } from '@storybook/react';
import {
  fn,
  expect,
  fireEvent,
  waitFor,
  within,
  userEvent,
} from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import {
  Pagination,
  getDefaultPageSize,
  getDefaultSibling,
} from '@skatteetaten/ds-navigation';
import { List } from '@skatteetaten/ds-typography';

const meta = {
  component: Pagination,
  title: 'Tester/Pagination',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    currentPage: { table: { disable: true } },
    defaultCurrent: { table: { disable: true } },
    pageSize: { table: { disable: true } },
    totalItems: { table: { disable: true } },
    sibling: { table: { disable: true } },
    hidePrevNextButtonTitle: { table: { disable: true } },
    hidePageSummary: { table: { disable: true }, control: false },
    ariaLabel: { table: { disable: true } },
    // Event
    onChange: { table: { disable: true } },
  },
  args: {
    defaultCurrent: undefined,
    currentPage: undefined,
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  pageSize: getDefaultPageSize(),
  totalItems: 70,
  sibling: getDefaultSibling(),
  onChange: fn(),
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    defaultCurrent: 1,
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
    defaultCurrent: 1,
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
    defaultCurrent: 1,
    totalItems: 15,
  },
} satisfies Story;

export const HidePrevNextButtonTitle = {
  name: 'Hide Prev/Next-button Title (A1)',
  args: {
    ...defaultArgs,
    defaultCurrent: 1,
    hidePrevNextButtonTitle: true,
  },
  argTypes: {
    hidePrevNextButtonTitle: { table: { disable: false } },
  },
} satisfies Story;

export const WithTextNextPref: Story = {
  name: 'With Prev Next Text (A2)',
  args: {
    ...defaultArgs,
    defaultCurrent: 2,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const nextButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_navigation:pagination.NextButtonTitle'),
    });
    await expect(nextButton).toBeInTheDocument();
    const previousButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_navigation:pagination.PreviousButtonTitle'),
    });
    await expect(previousButton).toBeInTheDocument();
  },
} satisfies Story;

export const WithListLength: Story = {
  name: 'With List Length (A3)',
  args: {
    ...defaultArgs,
    pageSize: 4,
    defaultCurrent: 1,
  },
  argTypes: {
    pageSize: { table: { disable: false } },
  },
  play: async ({ canvasElement, step }): Promise<void> => {
    const canvas = within(canvasElement);
    const paginationStatus = canvas.getByText('Viser 1–4 av 70');
    await expect(paginationStatus).toBeInTheDocument();
    const nextButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_navigation:pagination.NextButtonTitle'),
    });
    await fireEvent.click(nextButton);
    await step(
      'Antall elementer på side er satt til 4 i testen. Beregnet verdier er nå økt og pageSummary viser dette',
      async () => {
        const paginationStatusNextPage = canvas.getByText('Viser 5–8 av 70'); // Tankestrek
        await expect(paginationStatusNextPage).toBeInTheDocument();
      }
    );
    await fireEvent.click(nextButton);
    await step('Test 9-12', async () => {
      const paginationStatusNextPage = canvas.getByText('Viser 9–12 av 70'); // Tankestrek
      await expect(paginationStatusNextPage).toBeInTheDocument();
    });
  },
} satisfies Story;

export const Sibling = {
  name: 'Width Sibling (A4)',
  args: {
    ...defaultArgs,
    defaultCurrent: 3,
    sibling: 2,
  },
  argTypes: {
    sibling: { table: { disable: false } },
    defaultCurrent: { table: { disable: false } },
  },
  play: async ({ canvasElement, step }): Promise<void> => {
    const canvas = within(canvasElement);
    await step('Sjekker om knapper med verdi 1,2,4,5 eksisterer', async () => {
      const pageButtons = canvas.getAllByRole('button', {
        name: /\d/,
        current: false,
      });
      const pages = pageButtons.map((button) => button.textContent);
      await expect(pages).toEqual(expect.arrayContaining(['1', '2', '4', '5']));
    });
  },
} satisfies Story;

export const WithNavigation: Story = {
  name: 'With Navigation (A7, B2 delvis)',
  args: {
    ...defaultArgs,
    defaultCurrent: 2,
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement, args, step }): Promise<void> => {
    const canvas = within(canvasElement);
    await step('Klikk på side 7-knappen', async () => {
      const pageButton = canvas.getByRole('button', {
        name: '7',
      });
      await fireEvent.click(pageButton);
      await waitFor(() => expect(args.onChange).toHaveBeenCalledWith(7));
      const currentButton = canvas.getByRole('button', {
        name: '7',
      });
      await expect(currentButton).toHaveAttribute('aria-current', 'true');
    });
    await step('Klikk på forrige-knappen', async () => {
      const previousButton = canvas.getByRole('button', {
        name: dsI18n.t('ds_navigation:pagination.PreviousButtonTitle'),
      });
      await fireEvent.click(previousButton);
      await waitFor(() => expect(args.onChange).toHaveBeenCalledWith(6));
      const currentButton = canvas.getByRole('button', {
        name: '6',
      });
      await expect(currentButton).toHaveAttribute('aria-current', 'true');
    });
    await step('Klikk på neste-knappen', async () => {
      const nextButton = canvas.getByRole('button', {
        name: dsI18n.t('ds_navigation:pagination.NextButtonTitle'),
      });
      await fireEvent.click(nextButton);
      await waitFor(() => expect(args.onChange).toHaveBeenCalledWith(7));
      const currentButton = canvas.getByRole('button', {
        name: '7',
      });
      await expect(currentButton).toHaveAttribute('aria-current', 'true');
    });
  },
} satisfies Story;

export const WithPrevNextLabel: Story = {
  name: 'PrevNext Alternative Label (B5)',
  args: {
    ...defaultArgs,
    defaultCurrent: 1,
    hidePrevNextButtonTitle: true,
  },
  argTypes: {
    hidePrevNextButtonTitle: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement, args }): Promise<void> => {
    const canvas = within(canvasElement);
    const nextButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_navigation:pagination.NextButtonTitle'),
    });
    await expect(nextButton).toBeInTheDocument();
    await fireEvent.click(nextButton);
    await expect(args.onChange).toHaveBeenCalled();
    const previousButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_navigation:pagination.PreviousButtonTitle'),
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

type DataList = typeof data;

const listWithLimit = (
  data: DataList,
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
  name: 'With List Limit (A6, B3)',
  args: {
    pageSize: 6,
    totalItems: data.length * 7,
    sibling: getDefaultSibling(),
    currentPage: 1,
  },
  render: (args): JSX.Element => {
    const [{ currentPage }, updateArgs] = useArgs();
    const pageSize = 5;
    const onChange = (page: number): void => {
      updateArgs({ currentPage: page });
    };

    return (
      <>
        <List hasSpacing>
          {listWithLimit(
            data.concat(data, data, data, data, data, data),
            currentPage,
            pageSize
          )}
        </List>
        <Pagination
          {...args}
          pageSize={pageSize}
          currentPage={currentPage}
          onChange={onChange}
        />
      </>
    );
  },
} satisfies Story;

export const WithCustomAriaLabel: Story = {
  name: 'With Custom Aria Label (B1 delvis)',
  args: {
    ...defaultArgs,
    ariaLabel: 'Egen tekst på nav-elementets aria-label',
    defaultCurrent: 1,
  },
  argTypes: {
    ariaLabel: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const nav = canvas.getByRole('navigation');
    await expect(nav).toHaveAttribute(
      'aria-label',
      'Egen tekst på nav-elementets aria-label'
    );
  },
} satisfies Story;

export const WithPageSummary: Story = {
  name: 'With Page Summary (A6)',
  args: {
    ...defaultArgs,
    defaultCurrent: 1,
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    // Antall elementer på side OG antall sider representert med siste page-button
    const paginationStatus = canvas.getByText('Viser 1–10 av 70');
    await expect(paginationStatus).toBeInTheDocument();
  },
} satisfies Story;

export const WithHiddenPageSummary: Story = {
  name: 'With Page Summary Hidden (A5)',
  args: {
    ...defaultArgs,
    hidePageSummary: true,
    defaultCurrent: 1,
  },
  argTypes: {
    hidePageSummary: { table: { disable: false } },
  },
  play: async ({ canvasElement, step }): Promise<void> => {
    const canvas = within(canvasElement);
    await step(
      'Summary er skjult for bruker, men synlig for skjermleser',
      async () => {
        const paginationStatus = canvas.getByText('Viser 1–10 av 70');
        await expect(paginationStatus).toBeInTheDocument();
        await expect(paginationStatus).toHaveStyle({ width: '1px' });
      }
    );
  },
} satisfies Story;

export const WithControlled: Story = {
  parameters: {
    imageSnapshot: { disable: true },
  },
  args: { totalItems: 30, sibling: 1, pageSize: 5, currentPage: 1 },
  argTypes: {
    currentPage: { table: { disable: false } },
  },
  play: async ({ canvasElement, args }): Promise<void> => {
    const canvas = within(canvasElement);
    // Antall elementer på side OG antall sider representert med siste page-button
    const paginationStatus = canvas.getByText('Viser 1–5 av 30');
    await expect(paginationStatus).toBeInTheDocument();
    const nextButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_navigation:pagination.NextButtonTitle'),
    });
    await userEvent.click(nextButton);
    await waitFor(() => expect(args.onChange).toHaveBeenCalled);
    const currentButton = await canvas.findByRole('button', {
      name: '2',
      current: true,
    });
    await expect(currentButton).toBeInTheDocument();
  },
  render: (args): JSX.Element => {
    const [{ currentPage }, setPage] = useArgs();
    const onChange = (page: number): void => {
      setPage({ currentPage: page });
    };
    return (
      <Pagination {...args} currentPage={currentPage} onChange={onChange} />
    );
  },
} satisfies Story;
