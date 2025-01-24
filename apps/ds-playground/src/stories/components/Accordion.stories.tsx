import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button, IconButton, Link } from '@skatteetaten/ds-buttons';
import {
  Accordion,
  getAccordionBackgroundColorDefault,
  getAccordionIconPositionDefault,
  getAccordionSizeDefault,
} from '@skatteetaten/ds-collections';
import { DescriptionList } from '@skatteetaten/ds-content';
import { RadioGroup } from '@skatteetaten/ds-forms';
import {
  AccountMultipleSVGpath,
  BriefcaseSVGpath,
  ChatBubbleOutlineSVGpath,
  CheckSVGpath,
  CompanySVGpath,
  CopySVGpath,
  DescriptionSVGpath,
  FamilySVGpath,
  PersonSVGpath,
  PhoneSVGpath,
} from '@skatteetaten/ds-icons';
import { Tag } from '@skatteetaten/ds-status';
import { Table } from '@skatteetaten/ds-table';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const defaultContent =
  'Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.';

const meta = {
  component: Accordion,
  title: 'Komponenter/Accordion/Accordion',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    color: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getAccordionBackgroundColorDefault() },
      },
    },
    size: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getAccordionSizeDefault() },
      },
    },
    iconPosition: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getAccordionIconPositionDefault() },
      },
    },
  },
  args: {
    iconPosition: 'right',
    children: [
      <Accordion.Item key={'a1'} title={'Meg selv'}>
        {
          'Du må betale restskatten selv om du har endret etter fristen for skattemeldingen eller klaget. Hvis du ikke betaler restskatten i tide, løper det forsinkelsesrenter ved forfall frem til du betaler.'
        }
      </Accordion.Item>,
      <Accordion.Item key={'a3'} title={'Skatt'}>
        {defaultContent}
      </Accordion.Item>,
    ],
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const LeftMenu: Story = {
  name: 'I venstremeny',
  render: (_args): JSX.Element => {
    return (
      <div className={'flex'}>
        <Accordion
          id={'virksomhet'}
          size={'small'}
          className={'container-aside marginRightM'}
        >
          <Accordion.Item
            title={'987 654 321\nStødig Sjappe 1'}
            svgPath={CompanySVGpath}
          >
            <DescriptionList className={'gridEqualColumns'}>
              <DescriptionList.Element term={'Virksomhetsnavn'}>
                {'Stødig Sjappe 1'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Organisasjons-\nnummer'}>
                <span className={'marginRightS'}>{'999 999 999'}</span>
                <IconButton
                  svgPath={CopySVGpath}
                  title={'Kopier organisasjonsnummeret'}
                  size={'extraSmall'}
                  onClick={() => {
                    navigator.clipboard.writeText('999999999');
                  }}
                />
              </DescriptionList.Element>
              <DescriptionList.Element term={'Telefonnummer'}>
                {'+47 99 99 99 99'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Forretningsadresse'}>
                <div>{'Norges vei 1'}</div>
                <div>{'4878 Grimstad'}</div>
              </DescriptionList.Element>
              <DescriptionList.Element term={'Status'}>
                <Tag color={'burgundy'}>{'Konkurs 27.11.24'}</Tag>
              </DescriptionList.Element>
              <DescriptionList.Element term={'Org.form'}>
                {'Aksjeselskap'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Næringskode'}>
                {'65.102'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Virksomhetsnavn'}>
                {'Stødig Sjappe 1'}
              </DescriptionList.Element>
              <Link href={'#'}>{'Gå til partssoversikt'}</Link>
            </DescriptionList>
          </Accordion.Item>
          <Accordion.Item title={'Roller'} svgPath={AccountMultipleSVGpath}>
            <DescriptionList className={'gridEqualColumns'}>
              <DescriptionList.Element term={'Eier'}>
                <Link href={'#eier'}>{'Chad-Henning Krøger'}</Link>
              </DescriptionList.Element>
              <DescriptionList.Element term={'Styreleder'}>
                <Link href={'#'}>{'Fredrik Durst'}</Link>
              </DescriptionList.Element>
            </DescriptionList>
          </Accordion.Item>
          <Accordion.Item
            title={'Alle dokumenter på part'}
            svgPath={DescriptionSVGpath}
          >
            <em>{'Dokumentasjon og historikk her'}</em>
          </Accordion.Item>
          <Accordion.Item
            title={'Alle notater på part'}
            svgPath={ChatBubbleOutlineSVGpath}
          >
            <em>{'Notater fra saksbehandler her'}</em>
          </Accordion.Item>
        </Accordion>

        <Accordion
          id={'eier'}
          size={'small'}
          className={'container-aside bottomSpacingXL'}
        >
          <Accordion.Item
            title={'01012001 99999\nChad-Henning Krøger'}
            svgPath={PersonSVGpath}
          >
            <DescriptionList className={'gridEqualColumns'}>
              <DescriptionList.Element term={'Fødselsnummer'}>
                {'01012001 99999'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Etternavn'}>
                {'Krøger'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Fornavn'}>
                {'Chad-Henning'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Mellomnavn'}>
                {null}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Status'}>
                {'Bosatt: Oppegård (1415)'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Kjønn'}>
                {'Mann'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Fødeland'}>
                {'Norge'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Sivilstand'}>
                {'Ugift'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Statsborgerskap'}>
                {'Norge'}
              </DescriptionList.Element>
              <Link href={'#'}>{'Gå til partssoversikt'}</Link>
            </DescriptionList>
          </Accordion.Item>
          <Accordion.Item title={'Familie'} svgPath={FamilySVGpath}>
            <DescriptionList
              className={'gridEqualColumns'}
              descriptionDirection={'vertical'}
            >
              <DescriptionList.Element term={'Barn under 20 år'}>
                <div className={'marginLeftL'}>
                  <Link href={'#'}>{'Neue Haas Krøger'}</Link>
                  <div>{'Født 01.12.2010 (15 år)'}</div>
                  <Link href={'#'}>{'Old English Krøger'}</Link>
                  <div>{'Født 01.12.2015 (10 år)'}</div>
                  <Link href={'#'}>{'Copperplate Gothic Krøger'}</Link>
                  <div>{'Født 01.12.2020 (5 år)'}</div>
                </div>
              </DescriptionList.Element>
              <DescriptionList.Element term={'Ektefelle'}>
                <Link href={'#'} className={'marginLeftL'}>
                  {'Avril Krøger'}
                </Link>
              </DescriptionList.Element>
              <DescriptionList.Element term={'Foreldre'}>
                <div className={'marginLeftL'}>
                  <Link href={'#'} className={'block'}>
                    {'Ringo Hirtshals'}
                  </Link>
                  <Link href={'#'} className={'block'}>
                    {'Bjørg Woodsmith'}
                  </Link>
                </div>
              </DescriptionList.Element>
            </DescriptionList>
          </Accordion.Item>
          <Accordion.Item title={'Roller'} svgPath={AccountMultipleSVGpath}>
            <DescriptionList className={'gridEqualColumns'}>
              <DescriptionList.Element term={'Eier'}>
                <Link href={'#virksomhet'}>{'Stødig Sjappe 1'}</Link>
              </DescriptionList.Element>
              <DescriptionList.Element term={'Eier'}>
                <Link href={'#'}>{'Stødig Sjappe 2'}</Link>
              </DescriptionList.Element>
            </DescriptionList>
          </Accordion.Item>
          <Accordion.Item
            title={'Personens sakshistorikk'}
            subtitle={'3 saker'}
            svgPath={BriefcaseSVGpath}
          >
            <Link href={'#'} className={'block'} svgPath={CheckSVGpath}>
              {'Endre postadresse'}
            </Link>
            <div className={'marginLeftAccordionItem'}>
              <div>{'FOLK /2323 / 1234'}</div>
              <div>{'Registrert 01.01.2001'}</div>
            </div>
            <Link href={'#'} className={'block'} svgPath={CheckSVGpath}>
              {'Endre postadresse'}
            </Link>
            <div className={'marginLeftAccordionItem'}>
              <div>{'FOLK /2323 / 1234'}</div>
              <div>{'Registrert 01.01.2001'}</div>
            </div>
            <Link href={'#'} className={'block'} svgPath={CheckSVGpath}>
              {'Registrere vergemål'}
            </Link>
            <div className={'marginLeftAccordionItem'}>
              <div>{'FOLK /2323 / 1234'}</div>
              <div>{'Registrert 01.01.2001'}</div>
            </div>
          </Accordion.Item>
          <Accordion.Item
            title={'Kontakt- og reservasjonsregisteret'}
            svgPath={PhoneSVGpath}
          >
            <DescriptionList className={'gridEqualColumns'} hasSpacing>
              <DescriptionList.Element term={'Fasttelefon'}>
                {'+47 99 99 99 99'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Mobiltelefon'}>
                {'+47 99 99 99 99'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'E-post'}>
                {'chad@henning.no'}
              </DescriptionList.Element>
              <DescriptionList.Element
                term={'Reservert mot elektronisk kommunikasjon'}
              >
                {'Ja'}
              </DescriptionList.Element>
            </DescriptionList>
            <Paragraph>
              {
                'Informasjon er hentet fra Kontakt- og reservasjonsregisteret. Aktøren kan endre opplysningene sine på hjemmesiden til registeret.'
              }
            </Paragraph>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  },
} satisfies Story;
LeftMenu.parameters = exampleParameters;

export const WorkTask: Story = {
  name: 'I arbeidsoppgave',
  render: (_args): JSX.Element => {
    return (
      <div className={'accordionWorkTaskExample'}>
        <Heading as={'h1'} level={2} hasSpacing>
          {'Navn på arbeidsoppgave'}
        </Heading>
        <DescriptionList
          variant={'horizontal'}
          descriptionDirection={'vertical'}
          hasSpacing
        >
          <DescriptionList.Element term={'Frist for å løse'}>
            {'27.11.2024'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Saksbehandler'}>
            {'Siri Saksbehandler'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Status'}>
            {'Under arbeid'}
          </DescriptionList.Element>
        </DescriptionList>
        <Accordion iconPosition={'left'} className={'bottomSpacingXL'}>
          <Accordion.Item title={'Informasjon fra skattemeldingen'}>
            <Table
              caption={'Informasjon fra skattemeldingen'}
              variant={'compact'}
            >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell scope={'col'}>
                    {'Kontonummer'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Innestående'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Opptjente renter'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Kontotype'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>{'Bank'}</Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>{'Org.nr.'}</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.DataCell>{'0000 00 0000'}</Table.DataCell>
                  <Table.DataCell>{'10 000,00'}</Table.DataCell>
                  <Table.DataCell>{'500,00'}</Table.DataCell>
                  <Table.DataCell>{'Brukskonto'}</Table.DataCell>
                  <Table.DataCell>{'DnB'}</Table.DataCell>
                  <Table.DataCell>{'999 999 999'}</Table.DataCell>
                </Table.Row>
                <Table.Row>
                  <Table.DataCell>{'0000 00 0000'}</Table.DataCell>
                  <Table.DataCell>{'10 000,00'}</Table.DataCell>
                  <Table.DataCell>{'500,00'}</Table.DataCell>
                  <Table.DataCell>{'BSU'}</Table.DataCell>
                  <Table.DataCell>{'DnB'}</Table.DataCell>
                  <Table.DataCell>{'999 999 998'}</Table.DataCell>
                </Table.Row>
                <Table.Row>
                  <Table.DataCell>{'0000 00 0000'}</Table.DataCell>
                  <Table.DataCell>{'10 000,00'}</Table.DataCell>
                  <Table.DataCell>{'500,00'}</Table.DataCell>
                  <Table.DataCell>{'Aksjer'}</Table.DataCell>
                  <Table.DataCell>{'Nordea'}</Table.DataCell>
                  <Table.DataCell>{'999 999 997'}</Table.DataCell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Accordion.Item>
          <Accordion.Item title={'Heftelser'}>
            <em>
              {
                'Her vil det være oversikt over heftelser på parten. Det kan være vist som f.eks. en tabell eller DescriptionList.'
              }
            </em>
          </Accordion.Item>
          <Accordion.Item title={'Pågående saker'}>
            <em>
              {
                'Pågående saker kan vises som kort eller tabeller, litt avhengig av kompleksitet og antall.'
              }
            </em>
          </Accordion.Item>
          <Accordion.Item title={'Valg for saken'}>
            <RadioGroup legend={'valg for saken'} hideLegend>
              <RadioGroup.Radio>{'Mangler dokumentasjon'}</RadioGroup.Radio>
              <RadioGroup.Radio>{'Opprett nytt krav'}</RadioGroup.Radio>
              <RadioGroup.Radio>{'Godta krav'}</RadioGroup.Radio>
            </RadioGroup>
          </Accordion.Item>
        </Accordion>
        <Button className={'marginRightM'}>{'Bekreft og fortsett'}</Button>
        <Button variant={'secondary'}>{'Avbryt'}</Button>
      </div>
    );
  },
} satisfies Story;
WorkTask.parameters = exampleParameters;
