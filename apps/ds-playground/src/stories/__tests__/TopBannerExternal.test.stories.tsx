import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Link } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';
import {
  Footer,
  TopBannerExternal,
  TopBannerExternalProps,
  TopBannerExternalHandle,
} from '@skatteetaten/ds-layout';

import customLogo from '../../assets/custom-logo.svg';
import { ReactComponent as FlagFinland } from '../../assets/fi-flag.svg';
import { ReactComponent as FlagPlaceholder } from '../../assets/Flag_placeholder.svg';
import skeLogo from '../../assets/ske-logo.svg';

const meta = {
  component: TopBannerExternal,
  title: 'Tester/TopBanner/TopBannerExternal',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    classNames: { table: { disable: true } },
    showSami: { table: { disable: true } },
    defaultLocale: { table: { disable: true } },
    children: {
      control: 'text',
      table: { disable: true },
    },
    skipLink: { table: { disable: true } },
    logo: {
      table: { disable: true },
      control: 'select',
      options: ['', customLogo, skeLogo],
    },
    user: { table: { disable: true } },
    firstColumn: { control: 'text', table: { disable: true } },
    secondColumn: { control: 'text', table: { disable: true } },
    thirdColumn: { control: 'text', table: { disable: true } },
    additionalLanguages: { table: { disable: true } },
    searchContent: { control: 'text', table: { disable: true } },
    // Events
    onSearchClick: { table: { disable: true } },
    onSearch: { table: { disable: true } },
    onLanguageClick: { table: { disable: true } },
    onLogInClick: { table: { disable: true } },
    onLogOutClick: { table: { disable: true } },
    onUserClick: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    chromatic: { disableSnapshot: false },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TopBannerExternal>;
export default meta;
type Story = StoryObj<typeof meta>;

const loginText = dsI18n.t('ds_layout:topbannerbutton.Login');
const logoutText = dsI18n.t('ds_layout:topbannerbutton.Logout');
const themeText = dsI18n.t('ds_layout:topbanner.NavAriaLabel');
const menuText = dsI18n.t('ds_layout:topbannerbutton.Menu');
const searchText = dsI18n.t('ds_layout:topbanner.Search');
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
    chromatic: { disableSnapshot: true },
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
  name: 'With Defaults (A3 delvis, B1, B2, Search B3 delvis)',
  args: {
    ...defaultArgs,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('banner');
    expect(header.tagName).toBe('HEADER');

    const skipLink = canvas.getByRole('link', { name: skipLinkText });
    expect(skipLink).toBeInTheDocument();

    await expect(canvas.getByText(menuText)).toBeInTheDocument();

    await expect(canvas.queryByText(loginText)).not.toBeInTheDocument();

    await expect(canvas.queryByText(logoutText)).not.toBeInTheDocument();

    const searchButton = canvas.queryByRole('button', { name: searchText });
    await expect(searchButton).not.toBeInTheDocument();
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
    chromatic: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', { name: menuText });
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    const menuSvg = within(menuButton).getByRole('img', { hidden: true });
    await expect(menuSvg).toBeInTheDocument();
    await expect(menuSvg).toHaveAttribute('aria-hidden', 'true');
    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    const menuContainer = canvas.getByRole('navigation', {
      name: themeText,
    });
    await expect(menuContainer).toBeInTheDocument();
    await expect(menuContainer.tagName).toBe('NAV');
    await expect(menuContainer).toHaveAttribute('aria-label', themeText);
    await userEvent.click(menuButton);
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
  name: 'With One Column (A5, MainMenu A1)',
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
    await userEvent.click(menuButton);
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
    await userEvent.click(menuButton);
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
    await userEvent.click(menuButton);
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
    await userEvent.click(menuButton);
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
    await userEvent.click(menuButton);
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
    await userEvent.click(menuButton);
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
    await userEvent.click(menuButton);
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
    await userEvent.click(menuButton);
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
    await userEvent.click(menuButton);
  },
} satisfies Story;

export const ClickLangPickerOpenAndClose = {
  name: 'Click LanguagePicker Open And Close (LanguagePicker C2)',
  parameters: {
    chromatic: { disableSnapshot: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const languageButton = canvas.getByRole('button', { name: 'Bokmål Meny' });
    await expect(languageButton).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(languageButton);
    await expect(languageButton).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText('Sámegiella')).toBeInTheDocument();

    await userEvent.keyboard('[Escape]');
    await expect(languageButton).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.queryByText('Sámegiella')).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithExtraLangs = {
  name: 'Extra Languages in LanguagePicker and custom defaultLocale ',
  args: {
    defaultLocale: 'de',
    additionalLanguages: [
      {
        displayName: 'Suomi',
        lang: 'fi',
        flag: FlagFinland,
      },
      {
        displayName: 'Dansk',
        lang: 'da',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'Svenska',
        lang: 'sv',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'íslenska',
        lang: 'is',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'Deutsch',
        lang: 'de',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'Español',
        lang: 'es',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'Français',
        lang: 'fr',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'Italiano',
        lang: 'it',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'Português',
        lang: 'pt',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'Nederlands',
        lang: 'nl',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'Ελληνικά',
        lang: 'el',
        flag: FlagPlaceholder,
      },
      {
        displayName: '中文',
        lang: 'zh',
        flag: FlagPlaceholder,
      },
      {
        displayName: '日本語',
        lang: 'ja',
        flag: FlagPlaceholder,
      },
      {
        displayName: '한국어',
        lang: 'ko',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'العربية',
        lang: 'ar',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'हिन्दी',
        lang: 'hi',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'Türkçe',
        lang: 'tr',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'Polski',
        lang: 'pl',
        flag: FlagPlaceholder,
      },
      {
        displayName: 'עברית',
        lang: 'he',
        flag: FlagPlaceholder,
      },
    ],
  },
  argTypes: {
    additionalLanguages: { table: { disable: false } },
    defaultLocale: { table: { disable: false } },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const languageButton = canvas.getByRole('button', { name: 'Deutsch Meny' });
    await userEvent.click(languageButton);
    const fin = canvas.getByRole('button', { name: 'Suomi' });
    await expect(fin).toBeInTheDocument();
    await expect(fin).toHaveAttribute('lang', 'fi');

    const it = canvas.getByRole('button', { name: 'Italiano' });
    await expect(it).toBeInTheDocument();
    await expect(it).toHaveAttribute('lang', 'it');

    const sv = canvas.getByRole('button', { name: 'Svenska' });
    await expect(sv).toBeInTheDocument();
    await expect(sv).toHaveAttribute('lang', 'sv');

    await userEvent.click(fin);
    await expect(
      canvas.getByRole('button', { name: 'Suomi Meny' })
    ).toBeInTheDocument();
  },
} satisfies Story;

export const ClickSearchOpenAndClose = {
  name: 'Click Search Open And Close (Search B2, B1, B3, A2, A1)',
  args: {
    ...defaultArgs,
    searchContent: 'hei hei',
    firstColumn: (
      <Link href={'#storybook-root'}>
        {'Meny-knapp blir synlig når den har innhold'}
      </Link>
    ),
  },
  parameters: {
    // chromatic: { disableSnapshot: true },
    imageSnapshot: {
      click: [`xpath=//span[text()='Søk']`],
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchButton = canvas.getByRole('button', { name: searchText });
    await expect(searchButton).toHaveAttribute('aria-expanded', 'false');
    const searchSvg = within(searchButton).getByRole('img', { hidden: true });
    await expect(searchSvg).toBeInTheDocument();
    await expect(searchSvg).toHaveAttribute('aria-hidden', 'true');
    await userEvent.click(searchButton);
    await expect(searchButton).toHaveAttribute('aria-expanded', 'true');
    const searchField = canvas.getByRole('searchbox');
    await expect(searchField).toHaveFocus();
    await expect(canvas.getByText('hei hei')).toBeInTheDocument();

    await userEvent.click(searchButton);
    await expect(searchButton).toHaveAttribute('aria-expanded', 'false');
  },
} satisfies Story;

export const LangPickerInMenuWhenLoggedInOnMobile = {
  name: 'LangPicker In Menu When Logged In OnMobile ',
  args: {
    ...defaultArgs,
    searchContent: 'hei hei',
    firstColumn: (
      <Link href={'#storybook-root'}>
        {'Meny-knapp blir synlig når den har innhold'}
      </Link>
    ),
    user: { role: 'meg' },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    viewport: {
      defaultViewport: '--mobile',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const languageButton = canvas.queryByRole('button', {
      name: 'Bokmål Meny',
    });
    await expect(languageButton).not.toBeInTheDocument();

    const menuButton = canvas.getByRole('button', { name: menuText });
    await userEvent.click(menuButton);

    await expect(
      canvas.getByRole('button', { name: 'Bokmål Meny' })
    ).toBeInTheDocument();
  },
} satisfies Story;
