import { JSX } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { Footer } from '@skatteetaten/ds-layout';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

export default function FooterWithCustomLinksStateExample(): JSX.Element {
  return (
    <Footer
      titleFirstColumn={'Om Skatteetaten'}
      titleSecondColumn={'Følg oss'}
      titleThirdColumn={'Presse'}
      secondColumn={
        <LinkGroup color={'white'}>
          <LinkGroup.Link href={'#'}>
            {'Se våre kontoer i sosiale medier'}
          </LinkGroup.Link>
        </LinkGroup>
      }
      thirdColumn={
        <>
          <Paragraph hasSpacing>
            {'Pressemeldinger, pressekontakter og annen informasjon for'}
            {'journalister.'}
          </Paragraph>
          <LinkGroup color={'white'} hasSpacing>
            <LinkGroup.Link href={'#'}>{'Se vart presserom'}</LinkGroup.Link>
          </LinkGroup>
          <Heading as={'h2'} level={3} hasSpacing>
            {'Bruke data fra Skatteetaten'}
          </Heading>
          <Paragraph hasSpacing>
            {'Skatteetaten deler data som andre virksomheter og etater kan'}
            {'gjenbruke for å forenkle og effektivisere eksisterende og nye'}
            {'digitale tjenester.'}
          </Paragraph>
          <LinkGroup color={'white'}>
            <LinkGroup.Link href={'#'}>
              {'Hvordan få tilgang til data'}
            </LinkGroup.Link>
          </LinkGroup>
        </>
      }
      openDefaultLinksInNewTab={false}
    >
      <Footer.LinkFirstColumn href={'#'}>
        {'Jobb i Skatteetaten'}
      </Footer.LinkFirstColumn>
      <Footer.LinkFirstColumn href={'#'}>{'Om oss'}</Footer.LinkFirstColumn>
      <Footer.LinkFirstColumn href={'#'}>
        {'Analyse og rapporter'}
      </Footer.LinkFirstColumn>
      <Footer.LinkFirstColumn href={'#'}>{'Forskning'}</Footer.LinkFirstColumn>
      <Footer.Link href={'#'}>{'Satser'}</Footer.Link>
      <Footer.Link href={'#'}>{'Skjema og tjenester'}</Footer.Link>
      <Footer.Link href={'#'}>{'RSS'}</Footer.Link>
      <Footer.Link href={'#'}>{'Tips oss'}</Footer.Link>
      <Footer.Link href={'#'} isExternal>
        {'Koronatiltak'}
      </Footer.Link>
    </Footer>
  );
}
