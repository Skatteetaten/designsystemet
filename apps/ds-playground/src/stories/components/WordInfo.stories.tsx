import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import {
  getPopoverPositionDefault,
  getPopoverRestoreFocusDefault,
  WordInfo,
} from '@skatteetaten/ds-overlays';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: WordInfo,
  title: 'Komponenter/WordInfo',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    disableAutoDismiss: { table: { category: category.props } },
    disableAutoDismissOnMobile: { table: { category: category.props } },
    position: {
      table: {
        category: category.props,
        defaultValue: { summary: getPopoverPositionDefault().toString() },
      },
    },
    shouldRestoreFocus: {
      table: {
        category: category.props,
        defaultValue: { summary: getPopoverRestoreFocusDefault().toString() },
      },
    },
    isOpen: { table: { category: category.props } },
    //Events
    onClose: { ...htmlEventDescription, table: { disable: true } },
  },
} satisfies Meta<typeof WordInfo>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (args) => (
    <div className={'centerContent'}>
      <WordInfo {...args}>
        <WordInfo.Trigger>{'arkskrift'}</WordInfo.Trigger>
        <WordInfo.Content>
          {'En arkskrift er en skrift som er skrevet på et ark.'}
        </WordInfo.Content>
      </WordInfo>
    </div>
  ),
} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <>
        <Paragraph className={'bold'} hasSpacing>
          {'Viktig informasjon'}
        </Paragraph>
        <List>
          <List.Element>
            {'Det er legen som melder dødsfall i Norge til '}
            <WordInfo>
              <WordInfo.Trigger>{'Folkeregisteret'}</WordInfo.Trigger>
              <WordInfo.Content>
                <Heading as={'h2'} level={4}>
                  {'Folkeregisteret'}
                </Heading>
                <Paragraph>{'Forklaring på Folkeregisteret'}</Paragraph>
              </WordInfo.Content>
            </WordInfo>
            {'. Du trenger ikke å melde noe selv.'}
          </List.Element>
          <List.Element>
            {'Du kan søke Nav om økonomisk støtte til begravelsen.'}
          </List.Element>
          <List.Element>
            {
              'Du må få oversikt over avdødes økonomi og vurdere om du ønsker å overta dødsboet.'
            }
          </List.Element>
          <List.Element>
            {
              'Når du har overtatt dødsboet, får du ansvar for blant annet skattemelding og skatteoppgjør for avdøde.'
            }
          </List.Element>
          <List.Element>
            {
              'Hvis du er ektefelle eller arving, kan det påvirke din egen skatt å motta arv.'
            }
          </List.Element>
        </List>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
