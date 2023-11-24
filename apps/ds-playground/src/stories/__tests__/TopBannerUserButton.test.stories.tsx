import { dsI18n } from '@skatteetaten/ds-core-utils';
import { expect } from '@storybook/jest';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerUserButton } from '../../../../../libs/ds-layout/src/TopBannerUserButton/TopBannerUserButton';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  TopBannerUserButtonProps,
  userRoleArr,
} from '../../../../../libs/ds-layout/src/TopBannerUserButton/TopBannerUserButton.types';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute(attribute, expectedValue);
  };

const meta = {
  component: TopBannerUserButton,
  title: 'Tester/TopBannerUserButton (intern)',
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
    role: {
      table: { disable: true },
      options: [...userRoleArr],
      control: 'inline-radio',
    },
    // Events
    onClick: { table: { disable: true } },
  },
} as Meta<typeof TopBannerUserButton>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: TopBannerUserButtonProps = {
  role: 'meg',
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
  play: verifyAttribute('id', 'dummyIdForwardedFromRef'),
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
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
    await expect(button).toHaveAttribute('id', 'htmlid');
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('lang', 'nb');
    await expect(button).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (Username A2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    role: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    // TODO FRONT 1161 - erstattet hardkodet tekst når tekstvariabelen finnes
    const usernameText = canvas.getByText('Meg selv');
    const defaultTitle = canvas.getByText(
      dsI18n.t('ds_pages:userbutton.SelfIconText')
    );
    await expect(usernameText).toBeInTheDocument();
    await expect(defaultTitle).toBeInTheDocument();
  },
} satisfies Story;

// TODO FRONT 1161 skrive test WithChildren

const TemplateWithAllRoles: StoryFn<typeof TopBannerUserButton> = (args) => (
  <div className={'topbannerButtonContainer'}>
    {userRoleArr.map((role, index) => {
      return (
        <TopBannerUserButton
          key={`user_${index}`}
          className={'bottomSpacingXL'}
          {...args}
          role={role}
        >
          {`${
            role === 'andre'
              ? 'SØRUMSAND-SCHOENBERG WILLIAM'
              : 'Navn på virksomhet'
          }`}
        </TopBannerUserButton>
      );
    })}
  </div>
);

export const WithAllRoles = {
  render: TemplateWithAllRoles,
  name: 'With All Role (Username A2, A6, A7)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    role: {
      table: { disable: false },
      control: { type: null },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const titleSelf = canvas.getByText(
      dsI18n.t('ds_pages:userbutton.SelfIconText')
    );
    const titleWork = canvas.getByText(
      dsI18n.t('ds_pages:userbutton.WorkIconText')
    );
    const titleOther = canvas.getByText(
      dsI18n.t('ds_pages:userbutton.OtherIconText')
    );
    await expect(titleSelf).toBeInTheDocument();
    await expect(titleWork).toBeInTheDocument();
    await expect(titleOther).toBeInTheDocument();
  },
} satisfies Story;

export const WithMobileScreen = {
  render: TemplateWithAllRoles,
  name: 'With Small Screen (Username A2)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
  },
} satisfies Story;

export const WithBreakpointXS = {
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-xs (Username A2)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const WithBreakpointS = {
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-s (Username A2)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s',
    },
  },
} satisfies Story;

export const WithBreakpointM = {
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-m (Username A2)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-m',
    },
  },
} satisfies Story;

export const WithBreakpointL = {
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-l (Username A2)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-l',
    },
  },
} satisfies Story;
