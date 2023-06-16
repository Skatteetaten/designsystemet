import { LinkGroup } from '@skatteetaten/ds-buttons';
import { Footer } from '@skatteetaten/ds-layout';
import { Paragraph, Heading } from '@skatteetaten/ds-typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Footer,
  title: 'Komponenter/Footer',
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
} as ComponentMeta<typeof Footer>;

const TemplateDefault: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args}>
    <Footer.Link href={'#'}>{'Satser'}</Footer.Link>
    <Footer.Link href={'#'}>{'Skjema og tjenester'}</Footer.Link>
    <Footer.Link href={'#'}>{'RSS'}</Footer.Link>
    <Footer.Link href={'#'}>{'Tips oss'}</Footer.Link>
    <Footer.Link href={'#'}>{'Koronatiltak'}</Footer.Link>
  </Footer>
);

export const FooterDefault: ComponentStory<typeof Footer> =
  TemplateDefault.bind({});
export const FooterExample: ComponentStory<typeof Footer> =
  TemplateDefault.bind({});
FooterDefault.storyName = 'Default';
FooterExample.storyName = 'Example';
FooterExample.parameters = {
  controls: { disabled: true },
};

FooterDefault.args = {
  titleFirstColumn: 'Om skatteetaten',
};
FooterExample.args = {
  titleFirstColumn: 'Om skatteetaten',
  firstColumn: (
    <LinkGroup color={'white'}>
      <LinkGroup.Link href={'#'}>{'Jobb i Skatteetaten'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Om oss'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Analyse og rapporter'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Forskning'}</LinkGroup.Link>
    </LinkGroup>
  ),
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
};
