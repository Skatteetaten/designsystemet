import { ScrollToTopButton } from '@skatteetaten/ds-buttons';
import { ExternalLayout, dsI18n } from '@skatteetaten/ds-core-utils';
import { expect } from '@storybook/jest';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';
import { webComponent } from '../../../.storybook/webcomponent-decorator';

const defaultButtonText = 'Til toppen';

const meta = {
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
      default: 'grey',
    },
  },
} satisfies Meta<typeof ScrollToTopButton>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof ScrollToTopButton> = (args) => (
  <div className={'height100vh'}>
    <main className={'scrollToTopContainer'} tabIndex={-1}>
      <ExternalLayout />
      <ScrollToTopButton {...args} />
    </main>
  </div>
);

const defaultArgs = {
  visibilityThreshold: 0,
};

export const WithRef = {
  render: Template,
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
    imageSnapshot: {
      disable: true,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toHaveAttribute(
      'id',
      'dummyIdForwardedFromRef'
    );
  },
} satisfies Story;

export const WithAttributes = {
  render: Template,
  name: 'With Attributes(FA2-5)',
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
    const scrollToTopButton = canvas.getByRole('button');
    await expect(scrollToTopButton).toHaveAttribute('id', 'htmlId');
    await expect(scrollToTopButton).toHaveAttribute('lang', 'nb');
    await expect(scrollToTopButton).toHaveAttribute('data-testid', '123ID');
    // eslint-disable-next-line testing-library/no-node-access
    const container = canvasElement.querySelector(
      `${wrapper} > div > main > div:nth-child(2)`
    );
    await expect(container).toHaveClass('dummyClassname');
  },
} satisfies Story;

export const WithCustomClassNames = {
  render: Template,
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
      button: 'dummyClassname',
      iconContainer: 'dummyClassname',
      icon: 'dummyClassname',
      label: 'dummyClassname',
    },
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    /* eslint-disable testing-library/no-node-access */
    const container = canvasElement.querySelector(
      `${wrapper} > div > main > div:nth-child(2)`
    );
    const button = canvas.getByRole('button');
    const iconContainer = button.querySelector('div');
    /* eslint-disable testing-library/no-node-access */
    const icon = canvas.getByRole('img', { hidden: true });
    const label = canvas.getByText(
      dsI18n.t('ds_buttons:scrolltotopbutton.Title')
    );
    await expect(container).toHaveClass('dummyClassname');
    await expect(button).toHaveClass('dummyClassname');
    await expect(iconContainer).toHaveClass('dummyClassname');
    await expect(icon).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
  },
} satisfies Story;

export const Defaults = {
  render: Template,
  name: 'Defaults (A1, A3, B4)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    visibilityThreshold: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      hover: `${wrapper} > div > main > div:nth-child(2) > button`,
      focus: `${wrapper} > div > main > div:nth-child(2) > button`,
      click: `${wrapper} > div > main > div:nth-child(2) > button`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const scrollToTopButton = canvas.getByText(defaultButtonText);
    await expect(scrollToTopButton).toBeInTheDocument();
    await expect(canvas.getByRole('button')).toHaveAttribute('type', 'button');
  },
} satisfies Story;

export const WithChildren = {
  render: Template,
  name: 'With Children (A2)',
  args: {
    ...defaultArgs,
    children: 'dummy string',
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(args.children ?? '')).toBeInTheDocument();
  },
} satisfies Story;

export const WithMobileScreen = {
  render: Template,
  name: 'With Small Screen (A5)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const WithWideScreen = {
  render: Template,
  name: 'With Wide Screen (A6)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xl',
    },
  },
} satisfies Story;

export const WithVisibilityThreshold = {
  render: Template,
  name: 'With VisibilityThreshold and Scrolling (A7, A8)',
  args: {
    ...defaultArgs,
    visibilityThreshold: 3,
  },
  argTypes: {
    visibilityThreshold: { table: { disable: false } },
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xl',
    },
    imageSnapshot: {
      scroll: {
        yPixels: 10,
      },
    },
  },
} satisfies Story;

const TemplateWithShadowDom: StoryFn<typeof ScrollToTopButton> = (args) => {
  // eslint-disable-next-line testing-library/no-node-access
  const element = document.querySelector('scrolltotop-customelement');
  const shadowRoot = element?.shadowRoot;
  return (
    <div className={'height100vh'}>
      <main className={'scrollToTopContainer'} tabIndex={-1}>
        <ExternalLayout />
        <ScrollToTopButton {...args} shadowRootNode={shadowRoot ?? undefined} />
      </main>
    </div>
  );
};

export const WithShadowDom = {
  render: TemplateWithShadowDom,
  name: 'With ShadowDom (B4)',
  args: {
    ...defaultArgs,
  },
  decorators: [webComponent],
  parameters: {
    imageSnapshot: {
      disable: true,
    },
    customElementName: 'scrolltotop-customelement',
  },
  play: async ({ canvasElement }): Promise<void> => {
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
  },
} satisfies Story;
