import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { GaveArvSVGpath, Icon } from '@skatteetaten/ds-icons';
import { Footer, FooterProps } from '@skatteetaten/ds-layout';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import logo from '../../assets/ske-logo-horizontal-white.png';

const meta = {
  component: Footer,
  title: 'Tester/Footer',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true }, control: { disable: true } },
    contactUsURL: { table: { disable: true } },
    securityURL: { table: { disable: true } },
    accessibilityURL: { table: { disable: true } },
    hideLogo: { table: { disable: true } },
    hideDefaultLinks: { table: { disable: true } },
    titleFirstColumn: { table: { disable: true } },
    titleSecondColumn: { table: { disable: true } },
    titleThirdColumn: { table: { disable: true } },
    firstColumn: { table: { disable: true } },
    secondColumn: { table: { disable: true } },
    thirdColumn: { table: { disable: true } },
    openDefaultLinksInNewTab: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    layout: 'fullscreen',
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultTitleFirstColumn = 'Om Skatteetaten';
const defaultFirstColumn = (
  <>
    <LinkGroup color={'white'} hasSpacing>
      <LinkGroup.Link href={'#'}>{'Jobb i Skatteetaten'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Om oss'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Analyse og rapporter'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Forskning'}</LinkGroup.Link>
    </LinkGroup>
    <Paragraph>
      {'Legg inn en lang setning for å sjekke om kolonnebredden stemmer'}
    </Paragraph>
  </>
);
const defaultTitleSecondColumn = 'Følg oss';
const defaultSecondColumn = (
  <>
    <Paragraph hasSpacing>{'Du kan kontakte oss i sosiale medier.'}</Paragraph>
    <LinkGroup color={'white'}>
      <LinkGroup.Link href={'#'}>
        {'Se alle Skatteetatens kontoer'}
      </LinkGroup.Link>
    </LinkGroup>
  </>
);
const defaultTitleThirdColumn = 'Presse';
const defaultThirdColumn = (
  <>
    <Paragraph hasSpacing>
      {'Pressemeldinger, pressekontaker og annen informasjon for journalister.'}
    </Paragraph>
    <LinkGroup color={'white'} hasSpacing>
      <LinkGroup.Link href={'#'}>{'Se vårt presserom'}</LinkGroup.Link>
    </LinkGroup>
    <Heading as={'h2'} level={3} hasSpacing>
      {'Bruke data fra Skatteetaten'}
    </Heading>
    <Paragraph hasSpacing>
      {
        'Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester.'
      }
    </Paragraph>
    <LinkGroup color={'white'}>
      <LinkGroup.Link href={'#'}>
        {'Hvordan få tilgang til data'}
      </LinkGroup.Link>
    </LinkGroup>
  </>
);

const defaultArgs: FooterProps = {
  titleFirstColumn: defaultTitleFirstColumn,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
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
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const footer = canvas.getByRole('contentinfo');
    await expect(footer).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
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
    const footer = canvas.getByRole('contentinfo');
    await expect(footer).toHaveAttribute('id', 'htmlId');
    await expect(footer).toHaveClass('dummyClassname');
    await expect(footer).toHaveAttribute('lang', 'nb');
    await expect(footer).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Default (A1, A4, A7, A11, B1)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    titleFirstColumn: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const footer = canvas.getByRole('contentinfo');
    await expect(footer).toBeInTheDocument();
    await expect(footer.tagName).toBe('FOOTER');

    const linkGroup = footer.querySelector('ul');
    await expect(linkGroup).toBeInTheDocument();

    const logo = footer.querySelector('img');
    await expect(logo).toBeInTheDocument();
    await expect(logo).toHaveAttribute(
      'alt',
      dsI18n.t('Shared:shared.SkeLogoImageText')
    );
    const links = canvas.getAllByRole('link');
    await expect(links[0]).toHaveAttribute(
      'href',
      dsI18n.t('Shared:shared.ContactUsURL')
    );
    await expect(links[1]).toHaveAttribute(
      'href',
      dsI18n.t('Shared:shared.SecurityAndPrivacyURL')
    );
    await expect(links[2]).toHaveAttribute(
      'href',
      dsI18n.t('Shared:shared.AccessibilityStatementURL')
    );
  },
} satisfies Story;

// Når Footer overstyrer url-ene, får den riktige href-verdier
export const WithCustomURL = {
  name: 'With Custom URL (A4)',
  args: {
    ...defaultArgs,
    accessibilityURL: '#root',
    contactUsURL: '#root',
    securityURL: '#root',
  },
  argTypes: {
    accessibilityURL: { table: { disable: false } },
    contactUsURL: { table: { disable: false } },
    securityURL: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');
    for (const link of links) {
      await expect(link).toHaveAttribute('href', '#root');
    }
  },
} satisfies Story;

export const WithHideDefaultLinks = {
  name: 'With HideDefaultLinks (A4)',
  args: {
    ...defaultArgs,
    hideDefaultLinks: true,
    children: (
      <Footer.LinkFirstColumn href={'#'}>{'skattekart'}</Footer.LinkFirstColumn>
    ),
  },
  argTypes: {
    hideDefaultLinks: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(
      canvas.queryByRole('link', {
        name: dsI18n.t('Shared:shared.ContactUs'),
      })
    ).not.toBeInTheDocument();
    await expect(
      canvas.queryByRole('link', {
        name: dsI18n.t('Shared:shared.SecurityAndPrivacy'),
      })
    ).not.toBeInTheDocument();
    await expect(
      canvas.queryByRole('link', {
        name: dsI18n.t('Shared:shared.AccessibilityStatementURL'),
      })
    ).not.toBeInTheDocument();
    await expect(
      canvas.getByRole('link', {
        name: 'skattekart',
      })
    ).toBeInTheDocument();
  },
} satisfies Story;

// Når Footer har hideLogo, vises ikke Skatteetatens logo
export const WithHideLogo = {
  name: 'With HideLogo (A5)',
  args: {
    ...defaultArgs,
    hideLogo: true,
  },
  argTypes: {
    hideLogo: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const footer = canvas.getByRole('contentinfo');

    const logo = footer.querySelector('img');
    await expect(logo).not.toBeInTheDocument();
  },
} satisfies Story;

const TemplateWithLogo: StoryFn<typeof Footer> = (args) => (
  <Footer {...args}>
    <Footer.Logo>
      <img className={'logoHeight'} src={logo} alt={'Skatteetaten logo'} />
    </Footer.Logo>
    <Footer.Logo>
      <Icon variant={'themeIcon'} svgPath={GaveArvSVGpath} />
    </Footer.Logo>
  </Footer>
);

// Når Footer har logo som children, ser det riktig ut
export const WithCustomLogo = {
  render: TemplateWithLogo,
  name: 'With Custom Logo (A5)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
} satisfies Story;

const TemplateWithLink: StoryFn<typeof Footer> = (args) => (
  <Footer {...args}>
    <Footer.Link href={'#'} className={'dummyClassname'}>
      {'Satser'}
    </Footer.Link>
    <Footer.Link href={'#'} isExternal>
      {'Skjema og tjenester'}
    </Footer.Link>
    <Footer.Link href={'#'}>{'RSS'}</Footer.Link>
    <Footer.Link href={'#'}>{'Tips oss'}</Footer.Link>
    <Footer.Link href={'#'}>{'Koronatiltak'}</Footer.Link>
  </Footer>
);

// Når Footer har lenker, ser det riktig ut
export const WithLinks = {
  render: TemplateWithLink,
  name: 'With Links (A8)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');
    await expect(links[3]).toHaveClass('dummyClassname');

    const externalLink = links[4].querySelector('svg');
    await expect(externalLink).toBeInTheDocument();
  },
} satisfies Story;

// Når Footer har tre kolonner, vises det riktig på breakpoint-xs
export const WithThreeColumnsBreakpointXs = {
  name: 'With Three Columns Breakpoint Xs (A3, A6, A8)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    thirdColumn: defaultThirdColumn,
    titleSecondColumn: defaultTitleSecondColumn,
    titleThirdColumn: defaultTitleThirdColumn,
  },
  argTypes: {
    firstColumn: { table: { disable: false } },
    secondColumn: { table: { disable: false } },
    thirdColumn: { table: { disable: false } },
    titleSecondColumn: { table: { disable: false } },
    titleThirdColumn: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs',
    },
  },
} satisfies Story;

// Når Footer har tre kolonner, vises det riktig på breakpoint-s
export const WithThreeColumnsBreakpointS = {
  name: 'With Three Columns Breakpoint S (A3, A6, A8)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    thirdColumn: defaultThirdColumn,
    titleSecondColumn: defaultTitleSecondColumn,
    titleThirdColumn: defaultTitleThirdColumn,
  },
  argTypes: {
    firstColumn: { table: { disable: false } },
    secondColumn: { table: { disable: false } },
    thirdColumn: { table: { disable: false } },
    titleSecondColumn: { table: { disable: false } },
    titleThirdColumn: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-s',
    },
  },
} satisfies Story;

// Når Footer har tre kolonner, vises det riktig på breakpoint-m
export const WithThreeColumnsBreakpointM = {
  name: 'With Three Columns Breakpoint M (A3, A6, A8)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    thirdColumn: defaultThirdColumn,
    titleSecondColumn: defaultTitleSecondColumn,
    titleThirdColumn: defaultTitleThirdColumn,
  },
  argTypes: {
    firstColumn: { table: { disable: false } },
    secondColumn: { table: { disable: false } },
    thirdColumn: { table: { disable: false } },
    titleSecondColumn: { table: { disable: false } },
    titleThirdColumn: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-m',
    },
  },
} satisfies Story;

// Når Footer har tre kolonner, vises det riktig på breakpoint-l og oppover
export const WithThreeColumnsBreakpointL = {
  name: 'With Three Columns Breakpoint L (A3, A6, A8)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    thirdColumn: defaultThirdColumn,
    titleSecondColumn: defaultTitleSecondColumn,
    titleThirdColumn: defaultTitleThirdColumn,
  },
  argTypes: {
    firstColumn: { table: { disable: false } },
    secondColumn: { table: { disable: false } },
    thirdColumn: { table: { disable: false } },
    titleSecondColumn: { table: { disable: false } },
    titleThirdColumn: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-l',
    },
  },
} satisfies Story;

// Når Footer har to kolonner, vises det riktig på breakpoint-xs
export const WithTwoColumnsBreakpointXs = {
  name: 'With Two Columns Breakpoint Xs (A3)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    titleSecondColumn: defaultTitleSecondColumn,
  },
  argTypes: {
    firstColumn: { table: { disable: false } },
    secondColumn: { table: { disable: false } },
    titleSecondColumn: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs',
    },
  },
} satisfies Story;

// Når Footer har to kolonner, vises det riktig på breakpoint-s og oppover
export const WithTwoColumnsBreakpointS = {
  name: 'With Two Columns Breakpoint S (A3)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    titleSecondColumn: defaultTitleSecondColumn,
  },
  argTypes: {
    firstColumn: { table: { disable: false } },
    secondColumn: { table: { disable: false } },
    titleSecondColumn: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-s',
    },
  },
} satisfies Story;

// Når Footer har to kolonner, vises det riktig på breakpoint-m og oppover
export const WithTwoColumnsBreakpointM = {
  name: 'With Two Columns Breakpoint M (A3)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    titleSecondColumn: defaultTitleSecondColumn,
  },
  argTypes: {
    firstColumn: { table: { disable: false } },
    secondColumn: { table: { disable: false } },
    titleSecondColumn: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-m',
    },
  },
} satisfies Story;

// Når Footer har en kolonne, vises det riktig på breakpoint-xs
export const WithOneColumnBreakpointXs = {
  name: 'With One Column Breakpoint Xs (A3, A9)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
  },
  argTypes: {
    firstColumn: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs',
    },
  },
} satisfies Story;

// Når Footer har en kolonne, vises det riktig på breakpoint-s
export const WithOneColumnBreakpointS = {
  name: 'With One Column Breakpoint S (A3, A9)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
  },
  argTypes: {
    firstColumn: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-s',
    },
  },
} satisfies Story;

// Når Footer har en kolonne, vises det riktig på breakpoint-m og oppover
export const WithOneColumnBreakpointM = {
  name: 'With One Column Breakpoint M (A3, A9)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
  },
  argTypes: {
    firstColumn: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-m',
    },
  },
} satisfies Story;

// Når Footer har en kolonne, vises det riktig på breakpoint-m og oppover
export const WithDefaultLinksInNewTab = {
  name: 'With default links in new tab false (A4)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    openDefaultLinksInNewTab: false,
  },
  argTypes: {
    openDefaultLinksInNewTab: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    console.log(dsI18n.t('Shared:shared.NewTab'));
    await expect(
      canvas.queryByText(dsI18n.t('Shared:shared.NewTab'), { exact: false })
    ).not.toBeInTheDocument();
  },
} satisfies Story;
