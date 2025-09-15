import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';

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
  title: 'Tester/TopBanner/TopBannerUserButton (intern)',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    user: { table: { disable: true } },
    // Events
    onClick: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} as Meta<typeof TopBannerUserButton>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: TopBannerUserButtonProps = {
  user: {
    role: 'meg',
  },
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
  parameters: {
    a11y: {
      test: 'off',
    },
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
    user: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const usernameButtonText = canvas.getByText(
      dsI18n.t('ds_layout:topbannerbutton.Myself')
    );
    const title = canvas.getByText(
      dsI18n.t('ds_layout:topbannerbutton.MyselfTitle')
    );
    await expect(usernameButtonText).toBeInTheDocument();
    await expect(title).toBeInTheDocument();
  },
} satisfies Story;

const TemplateWithAllRoles: StoryFn<typeof TopBannerUserButton> = (args) => (
  <div className={'topbannerButtonContainer'}>
    {userRoleArr.map((role, index) => {
      const name =
        role === 'andre'
          ? 'SØRUMSAND-SCHOENBERG WILLIAM'
          : 'Navn på virksomhet';
      return (
        <TopBannerUserButton
          key={`user_${index}`}
          className={'bottomSpacingXL'}
          {...args}
          user={{ role, name }}
        />
      );
    })}
  </div>
);

export const WithAllRoles = {
  render: TemplateWithAllRoles,
  name: 'With All Roles (Username A2, A3, A6, A7)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    user: {
      table: { disable: false },
      control: { disable: true },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const titleSelf = canvas.getByText(
      dsI18n.t('ds_layout:topbannerbutton.MyselfTitle')
    );
    const titleWork = canvas.getByText(
      dsI18n.t('ds_layout:topbannerbutton.CompanyTitle')
    );
    const titleOther = canvas.getByText(
      dsI18n.t('ds_layout:topbannerbutton.OtherTitle')
    );
    await expect(titleSelf).toBeInTheDocument();
    await expect(titleWork).toBeInTheDocument();
    await expect(titleOther).toBeInTheDocument();

    await expect(
      canvas.getByText(dsI18n.t('ds_layout:topbannerbutton.Myself'))
    ).toBeInTheDocument();
    await expect(
      canvas.getByText('SØRUMSAND-SCHOENBERG WILLIAM')
    ).toBeInTheDocument();
    await expect(canvas.getByText('Navn på virksomhet')).toBeInTheDocument();
  },
} satisfies Story;

export const WithMobileScreen = {
  render: TemplateWithAllRoles,
  name: 'With Small Screen (Username A2, A5)',
  args: {
    ...defaultArgs,
  },
  globals: {
    viewport: {
      value: '--mobile',
    },
  },
} satisfies Story;

export const WithBreakpointXS = {
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-xs (Username A2, A5)',
  args: {
    ...defaultArgs,
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const WithBreakpointS = {
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-s (Username A2, A5)',
  args: {
    ...defaultArgs,
  },
  globals: {
    viewport: {
      value: '--breakpoint-s',
    },
  },
} satisfies Story;

export const WithBreakpointM = {
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-m (Username A2, A5)',
  args: {
    ...defaultArgs,
  },
  globals: {
    viewport: {
      value: '--breakpoint-m',
    },
  },
} satisfies Story;
