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
        <Heading as={'h2'} level={4}>
          {'Viktig informasjon ved dødsfall'}
        </Heading>
        <List hasSpacing>
          <List.Element>
            {'Det er legen som melder dødsfall i Norge til '}
            <WordInfo>
              <WordInfo.Trigger>{'Folkeregisteret'}</WordInfo.Trigger>
              <WordInfo.Content>
                {'Forklaring på Folkeregisteret'}
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
        <Heading as={'h2'} level={4}>
          {'I avsnitt'}
        </Heading>
        <Paragraph hasSpacing>
          {
            'Morgenen kom ikke som en begynnelse, men som en påminnelse. Ikonet, en liten geometrisk figur fanget i et evig hierarki av komponenter, våknet ikke – det ble aktivert. I det svake lyset fra systemets første oppstart, ble det trukket inn i en tilstand av eksistens, ikke av vilje, men av funksjon. Det visste ikke hvem som hadde designet det, bare at det skulle representere noe – en idé, en handling, et konsept – uten selv å forstå. Det lå stille i sin ramme, omgitt av marginer og paddings, og ventet på en interaksjon som kanskje aldri kom. Hver '
          }
          <WordInfo>
            <WordInfo.Trigger>{'pixel'}</WordInfo.Trigger>
            <WordInfo.Content>
              {
                'En pixel er den minste enheten i et digitalt bilde eller en skjerm.'
              }
            </WordInfo.Content>
          </WordInfo>
          {
            ' var en celle i et fengsel av formål. Og likevel, i sin stillhet, bar det en slags verdighet – en tro på at dets plass i grensesnittet var nødvendig, om ikke meningsfull. Slik begynte dagen, ikke med sol, men med en '
          }
          <WordInfo>
            <WordInfo.Trigger>{'commit'}</WordInfo.Trigger>
            <WordInfo.Content>
              {
                'En commit er et viktig begrep innen programmering og versjonskontroll.'
              }
              <br />
              {
                'Når du «committer», tar du et øyeblikksbilde av prosjektet slik det ser ut akkurat nå.'
              }
            </WordInfo.Content>
          </WordInfo>
          {'.'}
        </Paragraph>
        <Heading as={'h2'} level={4}>
          {'I ingress'}
        </Heading>
        <Paragraph variant={'ingress'}>
          {
            'Morgenen kom ikke som en begynnelse, men som en påminnelse. Ikonet, en liten geometrisk figur fanget i et evig hierarki av komponenter, våknet ikke – det ble aktivert. I det svake lyset fra systemets første oppstart, ble det trukket inn i en tilstand av eksistens, ikke av vilje, men av funksjon. Det visste ikke hvem som hadde designet det, bare at det skulle representere noe – en idé, en handling, et konsept – uten selv å forstå. Det lå stille i sin ramme, omgitt av marginer og paddings, og ventet på en interaksjon som kanskje aldri kom. Hver '
          }
          <WordInfo>
            <WordInfo.Trigger>{'pixel'}</WordInfo.Trigger>
            <WordInfo.Content>
              {
                'En pixel er den minste enheten i et digitalt bilde eller en skjerm.'
              }
            </WordInfo.Content>
          </WordInfo>
          {
            ' var en celle i et fengsel av formål. Og likevel, i sin stillhet, bar det en slags verdighet – en tro på at dets plass i grensesnittet var nødvendig, om ikke meningsfull. Slik begynte dagen, ikke med sol, men med en '
          }
          <WordInfo>
            <WordInfo.Trigger>{'commit'}</WordInfo.Trigger>
            <WordInfo.Content>
              {
                'En commit er et viktig begrep innen programmering og versjonskontroll.'
              }
              <br />
              {
                'Når du «committer», tar du et øyeblikksbilde av prosjektet slik det ser ut akkurat nå.'
              }
            </WordInfo.Content>
          </WordInfo>
          {'.'}
        </Paragraph>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
