import { useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { CheckboxGroup } from '@skatteetaten/ds-forms';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
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
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof CheckboxGroup>;

export const Preview: StoryObj<typeof CheckboxGroup> = {
  args: {
    children: [
      <CheckboxGroup.Checkbox key={'checkbox1'}>
        {'Har barn over 16 år'}
      </CheckboxGroup.Checkbox>,
      <CheckboxGroup.Checkbox key={'checkbox2'}>
        {'Har barn under 12 år'}
      </CheckboxGroup.Checkbox>,
      <CheckboxGroup.Checkbox key={'checkbox3'}>
        {'Har ingen barn'}
      </CheckboxGroup.Checkbox>,
    ],
    legend: 'Velg det som passer deg',
  },
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};

export const Example: StoryFn<typeof CheckboxGroup> = () => {
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
