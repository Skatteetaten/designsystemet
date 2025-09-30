import { MouseEvent, JSX, useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import {
  expect,
  fireEvent,
  fn,
  userEvent,
  waitFor,
  within,
} from 'storybook/test';

import { Accordion, AccordionItemProps } from '@skatteetaten/ds-collections';
import { headingAsArr } from '@skatteetaten/ds-core-utils';
import { Checkbox } from '@skatteetaten/ds-forms';
import { PersonSVGpath } from '@skatteetaten/ds-icons';

const elementId = 'htmlId';
const defaultTitle = 'Meg selv';
const defaultSubtitle = 'Beskrivelse';
const defaultContent =
  'Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.';

const meta = {
  component: Accordion.Item,
  title: 'Tester/Accordion/Item',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    classNames: { table: { disable: true } },
    children: { table: { disable: true } },
    isExpanded: { table: { disable: true } },
    isDefaultExpanded: { table: { disable: true } },
    keepMounted: { table: { disable: true } },
    svgPath: { table: { disable: true } },
    titleAs: { table: { disable: true } },
    title: { table: { disable: true } },
    subtitle: { table: { disable: true } },
    // Events
    onClick: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
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
    imageSnapshot: { disableSnapshot: true },
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
  parameters: {
    a11y: {
      test: 'off',
    },
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
      pseudoStates: ['hover', 'focus', 'active'],
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
    await expect(content).not.toBeVisible();

    const svg = button.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
  },
} satisfies Story;

export const WithCustomClassNames = {
  name: 'With Custom ClassNames (FA3, A10)',
  args: {
    ...defaultArgs,
    subtitle: defaultSubtitle,
    isExpanded: true,
    classNames: {
      container: 'dummyClassname',
      title: 'dummyClassname',
      subtitle: 'dummyClassname',
      content: 'dummyClassname',
    },
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const container = canvas.getByRole('button');
    const title = canvas.getByText(defaultTitle);
    const subtitle = canvas.getByText(defaultSubtitle);
    const content = canvas.getByText(defaultContent);

    await expect(container).toHaveClass('dummyClassname');
    await expect(title).toHaveClass('dummyClassname');
    await expect(subtitle).toHaveClass('dummyClassname');
    await expect(content).toHaveClass('dummyClassname');
  },
} satisfies Story;

export const WithCustomIcon = {
  name: 'With Custom Icon (A8)',
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
  name: 'With IsExpanded (A6 delvis)',
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
    await expect(content).toBeVisible();
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  },
} satisfies Story;

export const IsDefaultExpanded = {
  name: 'With IsDefaultExpanded (A6 delvis)',
  args: {
    ...defaultArgs,
    isDefaultExpanded: true,
  },
  argTypes: {
    isDefaultExpanded: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const content = await canvas.findByText(defaultContent);
    await expect(content).toBeVisible();
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  },
} satisfies Story;

export const WithOnClick = {
  render: TemplateWithOnClick,
  name: 'With OnClick (A5, B1,B2)',
  args: {
    ...defaultArgs,
    onClick: fn(),
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
    await expect(content).toBeVisible();
    await fireEvent.click(button);
    await expect(content).not.toBeVisible();
    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(2));
  },
} satisfies Story;

export const PersistFocusOnClick = {
  render: TemplateWithOnClick,
  name: 'With Persist Focus On Click (C1))',
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
    await waitFor(() => {
      expect(button.matches(':focus')).toBe(true);
    });

    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(button).toHaveFocus();
    });
  },
} satisfies Story;

export const WithLineBreak = {
  name: 'With Title Line Break (A3)',
  args: {
    ...defaultArgs,
    title: 'Tittel som\nbrekker over flere\nlinjer',
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
} satisfies Story;

export const WithTitleAs = {
  render: TemplateWithAllHeadings,
  name: 'With TitleAs (B3)',
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

const StatefulChild = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checked={isChecked}
      onChange={(e) => {
        setIsChecked(e.target.checked);
      }}
    >
      {`${isChecked ? 'Jeg er valgt' : 'Klikk meg'}`}
    </Checkbox>
  );
};

export const WithPersistedState = {
  render: function Render(): JSX.Element {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <Accordion.Item
        title={'Meg selv'}
        isExpanded={isExpanded}
        onClick={() => setIsExpanded((prevIsExpanded) => !prevIsExpanded)}
      >
        <StatefulChild />
      </Accordion.Item>
    );
  },
  name: 'With Persisted State',
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
    await userEvent.click(button);
    let checkbox = canvas.getByRole('checkbox');
    await userEvent.click(checkbox);

    await userEvent.click(button);
    await userEvent.click(button);

    checkbox = canvas.getByRole('checkbox');

    await waitFor(() => expect(checkbox).toBeChecked());
  },
} satisfies Story;

export const WithKeepMountedFalse = {
  name: 'With KeepMounted False (A11)',
  args: {
    ...defaultArgs,
    keepMounted: false,
  },
  argTypes: {
    keepMounted: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Initially content should not be in DOM when keepMounted=false and collapsed
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    let content = canvas.queryByText(defaultContent);
    await expect(content).not.toBeInTheDocument();

    // Expand accordion
    await userEvent.click(button);
    await expect(button).toHaveAttribute('aria-expanded', 'true');

    // Content should now be in DOM
    content = canvas.getByText(defaultContent);
    await expect(content).toBeInTheDocument();
    await expect(content).toBeVisible();

    // Collapse accordion
    await userEvent.click(button);
    await expect(button).toHaveAttribute('aria-expanded', 'false');

    // Content should be removed from DOM when keepMounted=false
    content = canvas.queryByText(defaultContent);
    await expect(content).not.toBeInTheDocument();
  },
} satisfies Story;
