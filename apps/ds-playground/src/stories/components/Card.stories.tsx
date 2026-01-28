import { JSX, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton, InlineButton, Link } from '@skatteetaten/ds-buttons';
import {
  Card,
  DescriptionList,
  getCardColorDefault,
  getCardSpacingDefault,
} from '@skatteetaten/ds-content';
import {
  ArbeidTrygdPensjonIcon,
  CancelSVGpath,
  CheckSVGpath,
  DeleteSVGpath,
  EditSVGpath,
  FileIcon,
  InfoOutlineSVGpath,
  WarningIcon,
} from '@skatteetaten/ds-icons';
import { Tag } from '@skatteetaten/ds-status';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';

Card.Header.displayName = 'Card.Header';
Card.Content.displayName = 'Card.Content';
Card.Actions.displayName = 'Card.Actions';
Card.Alert.displayName = 'Card.Alert';

const meta = {
  component: Card,
  title: 'Komponenter/Card',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    spacing: {
      table: {
        category: category.props,
        defaultValue: { summary: getCardSpacingDefault() },
      },
    },
    color: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getCardColorDefault() },
      },
    },
    // Aria
    ariaLabelledBy: { table: { category: category.aria } },
  },
  args: {
    children: loremIpsum,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Content>{args.children}</Card.Content>
    </Card>
  ),
} satisfies Story;

export const Examples: Story = {
  name: 'Skjemakort',
  render: (_args): JSX.Element => {
    return (
      <div className={'containerS flex flexColumn gapS'}>
        <Card color={'graphite'}>
          <Card.Header
            rightContent={
              <Tag svgPath={InfoOutlineSVGpath}>{'Endret av deg'}</Tag>
            }
          >
            <Heading as={'h3'}>{'Andre inntekter'}</Heading>
          </Card.Header>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Beløp'}>
                {'654 321'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Fradrag'}>
                {'321 098'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Ytelser'}>
                {'987 654'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
          </Card.Actions>
        </Card>

        <Card color={'graphite'}>
          <Card.Header
            rightContent={
              <Paragraph>
                <InlineButton svgPath={DeleteSVGpath}>{'Fjern'}</InlineButton>
              </Paragraph>
            }
          >
            <ArbeidTrygdPensjonIcon size={'extraLarge'} />
            <Heading as={'h3'}>{'Andre inntekter'}</Heading>
          </Card.Header>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Opprinnelig beløp'}>
                {'1 753 kroner'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Forsinkelsesrenter'}>
                {'200 kroner'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Betaligsfrist'}>
                {'09.10.2024'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
          </Card.Actions>
        </Card>

        <Card>
          <Card.Header
            rightContent={
              <Tag color={'forest'} svgPath={CheckSVGpath}>
                {'OK til innsending'}
              </Tag>
            }
          >
            <Heading as={'h3'} hasSpacing>
              {'Andre inntekter'}
            </Heading>
          </Card.Header>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Beløp'}>
                {'1 000 000 kr'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
          </Card.Actions>
        </Card>
      </div>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;

export const FileListExample: Story = {
  name: 'Liste med filer',
  render: (_args): JSX.Element => {
    return (
      <div
        className={'flex flexColumn gapS width400 topSpacingXL centerMargin'}
      >
        <Card spacing={'xxs'} color={'denim'}>
          <Card.Content
            classNames={{ children: 'flex' }}
            rightContent={<IconButton title={'Lukk'} svgPath={CancelSVGpath} />}
          >
            <FileIcon className={'paddingXS'} size={'small'} />
            {'mine-hus-og-hoteller.zip'}
          </Card.Content>
        </Card>

        <Card spacing={'xxs'} color={'denim'}>
          <Card.Content
            classNames={{ children: 'flex' }}
            rightContent={<IconButton title={'Lukk'} svgPath={CancelSVGpath} />}
          >
            <FileIcon className={'blueIcon paddingXS'} size={'small'} />
            <Link className={'resetLinkStyling'} href={'#'}>
              {'mine-hus-og-hoteller.zip'}
            </Link>
          </Card.Content>
        </Card>

        <Card spacing={'xxs'} color={'burgundy'}>
          <Card.Content
            classNames={{ children: 'flex' }}
            rightContent={<IconButton title={'Lukk'} svgPath={CancelSVGpath} />}
          >
            <WarningIcon className={'dangerIcon paddingXS'} size={'small'} />
            {'carlos-santana_smooth-featuring-rob-thomas.mp3'}
          </Card.Content>
        </Card>
      </div>
    );
  },
} satisfies Story;
FileListExample.parameters = exampleParameters;

export const AlertExample: Story = {
  name: 'Card med merknad',
  render: (_args): JSX.Element => {
    const headingRef = useRef<HTMLHeadingElement>(null);

    return (
      <div className={'flex flexWrap gapS'}>
        <Card className={'cardWidth'} ariaLabelledBy={'card-heading-1'}>
          <Card.Alert
            variant={'info'}
            title={'Informasjon'}
            titleAs={'h3'}
            onClose={(): void => headingRef?.current?.focus()}
          >
            <Paragraph>
              {'Denne tingen kan du kanskje kikke litt på:'}
            </Paragraph>
            <Link href={'#'}>{'Navn på et annet kort'}</Link>
          </Card.Alert>
          <Card.Header>
            <Heading
              ref={headingRef}
              id={'card-heading-1'}
              as={'h3'}
              canBeManuallyFocused
            >
              {'Andre inntekter'}
            </Heading>
          </Card.Header>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Beløp'}>
                {'654 321'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
          </Card.Actions>
        </Card>

        <Card className={'cardWidth'} ariaLabelledBy={'card-heading-2'}>
          <Card.Alert
            variant={'warning'}
            title={'Merknad'}
            titleAs={'h3'}
            onClose={(): void => headingRef?.current?.focus()}
          >
            <Paragraph>
              {
                'Nå har vi gjort en endring i et annet kort som påvirker dette kortet.'
              }
            </Paragraph>
            <Link href={'#'}>{'Navn på et annet kort'}</Link>
          </Card.Alert>
          <Card.Header>
            <Heading
              ref={headingRef}
              id={'card-heading-2'}
              as={'h3'}
              canBeManuallyFocused
            >
              {'Andre inntekter'}
            </Heading>
          </Card.Header>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Beløp'}>
                {'654 321'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
          </Card.Actions>
        </Card>

        <Card className={'cardWidth'} ariaLabelledBy={'card-heading-3'}>
          <Card.Alert
            variant={'danger'}
            title={'Å nei, ikke bra!'}
            titleAs={'h3'}
            onClose={(): void => headingRef?.current?.focus()}
          >
            <Paragraph>
              {
                'Nå bør du fikse på dette kortet for å unngå at [annet kort] blir feil.'
              }
            </Paragraph>
            <Link href={'#'}>{'Navn på et annet kort'}</Link>
          </Card.Alert>
          <Card.Header>
            <Heading
              ref={headingRef}
              id={'card-heading-3'}
              as={'h3'}
              canBeManuallyFocused
            >
              {'Andre inntekter'}
            </Heading>
          </Card.Header>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Beløp'}>
                {'654 321'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
          </Card.Actions>
        </Card>
      </div>
    );
  },
} satisfies Story;
AlertExample.parameters = exampleParameters;
