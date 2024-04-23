import { MouseEvent } from 'react';

import { Accordion, AccordionItemProps } from '@skatteetaten/ds-collections';
import { headingAsArr } from '@skatteetaten/ds-core-utils';
import { PersonSVGpath } from '@skatteetaten/ds-icons';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fireEvent, userEvent, waitFor, within } from '@storybook/test';

import { wrapper } from './testUtils/storybook.testing.utils';

const elementId = 'htmlId';
const defaultTitle = 'Meg selv';
const defaultContent =
  'Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.';

const meta = {
  component: Accordion.Item,
  title: 'Tester/Accordion/Accordion/Item',
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
    isExpanded: { table: { disable: true } },
    svgPath: { table: { disable: true } },
    titleAs: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: { disable: true },
    },
    title: { table: { disable: true } },
    subtitle: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
} satisfies Meta<typeof Accordion.Item>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateWithOnClick: StoryFn<typeof Accordion.Item> = (args) => {
  return (
    <Accordion.Item
      {...args}
      onClick={(e: MouseEvent<HTMLButtonElement>): void => {
        args.onClick?.(e);
      }}
    >
      {args.children}
    </Accordion.Item>
  );
};

const TemplateWithAllHeadings: StoryFn<typeof Accordion.Item> = (args) => (
  <>
    {headingAsArr.map((headingLevel, item) => {
      return (
        <Accordion.Item
          key={`level_${item}`}
          {...args}
          titleAs={headingLevel}
          title={`Heading ${headingLevel}`}
        >
          {args.children}
        </Accordion.Item>
      );
    })}
  </>
);

const defaultArgs: AccordionItemProps = {
  title: defaultTitle,
  children: defaultContent,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLButtonElement | null): void => {
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
    await expect(canvas.getByRole('button')).toHaveAttribute(
      'id',
      'dummyIdForwardedFromRef'
    );
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
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
    const button = canvas.getByRole('button');
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('id', elementId);
    await expect(button).toHaveAttribute('lang', 'nb');
    await expect(button).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A2, B1)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    title: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} button`,
      hover: `${wrapper} button`,
      click: `${wrapper} button`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', 'button');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    const title = canvas.getByText(defaultTitle);
    await expect(title).toBeInTheDocument();
    const content = canvas.queryByText(defaultContent);
    await expect(content).not.toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    const svg = button.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
  },
} satisfies Story;

export const WithCustomIcon = {
  name: 'With Custom Icon (A9)',
  args: {
    ...defaultArgs,
    svgPath: PersonSVGpath,
  },
  parameters: {
    imageSnapshot: {
      disable: false,
    },
  },
} satisfies Story;

export const IsExpanded = {
  name: 'With IsExpanded (A4 delvis)',
  args: {
    ...defaultArgs,
    isExpanded: true,
  },
  argTypes: {
    isExpanded: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const content = await canvas.findByText(defaultContent);
    await expect(content).toBeInTheDocument();
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  },
} satisfies Story;

export const WithOnClick = {
  render: TemplateWithOnClick,
  name: 'With OnClick (A4 delvis, B1 delvis)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(button);
    const content = canvas.getByText(defaultContent);
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(content).toBeInTheDocument();
    await fireEvent.click(button);
    await expect(content).not.toBeInTheDocument();
    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(2));
  },
} satisfies Story;

export const PersistFocusOnClick = {
  render: TemplateWithOnClick,
  name: 'Persist Focus On Click (C1))',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await fireEvent.focus(button);

    const user = userEvent.setup();
    await user.tab();
    await user.keyboard('{Space}');
    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(button.matches(':focus')).toBe(true);
    });
  },
} satisfies Story;

export const WithTitleAs = {
  render: TemplateWithAllHeadings,
  name: 'With TitleAs (B2)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const headings = canvas.getAllByRole('heading');
    for (const [index, heading] of headings.entries()) {
      await expect(heading.tagName).toBe(
        headingAsArr[index].toLocaleUpperCase()
      );
    }
  },
} satisfies Story;
