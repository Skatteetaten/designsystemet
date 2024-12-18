import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  Accordion,
  getAccordionBackgroundColorDefault,
  getAccordionIconPositionDefault,
  getAccordionSizeDefault,
} from '@skatteetaten/ds-collections';
import {
  AccountMultipleSVGpath,
  ChatBubbleOutlineSVGpath,
  CompanySVGpath,
  DescriptionSVGpath,
  FamilySVGpath,
  PersonSVGpath,
  PhoneSVGpath,
  SkattetrekkSVGpath,
} from '@skatteetaten/ds-icons';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';
import { DescriptionList } from '@skatteetaten/ds-content';
import { Link } from '@skatteetaten/ds-buttons';

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
    const accordionData = [
      {
        title: (
          <>
            <span>{'987 65 321'}</span>
            <br />
            <span>{'Stødig Sjappe 1'}</span>
          </>
        ),
        icon: CompanySVGpath,
        expanded: true,
        content: (
          <>
            <DescriptionList className={'backgroundColorGraphite5'}>
              <DescriptionList.Element term={'Virksomhetsnavn'}>
                {'Stødig Sjappe 1'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Organisasjonsnummer'}>
                {'999 999 999 copy icon'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Telefonnummer'}>
                {'+47 99 99 99 99'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Forretningsadresse'}>
                {'Norges vei 1, 4878 Grimstad'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Status'}>
                {'Konkurs 27.11.24 color red'}
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
            </DescriptionList>
            <Link href={'#'}>{'Gå til partsoversikt'}</Link>
          </>
        ),
      },
      {
        title: 'Kontakt- og reservasjonsregistret',
        icon: PhoneSVGpath,
      },
      {
        title: 'Familie',
        icon: FamilySVGpath,
      },
      {
        title: 'Roller',
        icon: AccountMultipleSVGpath,
      },
      {
        title: 'Alle dokumenter på part',
        icon: DescriptionSVGpath,
      },
      {
        title: 'Alle notater på part',
        icon: ChatBubbleOutlineSVGpath,
      },
    ];
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
        <Accordion size={'small'} className={'semantic-internal-aside'}>
          {accordionData.map((x, i) => (
            <Accordion.Item
              key={`a${i}`}
              title={x.title as string}
              svgPath={x.icon}
              isDefaultExpanded={x.expanded}
            >
              {x.content}
            </Accordion.Item>
          ))}
        </Accordion>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
