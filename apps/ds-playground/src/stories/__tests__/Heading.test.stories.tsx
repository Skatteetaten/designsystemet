import {
  Heading,
  headingLevelArr,
  HeadingProps,
} from '@skatteetaten/ds-typography';
import { headingAsArr } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';

export default {
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
} as ComponentMeta<typeof Heading>;

const headingAsTest = 'h2';
const defaultArgs: HeadingProps = {
  as: headingAsTest,
  level: 2,
  children: 'Dette er en heading',
};

const Template: ComponentStory<typeof Heading> = (args) => (
  <div data-test-block>
    <Heading {...args} />
  </div>
);

// Når Heading har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLHeadingElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.parameters = { imageSnapshot: { disable: true } };
WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const heading = canvas.getByRole('heading');
  await expect(heading).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når Heading har en id, så har heading-elementet id'en satt
// Når Heading har en custom CSS, så har heading-elementet className satt og custom stil vises
// Når Heading har en lang, så har heading-elementet lang satt
// Når Heading har dataTestid, så har heading-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlId',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
};
WithAttributes.argTypes = {
  ...WithAttributes.argTypes,
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const heading = canvas.getByRole('heading');
  await expect(heading).toHaveClass('dummyClassname');
  await expect(heading).toHaveAttribute('id', 'htmlId');
  await expect(heading).toHaveAttribute('lang', 'nb');
  await expect(heading).toHaveAttribute('data-testid', '123ID');
};

const TemplateWithAllLevels: ComponentStory<typeof Heading> = (args) => (
  <div data-test-block>
    {headingLevelArr.map((headingLevel, item) => {
      return (
        <Heading key={`level_${item}`} {...args} level={headingLevel}>
          {`Heading level ${headingLevel}`}
        </Heading>
      );
    })}
  </div>
);

// Når Heading instansieres, får den riktige default-verdier og ser riktig ut for alle levels
export const Defaults = TemplateWithAllLevels.bind({});
Defaults.storyName = 'Defaults All Levels (A1, A2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  children: { table: { disable: false } },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const headings = canvas.getAllByRole('heading', { level: 2 });
  for (const [index, heading] of headings.entries()) {
    await expect(heading).toBeInTheDocument();
    await expect(heading.classList.toString()).toContain(
      `Heading_heading_level${headingLevelArr[index]}`
    );
  }
};

// Når Heading instansieres, ser den riktug ut for alle levels på mobil
export const DefaultsMobile = TemplateWithAllLevels.bind({});
DefaultsMobile.storyName = 'Defaults All Levels On Small Screen (A1, A2)';
DefaultsMobile.args = {
  ...defaultArgs,
};
DefaultsMobile.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når Heading har spacing, så får elementet riktig margin under headingen
export const LevelsWithSpacing = TemplateWithAllLevels.bind({});
LevelsWithSpacing.storyName = 'With Spacing All Levels (A4)';
LevelsWithSpacing.argTypes = {
  ...LevelsWithSpacing.argTypes,
  hasSpacing: {
    table: { disable: false },
  },
};
LevelsWithSpacing.args = {
  ...defaultArgs,
  hasSpacing: true,
};

// Når Heading har spacing, så får elementet riktig margin under headingen på mobil
export const LevelsWithSpacingMobile = TemplateWithAllLevels.bind({});
LevelsWithSpacingMobile.storyName =
  'With Spacing All Levels On Small Screen (A4)';
LevelsWithSpacingMobile.args = {
  ...defaultArgs,
  hasSpacing: true,
};
LevelsWithSpacingMobile.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

const AsTemplate: ComponentStory<typeof Heading> = (args) => (
  <div data-test-block>
    {headingAsArr.map((heading) => (
      <Heading key={`heading-${heading}`} {...args} as={heading}>
        {`Heading ${heading}`}
      </Heading>
    ))}
  </div>
);

export const WithAs = AsTemplate.bind({});
WithAs.storyName = 'With As (B1)';
WithAs.args = {
  ...defaultArgs,
};
WithAs.argTypes = {
  ...WithAs.argTypes,
};
WithAs.parameters = {
  viewport: {
    viewPortHeight: 1200,
  },
};
WithAs.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const headings = canvas.getAllByRole('heading');
  for (const [index, heading] of headings.entries()) {
    await expect(heading.tagName).toBe(headingAsArr[index].toLocaleUpperCase());
  }
};

const TemplateWithMarkup: ComponentStory<typeof Heading> = (args) => (
  <div data-test-block>
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
  </div>
);

// Når Heading inkluderer markup, så får markupen riktig styling
export const WithMarkup = TemplateWithMarkup.bind({});
WithMarkup.storyName = 'With Markup And String (A3, B2)';
WithMarkup.args = {
  ...defaultArgs,
  children: 'Dette er den fineste string headingen uten markup',
};
WithMarkup.argTypes = {
  ...WithMarkup.argTypes,
  children: {
    table: { disable: false },
    control: { type: null },
  },
};
WithMarkup.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > h2 > a`,
    focus: `${wrapper} > h2 > a`,
  },
};
