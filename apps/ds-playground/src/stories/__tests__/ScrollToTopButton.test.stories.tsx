import {
  ScrollToTopButton,
  ScrollToTopButtonProps,
} from '@skatteetaten/ds-buttons';
import { ExternalLayout } from '@skatteetaten/ds-core-utils';
import { expect } from '@storybook/jest';
import { ComponentStory, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
// @skatteeteaten/ds-core-designtokens er angitt som symlink i package.json
// derfor vil typecheck feile hvis pakken ikke er bygget, derfor bryter vi nx module boundaries her
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import palette from 'libs/ds-core-designtokens/lib/designtokens/palette.json';

import { wrapper } from './testUtils/storybook.testing.utils';
import { webComponent } from '../../../.storybook/webcomponent-decorator';

const defaultButtonText = 'Til toppen';

export default {
  component: ScrollToTopButton,
  title: 'Tester/ScrollToTopButton',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },

    // Props
    classNames: {
      table: { disable: true },
    },
    visibilityThreshold: {
      table: { disable: true },
    },
    shadowRootNode: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  parameters: {
    backgrounds: {
      default: 'graphite-70',
      values: [
        {
          name: 'graphite-70',
          value: palette[':root,\n:host']['--palette-graphite-70'],
        },
      ],
    },
  },
} as Meta<ScrollToTopButtonProps>;

const Template: ComponentStory<typeof ScrollToTopButton> = (args) => (
  <div className={'height100vh'} data-test-block>
    <main className={'scrollToTopContainer'} tabIndex={-1}>
      <ExternalLayout />
      <ScrollToTopButton {...args} />
    </main>
  </div>
);

const defaultArgs = {
  visibilityThreshold: 0,
};

// Når ScrollToTopButton har en ref, så får dom button elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: {
    disable: true,
  },
};
WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  expect(canvas.getByRole('button')).toHaveAttribute(
    'id',
    'dummyIdForwardedFromRef'
  );
};

// Når ScrollToTopButton har en id, så har button-element id
// Når ScrollToTopButton har en custom CSS, så vises custom stil
// Når ScrollToTopButton har en lang, så har button-element lang
// Når ScrollToTopButton har dataTestid, så har button-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes(FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlId',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
};
WithAttributes.argTypes = {
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const scrollToTopButton = canvas.getByRole('button');
  await expect(scrollToTopButton).toHaveAttribute('id', 'htmlId');
  await expect(scrollToTopButton).toHaveAttribute('lang', 'nb');
  await expect(scrollToTopButton).toHaveAttribute('data-testid', '123ID');
  // eslint-disable-next-line testing-library/no-node-access
  const container = canvasElement.querySelector(
    `${wrapper} > main > div:nth-child(2)`
  );
  await expect(container).toHaveClass('dummyClassname');
};

// Når ScrollToTopButton har en custom classNames, så vises custom stil på riktig sted
export const WithCustomClassNames = Template.bind({});
WithCustomClassNames.storyName = 'With Custom ClassNames (FA3)';
WithCustomClassNames.args = {
  ...defaultArgs,
  classNames: {
    container: 'dummyClassname',
    button: 'dummyClassname',
    iconContainer: 'dummyClassname',
    icon: 'dummyClassname',
    label: 'dummyClassname',
  },
};
WithCustomClassNames.argTypes = {
  classNames: {
    table: { disable: false },
  },
};
WithCustomClassNames.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  /* eslint-disable testing-library/no-node-access */
  const container = canvasElement.querySelector(
    `${wrapper} > main > div:nth-child(2)`
  );
  const button = canvas.getByRole('button');
  const iconContainer = button.querySelector('div');
  /* eslint-disable testing-library/no-node-access */
  const icon = canvas.getByRole('img', { hidden: true });
  const label = canvas.getByText('Til toppen');
  await expect(container).toHaveClass('dummyClassname');
  await expect(button).toHaveClass('dummyClassname');
  await expect(iconContainer).toHaveClass('dummyClassname');
  await expect(icon).toHaveClass('dummyClassname');
  await expect(label).toHaveClass('dummyClassname');
};

// Når ScrollToTopButton instansieres, så får den riktige default-verdier og rendrer riktig
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1, A3, B4)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  visibilityThreshold: { table: { disable: false } },
};
Defaults.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > main > div:nth-child(2) > button`,
    focus: `${wrapper} > main > div:nth-child(2) > button`,
    click: `${wrapper} > main > div:nth-child(2) > button`,
  },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const scrollToTopButton = canvas.getByText(defaultButtonText);
  await expect(scrollToTopButton).toBeInTheDocument();
  await expect(canvas.getByRole('button')).toHaveAttribute('type', 'button');
};

// Når ScrollToTopButton har children, så settes teksten i button-elementet
export const WithChildren = Template.bind({});
WithChildren.storyName = 'With Children (A2)';
WithChildren.args = {
  ...defaultArgs,
  children: 'dummy string',
};
WithChildren.argTypes = {
  children: { table: { disable: false } },
};
WithChildren.play = async ({ args, canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  await expect(canvas.getByText(args.children ?? '')).toBeInTheDocument();
};

// Når ScrollToTopButton lastes i en small skjerm så får den riktig plassering
export const WithMobileScreen = Template.bind({});
WithMobileScreen.storyName = 'With Small Screen (A5)';
WithMobileScreen.args = {
  ...defaultArgs,
};
WithMobileScreen.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når ScrollToTopButton lastes i en bred skjerm så får den riktig plassering
export const WithWideScreen = Template.bind({});
WithWideScreen.storyName = 'With Wide Screen (A6)';
WithWideScreen.args = {
  ...defaultArgs,
};
WithWideScreen.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xl',
  },
};

// Når ScrollToTopButton har visibilityThreshold så vises/skjules knappen ved riktig innslagspunkt for scroll
export const WithVisibilityThreshold = Template.bind({});
WithVisibilityThreshold.storyName =
  'With VisibilityThreshold and Scrolling (A7, A8)';
WithVisibilityThreshold.args = {
  ...defaultArgs,
  visibilityThreshold: 3,
};
WithVisibilityThreshold.argTypes = {
  visibilityThreshold: { table: { disable: false } },
};
WithVisibilityThreshold.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xl',
  },
  imageSnapshot: {
    scroll: {
      yPixels: 10,
    },
  },
};

const TemplateWithShadowDom: ComponentStory<typeof ScrollToTopButton> = (
  args
) => {
  // eslint-disable-next-line testing-library/no-node-access
  const element = document.querySelector('scrolltotop-customelement');
  const shadowRoot = element?.shadowRoot;
  return (
    <div className={'height100vh'} data-test-block>
      <main className={'scrollToTopContainer'} tabIndex={-1}>
        <ExternalLayout />
        <ScrollToTopButton {...args} shadowRootNode={shadowRoot ?? undefined} />
      </main>
    </div>
  );
};
// Når ScrollToTopButton lastes i en shadowDom så tegnes den riktig og klarer å sette focus til main elementet som befinner i et custom element
export const WithShadowDom = TemplateWithShadowDom.bind({});
WithShadowDom.storyName = 'With ShadowDom (B4)';
WithShadowDom.args = {
  ...defaultArgs,
};
WithShadowDom.decorators = [webComponent];
WithShadowDom.parameters = {
  imageSnapshot: {
    disable: true,
  },
  customElementName: 'scrolltotop-customelement',
};
WithShadowDom.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  //button finnes ikke utenfor shadowDom
  await expect(canvas.queryByRole('button')).not.toBeInTheDocument();
  const customElement = canvasElement.querySelector(
    `scrolltotop-customelement`
  );
  await expect(customElement).toBeInTheDocument();
  const button =
    customElement?.shadowRoot &&
    customElement.shadowRoot.querySelector('button');

  await expect(button).toBeInTheDocument();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  await userEvent.click(button!);

  const main =
    customElement?.shadowRoot &&
    customElement.shadowRoot.querySelector('main:focus');
  await expect(main).toBeInTheDocument();
};
