import { JSX, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InlineButton, Link } from '@skatteetaten/ds-buttons';
import {
  Card,
  DescriptionList,
  Divider,
  dividerSpacingArr,
  getDividerSpacingBottomDefault,
  getDividerSpacingTopDefault,
} from '@skatteetaten/ds-content';
import { ArbeidTrygdPensjonIcon, EditSVGpath } from '@skatteetaten/ds-icons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Divider,
  title: 'Komponenter/Divider',
  argTypes: {
    // Props
    spacingTop: {
      options: dividerSpacingArr,
      table: {
        category: category.props,
        defaultValue: { summary: getDividerSpacingTopDefault() },
      },
    },
    spacingBottom: {
      options: dividerSpacingArr,
      table: {
        category: category.props,
        defaultValue: { summary: getDividerSpacingBottomDefault() },
      },
    },
    subtle: { table: { category: category.props } },
    // Aria
    ariaHidden: {
      table: { category: category.aria },
    },
  },
  args: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <div>
        <Card className={'autoFit'}>
          <Card.Header>
            <Heading as={'h3'} level={3}>
              {'Utregning'}
            </Heading>
          </Card.Header>
          <Card.Content classNames={{ children: 'flexGrow' }}>
            <DescriptionList
              className={'descriptionList'}
              descriptionWeight={'regular'}
              termWeight={'regular'}
            >
              <DescriptionList.Element term={'Tall nummer 1'}>
                {'99 000'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Tall nummer 2'}>
                {'100 000'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Tall nummer 3'}>
                {'110 000'}
              </DescriptionList.Element>
            </DescriptionList>
            <Divider subtle />

            <DescriptionList
              className={'descriptionList'}
              descriptionWeight={'bold'}
              termWeight={'bold'}
            >
              <DescriptionList.Element term={'Sum'}>
                {'200 000'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
        </Card>
      </div>
    );
  },
} satisfies Story;

Examples.parameters = exampleParameters;

export const ThemeExample: Story = {
  name: 'I temavisning',
  render: (_args): JSX.Element => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    return (
      <div>
        <div className={'flex gapM'}>
          <ArbeidTrygdPensjonIcon size={'extraLarge'} />
          <Heading as={'h1'} level={2}>
            {'Arbeid, trygd og pensjon'}
          </Heading>
        </div>
        <Divider spacingTop={'xs'} spacingBottom={'l'} subtle />
        <Card className={'cardWidth'}>
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
            <Heading ref={headingRef} as={'h3'} level={3} canBeManuallyFocused>
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

ThemeExample.parameters = exampleParameters;
