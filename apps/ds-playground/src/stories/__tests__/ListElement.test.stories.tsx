import { List } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';

export default {
  component: List.Element,
  title: 'Tester/List/Element',
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
  },
} as ComponentMeta<typeof List.Element>;

const defaultArgs = {
  children: 'Kjenner du behovet til brukeren?',
};
const Template: ComponentStory<typeof List.Element> = (args) => (
  <ul data-test-block>
    <List.Element {...args} />
  </ul>
);

// Når ListElement har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLLIElement | null): void => {
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
  const list = canvas.getByRole('listitem');
  await expect(list).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når ListElement har en id, så har li-elementet id'en satt
// Når ListElement har en custom className, så har li-elementet className satt og custom stil vises
// Når ListElement har en lang, så har li-elementet lang satt
// Når ListElement har en data-testid, så har li-elementet data-testid satt
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
  const list = canvas.getByRole('listitem');
  await expect(list).toHaveAttribute('id', 'htmlid');
  await expect(list).toHaveClass('dummyClassname');
  await expect(list).toHaveAttribute('lang', 'nb');
  await expect(list).toHaveAttribute('data-testid', '123ID');
};
