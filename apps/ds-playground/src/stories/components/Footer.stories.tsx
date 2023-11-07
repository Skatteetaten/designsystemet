import { LinkGroup } from '@skatteetaten/ds-buttons';
import { Footer } from '@skatteetaten/ds-layout';
import { Paragraph, Heading } from '@skatteetaten/ds-typography';
import { Meta, StoryFn } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import logo from '../../assets/ske-logo-horizontal-white.png';
import { getVersion } from '../utils/version.utils';

export default {
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
  parameters: {
    version: getVersion('ds-layout'),
  },
} satisfies Meta<typeof Footer>;

export const Default: StoryFn<typeof Footer> = () => (
  <Footer titleFirstColumn={'Om Skatteetaten'} />
);

export const Example: StoryFn<typeof Footer> = () => (
  <Footer
    titleFirstColumn={'Om Skatteetaten'}
    titleSecondColumn={'Følg oss'}
    secondColumn={
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
    }
    titleThirdColumn={'Presse'}
    thirdColumn={
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
    }
  >
    <Footer.LinkFirstColumn href={'#'}>
      {'Jobb i Skatteetaten'}
    </Footer.LinkFirstColumn>
    <Footer.LinkFirstColumn href={'#'}>{'Om oss'}</Footer.LinkFirstColumn>
    <Footer.LinkFirstColumn href={'#'}>
      {'Analyse og rapporter'}
    </Footer.LinkFirstColumn>
    <Footer.LinkFirstColumn href={'#'}>{'Forskning'}</Footer.LinkFirstColumn>
    <Footer.Logo>
      <img className={'logoHeight'} src={logo} alt={'Skatteetaten logo'} />
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
