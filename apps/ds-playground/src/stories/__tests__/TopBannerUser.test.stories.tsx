import { dsI18n } from '@skatteetaten/ds-core-utils';
import { expect } from '@storybook/jest';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerUser } from '../../../../../libs/ds-layout/src/TopBannerUser/TopBannerUser';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  TopBannerUserProps,
  usernameAsArr,
  userRoleArr,
} from '../../../../../libs/ds-layout/src/TopBannerUser/TopBannerUser.types';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute(attribute, expectedValue);
  };

const meta = {
  component: TopBannerUser,
  title: 'Tester/TopBannerUser (intern)',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    as: {
      table: { disable: true },
      options: [...usernameAsArr],
      control: 'inline-radio',
    },
    children: { table: { disable: true } },
    role: {
      table: { disable: true },
      options: [...userRoleArr],
      control: 'inline-radio',
    },
    // Events
    onClick: { table: { disable: true } },
  },
} as Meta<typeof TopBannerUser>;
export default meta;
type Story = StoryObj<typeof meta>;

const username = 'SØRUMSAND-SCHOENBERG WILLIAM';
const defaultArgs: TopBannerUserProps = {
  children: username,
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
    children: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const usernameText = canvas.getByText(username);
    const defaultTitle = canvas.getByText(
      dsI18n.t('ds_pages:userbutton.SelfIconText')
    );
    await expect(usernameText).toBeInTheDocument();
    await expect(defaultTitle).toBeInTheDocument();
  },
} satisfies Story;

const TemplateWithAllRoles: StoryFn<typeof TopBannerUser> = (args) => (
  <div className={'topbannerButtonContainer'}>
    {userRoleArr.map((role, index) => {
      return (
        <TopBannerUser
          key={`user_${index}`}
          className={'bottomSpacingXL'}
          {...args}
          role={role}
        >
          {`${role}`}
        </TopBannerUser>
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
