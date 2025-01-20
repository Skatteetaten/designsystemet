import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { IconButton, Link } from '@skatteetaten/ds-buttons';
import {
  Accordion,
  getAccordionBackgroundColorDefault,
  getAccordionIconPositionDefault,
  getAccordionSizeDefault,
} from '@skatteetaten/ds-collections';
import { DescriptionList } from '@skatteetaten/ds-content';
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
  SkattetrekkSVGpath,
} from '@skatteetaten/ds-icons';
import { Tag } from '@skatteetaten/ds-status';
import { Paragraph } from '@skatteetaten/ds-typography';

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

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <>
        <Accordion
          color={'graphite'}
          size={'small'}
          className={'bottomSpacingXL'}
        >
          <Accordion.Item
            key={'a1'}
            title={'Meg selv'}
            subtitle={
              'Skattekort, frikort, forskuddsskatt, skatte-melding (selvangivelse)'
            }
            svgPath={PersonSVGpath}
          >
            {
              'Du må betale restskatten selv om du har endret etter fristen for skattemeldingen eller klaget. Hvis du ikke betaler restskatten i tide, løper det forsinkelsesrenter ved forfall frem til du betaler.'
            }
          </Accordion.Item>
          <Accordion.Item
            key={'a3'}
            title={'Skatt'}
            subtitle={
              'Skattekort, frikort, forskuddsskatt, skattemelding (selvangivelse)'
            }
            svgPath={SkattetrekkSVGpath}
          >
            {defaultContent}
          </Accordion.Item>
        </Accordion>

        <Accordion
          id={'virksomhet'}
          size={'small'}
          className={'container-aside bottomSpacingXL'}
        >
          <Accordion.Item
            title={'987 654 321\nStødig Sjappe 1'}
            svgPath={CompanySVGpath}
            isExpanded
          >
            <DescriptionList>
              <DescriptionList.Element term={'Virksomhetsnavn'}>
                {'Stødig Sjappe 1'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Organisasjonsnummer'}>
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
          <Accordion.Item
            title={'Roller'}
            svgPath={AccountMultipleSVGpath}
            isExpanded
          >
            <DescriptionList>
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
            isExpanded
          >
            <em>{'Dokumentasjon og historikk her'}</em>
          </Accordion.Item>
          <Accordion.Item
            title={'Alle notater på part'}
            svgPath={ChatBubbleOutlineSVGpath}
            isExpanded
          >
            <em>{'Notater fra saksbehandler her'}</em>
          </Accordion.Item>
        </Accordion>

        <Accordion id={'eier'} size={'small'} className={'container-aside'}>
          <Accordion.Item
            title={'01012001 99999\nChad-Henning Krøger'}
            svgPath={PersonSVGpath}
            isExpanded
          >
            <DescriptionList>
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
          <Accordion.Item title={'Familie'} svgPath={FamilySVGpath} isExpanded>
            <DescriptionList descriptionDirection={'vertical'}>
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
          <Accordion.Item
            title={'Roller'}
            svgPath={AccountMultipleSVGpath}
            isExpanded
          >
            <DescriptionList>
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
            isExpanded
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
            isExpanded
          >
            <DescriptionList hasSpacing>
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
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
