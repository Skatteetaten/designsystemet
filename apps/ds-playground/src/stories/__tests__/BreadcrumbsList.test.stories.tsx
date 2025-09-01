import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

const elementId = 'htmlId';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('list')).toHaveAttribute(
      attribute,
      expectedValue
    );
  };

const meta = {
  component: Breadcrumbs.List,
  title: 'Tester/Breadcrumbs/List',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    shouldCollapse: { table: { disable: true } },
    showLastItemAsCurrentPage: { table: { disable: true } },
  },
  args: {
    children: [
      <Breadcrumbs.Item key={'i1'}>
        <Breadcrumbs.Link href={'#'}>
          {'Bedrift og organisasjon'}
        </Breadcrumbs.Link>
      </Breadcrumbs.Item>,
      <Breadcrumbs.Item key={'i2'}>
        <Breadcrumbs.Link href={'#'}>{'Avgifter'}</Breadcrumbs.Link>
      </Breadcrumbs.Item>,
      <Breadcrumbs.Item key={'i3'}>
        <Breadcrumbs.Link href={'#'}>
          {'Avgifter på bil og kjøretøy'}
        </Breadcrumbs.Link>
      </Breadcrumbs.Item>,
      <Breadcrumbs.Item key={'i4'}>
        <Breadcrumbs.Link href={'#'}>{'Vektårsavgift'}</Breadcrumbs.Link>
      </Breadcrumbs.Item>,
    ],
  },
  tags: ['test'],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
} satisfies Meta<typeof Breadcrumbs.List>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
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
    chromatic: { disableSnapshot: true },
  },
  play: verifyAttribute('id', 'dummyIdForwardedFromRef'),
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes(FA2-5)',
  args: {
    id: elementId,
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
    const container = canvas.getByRole('list');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithoutIsShowLastItemAsCurrentPage = {
  name: 'Without Show Last Item As Current Page (B3)',
  args: {
    showLastItemAsCurrentPage: false,
  },
  argTypes: { showLastItemAsCurrentPage: { table: { disable: false } } },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const listItems = canvas.getAllByRole('listitem');
    const lastItem = listItems[listItems.length - 1];
    await expect(lastItem).not.toHaveAttribute('aria-current', 'page');
  },
} satisfies Story;
