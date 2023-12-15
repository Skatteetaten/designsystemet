import { Link } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';
import {
  Footer,
  TopBannerExternal,
  TopBannerExternalProps,
  TopBannerExternalHandle,
} from '@skatteetaten/ds-layout';
import { expect } from '@storybook/jest';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { fireEvent, within } from '@storybook/testing-library';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { logoAsArr } from '../../../../../libs/ds-layout/src/TopBannerLogo/TopBannerLogo.types';
// eslint-disable-next-line @nx/enforce-module-boundaries
import customLogo from '../../assets/custom-logo.svg';
import customMobileLogo from '../../assets/custom-mobile-logo.svg';
import skeMobileLogo from '../../assets/ske-logo-mobile.svg';
import skeLogo from '../../assets/ske-logo.svg';

const meta = {
  component: TopBannerExternal,
  title: 'Tester/TopBanner/TopBannerExternal',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    showSami: { table: { disable: true } },
    locale: { table: { disable: true } },
    children: {
      control: 'text',
      table: { disable: true },
    },
    skipLinkText: { table: { disable: true } },
    skipLinkTarget: { table: { disable: true } },
    skipLinkShadowRootNode: { table: { disable: true } },
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
    logoAs: {
      table: { disable: true },
      options: [...logoAsArr],
      control: 'inline-radio',
    },
    logoURL: { table: { disable: true } },
    user: { table: { disable: true } },
    firstColumn: { control: 'text', table: { disable: true } },
    secondColumn: { control: 'text', table: { disable: true } },
    thirdColumn: { control: 'text', table: { disable: true } },
    // Events
    onLanguageClick: { table: { disable: true } },
    onLogInClick: { table: { disable: true } },
    onLogOutClick: { table: { disable: true } },
    onUserClick: { table: { disable: true } },
  },
} satisfies Meta<typeof TopBannerExternal>;
export default meta;
type Story = StoryObj<typeof meta>;

const loginText = dsI18n.t('ds_layout:topbannerbutton.Login');
const logoutText = dsI18n.t('ds_layout:topbannerbutton.Logout');
const themeText = dsI18n.t('ds_layout:topbanner.NavAriaLabel');
const menuText = dsI18n.t('ds_layout:topbannerbutton.Menu');
const skipLinkText = dsI18n.t('ds_layout:topbanner.SkipLinkText');
const defaultArgs: TopBannerExternalProps = {
  // Uten undefined så blir funksjonene initalisert med mockConstructor i Storybook
  onLogInClick: undefined,
  onLogOutClick: undefined,
  onUserClick: undefined,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: TopBannerExternalHandle | null): void => {
      if (instance?.current) {
        instance.current.id = 'dummyIdForwardedFromRef';
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
  name: 'With Defaults (A3 delvis, B1, B2)',
  args: {
    ...defaultArgs,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('banner');
    expect(header.tagName).toBe('HEADER');
    // eslint-disable-next-line testing-library/no-node-access
    expect(header.firstChild).toHaveAttribute('href');
    const skipLink = canvas.getByText(skipLinkText);
    expect(skipLink).toBeInTheDocument();

    await expect(canvas.getByText(menuText)).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    await expect(canvas.queryByText(loginText)).not.toBeInTheDocument();
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

export const SkipLinkFocusedMobileScreen = {
  name: 'SkipLink Focused On Mobile Screen (A3)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText,
    });
    skipLink.focus();
  },
} satisfies Story;

export const SkipLinkFocusedBreakpointXS = {
  name: 'SkipLink Focused On Breakpoint-xs (A3)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText,
    });
    skipLink.focus();
  },
} satisfies Story;

export const SkipLinkFocusedBreakpointS = {
  name: 'SkipLink Focused On Breakpoint-s (A3)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText,
    });
    skipLink.focus();
  },
} satisfies Story;

export const SkipLinkFocusedBreakpointM = {
  name: 'SkipLink Focused On Breakpoint-m (A3)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-m',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText,
    });
    skipLink.focus();
  },
} satisfies Story;

export const SkipLinkFocusedBreakpointL = {
  name: 'SkipLink Focused On Breakpoint-l (A3)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-l',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText,
    });
    skipLink.focus();
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
    const menuSvg = canvas.getAllByRole('img', { hidden: true });
    expect(menuSvg[3]).toBeInTheDocument();
    expect(menuSvg[3]).toHaveAttribute('aria-hidden', 'true');
    await fireEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    const menuContainer = canvas.getByRole('navigation', {
      name: themeText,
    });
    await expect(menuContainer).toBeInTheDocument();
    expect(menuContainer.tagName).toBe('NAV');
    expect(menuContainer).toHaveAttribute('aria-label', themeText);
    await fireEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(menuContainer).not.toBeInTheDocument();
  },
} satisfies Story;

const TemplateWithFooterOneColumn: StoryFn<TopBannerExternalProps> = (args) => {
  return (
    <>
      <TopBannerExternal {...args} />
      <Footer
        titleFirstColumn={'Om Skatteetaten'}
        firstColumn={
          <div className={'dummyClassNameDarkPinkBackground'}>
            {'First column with pink background'}
          </div>
        }
      />
    </>
  );
};

export const WithOneColumn = {
  render: TemplateWithFooterOneColumn,
  name: 'With One Column (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
    ),
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny',
    });
    await fireEvent.click(menuButton);
  },
} satisfies Story;

export const WithOneColumnBreakpointS = {
  render: TemplateWithFooterOneColumn,
  name: 'With One Column Breakpoint-s (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
    ),
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

export const WithOneColumnBreakpointXS = {
  render: TemplateWithFooterOneColumn,
  name: 'With One Column Breakpoint-xs (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
    ),
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

const TemplateWithFooterTwoColumns: StoryFn<TopBannerExternalProps> = (
  args
) => {
  return (
    <>
      <TopBannerExternal {...args} />
      <Footer
        titleFirstColumn={'Om Skatteetaten'}
        firstColumn={
          <div className={'dummyClassNameDarkPinkBackground'}>
            {'First column with pink background'}
          </div>
        }
        secondColumn={
          <div className={'dummyClassNameDarkPinkBackground'}>
            {'Second column with pink background'}
          </div>
        }
      />
    </>
  );
};

export const WithTwoColumns = {
  render: TemplateWithFooterTwoColumns,
  name: 'With Two Columns (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
    ),
    secondColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'Second column with pink background'}
      </div>
    ),
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny',
    });
    await fireEvent.click(menuButton);
  },
} satisfies Story;

export const WithTwoColumnsBreakpointS = {
  render: TemplateWithFooterTwoColumns,
  name: 'With Two Columns Breakpoint-s (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
    ),
    secondColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'Second column with pink background'}
      </div>
    ),
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

export const WithTwoColumnsBreakpointXS = {
  render: TemplateWithFooterTwoColumns,
  name: 'With Two Columns Breakpoint-xs (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
    ),
    secondColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'Second column with pink background'}
      </div>
    ),
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

const TemplateWithFooterThreeColumns: StoryFn<TopBannerExternalProps> = (
  args
) => {
  return (
    <>
      <TopBannerExternal {...args} />
      <Footer
        titleFirstColumn={'Om Skatteetaten'}
        firstColumn={
          <div className={'dummyClassNameDarkPinkBackground'}>
            {'First column with pink background'}
          </div>
        }
        secondColumn={
          <div className={'dummyClassNameDarkPinkBackground'}>
            {'Second column with pink background'}
          </div>
        }
        thirdColumn={
          <div className={'dummyClassNameDarkPinkBackground'}>
            {'Third column with pink background'}
          </div>
        }
      />
    </>
  );
};

export const WithThreeColumns = {
  render: TemplateWithFooterThreeColumns,
  name: 'With Three Columns (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
    ),
    secondColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'Second column with pink background'}
      </div>
    ),
    thirdColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'Third column with pink background'}
      </div>
    ),
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny',
    });
    await fireEvent.click(menuButton);
  },
} satisfies Story;

export const WithThreeColumnsBreakpointS = {
  render: TemplateWithFooterThreeColumns,
  name: 'With Three Columns Breakpoint-s (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
    ),
    secondColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'Second column with pink background'}
      </div>
    ),
    thirdColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'Third column with pink background'}
      </div>
    ),
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

export const WithThreeColumnsBreakpointXS = {
  render: TemplateWithFooterThreeColumns,
  name: 'With Three Columns Breakpoint-xs (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
    ),
    secondColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'Second column with pink background'}
      </div>
    ),
    thirdColumn: (
      <div className={'dummyClassNamePinkBackground'}>
        {'Third column with pink background'}
      </div>
    ),
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
