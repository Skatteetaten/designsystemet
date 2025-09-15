import { MouseEvent, useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, fireEvent, within, waitFor, fn } from 'storybook/test';

import { OpenClose, OpenCloseProps } from '@skatteetaten/ds-collections';
import { headingAsArr } from '@skatteetaten/ds-core-utils';

import { wrapper } from './testUtils/storybook.testing.utils';

const elementId = 'htmlId';
const defaultTitle = 'Er jeg pendler?';
const defaultContent =
  'En pendler er en lønnstaker som overnatter borte på grunn av jobb. Hvis du er pendler kan du ha krav på fradrag for ' +
  'dine merkostnader til kost, losji og reiser til og fra pendlerboligen.';
const unchangedTitle = 'OpenClose har ikke blitt åpnet';
const changedTitle = 'OpenClose har blitt åpnet';

const meta = {
  component: OpenClose,
  title: 'Tester/OpenClose',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    variant: {
      table: { disable: true },
      control: 'inline-radio',
    },
    iconPosition: { table: { disable: true } },
    isExpanded: { table: { disable: true } },
    isDefaultExpanded: { table: { disable: true } },
    isOnClickOnlyFiredOnOpen: { table: { disable: true } },
    titleAs: {
      control: 'inline-radio',
      table: { disable: true },
    },
    title: { table: { disable: true } },
    showUnderline: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof OpenClose>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateWithOnClick: StoryFn<typeof OpenClose> = (args) => {
  return (
    <OpenClose
      {...args}
      onClick={(e: MouseEvent<HTMLButtonElement>): void => {
        args.onClick?.(e);
      }}
    >
      {}
      {args.children}
    </OpenClose>
  );
};

const TemplateWithChangingTitle: StoryFn<typeof OpenClose> = (args) => {
  const [title, setTitle] = useState(unchangedTitle);
  return (
    <OpenClose
      {...args}
      title={title}
      onClick={(_e: MouseEvent<HTMLButtonElement>): void => {
        setTitle(changedTitle);
      }}
    >
      {}
      {args.children}
    </OpenClose>
  );
};

const TemplateWithAllHeadings: StoryFn<typeof OpenClose> = (args) => (
  <>
    {headingAsArr.map((headingLevel, item) => {
      return (
        <OpenClose
          key={`level_${item}`}
          {...args}
          titleAs={headingLevel}
          title={`Heading ${headingLevel}`}
        >
          {}
          {args.children}
        </OpenClose>
      );
    })}
  </>
);

const defaultArgs: OpenCloseProps = {
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
    const wrapper = canvas.getAllByRole('generic')[1];
    await expect(wrapper).toHaveClass('dummyClassname');
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

    const svg = button.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
  },
} satisfies Story;

export const WithIconRight = {
  name: 'With Icon Right (A2)',
  args: {
    ...defaultArgs,
    iconPosition: 'right',
  },
  argTypes: {
    iconPosition: { table: { disable: false } },
  },
} satisfies Story;

const TemplateWithContext: StoryFn<typeof OpenClose> = (args) => (
  <>
    <div>
      {'I Skatteetaten definerer vi om du er pendler ut fra at en rekke vilkår må være oppfylt. For å få fradragene må du ' +
        'blant annet være lønnstaker og overnatte borte på grunn av jobb. Pendlerfradrag gis kun for reiseutgifter som du selv (pendleren) ' +
        'har for å besøke hjemmet ditt, ikke for familie som kommer på besøk til din pendlerbolig.'}
    </div>
    <OpenClose {...args}>
      {}
      {args.children}
    </OpenClose>
  </>
);

export const InContext = {
  render: TemplateWithContext,
  name: 'In Context (A1 delvis)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
} satisfies Story;

export const WithoutUnderline = {
  name: 'Without Underline (A3)',
  args: {
    ...defaultArgs,
    showUnderline: false,
  },
  argTypes: {
    showUnderline: { table: { disable: false } },
  },
} satisfies Story;

export const WithIconRightAndNoUnderline = {
  name: 'With Icon Right And No Underline (A2, A3)',
  args: {
    ...defaultArgs,
    iconPosition: 'right',
    showUnderline: false,
  },
  argTypes: {
    iconPosition: { table: { disable: false } },
    showUnderline: { table: { disable: false } },
  },
} satisfies Story;

export const Compact = {
  name: 'Compact (A1 delvis)',
  args: {
    ...defaultArgs,
    variant: 'compact',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
} satisfies Story;

export const CompactWithIconRight = {
  name: 'Compact With Icon Right (A1 delvis, A2)',
  args: {
    ...defaultArgs,
    variant: 'compact',
    iconPosition: 'right',
  },
  argTypes: {
    variant: { table: { disable: false } },
    iconPosition: { table: { disable: false } },
  },
} satisfies Story;

export const CompactWithUnderline = {
  name: 'Compact With Underline (A1 delvis, A3)',
  args: {
    ...defaultArgs,
    variant: 'compact',
    showUnderline: true,
  },
  argTypes: {
    variant: { table: { disable: false } },
    showUnderline: { table: { disable: false } },
  },
} satisfies Story;

export const CompactWithIconRightAndUnderline = {
  name: 'Compact With Icon Right And Underline (A1 delvis, A2, A3)',
  args: {
    ...defaultArgs,
    variant: 'compact',
    iconPosition: 'right',
    showUnderline: true,
  },
  argTypes: {
    variant: { table: { disable: false } },
    iconPosition: { table: { disable: false } },
    showUnderline: { table: { disable: false } },
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

export const CompactAndIsExpanded = {
  name: 'With Compact And IsExpanded (A4 delvis)',
  args: {
    ...defaultArgs,
    isExpanded: true,
    variant: 'compact',
  },
  argTypes: {
    isExpanded: { table: { disable: false } },
    variant: { table: { disable: false } },
  },
} satisfies Story;

export const IconRightContent = {
  name: 'With IsExpanded And Icon Right (A1 delvis)',
  args: {
    ...defaultArgs,
    isExpanded: true,
    iconPosition: 'right',
  },
  argTypes: {
    isExpanded: { table: { disable: false } },
    iconPosition: { table: { disable: false } },
  },
} satisfies Story;

export const WithOnClick = {
  render: TemplateWithOnClick,
  name: 'With OnClick (A4 delvis, B1 delvis)',
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
    await expect(content).toBeInTheDocument();
    await fireEvent.click(button);
    await expect(content).not.toBeInTheDocument();
    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(2));
  },
} satisfies Story;

export const WithIsOnClickOnlyFiredOnOpen = {
  render: TemplateWithOnClick,
  name: 'With IsOnClickOnlyFiredOnOpen (A4 delvis)',
  args: {
    ...defaultArgs,
    isOnClickOnlyFiredOnOpen: true,
    onClick: fn(),
  },
  argTypes: {
    isOnClickOnlyFiredOnOpen: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await fireEvent.click(button);
    await fireEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(1));
  },
} satisfies Story;

export const WithChangingTitle = {
  render: TemplateWithChangingTitle,
  name: 'With Changing Title (A4 delvis)',
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
    const oldTitle = canvas.getByText(unchangedTitle);
    await expect(oldTitle).toBeInTheDocument();
    await fireEvent.click(button);
    const newTitle = canvas.getByText(changedTitle);
    await expect(newTitle).toBeInTheDocument();
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

export const WithLongTitle = {
  name: 'With Long Title (A1 delvis)',
  args: {
    ...defaultArgs,
    title:
      'Denneknappenharenveldiglangtekst.Dentekstengåroverflerelinjerfordidenersålangogdablirikonetriktigplassert.' +
      'Fordetkanjoskjeattittelengåroverflerelinjerhvisdeterenveldiglitenskjerm.Sådamåvisjekkeatdetikkeserrartut.',
  },
  argTypes: {
    title: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const IsDefaultExpanded = {
  name: 'With IsDefaultExpanded',
  args: {
    ...defaultArgs,
    isDefaultExpanded: true,
  },
  argTypes: {
    isDefaultExpanded: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const content = await canvas.findByText(defaultContent);
    await expect(content).toBeInTheDocument();
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  },
} satisfies Story;
