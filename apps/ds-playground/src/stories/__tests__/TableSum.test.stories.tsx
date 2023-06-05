import { Table } from '@skatteetaten/ds-table';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';

export default {
  component: Table.Sum,
  title: 'Tester/Table/Sum',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    colSpan: { table: { disable: true } },
    hasTopSeparator: { table: { disable: true } },
    labelAlignment: { table: { disable: true } },
    sumText: { table: { disable: true } },
    valueAlignment: { table: { disable: true } },
  },
} as ComponentMeta<typeof Table.Sum>;

const Template: ComponentStory<typeof Table.Sum> = (args) => (
  <div data-test-block>
    <Table.Sum {...args}>{'9 000 kr'}</Table.Sum>
  </div>
);

// Når Table har en ref, så får dom table elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ref: (instance: HTMLTableRowElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: { disable: true },
};
WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const table = canvas.getByRole('row');
  await expect(table).toBeInTheDocument();
  await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når TableSum har en id, så har table-element id
// Når TableSum har en custom CSS, så vises custom stil
// Når TableSum har en lang, så har table-element lang
// Når TableSum har dataTestid, så har table-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
  id: 'htmlId',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
};
WithAttributes.argTypes = {
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.parameters = {
  imageSnapshot: { disable: true },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const sum = canvas.getByTestId('123ID');
  await expect(sum).toHaveClass('dummyClassname');
  await expect(sum).toHaveAttribute('id', 'htmlId');
  await expect(sum).toHaveAttribute('lang', 'nb');
};
