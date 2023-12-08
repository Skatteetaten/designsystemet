import { IconButton, getIconButtonSizeDefault } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  getCommonButtonTypeDefault,
  sizeArr,
} from '@skatteetaten/ds-core-utils';
import { PrintSVGpath } from '@skatteetaten/ds-icons';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

const availableSizes = [...sizeArr].slice(0, 4);

export default {
  component: IconButton,
  title: 'Komponenter/IconButton',
  argTypes: {
    // Props
    hasSpinner: { table: { category: category.props } },
    spinnerTitle: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('ds_status:spinner.LoadingLabel') },
      },
    },
    isOutlined: {
      table: {
        category: category.props,
      },
    },
    size: {
      control: 'radio',
      options: availableSizes,
      table: {
        category: category.props,
        defaultValue: { summary: getIconButtonSizeDefault() },
        type: { summary: availableSizes },
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    // HTML
    accessKey: {
      table: { category: category.htmlAttribute },
    },
    disabled: {
      table: {
        category: category.htmlAttribute,
      },
    },
    title: {
      table: {
        category: category.htmlAttribute,
      },
    },
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
  parameters: {
    version: getVersion('ds-buttons'),
  },
} satisfies Meta<typeof IconButton>;

export const Preview: StoryObj<typeof IconButton> = {
  args: {
    title: 'Skriv ut',
    svgPath: PrintSVGpath,
  },
};

export const Example: StoryFn<typeof IconButton> = (_args) => (
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
);

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
