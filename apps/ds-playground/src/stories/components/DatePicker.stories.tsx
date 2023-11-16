import {
  formArrSize,
  getCommonFormVariantDefault,
} from '@skatteetaten/ds-core-utils';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { DatePicker } from '../../../../../libs/ds-forms/src/DatePicker/DatePicker';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { DatePickerProps } from '../../../../../libs/ds-forms/src/DatePicker/DatePicker.types';
import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

export default {
  component: DatePicker,
  title: 'Komponenter/DatePicker (under utvikling)',
  argTypes: {
    // Props
    classNames: { table: { category: category.props } },
    defaultValue: { table: { category: category.props } },
    description: { table: { category: category.props } },
    label: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: {
      table: {
        category: category.props,
      },
    },
    helpSvgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: {
        category: category.props,
        defaultValue: { summary: 'HelpSimpleSVGpath' },
      },
    },
    helpText: { table: { category: category.props } },
    hideLabel: {
      table: {
        category: category.props,
      },
    },
    showRequiredMark: {
      table: {
        category: category.props,
      },
    },
    titleHelpSvg: {
      table: { category: category.props, defaultValue: { summary: 'Hjelp' } },
    },
    variant: {
      options: [...formArrSize],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getCommonFormVariantDefault() },
        type: { summary: formArrSize },
      },
    },
    // HTML
    autoComplete: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    placeholder: { table: { category: category.htmlAttribute } },
    readOnly: { table: { category: category.htmlAttribute } },
    required: {
      table: {
        category: category.htmlAttribute,
      },
    },
    value: { table: { category: category.htmlAttribute } },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof DatePicker>;

const TemplateDefault: StoryFn<typeof DatePicker> = (args) => {
  const [, setArgs] = useArgs();
  return (
    <DatePicker
      {...args}
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
        setArgs({ value: e.target.value });
      }}
    />
  );
};

export const Preview: StoryObj<DatePickerProps> = {
  render: TemplateDefault,
  name: 'Default',
  argTypes: {
    defaultValue: { control: { disable: true } },
  },
  args: {
    label: 'Fødselsdato',
    defaultValue: undefined,
    value: '',
  },
} satisfies StoryObj<typeof DatePicker>;
