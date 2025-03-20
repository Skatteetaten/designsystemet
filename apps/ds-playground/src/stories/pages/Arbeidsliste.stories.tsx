import type { JSX } from 'react';

import {
  Button,
  IconButton,
  InlineButton,
  Link,
} from '@skatteetaten/ds-buttons';
import { Accordion } from '@skatteetaten/ds-collections';
import { Card, DescriptionList } from '@skatteetaten/ds-content';
import { RadioGroup } from '@skatteetaten/ds-forms';
import {
  AddSVGpath,
  ArrowForwardSVGpath,
  BookOpenSVGpath,
  ChevronLeftSVGpath,
  CompanySVGpath,
  CopySVGpath,
  DescriptionSVGpath,
  HelpFilledSVGpath,
  SettingsSVGpath,
  PercentSVGpath,
} from '@skatteetaten/ds-icons';
import { TopBannerInternal } from '@skatteetaten/ds-layout';
import { Breadcrumbs } from '@skatteetaten/ds-navigation';
import { Tag } from '@skatteetaten/ds-status';
import { Table } from '@skatteetaten/ds-table';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './Arbeidsliste.module.css';

export default {
  title: 'Sidetyper/Intern/Arbeidsliste',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

export const Arbeidsliste = (): JSX.Element => (
  <>
    <TopBannerInternal
      title={'MVA-sak'}
      logoHref={'/'}
      logoAltText={'Til startsiden designsystemet test app'}
      user={'Etternavnesen Fornavn'}
    >
      <InlineButton svgPath={HelpFilledSVGpath} brightness={'light'}>
        {'Hjelp'}
      </InlineButton>
      <InlineButton svgPath={SettingsSVGpath} brightness={'light'}>
        {'Tilpass'}
      </InlineButton>
    </TopBannerInternal>
    <Breadcrumbs className={styles.breadcrumbs}>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>{'Arbeidsliste'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>
            {'PIANO, MALTE FJELLVEGGER OG AMBOLTER AS'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>
            {'Vurdere levert MVA-melding'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
    <div className={styles.wrapperInternalLayout}>
      <aside className={styles.aside}>
        <Accordion>
          <Accordion.Item
            classNames={{ content: styles.noMargin }}
            title={'Om virksomheten'}
            svgPath={CompanySVGpath}
            isDefaultExpanded
          >
            <DescriptionList termWeight={'regular'}>
              <DescriptionList.Element term={'Navn'}>
                {'PIANO, MALTE FJELLVEGGER OG AMBOLTER AS'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Org.nr.'}>
                {'999 999 998'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Forretningsadresse'}>
                {'Adresseveien 1, 1010 Oslo'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Telefonnummer'}>
                {'+47 99 99 99 99'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'E-post'}>
                {'epost@epost.no'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Registrert ER'}>
                {'14.07.2010'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Status'}>
                {'<status fra enhetsregisteret>'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Org.form'}>
                {'<fra hovedenhet> f.eks. AS'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Næringskode'}>
                {'65.102 <Navn på næringskode> (med fler, hvis fler)'}
              </DescriptionList.Element>
            </DescriptionList>
            <Link className={styles.block} href={'#'} svgPath={CompanySVGpath}>
              {'Gå til hovedside virksomhet'}
            </Link>
            <Link className={styles.block} href={'#'} svgPath={BookOpenSVGpath}>
              {'Gå til sakshistorikk'}
            </Link>
            <Link
              className={styles.block}
              href={'#'}
              svgPath={ArrowForwardSVGpath}
              isExternal
            >
              {'Se virksomheten i VIS'}
            </Link>
          </Accordion.Item>
          <Accordion.Item title={'Mva-registret (0)'} svgPath={PercentSVGpath}>
            <em>{'Ingenting her'}</em>
          </Accordion.Item>
          <Accordion.Item title={'Notater'} svgPath={DescriptionSVGpath}>
            <em>{'Notater her'}</em>
          </Accordion.Item>
          <Accordion.Item title={'Saker'} svgPath={BookOpenSVGpath}>
            <em>{'Saker her'}</em>
          </Accordion.Item>
        </Accordion>
      </aside>
      <main className={styles.main}>
        <Heading as={'h1'} level={2} hasSpacing>
          <span className={styles.topHeading}>{'Arbeidsoppgave'}</span>
          {'Mva-melding - Vurdere levert mva-melding'}
        </Heading>
        <ul className={styles.listRow} aria-label={'Oppgaver'}>
          <li>
            <InlineButton svgPath={AddSVGpath}>
              {'Ta arbeidsoppgave'}
            </InlineButton>
          </li>
          <li>
            <InlineButton svgPath={ChevronLeftSVGpath}>
              {'Frigi arbeidsoppgave'}
            </InlineButton>
          </li>
          <li>
            <InlineButton svgPath={ArrowForwardSVGpath}>
              {'Tildel arbeidsoppgave'}
            </InlineButton>
          </li>
        </ul>

        <DescriptionList
          descriptionDirection={'vertical'}
          variant={'horizontal'}
          termWeight={'regular'}
          descriptionWeight={'bold'}
          hasSpacing
        >
          <DescriptionList.Element term={'Frist for å løse oppgave'}>
            {'02.02.2009'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Saksbehandler'}>
            {'Krystall Pepsi Johnsen'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Status'}>
            {'Under arbeid'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Saksnummer'}>
            <Link href={'#'}>{'2024-999999'}</Link>
            <IconButton
              svgPath={CopySVGpath}
              title={'Kopier saksnummeret'}
              size={'extraSmall'}
              onClick={() => {
                navigator.clipboard.writeText('2024-999999');
              }}
            />
          </DescriptionList.Element>
        </DescriptionList>
        <Paragraph hasSpacing>
          {
            'Kort introduksjon av arbeidsoppgaven som forteller hva som er utgangspunktet og målet til arbeidsoppgaven. Kort introduksjon av arbeidsoppgaven som forteller hva som er utgangspunktet og målet til arbeidsoppgaven.'
          }
        </Paragraph>
        <div className={styles.tagRow}>
          <Tag color={'forest'}>{'[Årsak til arbeidsoppgave]'}</Tag>
          <Tag color={'forest'}>{'[Annen årsak'}</Tag>
          <Tag color={'forest'}>{'[Andre årsaker'}</Tag>
          <Tag color={'forest'}>{'[Annen årsak'}</Tag>
        </div>

        <Accordion className={styles.marginBottomL}>
          <Accordion.Item title={'Nøkkelopplysninger'}>
            <Card color={'graphite'} className={styles.card}>
              <Card.Content className={styles.cardContent}>
                <Heading as={'h2'} level={4}>
                  {'Klagen gjelder følgende vedtak'}
                </Heading>
                <Table caption={'Oversikt over arbeidsoppgaven'} hasFullWidth>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>{'Tittel'}</Table.HeaderCell>
                      <Table.HeaderCell>{'Periode'}</Table.HeaderCell>
                      <Table.HeaderCell>
                        {'Påklagd saksnummer'}
                      </Table.HeaderCell>
                      <Table.HeaderCell>{'Vedtaksdato'}</Table.HeaderCell>
                      <Table.HeaderCell>{'Klagefrist'}</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.DataCell>{'Vedtak om tvangsmulkt'}</Table.DataCell>
                      <Table.DataCell>
                        {'Mars-apr-2023 alminnelig'}
                      </Table.DataCell>
                      <Table.DataCell>{'P-2024/00000351'}</Table.DataCell>
                      <Table.DataCell>{'22.08.2024'}</Table.DataCell>
                      <Table.DataCell>{'Påklaget etter frist'}</Table.DataCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.DataCell>{'Vedtak om noe annet'}</Table.DataCell>
                      <Table.DataCell>
                        {'Mars-apr-2024 alminnelig'}
                      </Table.DataCell>
                      <Table.DataCell>{'P-2024/00000352'}</Table.DataCell>
                      <Table.DataCell>{'23.08.2024'}</Table.DataCell>
                      <Table.DataCell>
                        {'Påklaget etter fristen'}
                      </Table.DataCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.DataCell>{'Vedtak om tvang'}</Table.DataCell>
                      <Table.DataCell>
                        {'Jun-jul-2023 alminnelig'}
                      </Table.DataCell>
                      <Table.DataCell>{'P-2024/00000353'}</Table.DataCell>
                      <Table.DataCell>{'24.08.2024'}</Table.DataCell>
                      <Table.DataCell>{'Påklaget før fristen'}</Table.DataCell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card.Content>
            </Card>
          </Accordion.Item>
          <Accordion.Item
            title={
              'Levert MVA-melding som vurderes for mai-juni 2024, alminnelig'
            }
            svgPath={PercentSVGpath}
          >
            <em>{'Ingenting her'}</em>
          </Accordion.Item>
          <Accordion.Item title={'Versjonshistorikk og terminsammendrag'}>
            <em>{'Historikk her'}</em>
          </Accordion.Item>
          <Accordion.Item
            title={'Meldinger fra Skatteetaten og tilbakemeldinger'}
          >
            <em>{'Meldinger her'}</em>
          </Accordion.Item>
          <Accordion.Item title={'Kommentarer'}>
            <em>{'Kommentarer her'}</em>
          </Accordion.Item>
        </Accordion>
        <Heading as={'h2'} level={3} hasSpacing>
          {'Saksbehandling'}
        </Heading>
        <RadioGroup legend={'Valg for arbeidsoppgaven'} selectedValue={4}>
          <RadioGroup.Radio description={'Description of option'}>
            {'Radioknapp nummer en'}
          </RadioGroup.Radio>
          <RadioGroup.Radio description={'En kort beskrivelse'}>
            {'Radioknapp to'}
          </RadioGroup.Radio>
          <RadioGroup.Radio description={'Beskrivelse av option tre'}>
            {'Radioknapp tre'}
          </RadioGroup.Radio>
          <RadioGroup.Radio
            value={4}
            description={'Description of option fire'}
          >
            {'Radioknapp fire'}
          </RadioGroup.Radio>
        </RadioGroup>
        <Button>{'Fullfør arbeidsoppgaven'}</Button>
      </main>
    </div>
  </>
);
