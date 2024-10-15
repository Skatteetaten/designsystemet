import { JSX, useState } from 'react';

import { Chip } from '@skatteetaten/ds-buttons';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Chip,
  title: 'Komponenter/Chip',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    //hasSpinner: { table: { category: category.props } },
    //spinnerTitle: {
    //  table: {
    //    category: category.props,
    //    defaultValue: { summary: dsI18n.t('ds_status:spinner.LoadingLabel') },
    //  },
    //},
    //svgPath: {
    //  options: Object.keys(SystemSVGPaths),
    //  mapping: SystemSVGPaths,
    //  table: { category: category.props },
    //},
    //variant: {
    //  table: {
    //    category: category.props,
    //    defaultValue: { summary: getButtonVariantDefault() },
    //  },
    //},
    //// HTML
    //accessKey: { table: { category: category.htmlAttribute } },
    //disabled: { table: { category: category.htmlAttribute } },
    //form: { table: { category: category.htmlAttribute } },
    //href: { table: { category: category.htmlAttribute } },
    //isExternal: { table: { category: category.props } },
    //type: {
    //  table: {
    //    category: category.htmlAttribute,
    //    defaultValue: { summary: getCommonButtonTypeDefault() },
    //  },
    //},
    //// Aria
    //ariaCurrent: {
    //  table: { category: category.aria },
    //},
    //ariaDescribedby: { table: { category: category.aria } },
    //// Events
    //onBlur: { ...htmlEventDescription },
    //onClick: { ...htmlEventDescription },
    //onFocus: { ...htmlEventDescription },
  },
  args: {
    children: 'Trondheim',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [cities, setCities] = useState(['Trondheim', 'Bergen', 'Oslo']);

    const handleRemoveCity = (city: string): void => {
      setCities((prevCities) => prevCities.filter((c) => c !== city));
    };

    return (
      <div className={'flex gapXs'}>
        {cities.map((city) => (
          <Chip key={city} onClose={() => handleRemoveCity(city)}>
            {city}
          </Chip>
        ))}
      </div>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
