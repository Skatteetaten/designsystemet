import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  Button,
  IconButton,
  InlineButton,
  Link,
} from '@skatteetaten/ds-buttons';
import {
  Card,
  DescriptionList,
  getCardColorDefault,
} from '@skatteetaten/ds-content';
import {
  ArbeidTrygdPensjonIcon,
  CancelSVGpath,
  CheckSVGpath,
  CompletedIcon,
  DeleteSVGpath,
  EditSVGpath,
  FileSVGpath,
  InfoOutlineSVGpath,
} from '@skatteetaten/ds-icons';
import { Tag } from '@skatteetaten/ds-status';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';

Card.Header.displayName = 'Card.Header';
Card.Content.displayName = 'Card.Content';
Card.Actions.displayName = 'Card.Actions';
const meta = {
  component: Card,
  title: 'Komponenter/Card/Card',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    spacing: {
      table: { category: category.props },
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
  render: (_args): JSX.Element => {
    return (
      <>
        <div className={'containerS flex flexColumn gapS'}>
          <Card color={'graphite'}>
            <Card.Header
              rightContent={
                <Tag svgPath={InfoOutlineSVGpath}>{'Endret av deg'}</Tag>
              }
            >
              <Heading as={'h3'} level={3}>
                {'Andre inntekter'}
              </Heading>
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
              <Heading as={'h3'} level={3}>
                {'Andre inntekter'}
              </Heading>
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
            <Card.Content
              rightContent={
                <Tag color={'forest'} svgPath={CheckSVGpath}>
                  {'OK til innsending'}
                </Tag>
              }
            >
              <Heading as={'h3'} level={3} hasSpacing>
                {'Andre inntekter'}
              </Heading>
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

        <div
          className={'flex flexColumn gapS width400 topSpacingXL centerMargin'}
        >
          <Card color={'denim'}>
            <Card.Content
              spacing={'xs'}
              rightContent={
                <IconButton title={'Lukk'} svgPath={CancelSVGpath} />
              }
            >
              <Link svgPath={FileSVGpath} href={'#'}>
                {'mine-hus-og-hoteller.zip'}
              </Link>
            </Card.Content>
          </Card>

          <Card color={'denim'}>
            <Card.Actions spacing={'xs'}>
              <Link svgPath={FileSVGpath} href={'#'}>
                {'mine-hus-og-hoteller.zip'}
              </Link>
              <IconButton title={'Lukk'} svgPath={CancelSVGpath} />
            </Card.Actions>
          </Card>

          <Card color={'denim'}>
            <Card.Content
              spacing={'xs'}
              rightContent={
                <IconButton title={'Lukk'} svgPath={CancelSVGpath} />
              }
            >
              {'mine-hus-og-hoteller.zip'}
            </Card.Content>
          </Card>

          <Card color={'burgundy'}>
            <Card.Content
              spacing={'xs'}
              rightContent={
                <IconButton title={'Lukk'} svgPath={CancelSVGpath} />
              }
            >
              {'carlos-santana_smooth-featuring-rob-thomas.exe.mp3'}
            </Card.Content>
          </Card>

          <Card color={'burgundy'}>
            <Card.Actions spacing={'xs'}>
              {'carlos-santana_smooth-featuring-rob-thomas.exe.mp3'}
              <IconButton title={'Lukk'} svgPath={CancelSVGpath} />
            </Card.Actions>
          </Card>
        </div>
      </>
    );
  },
} satisfies Story;

export const DevExamples: Story = {
  render: (_args): JSX.Element => {
    return (
      <>
        <Card color={'white'}>
          <Card.Note variant={'warning'} title={'Merknad'}>
            {
              'Nå har vi gjort en endring i et annet kort som påvirker dette kortet.'
            }
          </Card.Note>
          <Card.Note variant={'neutral'} title={'Merknad'}>
            {
              'Nå har vi gjort en endring i et annet kort som påvirker dette kortet.'
            }
          </Card.Note>
          <Card.Note variant={'danger'} title={'Merknad'}>
            {
              'Nå har vi gjort en endring i et annet kort som påvirker dette kortet.'
            }
          </Card.Note>
          <Card.Content>
            <Heading as={'h2'} level={3} hasSpacing>
              {'Andre inntekter'}
            </Heading>
          </Card.Content>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Beløp'}>
                {'1 000 000 kr'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
            <InlineButton svgPath={DeleteSVGpath}>{'Slett'}</InlineButton>
          </Card.Actions>
        </Card>

        <Card color={'graphite'}>
          <Card.Content
            //spacing={'responsive'}
            rightContent={
              <Tag svgPath={InfoOutlineSVGpath} color={'forest'}>
                {'Ny'}
              </Tag>
            }
          >
            <Heading as={'h2'} level={3}>
              {'Lån'}
            </Heading>
          </Card.Content>

          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Sparebank Nord'}>
                {'1 000 000 kr'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Sparebank Sør'}>
                {'1 000 000 kr'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>

          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
            <InlineButton svgPath={DeleteSVGpath}>{'Slett'}</InlineButton>
          </Card.Actions>
        </Card>
        <Card color={'denim'}>
          <Card.Content
            //spacing={'xxs'}
            rightContent={
              <IconButton
                className={'cardClose'}
                title={'Lukk'}
                svgPath={CancelSVGpath}
              />
            }
          >
            {'test.png'}
          </Card.Content>
        </Card>
        <Card color={'denim'}>
          <Card.Content
            rightContent={
              <IconButton
                className={'cardClose'}
                title={'Lukk'}
                svgPath={CancelSVGpath}
              />
            }
          >
            <Link svgPath={FileSVGpath} href={'#'}>
              {'mine-hus-og-hoteller.zip'}
            </Link>
          </Card.Content>
        </Card>
        <div className={'containerS'}>
          <Card>
            <Card.Header
              rightContent={
                <Paragraph>
                  <strong>{'1 953 kroner'} </strong>
                </Paragraph>
              }
            >
              <Heading as={'h2'} level={4}>
                {'Merverdiavgift - klimalovens foooasd'}
              </Heading>
              <CompletedIcon className={'sucessFill'} size={'extraLarge'} />
            </Card.Header>
            <Card.Content
              rightContent={<Button variant={'secondary'}>{'Endre'}</Button>}
            >
              <Tag color={'burgundy'}>{'Forfalt'}</Tag>
            </Card.Content>
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
          </Card>
          <Card color={'graphite'}>
            <Card.Content
              rightContent={
                <Tag svgPath={InfoOutlineSVGpath}>{'Endret av deg'}</Tag>
              }
            >
              <Heading as={'h2'} level={4}>
                {'Andre inntekter'}
              </Heading>
            </Card.Content>
            <Card.Content>
              <DescriptionList>
                <DescriptionList.Element term={'Beløp'}>
                  {'1 000 000 kr'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Fradrag'}>
                  {'1 000 000 kr'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Ytelser'}>
                  {'1 000 000 kr'}
                </DescriptionList.Element>
              </DescriptionList>
            </Card.Content>
            <Card.Actions>
              <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
            </Card.Actions>
          </Card>

          <Card color={'graphite'}>
            <Card.Content
              rightContent={
                <InlineButton svgPath={DeleteSVGpath}>{'Fjern'}</InlineButton>
              }
            >
              <Heading as={'h2'} level={4}>
                {'Andre inntekter'}
              </Heading>
            </Card.Content>
            <Card.Content>
              <DescriptionList>
                <DescriptionList.Element term={'Beløp'}>
                  {'1 000 000 kr'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Fradrag'}>
                  {'1 000 000 kr'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Ytelser'}>
                  {'1 000 000 kr'}
                </DescriptionList.Element>
              </DescriptionList>
            </Card.Content>
            <Card.Actions>
              <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
            </Card.Actions>
          </Card>
        </div>
      </>
    );
  },
} satisfies Story;

Examples.parameters = exampleParameters;
