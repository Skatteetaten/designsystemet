import {
  Heading,
  headingLevelArr,
  HeadingProps,
} from '@skatteetaten/ds-typography';
import { headingAsArr } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { wrapper } from './testUtils/puppeteer.testing.utils';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading')).toHaveAttribute(
      attribute,
      expectedValue
    );
  };

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

const LevelsTemplate: ComponentStory<typeof Heading> = (args) => (
  <div data-test-block>
    {headingAsArr.map((heading) =>
      headingLevelArr.map((level) => (
        <Heading
          key={`${heading}-${level}`}
          {...args}
          as={heading}
          level={level}
        >
          {`Heading ${heading} level ${level}`}
        </Heading>
      ))
    )}
  </div>
);

export const WithLevels = LevelsTemplate.bind({});
WithLevels.storyName = 'With Levels (A2, B1)';
WithLevels.argTypes = {
  ...WithLevels.argTypes,
};
WithLevels.args = {
  ...defaultArgs,
};
WithLevels.parameters = {
  viewport: {
    //defaultViewport: '--breakpoint-xs',
    viewPortHeight: 1200,
  },
};

const Template: ComponentStory<typeof Heading> = (args) => (
  <div data-test-block>
    <Heading {...args} />
  </div>
);

// Når Heading har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLHeadingElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.parameters = { imageSnapshot: { disable: true } };
WithRef.play = verifyAttribute('id', 'dummyIdForwardedFromRef');

// Når Heading har en id, så har ul-element id
// Når Heading har en custom CSS, så vises custom stil
// Når Heading har en lang, så har ul-element lang
// Når Heading har dataTestid, så har ul-elementet data-testid satt
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
WithMarkup.argTypes = {
  ...WithMarkup.argTypes,
  children: {
    table: { disable: false },
    control: { type: null },
  },
};
WithMarkup.args = {
  ...defaultArgs,
  children: 'Dette er den fineste string headingen uten markup',
};
WithMarkup.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > h2 > a`,
    focus: `${wrapper} > h2 > a`,
  },
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
Defaults.argTypes = {
  ...Defaults.argTypes,
  children: { table: { disable: false } },
};
Defaults.args = {
  ...defaultArgs,
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const headings = canvas.getAllByRole('heading', { level: 2 });
  for (const heading of headings) {
    await expect(heading).toBeInTheDocument();
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
