import { headingAsArr } from '@skatteetaten/ds-core-utils';
import {
  Heading,
  HeadingProps,
  headingLevelArr,
} from '@skatteetaten/ds-typography';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { wrapper } from './testUtils/storybook.testing.utils';

const meta = {
  component: Heading,
  title: 'Tester/Heading',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
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
    hasSpacing: { table: { disable: true } },
    as: {
      table: { disable: true },
    },
    level: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;

const headingAsTest = 'h2';
const defaultArgs: HeadingProps = {
  as: headingAsTest,
  level: 2,
  children: 'Dette er en heading',
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLHeadingElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: { imageSnapshot: { disable: true } },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
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
    const heading = canvas.getByRole('heading');
    await expect(heading).toHaveClass('dummyClassname');
    await expect(heading).toHaveAttribute('id', 'htmlId');
    await expect(heading).toHaveAttribute('lang', 'nb');
    await expect(heading).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

const TemplateWithAllLevels: StoryFn<typeof Heading> = (args) => (
  <>
    {headingLevelArr.map((headingLevel, item) => {
      return (
        <Heading key={`level_${item}`} {...args} level={headingLevel}>
          {`Heading level ${headingLevel}`}
        </Heading>
      );
    })}
  </>
);

export const Defaults = {
  render: TemplateWithAllLevels,
  name: 'Defaults All Levels (A1, A2)',
  args: {
    ...defaultArgs,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const headings = canvas.getAllByRole('heading', { level: 2 });
    for (const [index, heading] of headings.entries()) {
      await expect(heading).toBeInTheDocument();
      await expect(heading.classList.toString()).toContain(
        `Heading_heading_level${headingLevelArr[index]}`
      );
    }
  },
} satisfies Story;

export const DefaultsMobile = {
  render: TemplateWithAllLevels,
  name: 'Defaults All Levels On Small Screen (A1, A2)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const LevelsWithSpacing = {
  render: TemplateWithAllLevels,
  name: 'With Spacing All Levels (A4)',
  args: {
    ...defaultArgs,
    hasSpacing: true,
  },
  argTypes: {
    hasSpacing: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const LevelsWithSpacingMobile = {
  render: TemplateWithAllLevels,
  name: 'With Spacing All Levels On Small Screen (A4)',
  args: {
    ...defaultArgs,
    hasSpacing: true,
  },
  argTypes: {
    hasSpacing: {
      table: { disable: false },
    },
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
} satisfies Story;

const AsTemplate: StoryFn<typeof Heading> = (args) => (
  <>
    {headingAsArr.map((heading) => (
      <Heading key={`heading-${heading}`} {...args} as={heading}>
        {`Heading ${heading}`}
      </Heading>
    ))}
  </>
);

export const WithAs = {
  render: AsTemplate,
  name: 'With As (B1)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      viewPortHeight: 1200,
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

const TemplateWithMarkup: StoryFn<typeof Heading> = (args) => (
  <>
    <Heading {...args} hasSpacing>
      {'Dette er den '}
      <a href={'https://skatteetaten.no'}>{'fyneste markup headingen'}</a>
      <em>{' som finnes i italic '}</em>
      <strong>{'og strong '}</strong>
      <mark>{'mark '}</mark>
      <code>{'code '}</code>
      {'med spacing under og en skrivefeil'}
    </Heading>
    <Heading {...args} />
  </>
);

export const WithMarkup = {
  render: TemplateWithMarkup,
  name: 'With Markup And String (A3, B2)',
  args: {
    ...defaultArgs,
    children: 'Dette er den fineste string headingen uten markup',
  },
  argTypes: {
    children: {
      table: { disable: false },
      control: { disable: true },
    },
  },
  parameters: {
    imageSnapshot: {
      hover: `${wrapper} > h2 > a`,
      focus: `${wrapper} > h2 > a`,
    },
  },
} satisfies Story;
