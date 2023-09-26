import { LinkGroup } from '@skatteetaten/ds-buttons';
import { Footer } from '@skatteetaten/ds-layout';
import { Paragraph, Heading } from '@skatteetaten/ds-typography';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import logo from '../__tests__/testUtils/Skatteetaten-Logo-Horisontal-RGB-Hvit.png';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Footer,
  title: 'Komponenter/Footer/Footer',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    contactUsURL: { table: { category: category.props } },
    securityURL: { table: { category: category.props } },
    accessibilityURL: { table: { category: category.props } },
    hideLogo: { table: { category: category.props } },
    titleFirstColumn: { table: { category: category.props } },
    titleSecondColumn: { table: { category: category.props } },
    titleThirdColumn: { table: { category: category.props } },
    firstColumn: { table: { category: category.props } },
    secondColumn: { table: { category: category.props } },
    thirdColumn: { table: { category: category.props } },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-layout'),
  },
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateExample: StoryFn<typeof Footer> = (args) => (
  <Footer {...args}>
    <Footer.LinkFirstColumn href={'#'}>
      {'Jobb i Skatteetaten'}
    </Footer.LinkFirstColumn>
    <Footer.LinkFirstColumn href={'#'}>{'Om oss'}</Footer.LinkFirstColumn>
    <Footer.LinkFirstColumn href={'#'}>
      {'Analyse og rapporter'}
    </Footer.LinkFirstColumn>
    <Footer.LinkFirstColumn href={'#'}>{'Forskning'}</Footer.LinkFirstColumn>
    <Footer.Logo>
      <img src={logo} alt={'Skatteetaten logo'} />
    </Footer.Logo>
    <Footer.Link href={'#'}>{'Satser'}</Footer.Link>
    <Footer.Link href={'#'}>{'Skjema og tjenester'}</Footer.Link>
    <Footer.Link href={'#'}>{'RSS'}</Footer.Link>
    <Footer.Link href={'#'}>{'Tips oss'}</Footer.Link>
    <Footer.Link href={'#'} isExternal>
      {'Koronatiltak'}
    </Footer.Link>
  </Footer>
);

export const FooterDefault = {
  name: 'Default',
  args: {
    titleFirstColumn: 'Om Skatteetaten',
    firstColumn: '',
    secondColumn: '',
    thirdColumn: '',
  },
} satisfies Story;

export const FooterExample = {
  render: TemplateExample,
  name: 'Example',
  parameters: {
    controls: { disable: true },
  },
  args: {
    titleFirstColumn: 'Om Skatteetaten',
    titleSecondColumn: 'Følg oss',
    secondColumn: (
      <>
        <Paragraph hasSpacing>
          {'Du kan kontakte oss i sosiale medier.'}
        </Paragraph>
        <LinkGroup color={'white'}>
          <LinkGroup.Link href={'#'}>
            {'Se alle Skatteetatens kontoer'}
          </LinkGroup.Link>
        </LinkGroup>
      </>
    ),
    titleThirdColumn: 'Presse',
    thirdColumn: (
      <>
        <Paragraph hasSpacing>
          {
            'Pressemeldinger, pressekontaker og annen informasjon for journalister.'
          }
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
    ),
  },
} satisfies Story;
