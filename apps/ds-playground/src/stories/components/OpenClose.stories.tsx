import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import {
  OpenClose,
  getOpenCloseIconPositionDefault,
  getOpenCloseKeepMountedDefault,
  getOpenCloseUnderlineDefault,
  getOpenCloseVariantDefault,
} from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: OpenClose,
  title: 'Komponenter/OpenClose',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    iconPosition: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getOpenCloseIconPositionDefault() },
      },
    },
    isOnClickOnlyFiredOnOpen: { table: { category: category.props } },
    isExpanded: { table: { category: category.props } },
    isDefaultExpanded: {
      table: {
        category: category.props,
      },
    },
    keepMounted: {
      table: {
        category: category.props,
        defaultValue: { summary: getOpenCloseKeepMountedDefault().toString() },
      },
    },
    showUnderline: {
      table: {
        category: category.props,
        defaultValue: { summary: getOpenCloseUnderlineDefault().toString() },
      },
    },
    title: { table: { category: category.props } },
    titleAs: {
      control: 'inline-radio',
      table: {
        category: category.props,
      },
    },
    variant: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getOpenCloseVariantDefault() },
      },
    },
    //Events
    onClick: { ...htmlEventDescription },
  },
  args: {
    children: loremIpsum,
    title: 'OpenClose title',
  },
} satisfies Meta<typeof OpenClose>;

export default meta;
type Story = StoryObj<typeof meta>;

const exampleTitle = 'Hva er aksjesparekonto';
const exampleContent =
  'En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. ' +
  'Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen. ';

export const Standard: Story = {
  args: {
    children: exampleContent,
    title: exampleTitle,
  },
  render: (args): JSX.Element => {
    return <OpenClose {...args} />;
  },
} satisfies Story;

export const HoyrestiltIkon: Story = {
  name: 'Høyrestilt ikon',
  render: (_args): JSX.Element => {
    return (
      <>
        <Paragraph>
          {
            'Høyrestilt ikon kan gi et roligere visuelt inntrykk og bedre plassutnyttelse på mobil. Vestrejustert ikon kan samtidig være et bedre valg for universell utforming, siden ikonet kommer først i leserekkefølgen og blir synlig tidligere ved zoom.'
          }
        </Paragraph>
        <OpenClose title={exampleTitle} iconPosition={'right'}>
          {exampleContent}
        </OpenClose>
      </>
    );
  },
} satisfies Story;
HoyrestiltIkon.parameters = exampleParameters;

export const KompaktVariant: Story = {
  name: 'Kompakt variant',
  render: (_args): JSX.Element => {
    return (
      <>
        <Paragraph>
          {
            'Kompakt variant bruker mindre fontstørrelse, og brukes normalt i situasjoner der det er lite plass tilgjengelig.'
          }
        </Paragraph>
        <OpenClose title={exampleTitle} variant={'compact'}>
          {exampleContent}
        </OpenClose>
      </>
    );
  },
} satisfies Story;
KompaktVariant.parameters = exampleParameters;
