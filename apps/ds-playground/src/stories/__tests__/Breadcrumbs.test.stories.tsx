import { useState } from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Breadcrumbs } from '@skatteetaten/ds-navigation';
import { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, waitFor, within } from '@storybook/test';

const elementId = 'htmlId';

const meta = {
  component: Breadcrumbs,
  title: 'Tester/Breadcrumbs/Breadcrumbs',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
  },
  args: {
    children: (
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>
            {'Bedrift og organisasjon'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>{'Avgifter'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>
            {'Avgifter på bil og kjøretøy'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item isCurrentPage>
          <Breadcrumbs.Link href={'#'}>{'Vektårsavgift'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    ),
  },
} satisfies Meta<typeof Breadcrumbs>;
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
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('navigation');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
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
    const container = canvas.getByRole('navigation');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1, A2)',
} satisfies Story;

const breadcrumbsData = [
  { key: 'i1', href: '#', title: 'Bedrift og organisasjon' },
  { key: 'i2', href: '#', title: 'Avgifter' },
  { key: 'i3', href: '#', title: 'Avgifter på bil og kjøretøy' },
  { key: 'i4', href: '#', title: 'Vektårsavgift' },
  { key: 'i5', href: '#', title: 'VH89236' },
  { key: 'i6', href: '#', title: 'Bla bla bla' },
  { key: 'i7', href: '#', title: 'En siste link' },
];

const DefaultTemplate = (): JSX.Element => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.List>
        {breadcrumbsData.map((item, index) => (
          <Breadcrumbs.Item
            key={item.key}
            isCurrentPage={index === breadcrumbsData.length - 1}
          >
            <Breadcrumbs.Link href={item.href}>{item.title}</Breadcrumbs.Link>
          </Breadcrumbs.Item>
        ))}
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
};

const WithoutCollapseTemplate = (): JSX.Element => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.List shouldCollapse={false}>
        {breadcrumbsData.map((item, index) => (
          <Breadcrumbs.Item
            key={item.key}
            isCurrentPage={index === breadcrumbsData.length - 1}
          >
            <Breadcrumbs.Link href={item.href}>{item.title}</Breadcrumbs.Link>
          </Breadcrumbs.Item>
        ))}
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
};

export const WithCollapsed = {
  name: 'With Collapse (A1)',
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
  },
  render: DefaultTemplate,
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const expandButton = await canvas.findByRole('button');
    await expect(expandButton).toBeInTheDocument();
    const listItems = canvas.getAllByRole('listitem');
    await expect(listItems.length).toEqual(3);
  },
} satisfies Story;

export const WithAriaLabel = {
  name: 'With AriaLabel (B1)',
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  render: WithoutCollapseTemplate,
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const nav = canvas.getByRole('navigation');
    await expect(nav).toHaveAttribute(
      'aria-label',
      dsI18n.t('ds_navigation:breadcrumbs.NavAriaLabel')
    );
  },
} satisfies Story;

export const WithoutCollapse = {
  name: 'Without Collapse (A2)',
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
  },
  render: WithoutCollapseTemplate,
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const listItems = canvas.getAllByRole('listitem');
    await expect(listItems.length).toEqual(breadcrumbsData.length);
  },
} satisfies Story;

export const WithExpandClickAndFocus = {
  name: 'With Expand Click And Focus(A4 delvis, C1)',
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
  },
  render: DefaultTemplate,
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const expandButton = await canvas.findByRole('button');
    await expect(expandButton).toBeInTheDocument();
    await fireEvent.click(expandButton);
    await expect(expandButton).not.toBeInTheDocument();
    const firstLink = canvas.getAllByRole('link')[0];
    await waitFor(() => {
      expect(firstLink).toHaveFocus();
    });
  },
} satisfies Story;

export const WithNavigation = {
  name: 'With Navigation',
  parameters: {
    imageSnapshot: { disable: true },
    viewport: {
      defaultViewport: '--mobile',
    },
  },
  render: (): JSX.Element => {
    const [breadcrumbs, setBreadcrumbs] = useState(breadcrumbsData);

    const handleNavigation = (item: (typeof breadcrumbs)[number]): void => {
      setBreadcrumbs((prevBreadcrumbs) =>
        prevBreadcrumbs.slice(0, breadcrumbs.indexOf(item) + 1)
      );
    };

    const lastItemKey = breadcrumbs[breadcrumbs.length - 1].key;

    return (
      <Breadcrumbs>
        <Breadcrumbs.List>
          {breadcrumbs.map((item) => (
            <Breadcrumbs.Item
              key={item.key}
              isCurrentPage={item.key === lastItemKey}
            >
              <Breadcrumbs.Link
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item);
                }}
              >
                {item.title}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
          ))}
        </Breadcrumbs.List>
      </Breadcrumbs>
    );
  },
} satisfies Story;
