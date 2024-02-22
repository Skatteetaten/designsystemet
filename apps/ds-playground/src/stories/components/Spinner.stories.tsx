import { dsI18n, sizeArr } from '@skatteetaten/ds-core-utils';
import {
  Spinner,
  getSpinnerColorDefault,
  getSpinnerSizeDefault,
  getSpinnerTitlePositionDefault,
  spinnerSizeArr,
} from '@skatteetaten/ds-progress';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Spinner,
  title: 'Komponenter/Spinner',
  argTypes: {
    // Props
    children: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('ds_status:spinner.LoadingLabel') },
      },
    },
    size: {
      options: [...spinnerSizeArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerSizeDefault() },
        type: { summary: sizeArr.slice(1, 4) },
      },
    },
    titlePosition: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerTitlePositionDefault() },
      },
    },
    color: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerColorDefault() },
      },
    },
    hideTitle: { table: { category: category.props } },
  },
  parameters: {
    version: getVersion('ds-progress'),
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args) => (
    <>
      <Spinner
        className={'bottomSpacingXL'}
        size={'large'}
        color={'blue'}
        titlePosition={'right'}
      >
        {'Vent litt mens vi sjekker tidligere innsendte a-meldinger'}
      </Spinner>

      <Spinner size={'small'} color={'blue'} titlePosition={'right'}>
        {'Vent litt mens vi sjekker tidligere innsendte a-meldinger'}
      </Spinner>
    </>
  ),
} satisfies Story;
Examples.parameters = exampleParameters;
