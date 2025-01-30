import { Meta, StoryObj } from '@storybook/react';

import { IconButton, getIconButtonSizeDefault } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  getCommonButtonTypeDefault,
  sizeArr,
} from '@skatteetaten/ds-core-utils';
import { PrintSVGpath } from '@skatteetaten/ds-icons';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

const availableSizes = [...sizeArr].slice(0, 4);

const meta = {
  component: IconButton,
  title: 'Komponenter/IconButton',
  argTypes: {
    // Props
    hasSpinner: { table: { category: category.props } },
    spinnerTitle: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('ds_progress:spinner.LoadingLabel') },
      },
    },
    isOutlined: { table: { category: category.props } },
    size: {
      control: 'radio',
      options: availableSizes,
      table: {
        category: category.props,
        defaultValue: { summary: getIconButtonSizeDefault() },
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    // HTML
    accessKey: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    title: { table: { category: category.htmlAttribute } },
    type: {
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: getCommonButtonTypeDefault() },
      },
    },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    ariaExpanded: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  args: {
    title: 'Skriv ut',
    svgPath: PrintSVGpath,
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args) => (
    <>
      <div>
        <IconButton
          className={'exampleSpacing'}
          svgPath={PrintSVGpath}
          size={'extraSmall'}
          title={'Skriv ut'}
          isOutlined
        />
        <IconButton
          svgPath={PrintSVGpath}
          size={'extraSmall'}
          title={'Skriv ut'}
        />
      </div>
      <div>
        <IconButton
          className={'exampleSpacing'}
          svgPath={PrintSVGpath}
          size={'small'}
          title={'Skriv ut'}
          isOutlined
        />
        <IconButton svgPath={PrintSVGpath} size={'small'} title={'Skriv ut'} />
      </div>
      <div>
        <IconButton
          className={'exampleSpacing'}
          svgPath={PrintSVGpath}
          size={'medium'}
          title={'Skriv ut'}
          isOutlined
        />
        <IconButton svgPath={PrintSVGpath} size={'medium'} title={'Skriv ut'} />
      </div>
      <div>
        <IconButton
          className={'exampleSpacing'}
          svgPath={PrintSVGpath}
          size={'large'}
          title={'Skriv ut'}
          isOutlined
        />
        <IconButton svgPath={PrintSVGpath} size={'large'} title={'Skriv ut'} />
      </div>
    </>
  ),
} satisfies Story;
Examples.parameters = exampleParameters;
