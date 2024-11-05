/* eslint-disable sonarjs/no-duplicate-string */
import { JSX, useRef } from 'react';

import { MegaButton, Link, Button } from '@skatteetaten/ds-buttons';
import {
  Panel,
  getPanelColorDefault,
  getPanelPaddingDefault,
  getPanelSpacingDefault,
  getPanelSubtitleAsDefault,
  getPanelTitleAsDefault,
  getPanelVariantDefault,
} from '@skatteetaten/ds-content';
import {
  colorNamesArr,
  headingAsArr,
  subheadingAsArr,
} from '@skatteetaten/ds-core-utils';
import { CheckIcon } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import farmerIllustration from '../../assets/farmer-illustration.svg';
import waitIllustration from '../../assets/wait-alert-illustration.png';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';

const panelColorArr = [
  colorNamesArr[0],
  colorNamesArr[1],
  colorNamesArr[2],
  colorNamesArr[3],
  colorNamesArr[5],
];

const meta = {
  component: Panel,
  title: 'Komponenter/Panel',
  argTypes: {
    // Props
    canManuallySetTitleFocus: { table: { category: category.props } },
    children: {
      control: 'text',
      table: { category: category.props },
    },
    classNames: { table: { category: category.props } },
    color: {
      options: panelColorArr,
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelColorDefault() },
      },
    },
    hasResponsivePadding: { table: { category: category.props } },
    headingRef: {
      table: { category: category.props },
      control: { disable: true },
    },
    hideGraphicMobile: { table: { category: category.props } },
    hideSubtitle: { table: { category: category.props } },
    hideTitle: { table: { category: category.props } },
    imageSource: {
      control: 'select',
      options: ['', farmerIllustration, waitIllustration],
      table: { category: category.props },
    },
    imageSourceAltText: { table: { category: category.props } },
    padding: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelPaddingDefault() },
      },
    },
    renderIcon: {
      control: { disable: true },
      table: { category: category.props },
    },
    spacing: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelSpacingDefault() },
      },
    },
    subtitle: { table: { category: category.props } },
    subtitleAs: {
      options: [...subheadingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelSubtitleAsDefault() },
      },
    },
    title: { table: { category: category.props } },
    titleAs: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelTitleAsDefault() },
      },
    },
    variant: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelVariantDefault() },
      },
    },
  },
  args: {
    children: loremIpsum,
  },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    return (
      <>
        <Panel
          title={'Når kommer skattepengene'}
          imageSource={farmerIllustration}
          spacing={'xxl'}
        >
          <Paragraph hasSpacing>
            <Link href={'#'}>
              {'Vi varsler deg når skatteoppgjøret ditt er klart.'}
            </Link>
          </Paragraph>
          <Paragraph hasSpacing>
            {
              'Vi kan dessverre ikke gi deg en konkret dato for når du får oppgjøret ditt, verken på telefon, facebook eller chat.'
            }
          </Paragraph>
          <Paragraph hasSpacing>{'Logg inn:'}</Paragraph>
          <MegaButton>{'Sjekk skatten'}</MegaButton>
          <Paragraph className={'dummySpacingTop'}>
            {
              'Ser du etter skattemeldingen? Hvis du oppdager feil eller har mottatt nye eller forsinkede oppplysniger, kan du fortsatt '
            }
            <Link href={'#'}>{'se, endre og levere skattemeldingen'}</Link>
            {'.'}
          </Paragraph>
        </Panel>

        <Panel
          title={'Virksomheten skal registreres som særavgiftspliktig'}
          variant={'filled'}
          color={'forest'}
          spacing={'xxl'}
          renderIcon={(): JSX.Element => <CheckIcon size={'extraLarge'} />}
        >
          <Paragraph>
            {
              'For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere.'
            }
          </Paragraph>
        </Panel>

        <Panel
          title={'Panel med tittel som skal få fokus'}
          variant={'outline'}
          color={'denim'}
          headingRef={headingRef}
          canManuallySetTitleFocus
        >
          <Paragraph>{`Panel hvor man har en tittel/heading.
          Denne kan få programatisk fokus. Test ved å klikke på knappen med tastaturet.`}</Paragraph>
        </Panel>
        <Button
          onClick={(): void => {
            headingRef.current?.focus();
          }}
        >
          {'Sett fokus på Panel Header'}
        </Button>

        <Panel
          title={`Med responsive padding `}
          classNames={{
            padding: 'dummyPanelPaddingResponsive',
          }}
          hasResponsivePadding
        >
          <Paragraph>{`
      Her har vi satt hasResponsivePadding:true og endret følgende CSS variabler for responsive visning. 
      --panel-padding-mobile, --pandel-padding-m og --pandel-padding-l. F.eks er Synlig hvis skjermbredde < 480px og bredde >= 1366px (breakpoint-l)
      `}</Paragraph>
        </Panel>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
