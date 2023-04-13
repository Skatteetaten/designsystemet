/* eslint-disable sonarjs/no-duplicate-string */
import {
  Button,
  ButtonProps,
  buttonVariantArr,
  getButtonVariantDefault,
} from '@skatteetaten/ds-buttons';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

export default {
  component: Button,
  title: 'Komponenter/Button',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    variant: {
      options: [...buttonVariantArr],
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getButtonVariantDefault() },
      },
    },
    // HTML
    accessKey: {
      table: { category: category.htmlAttribute },
    },
    disabled: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    type: {
      control: 'text',
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: 'button' },
      },
    },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  parameters: {
    version: getVersion('ds-buttons'),
  },
} as Meta<ButtonProps>;

const TemplateDefault: Story<ButtonProps> = (args) => (
  <Button
    {...args}
    variant={args.variant}
    onClick={action('KlikkEvent Button')}
  >
    {args.children}
  </Button>
);

const TemplateExample: Story<ButtonProps> = () => (
  <div>
    <Button className={'exampleSpacing'} variant={'primary'}>
      {'Send inn skjema'}
    </Button>
    <Button className={'exampleSpacing'} variant={'secondary'}>
      {'Avbryt'}
    </Button>
    <div>
      <Button className={'exampleSpacing'} variant={'tertiary'}>
        {'Logg inn'}
      </Button>
    </div>
    <Button className={'exampleSpacing'} variant={'danger'}>
      {'Slett'}
    </Button>
  </div>
);

export const ButtonDefault = TemplateDefault.bind({});
export const ButtonExample = TemplateExample.bind({});
ButtonDefault.storyName = 'Default';
ButtonExample.storyName = 'Example';
ButtonExample.parameters = {
  controls: { hideNoControlsWarning: true },
};

ButtonDefault.args = {
  children: 'Klikk',
  variant: 'primary',
};
