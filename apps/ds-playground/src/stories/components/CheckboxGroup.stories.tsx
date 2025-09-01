import { useState, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@skatteetaten/ds-buttons';
import { getHelpTitleHelpSvgDefault } from '@skatteetaten/ds-core-utils';
import { CheckboxGroup } from '@skatteetaten/ds-forms';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

CheckboxGroup.Checkbox.displayName = 'CheckboxGroup.Checkbox';

const meta = {
  component: CheckboxGroup,
  title: 'Komponenter/CheckboxGroup',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    classNames: { control: false, table: { category: category.props } },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasSpacing: { table: { category: category.props } },
    helpSvgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: {
        category: category.props,
        defaultValue: { summary: 'HelpSimpleSVGpath' },
      },
    },
    helpText: { table: { category: category.props } },
    hideLegend: { table: { category: category.props } },
    legend: { control: 'text', table: { category: category.props } },
    showRequiredMark: { table: { category: category.props } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: getHelpTitleHelpSvgDefault() },
      },
    },
    // HTML
    disabled: { table: { category: category.htmlAttribute } },
    form: { table: { category: category.htmlAttribute } },
    // Events
    onHelpToggle: { control: false, table: { category: category.event } },
  },
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
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
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
  },
} satisfies Story;
Examples.parameters = exampleParameters;
