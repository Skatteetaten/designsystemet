import { LinkGroup } from '@skatteetaten/ds-buttons';
import { GaveArvSVGpath, Icon } from '@skatteetaten/ds-icons';
import { Footer } from '@skatteetaten/ds-layout';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';

export default {
  component: Footer,
  title: 'Tester/Footer',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true }, control: { type: null } },
    contactUsURL: { table: { disable: true } },
    securityURL: { table: { disable: true } },
    accessibilityURL: { table: { disable: true } },
    hideLogo: { table: { disable: true } },
    titleFirstColumn: { table: { disable: true } },
    titleSecondColumn: { table: { disable: true } },
    titleThirdColumn: { table: { disable: true } },
    firstColumn: { table: { disable: true } },
    secondColumn: { table: { disable: true } },
    thirdColumn: { table: { disable: true } },
  },
} as ComponentMeta<typeof Footer>;

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

const defaultArgs = {
  titleFirstColumn: defaultTitleFirstColumn,
};

const Template: ComponentStory<typeof Footer> = (args) => (
  <div data-test-block>
    <Footer {...args} />
  </div>
);

// Når Footer har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLDivElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: { disable: true },
};
WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const footer = canvas.getByRole('contentinfo');
  await expect(footer).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når Footer har en id, så har footer-elementet id'en satt
// Når Footer har en custom className, så har footer-elementet className satt og custom stil vises
// Når Footer har en lang, så har footer-elementet lang satt
// Når Footer har en data-testid, så har footer-elementet data-testid satt
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
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const footer = canvas.getByRole('contentinfo');
  await expect(footer).toHaveAttribute('id', 'htmlId');
  await expect(footer).toHaveClass('dummyClassname');
  await expect(footer).toHaveAttribute('lang', 'nb');
  await expect(footer).toHaveAttribute('data-testid', '123ID');
};

// Når Footer instansieres, får den riktige default-verdier
export const Defaults = Template.bind({});
Defaults.storyName = 'Default (A1, A4, A7, A11, B1)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  titleFirstColumn: { table: { disable: false } },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const footer = canvas.getByRole('contentinfo');
  await expect(footer).toBeInTheDocument();
  await expect(footer.tagName).toBe('FOOTER');
  // eslint-disable-next-line testing-library/no-node-access
  const linkGroup = footer.querySelector('ul');
  await expect(linkGroup).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-node-access
  const logo = footer.querySelector('img');
  await expect(logo).toBeInTheDocument();
  await expect(logo).toHaveAttribute('alt', 'Skatteetaten logo');
  const links = canvas.getAllByRole('link');
  await expect(links[0]).toHaveAttribute(
    'href',
    'https://www.skatteetaten.no/kontakt/'
  );
  await expect(links[1]).toHaveAttribute(
    'href',
    'https://www.skatteetaten.no/om-skatteetaten/sikkerhet/'
  );
  await expect(links[2]).toHaveAttribute('href', 'https://uustatus.no/');
};

// Når Footer overstyrer url-ene, får den riktige href-verdier
export const WithCustomURL = Template.bind({});
WithCustomURL.storyName = 'With Custom URL (A4)';
WithCustomURL.args = {
  ...defaultArgs,
  accessibilityURL: '#root',
  contactUsURL: '#root',
  securityURL: '#root',
};
WithCustomURL.argTypes = {
  accessibilityURL: { table: { disable: false } },
  contactUsURL: { table: { disable: false } },
  securityURL: { table: { disable: false } },
};
WithCustomURL.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const links = canvas.getAllByRole('link');
  for (const link of links) {
    await expect(link).toHaveAttribute('href', '#root');
  }
};

// Når Footer har hideLogo, vises ikke Skatteetatens logo
export const WithHideLogo = Template.bind({});
WithHideLogo.storyName = 'With HideLogo (A5)';
WithHideLogo.args = {
  ...defaultArgs,
  hideLogo: true,
};
WithHideLogo.argTypes = {
  hideLogo: { table: { disable: false } },
};
WithHideLogo.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const footer = canvas.getByRole('contentinfo');
  // eslint-disable-next-line testing-library/no-node-access
  const logo = footer.querySelector('img');
  await expect(logo).not.toBeInTheDocument();
};

const TemplateWithLogo: ComponentStory<typeof Footer> = (args) => (
  <div data-test-block>
    <Footer {...args}>
      <Footer.Logo>
        <Icon variant={'themeIcon'} svgPath={GaveArvSVGpath} />
      </Footer.Logo>
      <Footer.Logo>
        <Icon variant={'themeIcon'} svgPath={GaveArvSVGpath} />
      </Footer.Logo>
    </Footer>
  </div>
);

// Når Footer har logo som children, ser det riktig ut
export const WithCustomLogo = TemplateWithLogo.bind({});
WithCustomLogo.storyName = 'With Custom Logo (A5)';
WithCustomLogo.args = {
  ...defaultArgs,
};
WithCustomLogo.argTypes = {
  children: { table: { disable: false } },
};

const TemplateWithLink: ComponentStory<typeof Footer> = (args) => (
  <div data-test-block>
    <Footer {...args}>
      <Footer.Link href={'#'}>{'Satser'}</Footer.Link>
      <Footer.Link href={'#'}>{'Skjema og tjenester'}</Footer.Link>
      <Footer.Link href={'#'}>{'RSS'}</Footer.Link>
      <Footer.Link href={'#'}>{'Tips oss'}</Footer.Link>
      <Footer.Link href={'#'}>{'Koronatiltak'}</Footer.Link>
    </Footer>
  </div>
);

// Når Footer har lenker, ser det riktig ut
export const WithLinks = TemplateWithLink.bind({});
WithLinks.storyName = 'With Links (A8)';
WithLinks.args = {
  ...defaultArgs,
};
WithLinks.argTypes = {
  children: { table: { disable: false } },
};

// Når Footer har tre kolonner, vises det riktig på breakpoint-xs
export const WithThreeColumnsBreakpointXs = Template.bind({});
WithThreeColumnsBreakpointXs.storyName =
  'With Three Columns Breakpoint Xs (A3, A6, A8)';
WithThreeColumnsBreakpointXs.args = {
  ...defaultArgs,
  firstColumn: defaultFirstColumn,
  secondColumn: defaultSecondColumn,
  thirdColumn: defaultThirdColumn,
  titleSecondColumn: defaultTitleSecondColumn,
  titleThirdColumn: defaultTitleThirdColumn,
};
WithThreeColumnsBreakpointXs.argTypes = {
  firstColumn: { table: { disable: false } },
  secondColumn: { table: { disable: false } },
  thirdColumn: { table: { disable: false } },
  titleSecondColumn: { table: { disable: false } },
  titleThirdColumn: { table: { disable: false } },
};
WithThreeColumnsBreakpointXs.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når Footer har tre kolonner, vises det riktig på breakpoint-s
export const WithThreeColumnsBreakpointS = Template.bind({});
WithThreeColumnsBreakpointS.storyName =
  'With Three Columns Breakpoint S (A3, A6, A8)';
WithThreeColumnsBreakpointS.args = {
  ...defaultArgs,
  firstColumn: defaultFirstColumn,
  secondColumn: defaultSecondColumn,
  thirdColumn: defaultThirdColumn,
  titleSecondColumn: defaultTitleSecondColumn,
  titleThirdColumn: defaultTitleThirdColumn,
};
WithThreeColumnsBreakpointS.argTypes = {
  firstColumn: { table: { disable: false } },
  secondColumn: { table: { disable: false } },
  thirdColumn: { table: { disable: false } },
  titleSecondColumn: { table: { disable: false } },
  titleThirdColumn: { table: { disable: false } },
};
WithThreeColumnsBreakpointS.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-s',
  },
};

// Når Footer har tre kolonner, vises det riktig på breakpoint-m
export const WithThreeColumnsBreakpointM = Template.bind({});
WithThreeColumnsBreakpointM.storyName =
  'With Three Columns Breakpoint M (A3, A6, A8)';
WithThreeColumnsBreakpointM.args = {
  ...defaultArgs,
  firstColumn: defaultFirstColumn,
  secondColumn: defaultSecondColumn,
  thirdColumn: defaultThirdColumn,
  titleSecondColumn: defaultTitleSecondColumn,
  titleThirdColumn: defaultTitleThirdColumn,
};
WithThreeColumnsBreakpointM.argTypes = {
  firstColumn: { table: { disable: false } },
  secondColumn: { table: { disable: false } },
  thirdColumn: { table: { disable: false } },
  titleSecondColumn: { table: { disable: false } },
  titleThirdColumn: { table: { disable: false } },
};
WithThreeColumnsBreakpointM.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-m',
  },
};

// Når Footer har tre kolonner, vises det riktig på breakpoint-l og oppover
export const WithThreeColumnsBreakpointL = Template.bind({});
WithThreeColumnsBreakpointL.storyName =
  'With Three Columns Breakpoint L (A3, A6, A8)';
WithThreeColumnsBreakpointL.args = {
  ...defaultArgs,
  firstColumn: defaultFirstColumn,
  secondColumn: defaultSecondColumn,
  thirdColumn: defaultThirdColumn,
  titleSecondColumn: defaultTitleSecondColumn,
  titleThirdColumn: defaultTitleThirdColumn,
};
WithThreeColumnsBreakpointL.argTypes = {
  firstColumn: { table: { disable: false } },
  secondColumn: { table: { disable: false } },
  thirdColumn: { table: { disable: false } },
  titleSecondColumn: { table: { disable: false } },
  titleThirdColumn: { table: { disable: false } },
};
WithThreeColumnsBreakpointL.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-l',
  },
};

// Når Footer har to kolonner, vises det riktig på breakpoint-xs
export const WithTwoColumnsBreakpointXs = Template.bind({});
WithTwoColumnsBreakpointXs.storyName = 'With Two Columns Breakpoint Xs (A3)';
WithTwoColumnsBreakpointXs.args = {
  ...defaultArgs,
  firstColumn: defaultFirstColumn,
  secondColumn: defaultSecondColumn,
  titleSecondColumn: defaultTitleSecondColumn,
};
WithTwoColumnsBreakpointXs.argTypes = {
  firstColumn: { table: { disable: false } },
  secondColumn: { table: { disable: false } },
  titleSecondColumn: { table: { disable: false } },
};
WithTwoColumnsBreakpointXs.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når Footer har to kolonner, vises det riktig på breakpoint-s og oppover
export const WithTwoColumnsBreakpointS = Template.bind({});
WithTwoColumnsBreakpointS.storyName = 'With Two Columns Breakpoint S (A3)';
WithTwoColumnsBreakpointS.args = {
  ...defaultArgs,
  firstColumn: defaultFirstColumn,
  secondColumn: defaultSecondColumn,
  titleSecondColumn: defaultTitleSecondColumn,
};
WithTwoColumnsBreakpointS.argTypes = {
  firstColumn: { table: { disable: false } },
  secondColumn: { table: { disable: false } },
  titleSecondColumn: { table: { disable: false } },
};
WithTwoColumnsBreakpointS.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-s',
  },
};

// Når Footer har to kolonner, vises det riktig på breakpoint-m og oppover
export const WithTwoColumnsBreakpointM = Template.bind({});
WithTwoColumnsBreakpointM.storyName = 'With Two Columns Breakpoint M (A3)';
WithTwoColumnsBreakpointM.args = {
  ...defaultArgs,
  firstColumn: defaultFirstColumn,
  secondColumn: defaultSecondColumn,
  titleSecondColumn: defaultTitleSecondColumn,
};
WithTwoColumnsBreakpointM.argTypes = {
  firstColumn: { table: { disable: false } },
  secondColumn: { table: { disable: false } },
  titleSecondColumn: { table: { disable: false } },
};
WithTwoColumnsBreakpointM.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-m',
  },
};

// Når Footer har en kolonne, vises det riktig på breakpoint-xs
export const WithOneColumnBreakpointXs = Template.bind({});
WithOneColumnBreakpointXs.storyName = 'With One Column Breakpoint Xs (A3, A9)';
WithOneColumnBreakpointXs.args = {
  ...defaultArgs,
  firstColumn: defaultFirstColumn,
};
WithOneColumnBreakpointXs.argTypes = {
  firstColumn: { table: { disable: false } },
};
WithOneColumnBreakpointXs.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når Footer har en kolonne, vises det riktig på breakpoint-s
export const WithOneColumnBreakpointS = Template.bind({});
WithOneColumnBreakpointS.storyName = 'With One Column Breakpoint S (A3, A9)';
WithOneColumnBreakpointS.args = {
  ...defaultArgs,
  firstColumn: defaultFirstColumn,
};
WithOneColumnBreakpointS.argTypes = {
  firstColumn: { table: { disable: false } },
};
WithOneColumnBreakpointS.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-s',
  },
};

// Når Footer har en kolonne, vises det riktig på breakpoint-m og oppover
export const WithOneColumnBreakpointM = Template.bind({});
WithOneColumnBreakpointM.storyName = 'With One Column Breakpoint M (A3, A9)';
WithOneColumnBreakpointM.args = {
  ...defaultArgs,
  firstColumn: defaultFirstColumn,
};
WithOneColumnBreakpointM.argTypes = {
  firstColumn: { table: { disable: false } },
};
WithOneColumnBreakpointM.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-m',
  },
};
