/* eslint-disable sonarjs/no-duplicate-string */
import { MegaButton, Link } from '@skatteetaten/ds-buttons';
import {
  Panel,
  getPanelColorDefault,
  getPanelPaddingDefault,
  getPanelSpacingDefault,
  getPanelSubtitleAsDefault,
  getPanelTitleAsDefault,
  getPanelVariantDefault,
  panelColorArr,
  panelPaddingArr,
  panelSpacingArr,
  panelVariantArr,
} from '@skatteetaten/ds-content';
import { headingAsArr, subheadingAsArr } from '@skatteetaten/ds-core-utils';
import { CheckIcon } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import illustrationSource from '../__tests__/testUtils/test_bonde.svg';
import { getVersion } from '../utils/version.utils';

export default {
  component: Panel,
  title: 'Komponenter/Panel',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    color: {
      options: [...panelColorArr],
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
      options: [
        '',
        'test_bonde.7eebe78d220ecf48b97e4811ac2c5210.svg',
        'd52134bda41b5aa041ef.png',
      ],
      table: { category: category.props },
    },
    padding: {
      options: [...panelPaddingArr],
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
      options: [...panelSpacingArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelSpacingDefault() },
      },
    },
    subtitle: {
      control: 'text',
      table: { category: category.props },
    },
    subtitleAs: {
      options: [...subheadingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelSubtitleAsDefault() },
      },
    },
    title: {
      control: 'text',
      table: { category: category.props },
    },
    titleAs: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelTitleAsDefault() },
      },
    },
    variant: {
      options: [...panelVariantArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPanelVariantDefault() },
      },
    },
  },
  parameters: {
    version: getVersion('ds-content'),
  },
} satisfies Meta<typeof Panel>;

export const Preview: StoryObj<typeof Panel> = {
  args: {
    children: loremIpsum,
  },
};

export const Example: StoryFn<typeof Panel> = (_args) => (
  <>
    <Panel
      title={'Når kommer skattepengene'}
      imageSource={illustrationSource}
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
);

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
