import { useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { CheckboxGroup } from '@skatteetaten/ds-forms';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: CheckboxGroup,
  title: 'Komponenter/CheckboxGroup',
  argTypes: {
    // Props
    children: { control: 'object', table: { category: category.props } },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    helpSvgPath: { table: { category: category.props } },
    helpText: { table: { category: category.props } },
    hideLegend: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    legend: { table: { category: category.props } },
    showRequiredMark: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    titleHelpSvg: { table: { category: category.props } },
    // HTML
    disabled: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof CheckboxGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args} />
);

const TemplateExample: StoryFn<typeof CheckboxGroup> = () => {
  const options = [
    {
      label: 'Har barn over 16 år',
    },
    {
      label: 'Har barn under 12 år',
    },
    {
      label:
        'Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning',
    },
    {
      label:
        'Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov',
    },
    {
      label: 'Er enslig forsørger',
    },
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false)
  );

  const handleOnChange = (position: number): void => {
    const updatedCheckedState = checkedState.map((option, index) =>
      index === position ? !option : option
    );
    setCheckedState(updatedCheckedState);
  };
  return (
    <>
      <CheckboxGroup legend={'Velg det som gjelder deg'}>
        {options.map((option, index) => {
          return (
            <CheckboxGroup.Checkbox
              key={index}
              checked={checkedState[index]}
              onChange={(): void => handleOnChange(index)}
            >
              {option.label}
            </CheckboxGroup.Checkbox>
          );
        })}
      </CheckboxGroup>
      <Button>{'Neste side'}</Button>
    </>
  );
};

export const CheckboxGroupDefault = {
  render: TemplateDefault,
  name: 'Default',

  args: {
    legend: 'Velg det som passer deg',
    children: (
      <>
        <CheckboxGroup.Checkbox>{'Har barn over 16 år'}</CheckboxGroup.Checkbox>
        <CheckboxGroup.Checkbox>
          {'Har barn under 12 år'}
        </CheckboxGroup.Checkbox>
        <CheckboxGroup.Checkbox>
          {
            'Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning'
          }
        </CheckboxGroup.Checkbox>
        <CheckboxGroup.Checkbox>
          {'Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov'}
        </CheckboxGroup.Checkbox>
        <CheckboxGroup.Checkbox>{'Er enslig forsørger'}</CheckboxGroup.Checkbox>
      </>
    ),
  },
} satisfies Story;

export const CheckboxGroupExample = {
  render: TemplateExample,
  name: 'Example',

  args: {
    legend: 'dummy',
    children: (
      <>
        <CheckboxGroup.Checkbox>{'Har barn over 16 år'}</CheckboxGroup.Checkbox>
        <CheckboxGroup.Checkbox>
          {'Har barn under 12 år'}
        </CheckboxGroup.Checkbox>
        <CheckboxGroup.Checkbox>
          {
            'Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning'
          }
        </CheckboxGroup.Checkbox>
        <CheckboxGroup.Checkbox>
          {'Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov'}
        </CheckboxGroup.Checkbox>
        <CheckboxGroup.Checkbox>{'Er enslig forsørger'}</CheckboxGroup.Checkbox>
      </>
    ),
  },
  parameters: {
    controls: { disabled: true },
  },
} satisfies Story;
