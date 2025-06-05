import { JSX, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import {
  Card,
  DescriptionList,
  Divider,
  dividerSpacingArr,
  getDividerSpacingBottomDefault,
  getDividerSpacingTopDefault,
  getDividerVariantDefault,
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
    variant: {
      table: {
        category: category.props,

        defaultValue: { summary: getDividerVariantDefault() },
      },
    },
    // Aria
    ariaHidden: {
      control: 'boolean',
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
        <Paragraph>
          {'Delestrek brukt som dekorelement og skjult for skjermleser'}
        </Paragraph>
        <Card className={'dividerCard'}>
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
            <Divider ariaHidden />

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
        <Paragraph>
          {
            'Delestrek som er meningsbærende og dermed ikke skjult for skjermleser'
          }
        </Paragraph>
        <div className={'flex gapM'}>
          <ArbeidTrygdPensjonIcon size={'extraLarge'} />
          <Heading as={'h1'} level={2}>
            {'Arbeid, trygd og pensjon'}
          </Heading>
        </div>
        <Divider spacingTop={'xs'} spacingBottom={'l'} />
        <Card className={'cardWidth'}>
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
