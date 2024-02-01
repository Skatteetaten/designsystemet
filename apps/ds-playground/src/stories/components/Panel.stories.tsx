/* eslint-disable sonarjs/no-duplicate-string */
import { JSX } from 'react';

import { MegaButton, Link } from '@skatteetaten/ds-buttons';
import {
  Panel,
  getPanelColorDefault,
  getPanelPaddingDefault,
  getPanelSpacingDefault,
  getPanelSubtitleAsDefault,
  getPanelTitleAsDefault,
  getPanelVariantDefault,
} from '@skatteetaten/ds-content';
import { headingAsArr, subheadingAsArr } from '@skatteetaten/ds-core-utils';
import { CheckIcon } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import farmerIllustration from '../../assets/farmer-illustration.svg';
import waitIllustration from '../../assets/wait-alert-illustration.png';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Panel,
  title: 'Komponenter/Panel',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    color: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelColorDefault() },
      },
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
      control: { type: null },
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
        type: { summary: subheadingAsArr },
      },
    },
    title: { table: { category: category.props } },
    titleAs: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelTitleAsDefault() },
        type: { summary: headingAsArr },
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
  parameters: {
    version: getVersion('ds-content'),
  },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};

export const Examples: Story = {
  render: (_args) => (
    <>
      <Panel
        title={'Når kommer skattepengene'}
        imageSource={farmerIllustration}
        padding={'mega'}
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
        renderIcon={(): JSX.Element => <CheckIcon size={'extraLarge'} />}
      >
        <Paragraph>
          {
            'For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere.'
          }
        </Paragraph>
      </Panel>
    </>
  ),
};
Examples.parameters = exampleParameters;
