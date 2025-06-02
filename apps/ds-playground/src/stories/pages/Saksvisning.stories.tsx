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
  HelpFilledSVGpath,
  SettingsSVGpath,
  PercentSVGpath,
} from '@skatteetaten/ds-icons';
import { TopBannerInternal } from '@skatteetaten/ds-layout';
import { Breadcrumbs } from '@skatteetaten/ds-navigation';
import { Tag } from '@skatteetaten/ds-status';
import { Table } from '@skatteetaten/ds-table';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './Saksvisning.module.css';
import stylesAsString from './Saksvisning.module.css?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';

export default {
  title: 'Sidetyper/Intern/Saksvisning',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
    docs: {
      source: {
        transform: includeStylesTransform(stylesAsString),
      },
    },
  },
};

export const Saksvisning = (): JSX.Element => (
  <>
    <TopBannerInternal
      title={'Navn på system'}
      logoHref={'/'}
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
          <Breadcrumbs.Link href={'#'}>{'Saksvisning'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>
            {'PIANO, MALTE FJELLVEGGER OG AMBOLTER AS'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>
            {'Tittel på arbeidsoppgave'}
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
              {'Se detaljer om virksomheten'}
            </Link>
          </Accordion.Item>
          <Accordion.Item title={'Register'} svgPath={PercentSVGpath}>
            <em>{'Ingenting her'}</em>
          </Accordion.Item>
          <Accordion.Item title={'Saker'} svgPath={BookOpenSVGpath}>
            <em>{'Saker her'}</em>
          </Accordion.Item>
        </Accordion>
      </aside>
      <main className={styles.main}>
        <Heading as={'h1'} level={2} hasSpacing>
          <span className={styles.topHeading}>{'Arbeidsoppgave'}</span>
          {'Tittel på arbeidsoppgave'}
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
          className={styles.wideContent}
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
        <Paragraph className={styles.wideContent} hasSpacing>
          {
            'Kort introduksjon av arbeidsoppgaven som forteller hva som er utgangspunktet og målet til arbeidsoppgaven. Kort introduksjon av arbeidsoppgaven som forteller hva som er utgangspunktet og målet til arbeidsoppgaven.'
          }
        </Paragraph>
        <div className={styles.tagRow}>
          <Tag color={'forest'}>{'[Årsak til arbeidsoppgave]'}</Tag>
          <Tag color={'forest'}>{'[Annen årsak]'}</Tag>
          <Tag color={'forest'}>{'[Andre årsaker]'}</Tag>
          <Tag color={'forest'}>{'[Annen årsak]'}</Tag>
        </div>

        <Accordion className={styles.marginBottomL}>
          <Accordion.Item title={'Nøkkelopplysninger'}>
            <Card color={'graphite'} className={styles.card}>
              <Card.Content className={styles.cardContent}>
                <Heading as={'h2'} level={4}>
                  {'Oversikt over arbeidsoppgaven'}
                </Heading>
                <Table caption={'Oversikt over arbeidsoppgaven'} hasFullWidth>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>{'Tittel'}</Table.HeaderCell>
                      <Table.HeaderCell>{'Periode'}</Table.HeaderCell>
                      <Table.HeaderCell>{'Saksnummer'}</Table.HeaderCell>
                      <Table.HeaderCell>{'Dato'}</Table.HeaderCell>
                      <Table.HeaderCell>{'Frist'}</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.DataCell>{'Tittel på oppgaven'}</Table.DataCell>
                      <Table.DataCell>{'Mars-apr-2023'}</Table.DataCell>
                      <Table.DataCell>{'00000111'}</Table.DataCell>
                      <Table.DataCell>{'22.08.2024'}</Table.DataCell>
                      <Table.DataCell>{'Oppgave etter fristen'}</Table.DataCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.DataCell>{'Tittel på noe annet'}</Table.DataCell>
                      <Table.DataCell>{'Mars-apr-2024'}</Table.DataCell>
                      <Table.DataCell>{'00000222'}</Table.DataCell>
                      <Table.DataCell>{'23.08.2024'}</Table.DataCell>
                      <Table.DataCell>{'Oppgave før fristen'}</Table.DataCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.DataCell>{'Tittel'}</Table.DataCell>
                      <Table.DataCell>{'Jun-jul-2023'}</Table.DataCell>
                      <Table.DataCell>{'00000333'}</Table.DataCell>
                      <Table.DataCell>{'24.08.2024'}</Table.DataCell>
                      <Table.DataCell>{'Ingen frist'}</Table.DataCell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card.Content>
            </Card>
          </Accordion.Item>
          <Accordion.Item title={'Leverte meldinger'}>
            <em>{'Ingenting her'}</em>
          </Accordion.Item>
          <Accordion.Item title={'Versjonshistorikk og sammendrag'}>
            <em>{'Historikk her'}</em>
          </Accordion.Item>
          <Accordion.Item title={'Meldinger og tilbakemeldinger'}>
            <em>{'Meldinger her'}</em>
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
