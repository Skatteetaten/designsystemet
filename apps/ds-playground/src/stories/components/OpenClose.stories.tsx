import {
  OpenClose,
  getOpenCloseIconPositionDefault,
  getOpenCloseVariantDefault,
} from '@skatteetaten/ds-collections';
import {
  densityArr,
  headingAsArr,
  positionArr,
} from '@skatteetaten/ds-core-utils';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';
import { Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const exampleTitle = 'Hva er aksjesparekonto';
const exampleContent =
  'En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. ' +
  'Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen. ';

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
      options: [...positionArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getOpenCloseIconPositionDefault() },
        type: { summary: positionArr },
      },
    },
    isOnClickOnlyFiredOnOpen: { table: { category: category.props } },
    isExpanded: { table: { category: category.props } },
    showUnderline: { table: { category: category.props } },
    title: { table: { category: category.props } },
    titleAs: {
      options: ['div', ...headingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: 'div' },
        type: { summary: ['div', ...headingAsArr] },
      },
    },
    variant: {
      options: [...densityArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getOpenCloseVariantDefault() },
        type: { summary: densityArr },
      },
    },
    //Events
    onClick: { ...htmlEventDescription },
  },
  args: {
    children: loremIpsum,
    title: 'OpenClose title',
  },
  parameters: {
    version: getVersion('ds-collections'),
  },
} satisfies Meta<typeof OpenClose>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args) => (
    <>
      <Heading level={4} as={'h2'}>
        {'Aksjesparekonto (ASK)'}
      </Heading>
      <Paragraph>
        {
          'Du som er personlig skattyter, kan etablere en aksjesparekonto (ASK) for børsnoterte aksjer og aksjefondsandeler.'
        }
      </Paragraph>
      <OpenClose title={exampleTitle} isExpanded>
        {exampleContent}
      </OpenClose>
      <OpenClose title={exampleTitle}>{exampleContent}</OpenClose>
      <OpenClose title={exampleTitle} showUnderline>
        {exampleContent}
      </OpenClose>
      <OpenClose title={exampleTitle} iconPosition={'right'}>
        {exampleContent}
      </OpenClose>
      <OpenClose title={exampleTitle} variant={'compact'}>
        {exampleContent}
      </OpenClose>
      <OpenClose
        title={exampleTitle}
        iconPosition={'right'}
        variant={'compact'}
        showUnderline
      >
        {exampleContent}
      </OpenClose>
    </>
  ),
} satisfies Story;
Examples.parameters = exampleParameters;
