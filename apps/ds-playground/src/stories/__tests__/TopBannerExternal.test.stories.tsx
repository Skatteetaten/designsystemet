import { Link } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';
import {
  TopBannerExternal,
  TopBannerExternalProps,
} from '@skatteetaten/ds-layout';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, within } from '@storybook/testing-library';

// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  usernameAsArr,
  userRoleArr,
} from '../../../../../libs/ds-layout/src/TopBannerUser/TopBannerUser.types';
import { category } from '../../../.storybook/helpers';
import customLogo from '../../assets/custom-logo.svg';
import customMobileLogo from '../../assets/custom-mobile-logo.svg';
import skeMobileLogo from '../../assets/ske-logo-mobile.svg';
import skeLogo from '../../assets/ske-logo.svg';

const meta = {
  component: TopBannerExternal,
  title: 'Tester/TopBannerExternal',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    classNames: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      control: 'text',
      table: { disable: true, category: category.props },
    },
    skipLinkText: { table: { disable: true } },
    skipLinkURL: { table: { disable: true } },
    logo: {
      table: { disable: true },
      control: 'select',
      options: ['', customLogo, skeLogo],
    },
    mobileLogo: {
      table: { disable: true },
      control: 'select',
      options: ['', customMobileLogo, skeMobileLogo],
    },
    logoAltText: { table: { disable: true } },
    logoURL: { table: { disable: true } },
    noLinkLogo: { table: { disable: true } },
    username: { table: { disable: true } },
    usernameAs: {
      table: { disable: true },
      options: [...usernameAsArr],
      control: 'inline-radio',
    },
    userRole: {
      table: { disable: true },
      options: [...userRoleArr],
      control: 'inline-radio',
    },
    firstColumn: { control: 'text', table: { disable: true } },
    secondColumn: { control: 'text', table: { disable: true } },
    thirdColumn: { control: 'text', table: { disable: true } },
    // Events
    onLogIn: { table: { disable: true } },
    onLogOut: { table: { disable: true } },
    onSwitchUserRole: { table: { disable: true } },
  },
} satisfies Meta<typeof TopBannerExternal>;
export default meta;
type Story = StoryObj<typeof meta>;

const loginText = dsI18n.t('ds_pages:loginbutton.Title');
const logoutText = dsI18n.t('ds_pages:logoutbutton.Title');
const themeText = dsI18n.t('ds_pages:topbannerexternal.DrawerAriaLabel');
const menuText = dsI18n.t('ds_pages:menubutton.Meny');
const defaultArgs: TopBannerExternalProps = {
  // Uten undefined så blir funksjonene initalisert med mockConstructor i Storybook
  onLogIn: undefined,
  onLogOut: undefined,
  onSwitchUserRole: undefined,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLDivElement | null): void => {
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
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('banner');
    await expect(header).toBeInTheDocument();
    await expect(header).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
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
    const header = canvas.getByRole('banner');
    await expect(header).toHaveClass('dummyClassname');
    await expect(header).toHaveAttribute('id', 'htmlId');
    await expect(header).toHaveAttribute('lang', 'nb');
    await expect(header).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithDefaults = {
  name: 'With Defaults (A3, B1)',
  args: {
    ...defaultArgs,
  },
  argTypes: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('banner');
    expect(header.tagName).toBe('HEADER');

    // TODO FRONT-1161 test at skipLink finnes
    // TODO FRONT-1161 test at språkvelger finnes

    // eslint-disable-next-line testing-library/no-node-access
    await expect(canvas.queryByText(loginText)).not.toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    await expect(canvas.queryByText(menuText)).not.toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    await expect(canvas.queryByText(logoutText)).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithChildren = {
  name: 'With Children (A2)',
  args: {
    ...defaultArgs,
    children: <TextField label={'Søk'} placeholder={'Søk'} hideLabel />,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-m',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Søk');
    expect(label).toBeInTheDocument();
  },
} satisfies Story;

export const ClickMainMenuOpenAndClose = {
  name: 'Click MainMenu Open And Close (MainMenu A1, A2 delvis, B1, B2, B3)',
  args: {
    ...defaultArgs,
    firstColumn: (
      <Link href={'#storybook-root'}>
        {'Meny-knapp blir synlig når den har innhold'}
      </Link>
    ),
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', { name: menuText });
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(menuButton);

    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    const menuContainer = canvas.getByRole('navigation', {
      name: themeText,
    });
    await expect(menuContainer).toBeInTheDocument();
    await fireEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(menuContainer).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithFirstColumnAndClassNames = {
  name: 'With FirstColumn And ClassNames (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: 'First column and classNames background pink',
    classNames: {
      firstColumn: 'dummyClassNamePinkBackground',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny',
    });
    await fireEvent.click(menuButton);
  },
} satisfies Story;

export const WithFirstColumnClassNamesAndBreakpointS = {
  name: 'With FirstColumn ClassNames And Breakpoint-s (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: 'First column and classNames background pink',
    classNames: {
      firstColumn: 'dummyClassNamePinkBackground',
    },
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny',
    });
    await fireEvent.click(menuButton);
  },
} satisfies Story;

export const WithFirstColumnClassNamesAndBreakpointXS = {
  name: 'With FirstColumn ClassNames And Breakpoint-xs (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: 'First column and classNames background pink',
    classNames: {
      firstColumn: 'dummyClassNamePinkBackground',
    },
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny',
    });
    await fireEvent.click(menuButton);
  },
} satisfies Story;

export const WithFirstAndSecondColumnAndClassNames = {
  name: 'With FirstColumn SecondColumn And ClassNames (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: 'First column and classNames background pink',
    secondColumn: 'Second column and classNames background pink',
    classNames: {
      firstColumn: 'dummyClassNamePinkBackground',
      secondColumn: 'dummyClassNamePinkBackground',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny',
    });
    await fireEvent.click(menuButton);
  },
} satisfies Story;

export const WithFirstAndSecondColumnClassNamesAndBreakpointS = {
  name: 'With FirstColumn SecondColumn ClassNames And Breakpoint-s (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: 'First column and classNames background pink',
    secondColumn: 'Second column and classNames background pink',
    classNames: {
      firstColumn: 'dummyClassNamePinkBackground',
      secondColumn: 'dummyClassNamePinkBackground',
    },
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny',
    });
    await fireEvent.click(menuButton);
  },
} satisfies Story;

export const WithFirstAndSecondColumnClassNamesAndBreakpointXS = {
  name: 'With FirstColumn SecondColumn ClassNames And Breakpoint-xs (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: 'First column and classNames background pink',
    secondColumn: 'Second column and classNames background pink',
    classNames: {
      firstColumn: 'dummyClassNamePinkBackground',
      secondColumn: 'dummyClassNamePinkBackground',
    },
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny',
    });
    await fireEvent.click(menuButton);
  },
} satisfies Story;

export const WithFirstSecondAndThirdColumnAndClassNames = {
  name: 'With FirstColumn SecondColumn ThirdColumn And ClassNames (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: 'First column and classNames background pink',
    secondColumn: 'Second column and classNames background pink',
    thirdColumn: 'Third column and classNames background pink',
    classNames: {
      firstColumn: 'dummyClassNamePinkBackground',
      secondColumn: 'dummyClassNamePinkBackground',
      thirdColumn: 'dummyClassNamePinkBackground',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny',
    });
    await fireEvent.click(menuButton);
  },
} satisfies Story;

export const WithFirstSecondAndThirdColumnClassNamesAndBreakpointS = {
  name: 'With FirstColumn SecondColumn ThirdColumn ClassNames And Breakpoint-s (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: 'First column and classNames background pink',
    secondColumn: 'Second column and classNames background pink',
    thirdColumn: 'Third column and classNames background pink',
    classNames: {
      firstColumn: 'dummyClassNamePinkBackground',
      secondColumn: 'dummyClassNamePinkBackground',
      thirdColumn: 'dummyClassNamePinkBackground',
    },
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny',
    });
    await fireEvent.click(menuButton);
  },
} satisfies Story;

export const WithFirstSecondAndThirdColumnClassNamesAndBreakpointXS = {
  name: 'With FirstColumn SecondColumn ThirdColumn ClassNames And Breakpoint-xs (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: 'First column and classNames background pink',
    secondColumn: 'Second column and classNames background pink',
    thirdColumn: 'Third column and classNames background pink',
    classNames: {
      firstColumn: 'dummyClassNamePinkBackground',
      secondColumn: 'dummyClassNamePinkBackground',
      thirdColumn: 'dummyClassNamePinkBackground',
    },
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny',
    });
    await fireEvent.click(menuButton);
  },
} satisfies Story;

// TODO FRONT-1161 tester på logo props og reglene, ev. i Logo.test.storeis.tsx hvis det går....
