import { ErrorSummary } from '@skatteetaten/ds-forms';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';

export default {
  component: ErrorSummary.Error,
  title: 'Tester/ErrorSummary/Error',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
      control: 'text',
    },
    referenceId: { table: { disable: true } },
  },
} as ComponentMeta<typeof ErrorSummary.Error>;

const defaultArgs = {
  children: 'Husk å fylle ut type varer',
  referenceId: 'referenceId_1',
};
const Template: ComponentStory<typeof ErrorSummary.Error> = (args) => (
  <div data-test-block>
    <ErrorSummary.Error {...args} />
  </div>
);

// Når ErrorSummaryError har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLAnchorElement | null): void => {
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
  const error = canvas.getByRole('link');
  await expect(error).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når ErrorSummaryError har en id, så har a-elementet id'en satt
// Når ErrorSummaryError har en custom className, så har a-elementet className satt og custom stil vises
// Når ErrorSummaryError har en lang, så har a-elementet lang satt
// Når ErrorSummaryError har en data-testid, så har a-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlid',
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
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const error = canvas.getByRole('link');
  await expect(error).toHaveAttribute('id', 'htmlid');
  await expect(error).toHaveClass('dummyClassname');
  await expect(error).toHaveAttribute('lang', 'nb');
  await expect(error).toHaveAttribute('data-testid', '123ID');
};

// Når ErrorSummaryError instansieres, får den riktige default-verdier
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  referenceId: { table: { disable: false } },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const error = canvas.getByRole('link');
  await expect(error).toHaveAttribute('href', '#referenceId_1');
};
